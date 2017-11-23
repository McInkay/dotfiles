#!/usr/bin/env node
"use strict";
process.chdir(__dirname);
require("./libs/shell.js");
const async = require("async");
const Table = require("cli-table");
const nodegit = require("nodegit");
const path = require("path");
const Promise = require("bluebird");

const args = require('minimist')(process.argv.slice(2));
const PDIR = args.d || args.x || process.cwd();
const os = exec('uname -o', {silent: true}).output.toLowerCase();

const DIR = os.includes('Cygwin') ? exec('cygpath -w ' + PDIR, {silent: true}).output.replace("\n", "") : PDIR;

cd(DIR);
const dirs = ls();

const gitCalls = [];
let table;
console.log("Gathering info...");

for (let dir of dirs) {
	cd(DIR);

	if (!isDirectory(dir) || !isGitRepo(dir)) {
		continue;
	}
	cd(dir);

	exec('git fetch -p', {silent: true});

	gitCalls.push(function (callback) {
		const repoRows = [];
		let branches = [];
		let checkedOut, LOCAL, MASTERPOINT, MASTER, REMOTE, BASE, HASMASTER;
		nodegit.Repository.open(path.resolve(DIR, dir, ".git")).then(function (repo) {
			repo.getReferences(3)
				.then(getBranches)
				.then(function (returnedBranches) {
					branches = returnedBranches;
					// Print out current branch and directory
					checkedOut = branches.filter(function (ref) {
						return ref.isHead();
					})[0];
					branches.splice(branches.indexOf(checkedOut), 1);
					if (!checkedOut) {
						return "";
					}
					repoRows.push([dir, "* " + checkedOut.shorthand().trim()]);
					return checkedOut.shorthand();
				})

				.then(getBranchCommit.bind(this, repo))
				.then(getCommitTree)
				.then(function (tree) {
					return nodegit.Diff.treeToWorkdir(repo, tree, {flags: nodegit.Diff.OPTION.INCLUDE_UNTRACKED});
				})

				.then(function (diff) {
					let uncommitted, untracked;
					for (let i = 0; i < diff.numDeltas(); i++) {
						let status = diff.getDelta(i).status();
						if (status === nodegit.Diff.DELTA.UNTRACKED) {
							untracked = true;
						} else if (status !== nodegit.Diff.DELTA.UNMODIFIED) {
							uncommitted = true;
						}
					}
					if (uncommitted) {
						repoRows.push(maybeAddBranch("Uncommitted changes", branches));
					}
					if (untracked) {
						repoRows.push(maybeAddBranch("Untracked, unignored files", branches));
					}
				})

				.then(function () {
					// Get hashes for commits
					const hashPromises = [];

					// The latest commit on this branch
					hashPromises.push(repo.getHeadCommit().then(function (commit) {
						return LOCAL = commit.toString();
					}));

					// Where we branch off master
					let masterpointPromise = nodegit.Branch.lookup(repo, "origin/master", 2).then(function (ref) {
						return nodegit.Merge.base(repo, checkedOut.target(), ref.target());
					}).then(function (oid) {
						return MASTERPOINT = oid.tostrS();
					}).catch(errorSwallower);
					hashPromises.push(masterpointPromise);

					// Where master is currently
					hashPromises.push(nodegit.Reference.nameToId(repo, "refs/remotes/origin/master").then(function (oid) {
						return MASTER = oid.tostrS();
					}).catch(errorSwallower));

					// If we have master locally
					hashPromises.push(repo.getMasterCommit().then(function () {
						return HASMASTER = true;
					}).catch(errorSwallower));

					// The remote for this branch
					let getRemotePromise = nodegit.Branch.upstream(checkedOut).then(function (upstream) {
						return repo.getBranchCommit(upstream).then(function (commit) {
							return REMOTE = commit.toString();
						}).catch(errorSwallower);
					}).catch(errorSwallower);
					hashPromises.push(getRemotePromise);

					// The last commit that is both on local and remote
					let basePromise = nodegit.Branch.upstream(checkedOut).then(function (upstream) {
						return nodegit.Merge.base(repo, checkedOut.target(), upstream.target());
					}).then(function (oid) {
						return BASE = oid.tostrS();
					}).catch(errorSwallower);
					hashPromises.push(basePromise);

					return Promise.all(hashPromises);
				})

				.then(function () {
					// Check the state of the branch in relation to remote and master
					if (REMOTE === undefined) {
						repoRows.push(maybeAddBranch("No tracking branch", branches));
					} else if (REMOTE === LOCAL) {
						// up to date
					} else if (LOCAL === BASE) {
						repoRows.push(maybeAddBranch("Behind", branches));
					} else if (REMOTE === BASE) {
						repoRows.push(maybeAddBranch("Ahead", branches));
					} else {
						repoRows.push(maybeAddBranch("Diverged", branches));
					}

					if (MASTERPOINT !== MASTER && MASTERPOINT !== LOCAL && HASMASTER) {
						repoRows.push(maybeAddBranch("Needs rebased", branches));
					}
				})

				.then(function () {
					// Print out any leftover branches
					while (branches.length > 0) {
						repoRows.push(["", branches.splice(0, 1)[0].shorthand().trim()]);
					}
				})

				.then(function () {
					callback(null, repoRows);
				})

				.catch(errorSwallower);
		}).catch(errorSwallower);
	});

}


/**
 * Run getting the information in parallel
 */
async.parallel(gitCalls, function (err, results) {
	const VW = process.stdout.columns;
	table = new Table({
		colAligns: ["left", "right"],
		colWidths: [Math.floor(VW / 2) - 1, Math.floor(VW / 2) - 1],
		style: {'padding-left': 0, 'padding-right': 0},
		chars: {
			'top': '', 'top-mid': '', 'top-left': '', 'top-right': '',
			'bottom': '', 'bottom-mid': '', 'bottom-left': '', 'bottom-right': '',
			'left': '', 'left-mid': '', 'mid': '', 'mid-mid': '',
			'right': '', 'right-mid': '', 'middle': ' '
		}
	});
	for (let i = 0; i < results.length; i++) {
		if (results[i].length > 1) {
			for (let j = 0; j < results[i].length; j++) {
				table.push(results[i][j]);
			}
			table.push([""]);
		}
	}
	process.stdout.write("\x1Bc");
	if (table.length < 1) {
		console.log("No changes to git repositories");
	}
	console.log(table.toString());
	table = undefined;
});

/**
 * Useful functions
 */

function maybeAddBranch(string, branches) {
	return branches.length > 0 ? [string, branches.splice(0, 1)[0].shorthand().trim()] : [string];
}

function errorSwallower(err) {}

// noinspection JSUnusedLocalSymbols
function errorPrinter(err) {
	// Easy way to print errors, set errorSwallower to call this function
	console.log(err);
}

function getCommitTree(commit) {
	return commit.getTree();
}

function getBranchCommit(repo, branchName) {
	return repo.getBranchCommit(branchName);
}
function getBranches(refs) {
	return refs.filter(function (ref) {
		return ref.isBranch();
	});
}

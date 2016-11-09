require("shelljs/global");

/**
 *
 */
global.runAndGetOutput = function(command, opts) {
  const silent = (opts && opts.silent) || true;
  const stripNewLines = (opts && opts.stripNewLines) || true;
  const output = exec(command, {silent: silent}).output;
  return stripNewLines ? output.replace("\n", "") : output;
};

/**
 *
 */
global.isDirectory = function(path) {
  return test('-d', path);
};

global.isGitRepo = function(path) {
  return isDirectory(path + "/.git");
};

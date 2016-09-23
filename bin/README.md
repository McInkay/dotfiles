This is for anything that can be run standalone, or just anything that should be on your path. 
If you use the bash_profile included, everything in this directory and it's subdirectories will be included
on your path.

# Scripts

## build

A small utility to build a project based on it's type. Currently supports maven and grunt.  
Also automatically installs dependencies for npm projects.

## build-all

Loops through the directories in the current directory and runs build against them all.
Currently a horrible version of build with a loop. It will eventually use build, but for just now, it's just not great.

## cheatsheet

Handy utility to output (in a loop) all of the git aliases and bash aliases as well as the files in this directory, 
and all subdirectories.

## git-check

My version of a git gui. It shows all repositories that have something changed in them, and what needs done. 
Shows branches that are local, as well as the checked out branch. Shows if changes are unstaged or uncommited,
whether we are behind or ahead of our tracked branch (or whether we have a tracked branch at all) and shows us
whether there are changes to master ahead of where we branched off it.

## rewrite-history

This needs to be edited to define the email address to be changed, and what the new email address and name
should be. It will then go through all the git commits in the history and change the user information for
the commits that used that old email address. This will rewrite history, so make sure it is used sparingly.

## terminator.sh

Used to show/hide terminator when run. Useful for adding to a keycombination.

## version-increment

Figures out the version for a maven or npm project in the current directory, prints it out, and asks 
what version you want incremented. Then it will increment that version according to semver.

# Directories

## libs

Files that we want on the path, but we won't be run standalone.

## unsynced

This is useful for files that you want to use the handy automatic path adding, but you don't want to commit to the folder. 
Everything in that folder (except the .gitkeep) will be ignored.

This is for anything that can be run standalone, or just anything that should be on your path. 
If you use the bash_profile included, everything in this directory and it's subdirectories will be included
on your path.

## bash-prompt

File for my bash prompt. It gets included by bashrc, but this was the easiest way to include it.

## build

A small utility to build a project based on it's type. Currently supports maven and grunt.  
Also automatically installs dependencies for npm projects.

## build-all

Loops through the directories in the current directory and runs build against them all.
Currently a horrible version of build with a loop. It will eventually use build, but for just now, it's just not great.

## cheatsheet

Handy utility to output (in a loop) all of the git aliases and bash aliases as well as the files in this directory, 
and all subdirectories.

## env_variables

Script that sets all environment variables. Eventually, this will be ignored and this will be moved to an example.
For obvious reasons.

## functions

Just some bash functions that I find handy and use in multiple places. 

#### cd

Overrides cd and sends all output to /dev/null. Handy for bash scripts so we don't get the output when we cd.

#### run_function

Runs a function and sends all output to /dev/null. USeful if you are spawning off a lot of processes in a script

## git-check

My version of a git gui. It shows all repositories that have something changed in them, and what needs done. 
Shows branches that are local, as well as the checked out branch. Shows if changes are unstaged or uncommited,
whether we are behind or ahead of our tracked branch (or whether we have a tracked branch at all) and shows us
whether there are changes to master ahead of where we branched off it.

## git-prompt

Just a library function that prints out the current branch, used for bash-prompt

## terminator.sh

Used to show/hide terminator when run. Useful for adding to a keycombination.

## fun

A few random programs that do random fun things.

## unsynced

This is useful for files that you want to use the handy automatic path adding, but you don't want to commit to the folder. 
Everything in that folder (except the .gitkeep) will be ignored.

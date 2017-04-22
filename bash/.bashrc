#!/usr/bin/env bash

# Global definitions
if [ -f /etc/bashrc ]; then
  . /etc/bashrc
fi

# Add bin to path
PATH="$HOME/.dotfiles/bin:$PATH"
for d in ~/.dotfiles/bin/*/; do
  PATH="$d:$PATH"
done
export PATH

export DISPLAY=:0.0

# Include other libraries
. env-variables
. functions
. bash-prompt

#setxkbmap gb

setxkbmap gb

# added by travis gem
[ -f /home/al/.travis/travis.sh ] && source /home/al/.travis/travis.sh

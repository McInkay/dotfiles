# Global definitions
if [ -f /etc/bashrc ]; then
  . /etc/bashrc
fi

export DISPLAY=:0.0
. ~/.dotfiles/bin/libs/env_variables
. ~/.dotfiles/bin/libs/functions
. ~/.dotfiles/bin/libs/bash-prompt

setxkbmap gb

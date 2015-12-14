# Global definitions
if [ -f /etc/bashrc ]; then
  . /etc/bashrc
fi

export DISPLAY=:0.0
source ~/.dotfiles/bin/env_variables
source ~/.dotfiles/bin/functions
source ~/.dotfiles/bin/bash-prompt

setxkbmap gb

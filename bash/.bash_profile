#!/usr/bin/env bash

source ~/.env_vars

# Add bin to path
PATH="$HOME/.dotfiles/bin:$PATH"
for d in ~/.dotfiles/bin/*/; do
  PATH="$d:$PATH"
done

PATH=$PATH:$HOME/.local/bin:$HOME/bin

export PATH

setxkbmap gb


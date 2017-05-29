#!/usr/bin/env bash

# Add bin to path
PATH="$HOME/.dotfiles/bin:$PATH"
for d in ~/.dotfiles/bin/*/; do
  PATH="$d:$PATH"
done
export PATH

setxkbmap gb


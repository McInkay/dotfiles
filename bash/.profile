#!/bin/sh

PATH="$HOME/.dotfiles/bin:$PATH"
for d in ~/.dotfiles/bin/*/; do
  PATH="$d:$PATH"
done


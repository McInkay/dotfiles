#!/bin/bash

if [ -f ~/.bashrc ]; then
	. ~/.bashrc
fi

PATH="$HOME/.dotfiles/bin:$PATH"
for d in ~/.dotfiles/bin/*/; do
  PATH="$d:$PATH"
done

export PATH
setxkbmap gb

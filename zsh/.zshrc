# If you come from bash you might have to change your $PATH.
# export PATH=$HOME/bin:/usr/local/bin:$PATH

# Path to your oh-my-zsh installation.
  export ZSH=/home/al/.oh-my-zsh

# Set name of the theme to load. Optionally, if you set this to "random"
# it'll load a random theme each time that oh-my-zsh is loaded.
# See https://github.com/robbyrussell/oh-my-zsh/wiki/Themes
ZSH_THEME="agnoster"

# Uncomment the following line if you want to disable marking untracked files
# under VCS as dirty. This makes repository status check for large repositories
# much, much faster.
# DISABLE_UNTRACKED_FILES_DIRTY="true"

HIST_STAMPS="yyyy-mm-dd"

# Plugins can be found in ~/.oh-my-zsh/plugins/*
# Custom plugins may be added to ~/.oh-my-zsh/custom/plugins/
plugins=(git extract z)

source $ZSH/oh-my-zsh.sh

# User configuration

export EDITOR='nano'

alias sess="tmux attach -t main || tmux new -s main"

PATH="$PATH\$PATH:/opt/gitkraken"

# Add bin to path
PATH="$HOME/.dotfiles/bin:$PATH"
for d in ~/.dotfiles/bin/*/; do
  PATH="$d:$PATH"
done
export PATH

export DEFAULT_USER="al"

unsetopt share_history
unsetopt PROMPT_SP

```
      ██            ██     ████ ██  ██                
     ░██           ░██    ░██░ ░░  ░██                
     ░██  ██████  ██████ ██████ ██ ░██  █████   ██████
  ██████ ██░░░░██░░░██░ ░░░██░ ░██ ░██ ██░░░██ ██░░░░ 
 ██░░░██░██   ░██  ░██    ░██  ░██ ░██░███████░░█████ 
░██  ░██░██   ░██  ░██    ░██  ░██ ░██░██░░░░  ░░░░░██
░░██████░░██████   ░░██   ░██  ░██ ███░░██████ ██████ 
 ░░░░░░  ░░░░░░     ░░    ░░   ░░ ░░░  ░░░░░░ ░░░░░░  
 
  ▓▓▓▓▓▓▓▓▓▓
 ░▓ about  ▓ custom linux config files
 ░▓ author ▓ YaManicKill (forked from http://code.xero.nu/dotfiles)
 ░▓▓▓▓▓▓▓▓▓▓
 ░░░░░░░░░░

 awesome        > awesome wm config and ghost theme
 bash-all       > bash config files for all
 bash-no-proxy  > bash config files for when using no proxy
 bash-proxy     > bash config files for when using a proxy
 bin            > scripts (will be added to path when used with the bash_profile)
 bin/fun        > term color, sys info, and other misc scripts
 fonts          > config for gohu and bitmap fonts
 git            > global git config and aliases
 libs           > a few libraries used by other things
 pacman         > pacman colors and progress bar animations
 ssh            > remote ssh server keep alive
 terminator     > terminal emulator with split-screen
 themes         > mod of the cathexis dark theme for gtk/qt/xfce
 tmux           > minimal terminal multiplexer setup
 vim            > vim custom airline bar, colors, and plugins
 wallpaper      > the cool desktop background images i use
 zsh            > zshell settings, aliases, and custom prompts
```
#managing
it's been said of every console user: _"you are your dotfiles"_.

i manage mine with [gnu stow](http://www.gnu.org/software/stow/), a free, portable, lightweight symlink farm manager. this allows me to keep a versioned directory of all my config files that are virtually linked into place via a single command. this makes sharing these files among many users (root) and computers super simple. and does not clutter your home directory with version control files.

#installing
stow is available for all gnu/linux and most other unix like distributions via your package manager.

- `sudo pacman -S stow`
- `sudo apt-get install stow`
- `brew install stow`

#how it works
by default the stow command will create symlinks for files in the parent directory of where you execute the command. so my dotfiles setup assumes this repo is located in the root of your home directory `~/dotfiles`. and all stow commands should be executed in that directory. otherwise you'll need to use the `-d` flag with the repo directory location.

to install most of my configs you execute the stow command with the folder name as the only argument. 

to install **herbstluft** theme use the command:

`stow herbstluftwm`

this will symlink files to `~/.config/herbstluftwm` and various other places.

but you can override the default behavior and symlink files to another location with the `-t` (target) argument flag. 

to install the **ryu-login** you need to execute the command:

`stow -t / ryu-login` 

this will symlink the file to `/etc/issue`.

**note:** stow can only create a symlink if a config file does not already exist. if a default file was created upon program installation you must delete it first before you can install a new one with stow. this does not apply to directories, only files.

#tl;dr
navigate to your home directory

`cd ~`

clone the repo:

`git clone https://github.com/YaManicKill/dotfiles .dotfiles`

enter the dotfiles directory

`cd .dotfiles`

install the bash settings

`stow bash-all`
`stow bash-no-proxy`

install terminator settings

`stow terminator`

uninstall terminator settings

`stow -D terminator`

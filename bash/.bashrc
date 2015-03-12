# .bashrc

# Source global definitions
if [ -f /etc/bashrc ]; then
	. /etc/bashrc
fi

#Path
export PATH=$PATH:~/.dotfiles/bin

#Java
export JAVA_HOME=/usr/lib/jvm/java-1.8.0

## If we want a proxy
export http_proxy=http://localhost:3128
export https_proxy=http://localhost:3128
## And for npm, I need to figure out a way to specify this for only certain machines
npm config set proxy http://localhost:3128
npm config set https-proxy http://localhost:3128

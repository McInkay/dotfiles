## Docker Cheatsheet

Image: set of instructions for the app and it's libraries
Container: version of the image for running on your machine

* List running containers: `docker ps`
* List all containers: `docker ps -a`
* List images: `docker images -a`
* Stats (running containers): `docker stats`

* Build local image: `docker build -t lounge .`

* Remove container: `docker rm name`
* Remove image: `docker rmi hello-world`
* Remove unused images: `docker system prune`

### To run a docker

* `cd directory`
* make

### Creating one using make files

* create directory (`mkdir name`)
* create Dockerfile
* create makefile:

```
IMAGENAME=name
include ../base-makefile
initialrun:
	@docker run -d --name $(IMAGENAME) --restart always $(IMAGENAME) 
```

* Include other args in the initialrun command
* run `make`

IMAGENAME=znc

include ../base-makefile

initialrun:
	@docker run -d -p 127.0.0.1:6667:6667 --restart always --name $(IMAGENAME) -v ~/.znc:/home/znc $(IMAGENAME)

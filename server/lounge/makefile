IMAGENAME=lounge

include ../base-makefile

initialrun:
	@docker run -d -p 127.0.0.1:9000:9000 --restart always --name $(IMAGENAME) -v ~/.lounge:/home/lounge $(IMAGENAME)

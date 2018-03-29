FROM ubuntu:16.04
MAINTAINER McInkay

RUN apt-get update \
    && apt-get install python-software-properties software-properties-common \
    && add-apt-repository ppa:teward/znc \
    && apt-get update \
    && apt-get install znc znc-dbg znc-dev znc-perl znc-python znc-tcl

EXPOSE 6667
CMD znc --datadir /home/znc

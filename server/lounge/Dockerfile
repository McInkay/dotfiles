FROM mhart/alpine-node:8
MAINTAINER McInkay

RUN apk add --no-cache openssh git make gcc g++ python && \
  git clone https://github.com/thelounge/lounge.git && \
  cd lounge && \
  yarn && \
  yarn config set prefix $(npm config get prefix) && \
  yarn link && \
  yarn build && \
  apk del git make gcc g++ python

ENV THELOUNGE_HOME /home/lounge

EXPOSE 9000
CMD thelounge start

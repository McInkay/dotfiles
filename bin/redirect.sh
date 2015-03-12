#!/bin/bash

case "$1" in
  start) sysctl -w net.ipv4.conf.all.accept_local=1
  sysctl -w net.ipv4.conf.all.route_localnet=1
  iptables -t nat -A OUTPUT -p tcp --dst 127.0.0.1 --dport 18080 -j DNAT --to-destination 192.168.56.1:18080
  iptables -t nat -A OUTPUT -p tcp --dst 127.0.0.1 --dport 15001 -j DNAT --to-destination 192.168.56.1:15001
  ;;
  stop)
  ;;
  *) echo "Start or stop, please."
     exit 1
esac

exit 0

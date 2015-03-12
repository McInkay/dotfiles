#!/bin/bash
TM_STATE=/tmp/tm-state
WIN=$(wmctrl -lGx | grep -i terminator | awk '{print $1}');
if [[ $WIN == "" ]]
then
  terminator&
  exit 0
else
  if [[ -e $TM_STATE ]]
  then
    wmctrl -i -r $WIN -b remove,below
    wmctrl -i -r $WIN -b add,above
    rm $TM_STATE
  else
    wmctrl -i -r $WIN -b remove,above
    wmctrl -i -r $WIN -b add,below
    touch $TM_STATE
  fi
fi

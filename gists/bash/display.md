# Stuff for bash scripts

## Get the vertical width
```
VW=$(tput cols)
```

## Right align something
```
LEFTTEXT="This will show on the left"
RIGHTTEXT="This is on the right"
TABWIDTH=$((VW-${LEFTTEXT}))
printf "%s%${TABWIDTH}s%s" "$LEFTTEXT" "$RIGHTTEXT"
```
\
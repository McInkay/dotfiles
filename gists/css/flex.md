```scss
.container {
  display:         flex
                   inline-flex;

  flex-direction:  row (default)
                   row-reverse
                   column
                   column-reverse;

  flex-wrap:       nowrap (default)
                   wrap
                   wrap-reverse;
  
  // shorthand:
  flex-flow:       [flex-direction] [flex-wrap];
  
  justify-content: flex-start (default)
                   flex-end
                   center
                   space-between
                   space-around;
  
  align-items:     flex-start
                   flex-end
                   center
                   baseline
                   stretch (default);
  
  align-content:   flex-start
                   flex-end
                   center
                   space-between
                   space-around
                   stretch (default);
}
```




```scss
.item {
  order:           <integer>;
  
  flex-grow:       <number> (default: 0);
  flex-shrink:     <number> (default: 1);
  flex-basis:      <length>
                   auto (default);
  
  // shorthand:
  flex:            [flex-grow] [flex-shrink]? [flex-basis]?
  
  align-self:      auto
                   flex-start
                   flex-end
                   center
                   baseline
                   stretch (default);
}
```

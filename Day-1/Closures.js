function getCounter(){
   var count = 0;
   function incCounter(){
      count++;
      return count;
   }
   return incCounter;
}
var spinner = (function(){
  var count = 0;
  function inc(){
     return ++count;
  }
  function dec(){
     return --count;
  }
  return {
     increment : inc,
     decrement : dec
  };
})()

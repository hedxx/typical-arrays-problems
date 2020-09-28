
exports.min = function min (arr) {
  
  if ( arr === undefined || arr.length === 0) 
    { 
      return 0; 
    }
 /* var min = arr[0];
  for(let i = 0; i < arr.length; i ++ ){
    if(arr[i] < min) { min = arr[i] }
  }
      return min;
*/
return Math.min(...arr);

}

exports.max = function max (arr) {
  
  if ( arr === undefined || arr.length === 0) 
    { 
      return 0; 
    }
 /* var max = arr[0];
  for(let i = 0; i < arr.length; i ++ ){
    if(arr[i] > max) { max = arr[i] }
  }
      return max;
      */
     return Math.max.apply(null, arr);
}

exports.avg = function avg (arr) {
  if ( arr === undefined || arr.length === 0) { 
    return 0; 
  }
/*  var avgValue = 0;
  var i = 0;
  for( i ; i < arr.length; i ++ ){
      avgValue += arr[i]; 
  }
      return avgValue / i;
      */
     return arr.reduce(function(a,b){ return a + b },0) / arr.length;
}

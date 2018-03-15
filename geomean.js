
function geomean(list){
  var num = list.length;
  var mul = list.reduce(function(a,b){return a*b;});
  var mul2 = Math.sign(mul) * Math.pow(Math.abs(mul), 1 / num);
  var geom = parseFloat(mul2).toFixed(2);
  return geom;
}
var list = [22, 23, 99, 12, 24, 11, 23, 21, 15, 18, 11];
geomean(list);

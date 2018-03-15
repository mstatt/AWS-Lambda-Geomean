function filter_array(test_array) { //Remove 0's from array
    var index = -1,
        arr_length = test_array ? test_array.length : 0,
        resIndex = -1,
        result = [];
    while (++index < arr_length) {
        var value = test_array[index];
        if (value) {result[++resIndex] = value;}
    }
    return result;
}
function geomean(list){
  var li = filter_array(list);
  var num = li.length;
  var mul = li.reduce(function(a,b){return a*b;});
  var mul2 = Math.sign(mul) * Math.pow(Math.abs(mul), 1 / num);
  var geom = parseFloat(mul2).toFixed(2);
  return geom;
}
var list = [0.1,0.2,0,22, 23, 99, 12, 24, 11,0,0,23, 21, 15, 18, 11];

console.log(geomean(list));
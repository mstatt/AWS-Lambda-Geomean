exports.handler = (event, context, callback) => {
    // TODO implement
    console.log("Lambda Geometric mean function executed");
    var list = event.list;
    var num = list.length;
    var mul = list.reduce(function(a,b){return a*b;});
    var mul2 = Math.sign(mul) * Math.pow(Math.abs(mul), 1 / num);
    var geom = parseFloat(mul2).toFixed(2);
    callback(null, geom);
};
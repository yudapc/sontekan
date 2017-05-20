class Fibonacci {
  run(n) {
    var a = 0;
    var b = 1;
    for(var i = 0; i <= n; i++) {
      var temp = a;
      a = b;
      b = temp + b;
    };
    return a;
  }
}

var fib = new Fibonacci();

for(var i = 0; i < 10; i++) {
  console.log(fib.run(i));
}

class Fizzbuzz {
  run() {
    var n = 30;
    for(var i = 1; i <= n; i++) {
      var result = '';
      if (i % 3 === 0) {
        result = 'Fizz';
      }
      if (i % 5 === 0) {
        result += 'Buzz';
      }
      if (!result) {
        result = i;
      }
      console.log(result);
    }
  }
}

var fizzbuzz = new Fizzbuzz;
fizzbuzz.run();

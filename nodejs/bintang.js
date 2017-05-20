class Bintang {
  run(n) {
    for(var i = 1; i <= n; i++) {
      var x = '';
      for(var j = 1; j <= i; j++) {
        var x = x + '*';
      }
      console.log(x);
    }
    return;
  }
  light(n) {
    for(var i = 1; i <= n; i++) {
      var x = '';
      var space = ' ';
      for(var j = 1; j <= i; j++) {
        var x = space + x + '*';
      }
      console.log(x);
    }
    return;
  }
}

var bintang = new Bintang;
console.log('Bintang: ');
bintang.run(5);
console.log('===============================');
console.log('Light: ');
bintang.light(5);

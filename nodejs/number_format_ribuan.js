const numberFormat = (bilangan) => {
  var reverse = bilangan.toString().split('').reverse().join('');
  var ribuan  = reverse.match(/\d{1,3}/g);
  ribuan  = ribuan.join('.').split('').reverse().join('');
  return ribuan;
};
var bilangan = 200930998;
console.log(numberFormat(bilangan));

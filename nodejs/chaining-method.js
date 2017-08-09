const string = '10.5';
String.prototype.toInt = () => parseInt(string);
String.prototype.toFloat = () => parseFloat(string);
const convert = string.toInt();
const convertToFloat = string.toFloat();

console.log('------------------------------------------');
console.log('result chaining:');
console.log('------------------------------------------');
console.log('string.toInt()\n', convert);
console.log(`Type Data: ${typeof convert}`);
console.log('------------------------------------------');
console.log('string.toFloat()\n', convertToFloat);
console.log(`Type Data: ${typeof convertToFloat}`);

console.log('------------------------------------------');
const number = 10;
Number.prototype.toString = () => number + '';
console.log('number.toString()\n', number.toString());
console.log(`Type Data: ${typeof number.toString()}`);

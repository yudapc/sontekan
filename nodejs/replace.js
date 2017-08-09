const replaceCallback = (match) => `_${match.toLowerCase()}`;
const word = 'HelloWorld';
const replaceNow = word.replace(/[A-Z]/g, replaceCallback);
console.log('results replace with callback:\n', replaceNow);

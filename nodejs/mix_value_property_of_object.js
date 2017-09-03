const myObj = {
  1: {
    satu: 'satu 1'
  },
  2: {
    dua: 'dua 2'
  },
  3: {
    tiga: 'tiga 3'
  }
}
let newObj = {};

Object.keys(myObj).map((object) => {
  const getObj = myObj[object];
  const firstProperty = Object.keys(getObj)[0];
  const valueOfObj = getObj[firstProperty];
  newObj[firstProperty] = valueOfObj;
});

const result = (res = null, expect = null) => {
  console.log('-------------------------');
  console.log('Print Result: ')
  console.log('-------------------------');
  console.log('Expect: ', expect);
  console.log('Result: ', res);
};

const expect = "it should have value: { satu: 'satu 1', dua: 'dua 2', tiga: 'tiga 3' }";

result(newObj, expect);

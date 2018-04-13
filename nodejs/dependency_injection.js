//
// running: mocha dependency_injection.js
//
const assert = require('assert');

const getAnimals = (fetch, id) => {
  return fetch('http://apiendpoint.com/v1/animals/' + id)
    .then(response => response.json())
    .then(json => json.result[0]);
};

describe('#getAnimals', () => {
  it('call fetch with correct url', () => {
    const fakeFetch = (url) => {
      return new Promise(resolve => {});
    };
    getAnimals(fakeFetch, 123);
  });
  it('parses the response of fetch correctly', () => {
    const fakeFetch = (url) => {
      return Promise.resolve({
        json: () => Promise.resolve({
          results: [{
            name: 'Fun fun function',
            type: 'robotdragon',
          }],
        }),
      });
      getAnimals(fakeFetch, 12345)
        .then((result) => {
          assert(result.name === 'Fun fun function');
        });
    };
  });
});

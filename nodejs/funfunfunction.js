const getAnimals = (fetch, id) => fetch('http://api.animalfraggame.com/animas/' + id)
                                    .then(response => response.json())
                                    .then(data => data.results[0]);


describe('getAnimals', () => {
  it('work in the basic case', () => {
    const fakeFetch = url => new Promise((resolve) => {});
    getAnimals(fakeFetch, 123);
  });
});

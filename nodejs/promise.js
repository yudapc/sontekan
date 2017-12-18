const getSteps = () => {
  const steps = 10;
  return steps;
};

const getActivity = () => {
  const activity = 20;
  return activity;
};

const getCalory = () => {
  const calory = 500;
  return calory;
};

Promise.all([
  getSteps(),
  getActivity(),
  getCalory(),
]).then(result => console.log('promise all sample: ', result));

// promises with async in each function
const calorySource = {};

const getSteps2 = new Promise((resolve) => {
  const steps = 10;
  setTimeout(() => resolve(steps + 1), 2000);
});
const getActivity2 = new Promise((resolve) => {
  const activity = 20;
  setTimeout(() => resolve(activity + 1), 2000);
});

const getCalory2 = new Promise((resolve) => {
  const calory = 500;
  if (calory > 500) {
    setTimeout(() => resolve(calory + 1), 2000);
  } else {
    resolve(calorySource);
  }
});

Promise.all([
  getSteps2,
  getActivity2,
  getCalory2,
]).then(result => console.log('promise all async: ', result[0] +', '+ result[1] + ' , '+result[2]));

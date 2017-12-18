const async = require('async');

const getSteps = (callback) => {
  const steps = 10;
  callback(null, steps);
};

const getActivity = (steps, callback) => {
  const activity = 20;
  callback(null, steps, activity);
};

const getCalory = (steps, activity, callback) => {
  const calory = 500;
  callback(null, steps, activity, calory);
};

async.waterfall([
  getSteps,
  getActivity,
  getCalory,
], (err, steps, activity, calory) => {
  if (!err) {
    console.log('result steps: ', steps);
    console.log('result activity: ', activity);
    console.log('result calory: ', calory);
  }

});
const exerciseTime = [
  {
    value: 22,
    sourceName: 'Adiwijaya’s Apple Watch',
    device: 'Apple Watch',
    identifier: 'com.apple.health.C16ACAA0-354C-43F1-A566-29D71FA3CADD',
    date: '2017-12-11',
  },
  {
    value: 49,
    sourceName: 'Adiwijaya’s Apple Watch',
    device: 'Apple Watch',
    identifier: 'com.apple.health.C16ACAA0-354C-43F1-A566-29D71FA3CADD',
    date: '2017-12-12',
  },
  {
    value: 13,
    sourceName: 'Adiwijaya’s Apple Watch',
    device: 'Apple Watch',
    identifier: 'com.apple.health.C16ACAA0-354C-43F1-A566-29D71FA3CADD',
    date: '2017-12-13',
  },
  {
    value: 5,
    sourceName: 'Adiwijaya’s Apple Watch',
    device: 'Apple Watch',
    identifier: 'com.apple.health.C16ACAA0-354C-43F1-A566-29D71FA3CADD',
    date: '2017-12-14',
  },
  {
    value: 7,
    sourceName: 'Adiwijaya’s Apple Watch',
    device: 'Apple Watch',
    identifier: 'com.apple.health.C16ACAA0-354C-43F1-A566-29D71FA3CADD',
    date: '2017-12-08',
  },
  {
    value: 8,
    sourceName: 'Adiwijaya’s Apple Watch',
    device: 'Apple Watch',
    identifier: 'com.apple.health.C16ACAA0-354C-43F1-A566-29D71FA3CADD',
    date: '2017-12-09',
  },
  {
    value: 6,
    sourceName: 'Adiwijaya’s Apple Watch',
    device: 'Apple Watch',
    identifier: 'com.apple.health.C16ACAA0-354C-43F1-A566-29D71FA3CADD',
    date: '2017-12-10',
  },
];

const exerciseTimeSources = {};
const dataExercise = exerciseTime.filter(source => source.device === 'Apple Watch');

dataExercise.map((item) => {
  exerciseTimeSources[item.date] = item.value;
  return exerciseTimeSources;
});

exerciseTimeSources;
console.log(exerciseTimeSources);

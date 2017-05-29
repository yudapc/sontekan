'use strict';

const groups = [{group: 'zakaria'}, {group: 'cika'}, {group: 'abbas'}, {grup: 'bear'}];

// sort ascending
const groupSorted = groups.sort((a, b) => {
  let groupA = a.group;
  let groupB = b.group;
  if (groupA < groupB) {
    return -1;
  }
  if (groupA > groupB) {
    return 1;
  }

  return 0;
});

console.log(groupSorted);

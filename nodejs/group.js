'use strict';

var myArray = [
  {group: "one", color: "red"},
  {group: "two", color: "blue"},
  {group: "one", color: "green"},
  {group: "one", color: "black"},
];
var groups = {};
for (var i = 0; i < myArray.length; i++) {
  var groupName = myArray[i].group;
  if (!groups[groupName]) {
    groups[groupName] = [];
  }
  groups[groupName].push(myArray[i].color);
}
myArray = [];
for (var groupName in groups) {
  myArray.push({group: groupName, color: groups[groupName]});
}

console.log('------------------------------');
console.log('myArray: ', myArray);
console.log('------------------------------');

console.log('');
console.log('');
console.log('');

console.log('-----------Try to Map----------');
console.log('map myArray: ');
myArray.map((val, i) => {
  console.log('group: ', val.group);
  console.log('color: ', val.color);
});
console.log('------------------------------');

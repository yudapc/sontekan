'use strict'

// // part 1
// // testing to get value of resolv
// let myPromises = new Promise((resolve, reject) => {
//   resolve("Go go go!!")
// });
//
// myPromises.then((res) => {
//   console.log(res)
// })

// part 2
// testing to catch block
let myPromises = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Go go go!!")
  }, 1000)
  setTimeout(() => {
    reject("On no!!!")
  }, 500)
});

myPromises.then((res) => {
  console.log(res)
}).catch((err) => {
  console.log(err)
})

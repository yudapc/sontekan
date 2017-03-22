'use strict'

class People {
  constructor(name) {
    this.name = name
  }

  run() {
    console.log("Running " + this.name)
  }
}

let p = new People("Jira");
p.run()

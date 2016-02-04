//imports/Example .js

class Example {
  constructor (name) {
    this.name = name;
  }

  speak () {
    console.warn(this.name);
  }

}

module.exports = Example; //set what can be imported from this file

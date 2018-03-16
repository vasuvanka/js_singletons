// pattern1
class MySingletonPattern1 {
  constructor(name = Date.now) {
    this.name = name;
  }

  setName(name) {
    this._name = name;
  }
  getName() {
    return this._name;
  }
}

module.exports.MySingletonPattern1 = new MySingletonPattern1();

// pattern 2

function MySingletonPattern2(name) {
  this.name = name;
  if (MySingletonPattern2.prototype._singleton) {
    return MySingletonPattern2.prototype._singleton;
  }
  this.date = new Date().getTime();
  MySingletonPattern2.prototype._singleton = this;
  let funcs = function () {
    return {
      // private scope
      name: 'vasu'
    }
  };
  // public scope

  this.getName = function () {
    return this.name;
  }
  return this;
}

module.exports.MySingletonPattern2 = MySingletonPattern2;


// pattern 3

class MySingletonPattern3 {
  constructor(name) {
    this.name = name;
    if (MySingletonPattern3.prototype._singleton) {
      let self = MySingletonPattern3.prototype._singleton;
      self.name = name;
      return self;
    }
    this.date = new Date().getTime();
    MySingletonPattern3.prototype._singleton = this;
  }
  getName() {
    return this.name;
  }
}

module.exports.MySingletonPattern3 = MySingletonPattern3;

let events = require('events');
let util = require('util');

//TEST EMITTER: -1
// let myEmitter = new events.EventEmitter();
// myEmitter.on('someEvent', (msg) => console.log(msg));
// myEmitter.emit('someEvent', 'I m from emitter');

var Person = function (name) {
    this.name = name;
};

util.inherits(Person, events.EventEmitter);

// console.log(Person.prototype.emit);

var vaibhav = new Person('Vaibhav');

vaibhav.on('speak', (msg) => console.log(msg));

vaibhav.emit('speak', 'I love javascript');

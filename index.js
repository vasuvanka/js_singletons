// pattern1
const s1 = require('./class').MySingletonPattern1;
console.log('s1 ------ :: ', s1);

s1.setName('vasu');

console.log('s1 ------ :: ', s1);

const ss1 = require('./class').MySingletonPattern1;
console.log('ss1 ------ :: ', ss1);

ss1.setName('vasuvanka');

console.log('ss1 ------ :: ', ss1);

// pattern2

const s2 = new require('./class').MySingletonPattern2('s2');
console.log('s2 ------ :: ', s2);
console.log('s2 ------ name :: ', s2.getName());

const ss2 = new require('./class').MySingletonPattern2('ss2');
console.log('ss2 ------ :: ', ss2);
console.log('ss2 ------ name :: ', ss2.getName());

// pattern3

let MySingletonPattern3 = require('./class').MySingletonPattern3;

const s3 = new MySingletonPattern3('s3');
console.log('s3 ------ :: ', s3);
console.log('s3 ------ name :: ', s3.getName());
MySingletonPattern3 = require('./class').MySingletonPattern3;

const ss3 = new MySingletonPattern3('ss3');
console.log('ss3 ------ :: ', ss3);
console.log('ss3 ------ name :: ', ss3.getName());

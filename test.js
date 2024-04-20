const crypto = require("crypto");

// Event Loop
const startTime = Date.now();

// setting threadpool_size allows the eventloop to run in specified thread.
process.env.UV_THREADPOOL_SIZE = 1;

setTimeout(() => { console.log("Timer1")}, 0);
setImmediate(() => { console.log("Immediate1")});
setTimeout(() => { console.log("Timer2")}, 2000);

process.nextTick(() => console.log("Process-nextTick"));


crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
    console.log(Date.now() - startTime, 'Password Encrypted');
})
crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
    console.log(Date.now() - startTime, 'Password Encrypted');
})
crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
    console.log(Date.now() - startTime, 'Password Encrypted');
})
crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
    console.log(Date.now() - startTime, 'Password Encrypted');
})
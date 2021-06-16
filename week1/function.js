/* 0. Create function that will accept (10, 20) params and return their sum.
Main goal - use all possible variants to declare functions */

const sum1 = (a, b) => a + b;

function sum2(a, b) {
    return a + b;
}

const sum3 = function (a, b) {
    return a + b;
};

const sum4 = new Function('a', 'b', 'return a + b');

console.log('0.1:', sum1(10, 20));
console.log('0.2:', sum2(10, 20));
console.log('0.3:', sum3(10, 20));
console.log('0.4:', sum4(10, 20));

/* 1. Create self-invoked anonymous function,
that will return if the day after tomorrow is odd, or even.
HINT: function accepts one argument: new Date();
output example 15.06.2021, 11:19:22 is odd date
 */

((date) => {
    const curruntDay = date.getDate();
    const afterTommorow = curruntDay + 2;
    date.setDate(afterTommorow);
    if (afterTommorow % 2 === 0) {
        console.log('1:', `${date} is even date`);
    } else {
        console.log('1:', `${date} is odd date`);
    }
})(new Date());

// 2. Rewrite this function to ES6/ES2015

/* let Intern = function (name, age) {
    this.name = name;
    this.age = age;
    this.homework = {
        status: 'Resolved',
        rating: '100%',
    };
};

Intern.prototype.getHomework = function () {
    return `${this.name} resolved homework with status ${this.homework.status}`;
}; */

class Intern {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.homework = {
            status: 'Resolved',
            rating: '100%'
        };
    }

    getHomework() {
        return `${this.name} resolved homework with status ${this.homework.status}`;
    }
}

const intern = new Intern('Andrii', 25);
console.log('2:', intern.getHomework());

/* 3. Write multiply function. Two arguments - random numbers.
But sometimes, we don't have second argument, and result is = random number * 12
HINT: Read about default parameters in functions. */

const multiply = (a, b = 12) => a * b;

console.log('3:', multiply(5, 25));
console.log('3:', multiply(7));

/**
 * example output
 * (19, 29) => 551
 * (23) => 276
 */

/**
 * 4. Write function, that modify first argument to example output with delay 2 seconds
 *
 * example:
 * yourFuncName({ a: 1, b: 2}, (data) => { console.log(data) }); output: { a: 2, b: 3 }
 * HINT: read about callbacks
 */

function fn1(options, callback) {
    console.log('4:', options);
    callback(options);
}

function fn2(data) {
    setTimeout(() => {
        const editKeyObj = Object.fromEntries(
            Object.entries(data).map(([key, value]) => [key, value + 1])
        );
        console.log('4:', editKeyObj);
    }, 2000);
}

fn1({ a: 1, b: 2 }, fn2);

/**
 * 5. Imagine, that we have 2 requests to database, first is getUsers() that return data in 1 second,
 * and second is createUser() that resolves in 2 seconds.
 * Your goal, is to modify createUser() with callback, and return 3 users
 */

const users = [
    {
        name: 'Daniel',
        age: 22
    },
    {
        name: 'Michael',
        age: 32
    }
];

function getUsers() {
    setTimeout(() => {
        users.forEach((user) => {
            console.log('5:', 'user:', user);
        });
    }, 1000);
}

function createUser(user, callback = getUsers) {
    setTimeout(() => {
        users.push(user);
        callback();
    }, 2000);
}

getUsers();
createUser({ name: 'Vitalii', age: 24 });

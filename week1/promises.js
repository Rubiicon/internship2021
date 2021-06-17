const request = require('request');

const getUsers = () => {
    return new Promise((resolve, reject) => {
        request(
            'https://jsonplaceholder.typicode.com/users',
            (error, response, body) => {
                if (error || response.statusCode !== 200) reject(error);

                resolve(JSON.parse(body));
            }
        );
    });
};

getUsers()
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        throw new Error(error);
    });

// 1. Rewrite getUsers to async/await

const getUsers2 = async () => {
    await request(
        'https://jsonplaceholder.typicode.com/users',
        (error, response, body) => {
            if (error || response.statusCode !== 200)
                console.log('error:', error);
            console.log(JSON.parse(body));
        }
    );
};

getUsers2();

/**
 *  2. Add another request to url - https://jsonplaceholder.typicode.com/comments.
 *  Make two requests, and return all values
 *  Hint: Promise.all
 * */

const promiseA = new Promise((resolve, reject) => {
    request(
        'https://jsonplaceholder.typicode.com/users',
        (error, response, body) => {
            if (error || response.statusCode !== 200) reject(error);

            resolve(JSON.parse(body));
        }
    );
});

const promiseB = new Promise((resolve, reject) => {
    request(
        'https://jsonplaceholder.typicode.com/comments',
        (error, response, body) => {
            if (error || response.statusCode !== 200) reject(error);

            resolve(JSON.parse(body));
        }
    );
});

const promiseAll = () => {
    Promise.all([promiseA, promiseB])
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            throw new Error(error);
        });
};

promiseAll();

/**
 * 3. Read about Promise.race
 * Try to use it on previous two requests
 */

const promiseRace = () => {
    Promise.race([promiseA, promiseB])
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            throw new Error(error);
        });
};

promiseRace();

/**
 * 4. Read about Promise.any
 * Try to use it on previous two requests
 */

/* const promiseAny = () => {
    Promise.any([promiseA, promiseB])
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            throw new Error(error);
        });
};

promiseAny(); */

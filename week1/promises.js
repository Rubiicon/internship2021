const request = require('request');

/* const getUsers = () => {
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
    }); */

// 1. Rewrite getUsers to async/await

/* const getUsers2 = async () => {
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
 */
/**
 *  2. Add another request to url - https://jsonplaceholder.typicode.com/comments.
 *  Make two requests, and return all values
 *  Hint: Promise.all
 * */

const getTwoRequest = () => {
    Promise.all([
        new Promise((resolve, reject) => {
            request(
                'https://jsonplaceholder.typicode.com/users',
                (error, response, body) => {
                    if (error || response.statusCode !== 200) reject(error);

                    resolve(JSON.parse(body));
                }
            );
        }),
        new Promise((resolve, reject) => {
            request(
                'https://jsonplaceholder.typicode.com/comments',
                (error, response, body) => {
                    if (error || response.statusCode !== 200) reject(error);

                    resolve(JSON.parse(body));
                }
            );
        }),
    ])
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            throw new Error(error);
        });
};

getTwoRequest();

/**
 * 3. Read about Promise.race
 * Try to use it on previous two requests
 */

/**
 * 4. Read about Promise.any
 * Try to use it on previous two requests
 */

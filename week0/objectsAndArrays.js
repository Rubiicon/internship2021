const obj = {
    a: 1,
    b: 2
};

// 1. Log count of keys in object
console.log('1: ', Object.keys(obj).length);

// 2. Create new object from "obj" and add to newly created param "c" with value "3".
// Original "obj" shouldn't be modified

const obj2 = Object.assign({}, obj, { c: 3 });

console.log(obj); // output {a: 1, b: 2};
console.log(obj2); // should return {a: 1, b: 2, c: 3}

// 3.Check if is given input is array (Please, use more than one solution)
const input1 = 'array';
const input2 = ['array'];

console.log('3', Array.isArray(input1), Array.isArray(input2));
console.log('3.1', input1.constructor === Array, input2.constructor === Array);

// 4. Remove duplicates from array (Try to find more than one solution)
const array = ['A', 'B', 'A', 'C', 'B'];

let uniqueArray1 = [...new Set(array)];

let uniqueArray2 = array.filter((element, index, arr) => {
    return arr.indexOf(element) === index;
});

console.log('4:', uniqueArray1);
console.log('4.1:', uniqueArray2);

// 5. Merge two arrays, also remove duplicates
const array1 = ['A', 'B', 'F', 'C', 'B'];
const array2 = ['A', 'D', 'E', 'D', 'F'];
const array3 = [...new Set([...array1, ...array2])];

console.log('5', array3);

// 6. Write function to remove.
// 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array.
const cleanArray = (values) => {
    const forDelete = [null, 0, '""', false, undefined, NaN];
    return values.filter((item) => !forDelete.includes(item));
};
console.log('6: ', cleanArray([10, null, -12, false, undefined, '', 0, 234]));

// 7. Get random item from array
const getRandom = (items) => {
    return items[Math.floor(Math.random() * items.length)];
};
console.log('7:', getRandom([10, 22, 'Super', null, undefined, 0, false, 111]));

// 8. Sort the array in the ascending order
const sort = (arr) => {
    arr.sort((a, b)=>{
        return a - b;
    });
    return arr;
};

console.log('8: ', sort([11, 21, 13, 88, 2, 4, 77]));

// /** 9. Get sorted array from 8 task, and write function, that creates object:
//  * {
//  *     even: [88, 2, 4],
//  *     odd: [11, 21, 13, 77]
//  * }
//  *  */
const arraySortEvenOdd = (arr) => {
    let even = arr.filter((a) => {
        return a % 2 === 0;
    });
    let odd = arr.filter((a) => {
        return a % 2 !== 0;
    });

    return { even: even, odd: odd };
};

console.log('9: ', arraySortEvenOdd([11, 21, 13, 88, 2, 4, 77]));

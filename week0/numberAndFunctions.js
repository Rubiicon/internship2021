// 1. Write function to get random value in range from -100 to 100
const random = (num1, num2) => {
    let rand = num1 + Math.random() * (num2 + 1 - num1);
    return Math.floor(rand);
};

console.log('1: ', random(-100, 100));

// 2. Write function to check is positive random number,
const isPositive = (num) => {
    if (num > 0) {
        return true;
    }
    return false;
};

console.log('2: ', isPositive(random(-100, 100)));
// output should be boolean

// 3. Write function, which create Array of random numbers. Array length = 6;
// Result of function should be sum of array elements
const getArrayRandomNum = (length = 6, min = 0, max = 100)=>{
    let array = [];
    for (let i = 0; i < length; i += 1) {
        array.push(random(min, max));
    }
    return array;
};

const getArraySum = (arr) => {
    let sum = arr.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    });
    return sum;
};

console.log('3:', getArraySum(getArrayRandomNum()));

// 4. Write function to create random color
const getRandomColor = () => {
    let r = random(0, 255);
    let g = random(0, 255);
    let b = random(0, 255);
    return `rgb(${r}, ${g}, ${b})`;
};
console.log('4: ', getRandomColor());
// output rgb(*, *, *);

// 5. Write function to find out if a number is a natural number or not
const isNatural = (...numbers)=>{
    let result = numbers.map((num)=>{
        if (typeof num !== 'number') {
            return 'Not a number';
        }
        return (num > 0) && (Math.floor(num) === num) && num !== Infinity;
    });
    return result;
};

console.log('5: ', isNatural(10, 22, -23, 5.4));

// 6. Create function isDivideBy(number, firstDivider, secondDivider).
// Check if an integer number is divisible by each out of two arguments

const isDivideBy = (number, firstDivider, secondDivider) => {
    if (Number.isInteger(number / firstDivider) && Number.isInteger(number / secondDivider)) {
        return true;
    }
    return false;
};
/**
 * (45, 1, 6)    ->  false
 * (45, 5, 15)   ->  true
 *
 * (-12, 2, -6)  ->  true
 * (-12, 2, -5)  ->  false
 */

console.log('6: ', isDivideBy(45, 1, 6));
console.log('6: ', isDivideBy(45, 5, 15));
console.log('6: ', isDivideBy(-12, 2, -6));
console.log('6: ', isDivideBy(-12, 2, -5));

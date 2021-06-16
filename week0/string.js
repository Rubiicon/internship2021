// instead of **** put your name and last name;

const firstName = 'Andrii';
const lastName = 'Zahorodnyi';

// 1. concat first and last name, to create full name e.g (Vitalii Danchul)
const fullName = firstName.concat(' ', lastName);

console.log('1: ', fullName);

// 2. log fullName third character. Please, use more than one solution
const thirdCharacter1 = fullName.charAt(2);
const thirdCharacter2 = fullName.slice(2, 3);

console.log('2.1: ', thirdCharacter1);
console.log('2.2: ', thirdCharacter2);

// 3. replace all vowels in fullName with number
const number = 10;
const replaced = fullName.replace(/[aeiou]/gi, number);

console.log('3: ', replaced);

// 4. check if replaced string on position 8 ends with number 10

console.log('4: ', replaced.slice(7, 9) === '10');

// 5. log part of fullName from 3 to 7 character

console.log('5: ', fullName.slice(2, 6));

// 6. Divide replaced string by number 10

console.log('6:', replaced.split('10').join(' '));

// // 7. Write function capitalize(), to capitalize first letter of string
const lowerCased = 'new york';

const capitalize = (str) => {
    return str.slice(0, 1).toUpperCase() + str.slice(1);
};

console.log('7:', capitalize(lowerCased));

// 8. Write insert function, that will accept main string,
// string to insert and position to insert
// Change **** with your name

const mainString = 'Hello, my name is ****, I want to learn Node.js';

const insert = (str, addStr, position) => {
    return str.slice(0, position) + addStr + str.slice(position + 4);
};
console.log('8:', insert(mainString, fullName, 18));

// // 9. Write your own reverse() function. (do not use .reverse())
const reverse = (str) => {
    let reverseStr = '';
    for (let i = str.length - 1; i >= 0; i -= 1) {
        reverseStr += str[i];
    }
    return reverseStr;
};

console.log('9', reverse('my random string'));

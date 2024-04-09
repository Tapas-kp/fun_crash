let numbersArray = [2, 3, 7, 8, 10.13, 15, 18, 34, 25];

// Task 1: Mapping to Doubles
const doublesArray = numbersArray.map(number => number * 2);
console.log("Task 1: Doubles Array:", doublesArray);

// Task 2: Filtering Evens
const evenNumbersArray = numbersArray.filter(number => number % 2 === 0);
console.log("Task 2: Even Numbers Array:", evenNumbersArray);

// Task 3: Summation
const sum = numbersArray.reduce((acc, current) => acc + current, 0);
console.log("Task 3: Sum of all elements:", sum);

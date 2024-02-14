//array functioning

let colors = ["red", "green", "blue","pink","violet"];
colors.push("yellow");
colors.pop();
let secondColor = colors[1];
let isOrangeIncluded = colors.includes("orange");
for(let i=0;i<=colors.length;i++)
console.log(colors[i]);
//searching and sorting 
let indexOfGreen = colors.indexOf("green");
console.log(indexOfGreen);
//reverse order of element
let reversedColors = colors.reverse();
console.log(reversedColors);
//returning first three
let firstThreeColors = colors.slice(0, 3);
console.log(firstThreeColors);
let fruits=["mango","passion","orange","apple"]
let replacedFruits = fruits.map(fruit => fruit === "apple" ? "orange" : fruit);
console.log(replacedFruits);

//dealing with numbers

let numbers = [1, 2, 3, 4, 5];
let doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers);
let oddNumbers = numbers.filter(num => num % 2 !== 0);
console.log(oddNumbers);
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum);
let allPositive = numbers.every(num => num > 0);
console.log(allPositive);
//sorting in asscending
let sortedNumbers = numbers.sort((a, b) => a - b);
console.log(sortedNumbers);


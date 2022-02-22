//Challange-1
console.log("//--------------Challange: 1-------------------//");

const favFood = [
  "Modhu",
  "khejur",
  "Peanuts",
  "Malta",
  "Mango",
  "Apple",
  "Banana",
];

for (const word of favFood) {
  if (word.includes("M") == true) {
    console.log(word);
  }
}

//Challange-2
console.log("//--------------Challange: 2-------------------//");

// function mdWords(friends) {

// }
const friends = [
  "Md Adnan",
  "Din MD",
  "Shoyeb",
  "MD Riaz",
  "md faruk",
  "Rohim uddin",
  "Karim Uddin",
  "Kofil Bhuiyan",
  "Md Abdullah",
];
for (const name of friends) {
  if (name.toLowerCase().startsWith("md") == true) {
    console.log(name);
  }
}
// const output = mdWords(friends);
// console.log(output);

//Challange-3
console.log("//--------------Challange: 3-------------------//");

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const orangeLemon = fruits.slice(1, 3);
console.log(orangeLemon);

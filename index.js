// // soal 1
// // Tanpa menggunakan fungsi, buatlah rumus untuk menghitung BMI
// // BMI = weight (kg) / (height (m) ^ 2)

// let weight = 65; // kg
// let height = 180; // cm

// height = height / 100; // convert cm to m

// const bmi = weight / (height ** 2);

// console.log(bmi.toFixed(1));

// // =============================================================================================

// // soal 2
// // Buatlah sebuah program untuk menuliskan "Selamat Pagi <nama>"
// // Jika nama tidak ada, tampilkan "Selamat Pagi"

// // let fullName = '';
// // const greeting = `Selamat Pagi ${fullName}`;
// // console.log(greeting.trim());

// // =============================================================================================

// function sayGreetings(fullName = "Danil") {
//     return `Selamat Pagi ${fullName}`;
// }

// function sayHello() {
//     console.log("Hello");
// }

// console.log(sayGreetings());
// sayHello();

// // =============================================================================================

// // soal 3
// // Buatlah sebuah fungsi yang dapat menghitung luas persegi dan volume kubus
// //  w: 10 l: 10 h: 10
// // calculate(w, l, h)
// // Jika tinggi tidak diberikan, maka akan menghasilkan luas

// function calculate(w, l, h = 1) {
//     return w * l * h;
// }

// const volume = calculate(10, 10, 10);
// const luas = calculate(10, 10);

// console.log(`Volume: ${volume}`);
// console.log(`Luas: ${luas}`);

// // =============================================================================================

// let fullName = "ardi";

// const identity = {
//     fullName: "Danil",
//     age: 23,
//     address: {
//         street: "Jl. Pasar Baru",
//         city: "Jakarta",
//         country: "Indonesia"
//     },
//     hobbies: ["gaming", "coding", "traveling"],
//     sayGreetings: function () {
//         return `Hello, my name is ${this.fullName}`;
//     }
// }

// console.log(identity);

// // =============================================================================================

// /* 

// ## 1. Create an Object

// Create an object called `person` with these properties:

// | Key   | Value       |
// |-------|-------------|
// | name  | "John"      |
// | age   | 25          |
// | job   | "Developer" |

// ```javascript
// // your code here

// ```

// ---

// ## 2. Access Object Properties

// Use `console.log` to display:
// - The person's name
// - The person's job

// ```javascript
// // your code here
// ```

// ---

// ## 3. Add New Property

// Add a new property called `hobby` with value `"Reading"` to the `person` object.

// ```javascript
// // your code here
// ```

// ---

// ## 4. Update Property

// Change the `age` of `person` to `30`.

// ```javascript
// // your code here
// ```

// ---

// ## 5. Delete Property

// Remove the `job` property from the `person` object.

// ```javascript
// // your code here
// ```

// ---

// ## 6. Object Inside Object

// Create an object `student` with:

// | Key     | Value              |
// |---------|-------------------|
// | name    | "Alice"           |
// | grade   | 90                |
// | address | object with:      |
// | - city  | "Jakarta"         |
// | - country | "Indonesia"     |

// Print `student`'s city.

// ```javascript
// // your code here
// ```

// ---

// ## 7. Function in Object

// Add a method called `greet` inside `person` object that returns:

// > "Hi, my name is John"

// Then call it.

// ```javascript
// // your code here
// ```

// ---

// Happy Coding! 🚀


// */

// const person = {
//     name: "John",
//     age: 25,
//     job: "Developer"
// };

// console.log(person.name);

// console.log(person.job);

// person.hobby = "Reading";
// person.age = 30;

// delete person.job;

// console.log(person)


// const student = {
//     name: "Alice",
//     grade: 90,
//     address: {
//         city: "Jakarta",
//         country: "Indonesia",
//     }
// };

// console.log(student.address.city);

// person.greet = function () {
//     return `Hi, my name is ${this.name}`
// };

// console.log(person.greet());

// // =============================================================================================

// const tes = ["a", "b"];
// tes[10] = "c";

// // =============================================================================================

// const fruits = ["Apple", "Banana", "Orange"];
// console.log(fruits[fruits.length - 1]);

// console.log(fruits.includes("Banana"));

// console.log(fruits.indexOf("Banana"));

// console.log(fruits.join(","));

// // =============================================================================================

let a = 5;
let b = 10;

for (let i = 0; i < a; i++) {
    let bintang = "";
    for (let j = 0; j < b; j++) {
        // if ()
        bintang += "*";
    }
    console.log(bintang);
}

// ==============================================================================================


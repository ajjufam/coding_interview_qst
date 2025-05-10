// What will be the output for following cide

// 1)
const obj1 = { a: 1, b: 2 };
const newObj1 = { ...obj1, b: 3, c: 4 };
// obj1.b = 4;
// obj1.c = 10;
// console.log(obj1); // { a: 1, b: 4, c: 10 }
console.log(newObj1); // ???? B) {a:1,b:3,c:4}

//Options
//A) {a:1,b:2,c:4}
//B) {a:1,b:3,c:4}
//C) {b:3,c:4}
//D) Throws Syntax Error

// 2)
const foo = [1, 2, 3].map((x) => {
  if (x > 2) return x;
});
console.log(foo); // ???? A) [undefined,undefined,3]

//Options
//A) [undefined,undefined,3]
//B) [1,2,3]
//C) [undefined,undefined,undefined]
//D) Error

// 3)
console.log(typeof null); /// A) "Object"

//Options
//A) "Object"
//B) "null"
//C) "undefined"
//D) "Number"

// 4)
console.log([..."Hello"]); // B) ['H', 'e', 'l', 'l', 'o']

//Options
//A) ["Hello"]
//B) ['H', 'e', 'l', 'l', 'o']
//C) "undefined"
//D) "Error"

// 5)
let x5 = 10;
let y5 = x5++;
console.log(x5, y5); // A) 11,10

//Options
//A) 11,10
//B) 10,10
//C) 10,11
//D) 11,11

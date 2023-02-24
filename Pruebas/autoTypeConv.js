console.log(8*null);
console.log("5"-1);
console.log("5"+"1");
console.log("five"*2);
console.log(false==0);
console.log(null == undefined);
console.log(null==0); 

// When an operator is applied to the wrong type of value, JavaScript will quietly convert that value to the type it needs.

// This is called "Type Coercion".

// The null in the first expression become 0.

// When something does not map to a number in an obvious way (like 'five' or undefined) is converted into a number.

// This is the ternary operator. It's like a conditional

console.log(true ? 1 : 2);
console.log(false ? 1 : 2);
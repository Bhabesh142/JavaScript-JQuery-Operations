let num = 6
let num1 = String(8)
let num2 = Number("1234")

console.log(num, typeof num);
console.log(num1, typeof num1);
console.log(num2, typeof num2);

// SPREAD and REST Operators.

const nums = [12,34,48,52];
const nums2 = [25,66,72];

const finalNums = [nums,nums2];
console.log(finalNums);

const finalNums2 = [...nums, ...nums2];
console.log(finalNums2);

// REST Operators.
function sum(...numbers)
{
    return numbers;
}
console.log(sum(nums, nums2));

let a
console.log(a, typeof a);
a = 5;
console.log(a, typeof a);
a = a + ""
console.log(a, typeof a);
a = a - 2;
console.log(a, typeof a);

a = !a;
console.log(a, typeof a);

console.log(Boolean(7));
console.log(Boolean(-7));
console.log(Boolean(0));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean("undefined"));
console.log(Boolean("Bhabesh"));

let a1
console.log(a1, typeof a1);
a1 = 7;
console.log(a1, typeof a1);
a1 = a1 + ""
console.log(a1, typeof a1);
a1 = a1 + 2;
console.log(a1, typeof a1);
a1 = a1 - 2;
console.log(a1, typeof a1);

let x="1234 Bhabesh"
let x1=Number("123 Bhabesh")
console.log(x);
console.log(x1);
let x2=parseInt("12345 Bhabesh")
console.log(x2);
let x3=parseInt("N1234 Bhabesh")
console.log(x3);
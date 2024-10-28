//function fun1(){
 //   return 2
//}
//function fun2(){
 //   return 4
//}
//let a=(fun1(),fun2())
//console.log(a);// 4
//2 que

/*const arr=['one','two','three'];
const str='Hello';
 const res=arr.includes('on');//one
 const anotherVar=arr.includes('onetwo');//'one','two'
 const newVar =str.includes('ll');
 console.log(res); //false
 console.log(anotherVar);//false
 console.log(newVar);//true //substring are substring is not allowed*/
//3qes

/*console.log(true==' ');//blank it will be not string op is false
console.log(true===' ');*/
//4que
//console.log('1'==1);//it will not  compare data type it will comapre oonly value so ot is true
//5 que
//let a=10;
//let b=new Number(10);//because of this one is string 
//let c=10;
//console.log(a===b);//false

//6 que
//shallow copy baasically means the that your coping and that obj oping to anotherobj 
//
/*let a={name:'john'};
let Z={...a};
Z.name='ss';
console.log(a.name);//op john*/

//7que
/*console.log(+true);//op is 1 true is to be an 1 
console.log(!"xyz");//op false*/
//can you write exp for an function and multiplication of three numbers
/*function curryFunction(a){
    return function(b){
        const mult=a*b;
        return function(c){
            return res=mult*c 
        }
    }
}
console.log(curryFunction(2)(3)(3));//out put 18*/
//// Define the function to multiply three numbers
//function multiplyThreeNumbers(a, b, c) {
  //  return a * b * c;
//}

// Example usage
//let num1 = 2;
//let num2 = 3;
//let num3 = 4;

// Call the function and store the result
//let product = multiplyThreeNumbers(num1, num2, num3);

// Print the result
//console.log(`The product of ${num1}, ${num2}, and ${num3} is: ${product}`);


function multiplyThreeNumbers(a,b,c){
    return a*b*c;
}
console.log(multiplyThreeNumbers(10,10,10))


//take a functiona retunes an reverse string
function reverseString(str){
    return str.split('').reverse().join(',,');
}
console.log(reverseString("String"));

function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString("hello")); // Output: "olleh"
//Problem: Write a function that removes duplicate values from an array.
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

console.log(removeDuplicates([1, 2, 3, 2, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]

function removeElement(arrays){
 return [...new Set(arrays)]

}
console.log(removeElement([1,2,3,4,1,3,2,3]));
//one more
const arr = [1, 2, 2, 3, 4, 4, 5];
console.log(removeDuplicates(arr));  // Output: [1, 2, 3, 4, 5]
let movie=['raja','raja','rani','rani'];
console.log(removeDuplicates(movie));

const mana="string";
console.log(reverseString(mana));
//Problem: Write a function that takes a nested array and flattens it into a single array.
const flattenArray=[[1,[2,[3,[4],5]]]]
console.log(flattenArray.flat(2));

function flattenArrays(arr) {
    return arr.flat(Infinity);
}

console.log(flattenArrays([1, [2, [3, [4]], 5]])); // Output: [1, 2, 3, 4, 5]
//Write a function that returns the first non-repeating character in a given string. If all characters are repeating, return null.
function firstNonRepeatingCharacter(str) {
    for (let char of str) {
        if (str.indexOf(char) === str.lastIndexOf(char)) {
            return char;
        }
    }
    return null;
}

console.log(firstNonRepeatingCharacter("swiss")); // Output: "w"
//Problem: Write a debounce function that takes a function and a delay as arguments. The debounced function should only be called after a certain amount of time has passed without it being called again.

function debounce(func, delay) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), delay);
    };
}

// Usage example
const debouncedFunction = debounce(() => console.log('Debounced!'), 300);
window.addEventListener('resize', debouncedFunction);
//Problem: Write a function that replicates the behavior of Array.prototype.map().
function customMap(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i], i, arr));
    }
    return result;
}

console.log(customMap([1, 2, 3], x => x * 2)); // Output: [2, 4, 6]
//Problem: Write a function that checks if a given string is a palindrome (reads the same backward as forward).
function isPalindrome(str) {
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return cleanedStr === cleanedStr.split('').reverse().join('');
}

console.log(isPalindrome("A man, a plan, a canal, Panama")); // Output: true














 
 
 
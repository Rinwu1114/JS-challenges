// Easy challanges

//1. add two numbers together
function addition (num1, num2){
    return num1 + num2
}

console.log(addition(3, 5))

//2. convert hours into seconds

function hoursIntoSeconds (hour){
 return hour * 60 * 60
}

console.log(hoursIntoSeconds(24))

//3. calculate the perimeter of a rectangle

function rectanglePerimeter (length, width){
    return 2 * length + 2 * width
}

console.log(rectanglePerimeter(20, 10))

//4. calculate the area of a triangle

function areaOfTriangle (base, height){
    return .5 * base * height
}

console.log(areaOfTriangle(20, 20))

//5. Write a function accepts a string and adds frontend onto the end of it

function addString (str){
    return str + `Frontend`
}

console.log(addString(`Apple`))

//6. Given two numbers, return true if the sum of both numbers
//is greater than 100, otherwise return false

function sumGreaterThan100 (num1, num2){
    return num1 + num2 >= 100
}

console.log(sumGreaterThan100(100, -50))

//7. Write a function that accepts a number
//and returns true if it is less than or equal to zero, otherwise return false

function lessThanOrEqualToZero (number){
    return number <= 0
}

console.log(lessThanOrEqualToZero(0))

//8. Given a boolean (true or false), return the opposite boolean

function oppositeBoolean(boolean){
    return !boolean
}

console.log(oppositeBoolean(false))

//9. Given ANY element, return true if NOT the number 0

function isNotZero (any){
    return any !== 0
}

console.log(isNotZero(0))

//10. Given two numbers, return their remainder when divided by each other

function remainder(num1, num2){
    return num1 % num2
}

console.log(remainder(9, 8))

//11. Given two numbers, return true if the number is odd

function isOdd (number){
    return number % 2 !== 0
}

console.log(isOdd(15))

//12. Create a function that takes a number argument and returns 1 if the number is 
//even and -1 if the number is odd

function booleanInteger (number){
    return number % 2 === 0 ? 1 : -1;
}
// if value on left is true, it returns x : -x left, else right
console.log(booleanInteger(3))

/**13. Create a funcion that takes in two strings
 * If the first string is equal to `Logged_In`
 * AND the second string is equal to `Subscribed` return true
 * othewise, return false
 */


function isLoggedInAndSubscribed(Logged_In, Subscribed){
 return Logged_In === `Logged_In` && Subscribed === `Subscribed`
}

console.log(isLoggedInAndSubscribed(`Logged_In`, `UnSubscribed`))

/**14. Create a function that takes in two strings
 * If the first string is equal to `Logged_In` OR
 * the second string is euqual to `Subscribed` return true, otherwis
 * return false
 */


function isLoggedInOrSubscribed(Logged_In, Subscribed){
    return Logged_In === `Logged_In` || Subscribed === `Subscribed`
}

console.log(isLoggedInOrSubscribed(`Logged_Out`, `Subscribed`))


//Medium Challenges


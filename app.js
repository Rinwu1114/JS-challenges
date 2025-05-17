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

//1. Given two values, return the first pne if it's falsy, otherwise return the second

function falsyOrTruthy(val1, val2){
    return !val1 ? val1 : val2;
}

console.log(falsyOrTruthy(0,`0`))

//2. Given an array, return its length

function arrLength(arr){
    return arr.length
}

console.log(arrLength([1,2,3,4]))

//3. Given an array, return the last element

function lastElem (arr){
    return arr[arr.length - 1]
}

console.log(lastElem([`dog`, `cat`, `ball`]))

//4. Given an array, return the sum of every element

function arrSum (arr){
    let sum = 0
    for (let i = 0; i < arr.length; ++i){
        sum = sum + arr[i]
    }
    return sum
}

console.log(arrSum([2,2,2]))

//5. Given a number, add up all the numbers from one to
//the number that is given
//ex: an input of 4 will give you 1 + 2 + 3 + 4 = 10

function progressiveSum(num){
    let sum = 0
    for (let i = 1; i <= num; ++i){
        sum = sum + i
    }
    return sum
}

console.log(progressiveSum(4))

//6. Given a number in seconds, return number in mm:ss format

function calcTime(sec){
    let min = Math.floor(sec / 60)
    let seconds = sec % 60
    if (min.toString().length === 1){
        min = `0` + min
    }
    return min +`:`+ seconds
}

console.log(calcTime(130))

//7. Given an array of numbers, return the largest number of that array

function getMax(arr){
    let max = arr[0]
    for (let i = 0; i < arr.length; ++i){
      if (arr[i] > max){
        max = arr[i]
      }
    }
    return max
}

console.log(getMax([-100, -200, -300]))

//8. Given a string, return the reversed string

function reverseString(str){
    let reversedString = ``
    for (let i = 0; i < str.length; ++i){
        reversedString = str[i] + reversedString
    }
    return reversedString
}
// .split(``) = string to array
// .reverse() = reverses an array
// .join(``) = array to string
console.log(reverseString(`hello world`))

//9. Given an array, return the same length array filled with 0

//for loop solution
function convertToZero1(arr){
    let newarr = []
    for (let i = 0; i < arr.length; ++i){
        newarr[i] = 0
    }
    return newarr
}

//array `fill` solution

function convertToZero2 (arr) {
    return new Array(arr.length).fill(0)
}

//array .map solution

function convertToZero3(arr){
    let newarr = arr.map(elem => 0)   
    return newarr
}
//map converts everything into the right
//with {} you need to add return, if not it has a invisible return in there
console.log(convertToZero3([5, 100, 0]))

//10. Given an array of fruits, if it is an apple, remove it

// for loop solution

function removeApples1(arr){
    let noApples = []
    for (let i = 0; i < arr.length; ++i){
        if(arr[i] !== `Apple`)
            noApples.push(arr[i])
    }
    return noApples
}

//array filter solution

function removeApples2(arr){
    return arr.filter(elem =>
         elem !== `Apple`)

}

console.log(removeApples2([`Banana`,`Apple`,`Orange`,`Apple`]))

//11. Given an array of values, filter out all falsy values and only return truthy ones

// for loop solution
function filterOutFalsy1(arr){
    let noFalsy = []
    for (let i = 0; i < arr.length; ++i){
        if (!!arr[i] === true)
            noFalsy.push(arr[i])
    }
    return noFalsy
}

//filter solution
function filterOutFalsy2(arr){
    return arr.filter(elem => !!elem === true)
}

console.log(filterOutFalsy1([``, [], 0, null, undefined, `0`]))

//12. Given an arry of truthy and falsy values, return the same array of elements into its boolean value

function convertToBoolean(arr){
    return arr.map(elem => !!elem)
}


console.log(convertToBoolean([500, 0 , `Hello`, []]))

//Adavanced challenge

//1. Given a rating, display a star * for each full rating and a full-stop . for each half rating

function showRating (rate) {
    let rating = ``
    for (let i = 0; i < Math.floor(rate); ++i){
        rating += `*`
    if (i !== Math.floor(rate) - 1){
        rating += ` `
    }
}
    if (!Number.isInteger(rate)){
        rating += ` .`
    }
    return rating
}

console.log(showRating(4.5))

//2. Given an array of numbers, return prices sorted by low to high

function sortLowToHigh (arr){
    return arr.sort((a, b) => a - b)
}
//.sort defaults sorting alphebetically
console.log(sortLowToHigh([1, 5, 3, 10, 6]))

//3. Given an array of objects, return the prices sorted by high to low

function sortHighToLow (object){
    return object.sort((a, b) =>
    b.price - a.price)
}

console.log(sortHighToLow([
    {id: 1, price: 50},
    {id: 2, price: 30},
    {id: 3, price: 60},
    {id: 4, price: 10}
])
)

//4. Watch these videos about promises
//The Async Episode I Promised - Fireship
//Async Await JavaScript ES7 - Techsith
//Async JS Crash Course - Callbakcs, Promises, Async Await - Travsery Media

//5. Call this API, and retrn all the posts by any given user ID

async function postsByUser(userid){
    const promise = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    
    const result = await promise.json()
    
    const posts = result.filter(elem => elem.userId === userid)
    
    console.log(posts)
}

postsByUser(4)

//6. Call this API, and return the first 6 incomplete ToDos

async function firstSixIncomplete (todo) {
    const promise = await fetch (`https://jsonplaceholder.typicode.com/todos`)

    const result = await promise.json()

    const incomplete = result.filter(elem => elem.completed === todo).slice(0, 6)

    console.log(incomplete)
}

firstSixIncomplete (false)

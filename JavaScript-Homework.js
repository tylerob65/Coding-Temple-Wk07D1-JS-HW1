//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(){
    // loop dog sting, if name is there return matched to console, otherwise return not matches
    // loops
    // For Loop Syntax-- for keyword(counter; condion; incremntation/deincrimentation)
    // Here the ; matters!
    for (i = 0; i < dog_names.length; i++) {
        console.log(dog_string.search(dog_names[i]) >= 0 ? "Matched dog_name" : "No Matches")
    }

}

//Call method here with parameters

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

given_arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    for (let i=0;i<arr.length;i++) {
        if (i%2 == 0) {
            arr.splice(i,1,"Even Index")
        }
    }
    return arr
}
console.log(replaceEvens(given_arr))

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]

// https://www.codewars.com/kata/53da3dbb4a5168369a0000fe
// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function evenOrOdd(number) {
    if (number < 0) {
        number *= -1
    }
    if (number % 2 == 1) {
        return "Odd"
    }
    return "Even"

}
console.log(evenOrOdd(1))
console.log(evenOrOdd(4))
// https://www.codewars.com/kata/56747fd5cb988479af000028/train/javascript
// You are going to be given a word.Your job is to return the middle character of the word.
// If the word's length is odd, return the middle character. If the word's length is even, 
// return the middle 2 characters.

function getMiddle(s) {
    if (s.length % 2 == 1) {
        return s[(s.length - 1) / 2]
    }
    let start = (s.length / 2) - 1
    return s.slice(start, start + 2)
}
console.log(getMiddle("tyler"))
console.log(getMiddle("tyle"))


// https://www.codewars.com/kata/576bb71bbbcf0951d5000044
// Given an array of integers.
// Return an array, where the first element is the count of positives numbers and the second element is 
// sum of negative numbers. 0 is neither positive nor negative.
// If the input is an empty array or is null, return an empty array.

function countPositivesSumNegatives(input) {

    if (input == null || input.length == 0) {
        return []
    }
    let positiveCount = 0
    let negativeSum = 0
    input.forEach(num => {
        if (num < 0 ){
            negativeSum += num
        } else if (num > 0) {
            positiveCount++
        }
    })
    return [positiveCount,negativeSum]
}

console.log(countPositivesSumNegatives([1,-2,-5,5]))


// https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad
// Given a set of numbers, return the additive inverse of each.
// Each positive becomes negatives, and the negatives become positives.
function invert(array) {
    const new_array = []
    array.forEach(num => new_array.push(num * -1))
    return new_array
}
console.log(invert([-1,2,-3,4]))


// https://www.codewars.com/kata/53af2b8861023f1d88000832
// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!
// The function takes a name as its only argument, and returns one of the following strings:
function areYouPlayingBanjo(name) {
    // Implement me
    return name + (name[0].toLowerCase() == "r" ? " plays banjo" : " does not play banjo");
}
console.log(areYouPlayingBanjo("Ryan"))
console.log(areYouPlayingBanjo("jim"))

// My Whiteboard
// # Its Halloween and all the kids just got home from trick - or - treating.
// # we have a list representing how much candy each child in our group has made out with.
// # We don't want the kids to start arguing, and we know trouble is brewing as many of the children
// # in the group have received different amounts of candy from each home.
// # So we want each child to have the same amount of candies, only we can't exactly take any candy away from the kids,
// # that would be even worse.
// # Instead we decide to give each child extra candy until they all have the same amount.
// # In the first case the most candies are given to second kid, 8.
// # Because of that we will give the first kid 3 so he can have 8
// # and the third kid 2
// # and the fourth kid 4, so all kids will have 8 candies.
// # So we end up handing out 3 + 2 + 4 = 9.
// # Examples:
// # input: [5, 8, 6, 4]
// # output: 9
// # input: [1, 2, 4, 6]
// # output: 11
// # Notes:
// # the length of the list of children will always be greater than one.

function candies(kidies) {
    let max = kidies.reduce((acc,num) => Math.max(acc,num))
    return kidies.reduce((acc,kid)=> acc + max - kid,0)
}
console.log(candies([1, 2, 4, 6]))





// https://www.codewars.com/kata/56541980fa08ab47a0000040
// In a factory a printer prints labels for boxes.For one kind of boxes the printer has to use colors which, 
// for the sake of simplicity, are named with letters from a to m.

// The colors used by the printer are recorded in a control string.For example a "good" control string 
// would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h 
// then one time color a...

// Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is 
// produced e.g.aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

// You have to write a function printer_error which given a string will return the error rate of the 
// printer as a string representing a rational whose numerator is the number of errors and the denominator the 
// length of the control string.Don't reduce this fraction to a simpler expression.

// The string has a length greater or equal to one and contains only letters from ato z.


function printerError(s) {
    const goodLetters = new Set(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m"])
    let count = 0
    for (let i = 0;i < s.length;i++) {
        if (!goodLetters.has(s[i])){
            count++
        }
    }
    return count + '/' + s.length
}

console.log(printerError("aaabbbbhaijjjmx"))

// Reverse an Array


// Problem: Write a function to reverse the elements of an array.
// Example: Input: [1, 2, 3, 4, 5] Output: [5, 4, 3, 2, 1]

let reverArr = (array) => {

    for (let i = array.length - 1; i >= 0; i--) {
        console.log(array[i])
    }

}

let array = [1, 2, 3, 4, .25324,727525];
const result = reverArr(array);
console.log(result)

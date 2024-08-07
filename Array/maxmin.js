// Find the Maximum and Minimum in an Array

// Problem: Write a function to find the maximum and minimum elements in an array.
// Example: Input: [1, 2, 3, 4, 5] Output: Max: 5, Min: 1


let findMaxMin = (arr) => {

    let max = arr[0];
    let min = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }

        if (arr[i] < min) {
            min = arr[i]
        }
    }
    return { max, min }
}

let arrrray = [14, 54, 287,44,1,45478,-5]
const result = findMaxMin(arrrray)
console.log(result.max)
console.log(result.min)


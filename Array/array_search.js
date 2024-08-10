let arr = [1, 2, 3, 4, 5, 6, 67, 8, 9, 9, 6, 67, 8, 76, 86, 78, 67]
let item = 67
let index;

for (let i = 0; i < arr.length - 1; i++) {

    if (arr[i] === item) {
        index = i;
        break;
    }
}
console.log(index)


console.log(arr.indexOf(item))
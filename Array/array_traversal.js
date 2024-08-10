
let arr = [1, 2, 4]
let newEl = 3;
let pos = 2;

for (let i = arr.length - 1; i >= 0; i--) {
    if (i >= pos) {
        arr[i + 1] = arr[i]
        if (i == pos) {
            arr[i] = newEl
        }
    }
}
console.log(arr)
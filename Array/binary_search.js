let data = [1, 2, 3, 4, 5, 6, 7, 8, 9,11,54,88,89]; 
let find = 5
let start = 0;
let end = data.length - 1;
let postion = undefined;
while (start <= end) {   //0<=10
    let mid = Math.floor((start + end) / 2)
    if (data[mid] === find) {
        postion = mid
        break;
    } else if (data[mid] < find) { 
        start = mid + 1
    } else {
        end = mid - 1
    }
}
console.log(postion)
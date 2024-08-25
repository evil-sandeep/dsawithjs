let ar1 = [1, 2, 4, 5, 6];
let ar2 = [7, 8, 9, 10];

let ar3 = [...ar1, ...ar2]
// console.log(ar3)

for (let i = 0; i <= ar1.length - 1; i++) {
    ar3[i] = ar1[i]
    console.log(ar3[i])
}
for (let j = 0; j <= ar2.length - 1; j++) {
    ar3[j] = ar2[j]
    console.log(ar3[j])
}

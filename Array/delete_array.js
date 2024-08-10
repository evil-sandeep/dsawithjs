let arr=[1,2,3,6,8,4,5];
let pos=3
for(let i=pos; i<=arr.length-1; i++){
    
    arr[i]=arr[i+2]
    
}
arr.length=arr.length-2
console.log(arr)

let arr = [1,3,12,45,23,73,75,84,57,98,67]
let copy = arr[arr.length-1];

for(let i = arr.length-1; i>0; i--){
    arr[i] = arr[i-1]
}
arr[0] = copy;
console.log(arr)  // [67,1,3,12,45,23,73,75,84,57,98]
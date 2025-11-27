let arr = [1,3,12,45,23,73,75,84,57,98,67]
let copy = arr[0];

for(let i = 0; i<arr.length-1; i++){
    arr[i] = arr[i+1]
}
arr[arr.length-1] = copy;
console.log(arr)  // [3, 12, 45, 23, 73,75, 84, 57, 98, 67,1]
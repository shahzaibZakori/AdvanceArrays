let arr = [1,3,12,45,23,73,75,84,57,98,67]
let k = 3;

// Solution 1
let copy = new Array(k);

for(let i = 0; i<k; i++)
{
    copy[i] = arr[i]
};
for(let i = 0; i<arr.length;i++){
    arr[i] = arr[i+k]
}

for(let i = 0; i<copy.length; i++)
{
    arr[arr.length-k] = copy[i]
    k--;
};

console.log(arr) 
let arr = [1,3,12,45,23,73,75,84,57,98,67]
let k = 5;

// Solution 1
let copy = new Array(k);

for(let i = 1; i<=k; i++)
{
    copy[copy.length- i] = arr[arr.length-i]
};
for(let i = arr.length-1; i>k-1;i--){
    arr[i] = arr[i-k]
}

for(let i = 0; i<copy.length; i++)
{
    arr[i] = copy[i]
};

console.log(arr) 
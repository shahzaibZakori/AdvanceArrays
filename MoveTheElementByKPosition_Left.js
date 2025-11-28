let arr = [1,3,12 ,45,23,73,75,84,57,98,67]
let k = 3;

/* Solution 1
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
*/


//  Solution 2
// k = k%arr.length;

//  for(let j = 0; j<k; j++){
       
//      let copy = arr[0];
     
//      for(let i = 0; i<arr.length ; i++){
//          arr[i] = arr[i+1]
//         }
        
//         arr[arr.length-1]  = copy
//         console.log(arr)
//     }


// Solution 3

// k = k%arr.length;
// let temp = new Array(arr.length)
// for(let i = 0 ; i<arr.length; i++){
//     temp[i] = arr[(i+k)%arr.length]
// }

// console.log(temp)


// Solution 4
let n = arr.length;
k = k % n 

reverse(arr, 0, k-1)
reverse(arr, k, n-1)
reverse(arr, 0, n-1)

console.log(arr)

function reverse(ar, start, end){
    while(start<end){
     [ar[start], ar[end]] = [ar[end], ar[start]]
        start++;
        end--;
    }
}

// Brute Force Approach
var maxSubArray = function(nums) {
    let maxSum = -Infinity
    for(let i = 0; i<nums.length; i++){
        let currentSum = 0;
        for(let j = i; j<nums.length; j++){
            currentSum += nums[j];
            if(currentSum > maxSum){
                maxSum = currentSum;
            }
        }
    }
    return maxSum;
};

// Optimized Approach - Kadane's Algorithm
var maxSubArray = function(nums) {
   let max = -Infinity;
   let sum = 0;
   for(let i = 0; i<nums.length; i++){
       sum += nums[i];
       if(sum > max){
        max = sum;
       }
       if(sum < 0){
        sum = 0
       }
   }
   return max;
};
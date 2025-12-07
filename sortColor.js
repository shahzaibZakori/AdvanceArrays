let nums = [2,0,1,1,0,2,0,2,0,1];
    let red = 0;
    let blue = nums.length-1;
    for(let i = 0; i<nums.length; i++){
        if(nums[i] == 0){
            [nums[red], nums[i]] = [nums[i], nums[red]]
            red++
        }
       else if(nums[i] == 2){
            [nums[blue], nums[i]] = [nums[i], nums[blue]]
            blue--
            i--  
        }
    }
   console.log(nums)
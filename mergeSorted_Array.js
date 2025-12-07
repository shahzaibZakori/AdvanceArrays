let arr1 = [1,4,6];
let arr2 = [2,3,5,7];
let merge = new Array(arr1.length + arr2.length)
let i=j=k=0;

while(i<arr1.length && j>arr2.length){
    if(arr1[i] < arr2[j]){
       merge[k++] = arr1[i++]
    }
    else{
       merge[k++] = arr1[j++]
    }
}


while(i<arr1.length){
    merge[k++] = arr1[i++]
}

while(j<arr1.length){
    merge[k++] = arr1[j++]
}
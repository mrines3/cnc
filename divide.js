function divide(array1,array2){
    let returnArray = [...array1];
    if(array1.length === array2.length){
        for(let i=0, il=array1.length;i<il;i++){
            returnArray[i] = array1[i]/array2[i];
        };
    }else if(array1.length === 1){
        for(let i=0, il=array2.length;i<il;i++){
            returnArray[i] = array1/array2[i];
        }
    }else if(array2.length === 1){
        for(let i=0, il=array1.length;i<il;i++){
            returnArray[i] = array1[i]/array2;
        }
    }else {
        console.log('Error in Divide: Arrays are not the same dimensions.')
    }
    return returnArray;
}
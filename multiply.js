function multiply(array1,array2){
    let returnArray = [...array1];
    if(array1.length === array2.length){
        for(let i=0, il=array1.length;i<il;i++){
            returnArray[i] = array1[i]*array2[i];
        };
    };
    return returnArray;
}
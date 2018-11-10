function parseValues(array){
//returns an array of just values from a year-value pair array
    let returnArray = Array();
    for(let i=0, il=array.length;i<il;i++){
        returnArray.push(array[i][1]);
    }
    return returnArray;
}
function applyKfactor(k,array,startYear,endYear) {
    let year = 2008;
    for(let i=0;i<array.length;i++){
        if(year>startYear && year<endYear){
            array[i] = array[i]*k;
        }
        year = year + 1;
    }
    return array;
}
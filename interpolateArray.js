function interpolateArray(array){
    // must have a 2008 and 2050 data entry
    // takes data pairs, eg [[2008,0],[2015,10],[2050,100]]
    returnArray = [...array];
    let year = 2008;
    for(i=0;i<43;i++){
        if(returnArray[i][0]>year){
            interp = (year-returnArray[i-1][0])/(returnArray[i][0]-returnArray[i-1][0])*(returnArray[i][1]-returnArray[i-1][1])+returnArray[i-1][1];
            returnArray.splice(i,0,[year,interp]);
        }
        year = year + 1;
    };
        //console.log(studentGrowth);
    return returnArray;
}
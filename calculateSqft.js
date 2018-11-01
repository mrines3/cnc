function calculateSqft(buildingSpace,BAUGrowth){
    
    let studentGrowth = [...BAUGrowth.studentGrowth.selected];
    //console.log(studentGrowth)
    let facultyGrowth = [...BAUGrowth.facultyGrowth.selected];
    let researchGrowth = [...BAUGrowth.researchGrowth.selected];
    if(studentGrowth.length<43){
        //custom is selected
        studentGrowth = interpolateArray(studentGrowth);
        //console.log(studentGrowth);
    }
    if(facultyGrowth.length<43){
        //custom is selected
        facultyGrowth = interpolateArray(facultyGrowth);
    }
    if(researchGrowth.length<43){
        //custom is selected
        researchGrowth = interpolateArray(researchGrowth);
        //console.log(researchGrowth);
    }
    
    for(i=0;i<buildingSpace.year.length;i++){
        buildingSpace.labLayer.sqft[i] = 0.5*buildingSpace.labLayer.spaceFacultyRatio*facultyGrowth[i][1] + 0.5*buildingSpace.labLayer.spaceResearchRatio*researchGrowth[i][1];
        
        buildingSpace.classLayer.sqft[i] = buildingSpace.classLayer.spaceStudentRatio*studentGrowth[i][1];
        
        buildingSpace.healthLayer.sqft[i] = buildingSpace.healthLayer.spaceStudentRatio*studentGrowth[i][1];
        
        buildingSpace.residLayer.sqft[i] = buildingSpace.residLayer.spaceStudentRatio*studentGrowth[i][1];
        
        buildingSpace.plantLayer.sqft[i] = buildingSpace.plantLayer.spaceStudentRatio*studentGrowth[i][1];
    }
    for(let i=0;i<buildingSpace.year.length;i++){
        //other is kept constant and pinned to 2017 data
        buildingSpace.other.sqft[i] = (buildingSpace.labLayer.sqft[9] + buildingSpace.classLayer.sqft[9] + buildingSpace.healthLayer.sqft[9] + buildingSpace.residLayer.sqft[9] + buildingSpace.plantLayer.sqft[9])*(1/0.93-1)
		
        buildingSpace.totalSqft[i] = (buildingSpace.labLayer.sqft[i] + buildingSpace.classLayer.sqft[i] + buildingSpace.healthLayer.sqft[i] + buildingSpace.residLayer.sqft[i] + buildingSpace.plantLayer.sqft[i] + buildingSpace.other.sqft[i]);
    }
    return buildingSpace;
}
function calculateEmissions(buildingSpace,emissions,scenarios){
    let labEnergy = [];
    let residEnergy = [];
    let classEnergy = [];
    let healthEnergy = [];
    let plantEnergy = [];
    let totalEnergy = [];
    labLightEUI = interpolateArray(buildingSpace.labLayer.lightEUI);
    labHVACEUI = interpolateArray(buildingSpace.labLayer.hvacEUI);
    labPlugEUI = interpolateArray(buildingSpace.labLayer.plugEUI);
    residLightEUI = interpolateArray(buildingSpace.residLayer.lightEUI);
    residHVACEUI = interpolateArray(buildingSpace.residLayer.hvacEUI);
    residPlugEUI = interpolateArray(buildingSpace.residLayer.plugEUI);
    classLightEUI = interpolateArray(buildingSpace.classLayer.lightEUI);
    classHVACEUI = interpolateArray(buildingSpace.classLayer.hvacEUI);
    classPlugEUI = interpolateArray(buildingSpace.classLayer.plugEUI);
    healthLightEUI = interpolateArray(buildingSpace.healthLayer.lightEUI);
    healthHVACEUI = interpolateArray(buildingSpace.healthLayer.hvacEUI);
    healthPlugEUI = interpolateArray(buildingSpace.healthLayer.plugEUI);
    plantEUI = interpolateArray(buildingSpace.plantLayer.EUI);
    
    ledKFactors = scenarios.led.getKFactors();
    solarRoofAddkWh = scenarios.solarRoof.getAddKWh();
	commissioningKFactors = scenarios.commissioning.getKFactors();
    plantAutomationKFactors = scenarios.plantAutomation.getKFactors();
    smartLabsKFactors = scenarios.smartLabs.getKFactors();
    electricCommuteKFactors = scenarios.electricCommute.getKFactors()[0];
    electricCommuteAddkWh = scenarios.electricCommute.getKFactors()[1];
    electricFleetKFactors = scenarios.electricFleet.getKFactors()[0];
    electricFleetAddkWh = scenarios.electricFleet.getKFactors()[1];
    codaAddkWh = scenarios.coda.getAddSqft()[1];
    //gaPowerSimpleSolarKFactors = scenarios.gaPowerSimpleSolar.getKFactors();
    natureConservancyKFactors = scenarios.natureConservancy.getKFactors();
    
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
    
    /*let j = 2;
    solarRoofKFactors = [...scenarios.solarRoof.defaultKFactors];
    while(j>0.01){
        solarRoofKFactorsOld = [...scenarios.solarRoof.getKFactors()];
        for(i=0;i<buildingSpace.year.length;i++){
            //Scope 2
            labEnergy[i] = buildingSpace.labLayer.sqft[i]*(ledKFactors[i]*buildingSpace.labLayer.lightEUI[i]+smartLabsKFactors[i]*buildingSpace.labLayer.hvacEUI[i]+buildingSpace.labLayer.plugEUI[i]);
            residEnergy[i] = buildingSpace.residLayer.sqft[i]*(ledKFactors[i]*buildingSpace.residLayer.lightEUI[i]+buildingSpace.residLayer.hvacEUI[i]+buildingSpace.residLayer.plugEUI[i]);
            classEnergy[i] = buildingSpace.classLayer.sqft[i]*(ledKFactors[i]*buildingSpace.classLayer.lightEUI[i]+buildingSpace.classLayer.hvacEUI[i]+buildingSpace.classLayer.plugEUI[i]);
            healthEnergy[i] = buildingSpace.healthLayer.sqft[i]*(ledKFactors[i]*buildingSpace.healthLayer.lightEUI[i]+buildingSpace.healthLayer.hvacEUI[i]+buildingSpace.healthLayer.plugEUI[i]);
            plantEnergy[i] = buildingSpace.plantLayer.sqft[i]*plantAutomationKFactors[i]*buildingSpace.plantLayer.EUI[i];
            totalEnergy[i] = elecFudgeFactor*(labEnergy[i]+residEnergy[i]+classEnergy[i]+healthEnergy[i]+plantEnergy[i]);
            buildingSpace.kWh[i] = (solarRoofKFactors[i]*commissioningKFactors[i]*totalEnergy[i] + electricCommuteAddkWh[i] + electricFleetAddkWh[i]);
        }
        solarRoofKFactors = [...scenarios.solarRoof.getKFactors()];
        for(i=0;i<buildingSpace.year.length;i++){
            //Scope 2
            labEnergy[i] = buildingSpace.labLayer.sqft[i]*(ledKFactors[i]*buildingSpace.labLayer.lightEUI[i]+smartLabsKFactors[i]*buildingSpace.labLayer.hvacEUI[i]+buildingSpace.labLayer.plugEUI[i]);
            residEnergy[i] = buildingSpace.residLayer.sqft[i]*(ledKFactors[i]*buildingSpace.residLayer.lightEUI[i]+buildingSpace.residLayer.hvacEUI[i]+buildingSpace.residLayer.plugEUI[i]);
            classEnergy[i] = buildingSpace.classLayer.sqft[i]*(ledKFactors[i]*buildingSpace.classLayer.lightEUI[i]+buildingSpace.classLayer.hvacEUI[i]+buildingSpace.classLayer.plugEUI[i]);
            healthEnergy[i] = buildingSpace.healthLayer.sqft[i]*(ledKFactors[i]*buildingSpace.healthLayer.lightEUI[i]+buildingSpace.healthLayer.hvacEUI[i]+buildingSpace.healthLayer.plugEUI[i]);
            plantEnergy[i] = buildingSpace.plantLayer.sqft[i]*plantAutomationKFactors[i]*buildingSpace.plantLayer.EUI[i];
            totalEnergy[i] = elecFudgeFactor*(labEnergy[i]+residEnergy[i]+classEnergy[i]+healthEnergy[i]+plantEnergy[i]);
            buildingSpace.kWh[i] = (solarRoofKFactors[i]*commissioningKFactors[i]*totalEnergy[i] + electricCommuteAddkWh[i] + electricFleetAddkWh[i]);
        }
        solarRoofKFactors = [...scenarios.solarRoof.getKFactors()];
        j = Math.abs(solarRoofKFactorsOld.reduce((accumulator, currentValue) => accumulator + currentValue) - solarRoofKFactors.reduce((accumulator, currentValue) => accumulator + currentValue));
    }	*/
	
	//console.log(solarRoofAddkWh);	
    //console.log(buildingSpace.totalSqft);
    for(i=0;i<buildingSpace.year.length;i++){
        //Scope 1
        emissions.scope1[i] = natureConservancyKFactors[i]*((1-(1-electricFleetKFactors[i]+1-commissioningKFactors[i]))*emissions.scope1HeatingFraction*emissions.scope1EfficiencyFactor[i]*buildingSpace.totalSqft[i]*(emissions.scope1Default[6]/buildingSpace.totalSqft[6]) + emissions.scope1FleetFraction*(studentGrowth[i][1]+facultyGrowth[i][1])*(emissions.scope1Default[6]/(studentGrowth[6][1]+facultyGrowth[6][1])));
        
        //Scope 2
		labEnergy[i] = buildingSpace.labLayer.sqft[i]*((1-(1-ledKFactors[i]+1-commissioningKFactors[i]))*labLightEUI[i][1]+(1-(1-commissioningKFactors[i]+1-smartLabsKFactors[i]))*labHVACEUI[i][1]+commissioningKFactors[i]*labPlugEUI[i][1]);
        
        residEnergy[i] = buildingSpace.residLayer.sqft[i]*((1-(1-ledKFactors[i]+1-commissioningKFactors[i]))*residLightEUI[i][1]+commissioningKFactors[i]*residHVACEUI[i][1]+commissioningKFactors[i]*residPlugEUI[i][1]);
		
        classEnergy[i] = buildingSpace.classLayer.sqft[i]*((1-(1-ledKFactors[i]+1-commissioningKFactors[i]))*classLightEUI[i][1]+commissioningKFactors[i]*classHVACEUI[i][1]+commissioningKFactors[i]*classPlugEUI[i][1]);
		
        healthEnergy[i] = buildingSpace.healthLayer.sqft[i]*((1-(1-ledKFactors[i]+1-commissioningKFactors[i]))*healthLightEUI[i][1]+commissioningKFactors[i]*healthHVACEUI[i][1]+commissioningKFactors[i]*healthPlugEUI[i][1]);
		
        plantEnergy[i] = buildingSpace.plantLayer.sqft[i]*(1-(1-plantAutomationKFactors[i]+1-commissioningKFactors[i]))*plantEUI[i][1];
		
        totalEnergy[i] = (labEnergy[i]+residEnergy[i]+classEnergy[i]+healthEnergy[i]+plantEnergy[i]);
		buildingSpace.kWh[i] = totalEnergy[i] - solarRoofAddkWh[i] + electricCommuteAddkWh[i] + electricFleetAddkWh[i] + codaAddkWh[i];
		
        emissions.scope2[i] = natureConservancyKFactors[i]*(buildingSpace.kWh[i]*emissions.emissionsFactors.selected[i]/1000000);
        
        //Scope 3
        emissions.scope3[i] = natureConservancyKFactors[i]*(electricCommuteKFactors[i]*emissions.scope3CommutingFraction*emissions.scope3CommutingEfficiencyFactor[i]*(studentGrowth[i][1]+facultyGrowth[i][1])*(emissions.scope3Default[6]/(studentGrowth[6][1]+facultyGrowth[6][1])) + emissions.scope3TravelFraction*emissions.scope3TravelEfficiencyFactor[i]*(studentGrowth[i][1]+facultyGrowth[i][1])*(emissions.scope3Default[6]/(studentGrowth[6][1]+facultyGrowth[6][1])));
		
		//Total Emissions
		emissions.totalEmissions[i] = emissions.scope1[i] + emissions.scope2[i] + emissions.scope3[i];
    }
    return [buildingSpace, emissions];    
}
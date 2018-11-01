function updateMACPlot(scenarios,MACPlotOption,calculationPeriod){
    let barBorderWidthCoefficient = 1/60;
    let data = [
        {name: 'LED', value:[sumArray(scenarios.led.getNetCost()[0],calculationPeriod)/sumArray(scenarios.led.getNetCost()[1],calculationPeriod)]*1000, emissions: sumArray(scenarios.led.getNetCost()[1],calculationPeriod), color: '#ce5d5a'},
        {name: 'Solar Roof', value:[sumArray(scenarios.solarRoof.getNetCost()[0],calculationPeriod)/sumArray(scenarios.solarRoof.getNetCost()[1],calculationPeriod)]*1000, emissions: sumArray(scenarios.solarRoof.getNetCost()[1],calculationPeriod), color: '#596a76'},
        {name: 'Commissioning', value:[sumArray(scenarios.commissioning.getNetCost()[0],calculationPeriod)/sumArray(scenarios.commissioning.getNetCost()[1],calculationPeriod)]*1000, emissions: sumArray(scenarios.commissioning.getNetCost()[1],calculationPeriod), color: '#81b3b9'},
        {name: 'Plant Automation',value:[sumArray(scenarios.plantAutomation.getNetCost()[0],calculationPeriod)/sumArray(scenarios.plantAutomation.getNetCost()[1],calculationPeriod)]*1000, emissions: sumArray(scenarios.plantAutomation.getNetCost()[1],calculationPeriod), color: '#dd9b84'},
        {name: 'Smart Labs', value:[sumArray(scenarios.smartLabs.getNetCost()[0],calculationPeriod)/sumArray(scenarios.smartLabs.getNetCost()[1],calculationPeriod)]*1000, emissions: sumArray(scenarios.smartLabs.getNetCost()[1],calculationPeriod), color: '#a7d2be'},
        {name: 'Electric Fleet',value:[sumArray(scenarios.electricFleet.getNetCost()[0],calculationPeriod)/sumArray(scenarios.electricFleet.getNetCost()[1],calculationPeriod)]*1000, emissions: sumArray(scenarios.electricFleet.getNetCost()[1],calculationPeriod), color: '#a7d2be'},
        {name: 'Electric Commute',value:[sumArray(scenarios.electricCommute.getNetCost()[0],calculationPeriod)/sumArray(scenarios.electricCommute.getNetCost()[1],calculationPeriod)]*1000, emissions: sumArray(scenarios.electricCommute.getNetCost()[1],calculationPeriod), color: '#90b29c'}
    ];
    data.sort(function(a,b){
        if(!isFinite(a.value-b.value)){
            //console.log(!isFinite(a.value) ? 1 : -1)
            return !isFinite(a.value) ? 1 : -1;
        } 
        else{
            return a.value - b.value;
        }
    });
    
    MACPlotOption.series[0].data = [
        {
          value: data[0].value,
          itemStyle:{
            barBorderColor:data[0].color,
            barBorderWidth:barBorderWidthCoefficient*data[0].emissions
          },
        },
        {
          value:data[1].value,
          itemStyle:{
            barBorderColor:data[1].color,
            barBorderWidth:barBorderWidthCoefficient*data[1].emissions
          },
        },
        {
          value:data[2].value,
          itemStyle:{
            barBorderColor:data[2].color,
            barBorderWidth:barBorderWidthCoefficient*data[2].emissions
          },
        },
        {
          value:data[3].value,
          itemStyle:{
            barBorderColor:data[3].color,
            barBorderWidth:barBorderWidthCoefficient*data[3].emissions
          },
        },
        {
          value:data[4].value,
          itemStyle:{
            barBorderColor:data[4].color,
            barBorderWidth:barBorderWidthCoefficient*data[4].emissions
          },
        },
        {
          value:data[5].value,
          itemStyle:{
            barBorderColor:data[5].color,
            barBorderWidth:barBorderWidthCoefficient*data[5].emissions
          },
        },
        {
          value:data[6].value,
          itemStyle:{
            barBorderColor:data[6].color,
            barBorderWidth:barBorderWidthCoefficient*data[6].emissions
          },
        },
    ];
    MACPlotOption.xAxis.data= [data[0].name,data[1].name,data[2].name,data[3].name,data[4].name,data[5].name,data[6].name];
    MACPlotOption.yAxis = {
        type : 'value',
        name: '$/TCO2',
        nameLocation: 'middle',
        nameGap: 30,
        //min: yAxisMin,
        //max: yAxisMax,
        //boundaryGap: [0.2,0.2]
        nameTextStyle: {
            color: 'white',
            fontFamily: 'sans-serif'
        },
        axisLine: {
            lineStyle: {
                color: 'darkgray'
            }
        },
        axisTick: {
            lineStyle: {
                color: 'darkgray'
            }
        },
        axisLabel: {
            color: 'white',
            fontFamily: 'sans-serif'
        }
    };
    MACPlotOption.xAxis.axisLabel = {
        show: true,
        //rotate: 30,
        formatter: function(value,index){
            if(value==='LED'){
                return 'P1';
            }else if(value==='Solar Roof'){
                return 'P2';
            }else if(value==='Commissioning'){
                return 'P3';
            }else if(value==='Plant Automation'){
                return 'P4';
            }else if(value==='Electric Fleet'){
                return 'P6';
            }else if(value==='Electric Commute'){
                return 'P7';
            }else if(value==='Smart Labs'){
                return 'P5';
            }
        }
    };
    return MACPlotOption
}

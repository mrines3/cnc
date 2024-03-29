let BAUGrowth = {
    year: [2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031, 2032, 2033, 2034, 2035, 2036, 2037, 2038, 2039, 2040, 2041, 2042, 2043, 2044, 2045, 2046, 2047, 2048, 2049, 2050],
    
    studentGrowth: {
        //2008-2014 from gt factbook
        //2015-2018 from gt irp data management https://lite.gatech.edu/
        low:[[2008, 19413],[2009, 20291],[2010, 20720],[2011, 20941],[2012, 21557],[2013, 21471],[2014, 23109],[2015, 25034],[2016, 26836],[2017, 29369],[2018, 32723],[2023,33078],[2028, 33434],[2033, 33790],[2038, 34146],[2043, 34501],[2050, 35000]],
        //[[2008, 19413],[2009, 20291],[2010, 20720],[2011, 20941],[2012, 21557],[2013, 21471],[2014, 23109],[2015, 25034],[2016, 26839],[2017, 27532.14718],[2018, 27937.61229],[2019, 28225.29436],[2020, 28448.43791],[2021, 28630.75947],[2022, 28784.91015],[2023, 28918.44154],[2024, 29036.22458],[2025, 29141.58509],[2026, 29236.89527],[2027, 29323.90665],[2028, 29403.94936],[2029, 29478.05733],[2030, 29547.0502],[2031, 29611.58872],[2032, 29672.21334],[2033, 29729.37176],[2034, 29783.43898],[2035, 29834.73227],[2036, 29883.52244],[2037, 29930.04245],[2038, 29974.49422],[2039, 30017.05383],[2040, 30057.87582],[2041, 30097.09654],[2042, 30134.83687],[2043, 30171.20451],[2044, 30206.29583],[2045, 30240.19738],[2046, 30272.9872],[2047, 30304.7359],[2048, 30335.50756],[2049, 30365.36052],[2050, 30394.34806]],
        average: [[2008,19413],[2009,20291],[2010,20720],[2011,20941],[2012,21557],[2013,21471],[2014,23109],[2015,25034],[2016,26836],[2017,29369],[2018,32723],[2023,34641],[2028, 36559],[2033, 38477],[2038, 40396],[2043, 42314],[2050, 45000]],
        //[[2008,19413],[2009,20291],[2010,20720],[2011,20941],[2012,21557],[2013,21471],[2014,23109],[2015,25034],[2016,26839],[2017,27330],[2018,27821],[2019,28312],[2020,28803],[2021,29294],[2022,29785],[2023,30276],[2024,30767],[2025,31258],[2026,31749],[2027,32240],[2028,32731],[2029,33222],[2030,33713],[2031,34204],[2032,34695],[2033,35186],[2034,35677],[2035,36168],[2036,36659],[2037,37150],[2038,37641],[2039,38132],[2040,38623],[2041,39114],[2042,39605],[2043,40096],[2044,40587],[2045,41078],[2046,41569],[2047,42060],[2048,42551],[2049,43042],[2050,43533]],
        high:[[2008, 19413],[2009, 20291],[2010, 20720],[2011, 20941],[2012, 21557],[2013, 21471],[2014, 23109],[2015, 25034],[2016, 26836],[2017, 29369],[2018, 32723],[2023, 36985],[2028, 41247],[2033, 45509],[2038, 49771],[2043, 54033],[2050, 60000]],
        //[[2008, 19413],[2009, 20291],[2010, 20720],[2011, 20941],[2012, 21557],[2013, 21471],[2014, 23109],[2015, 25034],[2016, 26839],[2017, 28436.64144],[2018, 29259.62283],[2019, 30106.42202],[2020, 30977.72832],[2021, 31874.251],[2022, 32796.71983],[2023, 33745.88571],[2024, 34722.5213],[2025, 35727.42157],[2026, 36761.40454],[2027, 37825.31189],[2028, 38920.00965],[2029, 40046.38892],[2030, 41205.3666],[2031, 42397.88611],[2032, 43624.91819],[2033, 44887.46165],[2034, 46186.54423],[2035, 47523.22339],[2036, 48898.58723],[2037, 50313.75531],[2038, 51769.87959],[2039, 53268.14539],[2040, 54809.77232],[2041, 56396.01529],[2042, 58028.16552],[2043, 59707.55162],[2044, 61435.54062],[2045, 63213.53914],[2046, 65042.9945],[2047, 66925.39591],[2048, 68862.27567],[2049, 70855.21043],[2050, 72905.82247]],
        custom: [[2008, 19413],[2013, 21471],[2018, 32723],[2023,34641],[2028, 36559],[2033, 38477],[2038, 40396],[2043, 42314],[2050, 45000]],
        selected: []
    },
    
    facultyGrowth: {
        //2008-2017 from GT miniFactbook https://irp.gatech.edu/mini-fact-book
        //2018 from gt irp data management https://lite.gatech.edu/
        low: [[2008, 5629],[2009, 5932],[2010, 6120],[2011, 6317],[2012, 6490],[2013, 6576],[2014, 6727],[2015, 7063],[2016, 7103],[2017, 7533],[2018, 8377],[2023, 8396],[2028, 8415],[2033, 8434.6],[2038, 8453.8],[2043, 8473],[2050, 8500]],
        //[[2008, 5282.833333],[2009, 5700],[2010, 6117.166667],[2011, 6534.333333],[2012, 6951.5],[2013, 7368.666667],[2014, 7785.833333],[2015, 8203],[2016, 8549.57359],[2017, 8752.306144],[2018, 8896.147181],[2019, 9007.718956],[2020, 9098.879735],[2021, 9175.955075],[2022, 9242.720771],[2023, 9301.612289],[2024, 9354.292546],[2025, 9401.947636],[2026, 9445.453325],[2027, 9485.474679],[2028, 9522.528665],[2029, 9557.025101],[2030, 9589.294361],[2031, 9619.606672],[2032, 9648.185879],[2033, 9675.21949],[2034, 9700.866137],[2035, 9725.261219],[2036, 9748.521227],[2037, 9770.747108],[2038, 9792.026915],[2039, 9812.437912],[2040, 9832.048269],[2041, 9850.918433],[2042, 9869.102255],[2043, 9886.647915],[2044, 9903.598691],[2045, 9919.993602],[2046, 9935.867951],[2047, 9951.253781],[2048, 9966.180262],[2049, 9980.674031],[2050, 9994.759469]],
        average: [[2008,5629],[2009,5932],[2010,6120],[2011,6317],[2012,6490],[2013,6576],[2014,6727],[2015,7063],[2016,7103],[2017,7533],[2018,8377],[2023,8943],[2028,9509],[2033,10075],[2038,10641],[2043,11207],[2050,12000]],
        //[[2008,5282.833333],[2009,5700],[2010,6117.166667],[2011,6534.333333],[2012,6951.5],[2013,7368.666667],[2014,7785.833333],[2015,8203],[2016,8377.290323],[2017,8551.580645],[2018,8725.870968],[2019,8900.16129],[2020,9074.451613],[2021,9248.741935],[2022,9423.032258],[2023,9597.322581],[2024,9771.612903],[2025,9945.903226],[2026,10120.19355],[2027,10294.48387],[2028,10468.77419],[2029,10643.06452],[2030,10817.35484],[2031,10991.64516],[2032,11165.93548],[2033,11340.22581],[2034,11514.51613],[2035,11688.80645],[2036,11863.09677],[2037,12037.3871],[2038,12211.67742],[2039,12385.96774],[2040,12560.25806],[2041,12734.54839],[2042,12908.83871],[2043,13083.12903],[2044,13257.41935],[2045,13431.70968],[2046,13606],[2047,13780.29032],[2048,13954.58065],[2049,14128.87097],[2050,14303.16129]],
        high: [[2008, 5629],[2009, 5932],[2010, 6120],[2011, 6317],[2012, 6490],[2013, 6576],[2014, 6727],[2015, 7063],[2016, 7103],[2017, 7533],[2018, 8377],[2023, 9568],[2028, 10759],[2033, 11950],[2038, 13141],[2043, 14332],[2050, 16000]],
        //[[2008, 5282.833333],[2009, 5700],[2010, 6117.166667],[2011, 6534.333333],[2012, 6951.5],[2013, 7368.666667],[2014, 7785.833333],[2015, 8203],[2016, 8357.486869],[2017, 8598.671961],[2018, 8846.817308],[2019, 9102.123775],[2020, 9364.79802],[2021, 9635.052668],[2022, 9913.106477],[2023, 10199.18452],[2024, 10493.51837],[2025, 10796.34627],[2026, 11107.91334],[2027, 11428.4718],[2028, 11758.28112],[2029, 12097.60825],[2030, 12446.72789],[2031, 12805.92261],[2032, 13175.48319],[2033, 13555.70874],[2034, 13946.90707],[2035, 14349.39481],[2036, 14763.49778],[2037, 15189.55117],[2038, 15627.89984],[2039, 16078.89863],[2040, 16542.9126],[2041, 17020.31734],[2042, 17511.4993],[2043, 18016.85607],[2044, 18536.79671],[2045, 19071.7421],[2046, 19622.12524],[2047, 20188.39164],[2048, 20770.99969],[2049, 21370.42097],[2050, 21987.14068]],
        custom: [[2008, 5629],[2013,6576],[2018,8377],[2023,8943],[2028,9509],[2033,10075],[2038,10641],[2043,11207],[2050,12000]],
        selected: []
    },
    
    researchGrowth: {
        //2008-2017 from GT miniFactbook https://irp.gatech.edu/mini-fact-book
        //includes GTRI
        low: [[2008, 445],[2009, 483],[2010, 558],[2011, 568],[2012, 640],[2013, 622],[2014, 688],[2015, 648],[2016, 719],[2017, 690],[2018, 740],[2023, 741.5],[2028, 743],[2033, 744.6],[2038, 746],[2043, 747.8],[2050, 750]],
        //[[2008, 456.4],[2009, 483],[2010, 503.7944154],[2011, 515.9583687],[2012, 524.5888308],[2013, 531.2831374],[2014, 536.7527841],[2015, 541.3773045],[2016, 545.3832463],[2017, 548.9167373],[2018, 552.0775528],[2019, 554.9368582],[2020, 557.5471995],[2021, 559.9484807],[2022, 562.1717199],[2023, 564.241506],[2024, 566.1776617],[2025, 567.9964003],[2026, 569.7111527],[2027, 571.3331694],[2028, 572.8719682],[2029, 574.3356731],[2030, 575.7312736],[2031, 577.0648265],[2032, 578.3416149],[2033, 579.5662747],[2034, 580.7428961],[2035, 581.875106],[2036, 582.9661353],[2037, 584.0188749],[2038, 585.0359214],[2039, 586.0196161],[2040, 586.9720771],[2041, 587.8952268],[2042, 588.7908157],[2043, 589.6604418],[2044, 590.5055682],[2045, 591.3275374],[2046, 592.1275848],[2047, 592.9068494],[2048, 593.6663836],[2049, 594.407162],[2050, 595.1300885]],
        average: [[2008,445],[2009,483],[2010,558],[2011,568],[2012,640],[2013,622],[2014,688],[2015,648],[2016,719],[2017,690],[2018,740],[2023, 796],[2028, 852],[2033, 908],[2038, 965],[2043, 1021],[2050, 1100]],
        //[[2008,456.4],[2009,483],[2010,499.68],[2011,516.36],[2012,533.04],[2013,549.72],[2014,566.4],[2015,583.08],[2016,599.76],[2017,616.44],[2018,633.12],[2019,649.8],[2020,666.48],[2021,683.16],[2022,699.84],[2023,716.52],[2024,733.2],[2025,749.88],[2026,766.56],[2027,783.24],[2028,799.92],[2029,816.6],[2030,833.28],[2031,849.96],[2032,866.64],[2033,883.32],[2034,900],[2035,916.68],[2036,933.36],[2037,950.04],[2038,966.72],[2039,983.4],[2040,1000.08],[2041,1016.76],[2042,1033.44],[2043,1050.12],[2044,1066.8],[2045,1083.48],[2046,1100.16],[2047,1116.84],[2048,1133.52],[2049,1150.2],[2050,1166.88]],
        high: [[2008, 445],[2009, 483],[2010, 558],[2011, 568],[2012, 640],[2013, 622],[2014, 688],[2015, 648],[2016, 719],[2017, 690],[2018, 740],[2023, 858],[2028, 977],[2033, 1096],[2038, 1215],[2043, 1333],[2050, 1500]],
        //[[2008, 456.4],[2009, 483],[2010, 517.8098544],[2011, 536.2540906],[2012, 555.3553052],[2013, 575.1368994],[2014, 595.6231083],[2015, 616.83903],[2016, 638.8106566],[2017, 661.5649062],[2018, 685.1296555],[2019, 709.5337743],[2020, 734.8071607],[2021, 760.9807778],[2022, 788.0866915],[2023, 816.15811],[2024, 845.2294242],[2025, 875.3362501],[2026, 906.5154725],[2027, 938.8052896],[2028, 972.2452607],[2029, 1006.876354],[2030, 1042.740996],[2031, 1079.883127],[2032, 1118.348249],[2033, 1158.183488],[2034, 1199.437647],[2035, 1242.161267],[2036, 1286.406689],[2037, 1332.228121],[2038, 1379.681699],[2039, 1428.825559],[2040, 1479.719909],[2041, 1532.427102],[2042, 1587.011709],[2043, 1643.540604],[2044, 1702.083041],[2045, 1762.710744],[2046, 1825.497987],[2047, 1890.521694],[2048, 1957.861526],[2049, 2027.599983],[2050, 2099.822504]],
        custom: [[2008,445],[2013,622],[2018,740],[2023, 796],[2028, 852],[2033, 908],[2038, 965],[2043, 1021],[2050, 1100]],
        selected: []
    },
    
    degradation: {
        // Applies to scope 1 emissions and scope 2 kWh
        degradationFactor: 1.02,
        maxDegradation: 1.3,
    }
};

let buildingSpace = {
    year: [2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031, 2032, 2033, 2034, 2035, 2036, 2037, 2038, 2039, 2040, 2041, 2042, 2043, 2044, 2045, 2046, 2047, 2048, 2049, 2050],
    
    labLayer: {
        sqft: [1534230.448,1638029.625,1723593.409,1809157.192,1894720.976,1980284.759,2065848.543,2151412.326,2205012,2258611.674,2312211.348,2365811.022,2419410.695,2473010.369,2526610.043,2580209.717,2633809.391,2687409.065,2741008.738,2794608.412,2848208.086,2901807.76,2955407.434,3009007.108,3062606.782,3116206.455,3169806.129,3223405.803,3277005.477,3330605.151,3384204.825,3437804.499,3491404.172,3545003.846,3598603.52,3652203.194,3705802.868,3759402.542,3813002.215,3866601.889,3920201.563,3973801.237,4027400.911],
        lightEUIBase: [[2008,13.9332],[2014,13.9332],[2017,12.400548],[2050,12.400548]],
        lightEUI: [[2008,13.9332],[2014,13.9332],[2017,12.400548],[2050,12.400548]],
        hvacEUI: [[2008,18.441],[2014,18.441],[2017,16.412],[2050,16.412]],
        plugEUI: [[2008,23.359],[2014,23.359],[2017,20.789],[2050,20.789]],
        spaceFacultyRatio: 340.3, //2018totalsqft*21.2%(labspace%2017)/2018faculty
        spaceResearchRatio:  3852 //2018totalsqft*21.2%(labspace%2017)/2017research
    },
        
    classLayer: {
        sqft: [2949086.341,3082465.922,3147636.583,3181209.347,3274787.732,3261723.217,3510556.65,3802989.103,4077192,4151781.265,4226370.529,4300959.794,4375549.058,4450138.323,4524727.587,4599316.852,4673906.117,4748495.381,4823084.646,4897673.91,4972263.175,5046852.44,5121441.704,5196030.969,5270620.233,5345209.498,5419798.762,5494388.027,5568977.292,5643566.556,5718155.821,5792745.085,5867334.35,5941923.614,6016512.879,6091102.144,6165691.408,6240280.673,6314869.937,6389459.202,6464048.466,6538637.731,6613226.996],
        lightEUIBase:[[2008,6.01],[2014,6.01],[2017,5.349],[2050,5.349]],
        lightEUI:[[2008,6.01],[2014,6.01],[2017,5.349],[2050,5.349]],
        hvacEUI:[[2008,7.786],[2014,7.786],[2017,6.93],[2050,6.93]],
        plugEUI:[[2008,9.972],[2014,9.972],[2017,8.875],[2050,8.875]],
        spaceStudentRatio: 161.1 //2018totalsqft*39.2%(classspace%2017)/2018student
    },
        
    residLayer: {
        sqft: [2091443.884,2186034.506,2232252.474,2256061.731,2322425.994,2313160.853,2489629.461,2697017.782,2891478,2944375.489,2997272.977,3050170.466,3103067.955,3155965.443,3208862.932,3261760.421,3314657.909,3367555.398,3420452.887,3473350.375,3526247.864,3579145.353,3632042.841,3684940.33,3737837.818,3790735.307,3843632.796,3896530.284,3949427.773,4002325.262,4055222.75,4108120.239,4161017.728,4213915.216,4266812.705,4319710.194,4372607.682,4425505.171,4478402.66,4531300.148,4584197.637,4637095.126,4689992.614],
        lightEUIBase:[[2008,4.098],[2014,4.098],[2017,3.647],[2050,3.647]],
        lightEUI:[[2008,4.098],[2014,4.098],[2017,3.647],[2050,3.647]],
        hvacEUI:[[2008,5.464],[2014,5.464],[2017,4.863],[2050,4.863]],
        plugEUI:[[2008,6.83],[2014,6.83],[2017,6.079],[2050,6.079]],
        spaceStudentRatio: 114.2 //2018totalsqft*27.8%(residspace%2017)/2018student
    },
        
    healthLayer: {
        sqft: [24826.49215,25949.33046,26497.96103,26780.58889,27568.36611,27458.38423,29553.15547,32014.95928,34323.3,34951.21983,35579.13966,36207.05949,36834.97932,37462.89915,38090.81898,38718.73881,39346.65863,39974.57846,40602.49829,41230.41812,41858.33795,42486.25778,43114.17761,43742.09744,44370.01727,44997.9371,45625.85693,46253.77676,46881.69659,47509.61642,48137.53625,48765.45608,49393.3759,50021.29573,50649.21556,51277.13539,51905.05522,52532.97505,53160.89488,53788.81471,54416.73454,55044.65437,55672.5742],
        lightEUIBase:[[2008,6.83],[2014,6.83],[2017,6.079],[2050,6.079]],
        lightEUI:[[2008,6.83],[2014,6.83],[2017,6.079],[2050,6.079]],
        hvacEUI:[[2008,8.879],[2014,8.879],[2017,7.902],[2050,7.902]],
        plugEUI:[[2008,11.338],[2014,11.338],[2017,10.091],[2050,10.091]],
        spaceStudentRatio: 1.2 //2018totalsqft*0.3%(healthspace%2017)/2018student
    },
        
    plantLayer: {
        sqft: [338543.0748,353854.5063,361335.8322,365189.8485,375932.2652,374432.5122,402997.5746,436567.6266,468045,476607.5431,485170.0863,493732.6294,502295.1725,510857.7156,519420.2588,527982.8019,536545.345,545107.8881,553670.4313,562232.9744,570795.5175,579358.0607,587920.6038,596483.1469,605045.69,613608.2332,622170.7763,630733.3194,639295.8626,647858.4057,656420.9488,664983.4919,673546.0351,682108.5782,690671.1213,699233.6644,707796.2076,716358.7507,724921.2938,733483.837,742046.3801,750608.9232,759171.4663],
        EUI:[[2008,105],[2014,105],[2017,93.45],[2050,93.45]],
        spaceStudentRatio: 18.5 //2018totalsqft*4.5%(plantspace%2017)/2018student
    },
    
    other: {
        sqft: [],
        EUI: [],
    },
    
	totalSqft: [],
	
	elecFudgeFactor: 1.576,
	
    baselineKWh: [],
	
    kWh: [256651282.8,270723890,280048884.4,287842615.6,298544274.6,304077920,315011624,325902281.1,343601569.8,350644955.3,357688340.7,364731726.2,371775111.6,378818497,385861882.5,392905267.9,399948653.4,406992038.8,414035424.3,421078809.7,428122195.1,435165580.6,442208966,449252351.5,456295736.9,463339122.4,470382507.8,477425893.2,484469278.7,491512664.1,498556049.6,505599435,512642820.4,519686205.9,526729591.3,533772976.8,540816362.2,547859747.7,554903133.1,561946518.5,568989904,576033289.4,583076674.9],
	
	costPerKWh: 0.0396 //USD
};

let emissions = {
	totalBaselineEmissions: [],
	
	totalEmissions: [],
	
    scope1Default: [38.50086295,40.45018987,41.4652752,42.17043083,43.46415488,43.71186619,46.5284179,49.77261299,52.58332457,53.10441558,53.6255066,54.14659761,54.66768863,55.18877964,55.70987066,56.23096167,56.75205268,57.2731437,57.79423471,58.31532573,58.83641674,59.35750776,59.87859877,60.39968979,60.9207808,61.44187182,61.96296283,62.48405385,63.00514486,63.52623588,64.04732689,64.56841791,65.08950892,65.61059994,66.13169095,66.65278197,67.17387298,67.69496399,68.21605501,68.73714602,69.25823704,69.77932805,70.30041907],
    
	scope1Baseline: [],
	
    scope1: [],
    
    scope1HeatingFraction: 0.967, //based on 2014 breakdown
    
    scope1FleetFraction: 0.033, //based on 2014 breakdown
    
    scope1EfficiencyFactor: [1,1,1,1,1,1,1,.96,.92,.87,.87,.87,.87,.87,.87,.87,.87,.87,.87,.87,.87,.87,.87,.87,.87,.87,.87,.87,.87,.87,.87,.87,.87,.87,.87,.87,.87,.87,.87,.87,.87,.87,.87],
    
    scope2: [112.9038199,119.09452,123.1966911,126.6252421,131.3330237,133.7673373,138.5771981,144.1817578,151.1542406,152.6449164,154.1355921,155.6262678,157.1169435,158.6076192,160.0982949,161.5889706,163.0796464,164.5703221,166.0609978,167.5516735,169.0423492,170.5330249,172.0237006,173.5143764,175.0050521,176.4957278,177.9864035,179.4770792,180.9677549,182.4584306,183.9491064,185.4397821,186.9304578,188.4211335,189.9118092,191.4024849,192.8931606,194.3838364,195.8745121,197.3651878,198.8558635,200.3465392,201.8372149],
    
	scope2Baseline: [],
	
    scope3Default: [55.14555664,58.03765126,59.92713323,61.35215322,63.65920438,64.39869634,68.9878636,74.21789908,78.43161879,79.21410326,79.99658773,80.77907219,81.56155666,82.34404112,83.12652559,83.90901006,84.69149452,85.47397899,86.25646345,87.03894792,87.82143239,88.60391685,89.38640132,90.16888578,90.95137025,91.73385472,92.51633918,93.29882365,94.08130811,94.86379258,95.64627705,96.42876151,97.21124598,97.99373044,98.77621491,99.55869938,100.3411838,101.1236683,101.9061528,102.6886372,103.4711217,104.2536062,105.0360906],
    
	scope3Baseline: [],
	
    scope3: [],
    
    scope3CommutingFraction: 0.715, //based on 2014 breakdown
    
    scope3AutomobileCommutingFraction: 0.837*0.715, //based on 2014 breakdown; fraction of scope3 emissions
    
    scope3TravelFraction: 0.285, //based on 2014 breakdown
    
    scope3CommutingEfficiencyFactor: [1,1,1,1,1,1,1,.95,.9,.84,.84,.84,.84,.84,.84,.84,.84,.84,.84,.84,.84,.84,.84,.84,.84,.84,.84,.84,.84,.84,.84,.84,.84,.84,.84,.84,.84,.84,.84,.84,.84,.84,.84],
    
    scope3TravelEfficiencyFactor: [1,1,1,1,1,1,1,.95,.9,.84,.84,.84,.84,.84,.84,.84,.84,.84,.84,.84,.84,.84,.84,.84,.84,.84,.84,.84,.84,.84,.84,.84,.84,.84,.84,.84,.84,.84,.84,.84,.84,.84,.84],
    
    emissionsFactors: {
        baseline:[0.439911095,0.439911095,0.439911095,0.439911095,0.439911095,0.439911095,0.439911095,0.439911095,0.42427442,0.422400789,0.418940855,0.421660488,0.419285561,0.408409576,0.394880031,0.388105409,0.384681649,0.382179852,0.379260225,0.374962587,0.371334909,0.367152871,0.363201495,0.362040882,0.36118661,0.359484732,0.35923261,0.359811595,0.35841149,0.357767978,0.355997174,0.3544921,0.352073563,0.350778185,0.349356339,0.347729837,0.346358381,0.345683519,0.344786075,0.344052137,0.342628276,0.340691086,0.340458818],
        highGas: [0.439912134,0.439912134,0.439912134,0.439912134,0.439912134,0.439912134,0.439912134,0.439912134,0.424236236,0.421104662,0.414364709,0.414266735,0.408436792,0.392858909,0.384325834,0.380287415,0.379835254,0.380373317,0.380858542,0.377394076,0.374783957,0.371457347,0.368599388,0.368214815,0.367087706,0.365675777,0.365745488,0.367124188,0.366076953,0.36584575,0.365320692,0.364733214,0.363060525,0.361823855,0.361279386,0.361223439,0.360497032,0.36011907,0.362373961,0.363142114,0.362627997,0.362120278,0.361560624],
        lowGas: [0.439909917,0.439909917,0.439909917,0.439909917,0.439909917,0.439909917,0.439909917,0.439909917,0.424352363,0.421163823,0.423605971,0.426534444,0.422420145,0.413185168,0.397861698,0.384469111,0.377506011,0.373777636,0.36950426,0.364681788,0.359032237,0.352987835,0.347964853,0.346299947,0.344961076,0.342742548,0.340582172,0.338599767,0.335475242,0.332360012,0.328100357,0.325627495,0.322660095,0.318492294,0.316270748,0.313947302,0.310318045,0.307221113,0.30351976,0.300718707,0.296781943,0.294310241,0.292672933],
        highEcon: [0.439910994,0.439910994,0.439910994,0.439910994,0.439910994,0.439910994,0.439910994,0.439910994,0.424217251,0.421116382,0.420244124,0.423548723,0.421488702,0.408449539,0.39398956,0.383925358,0.380144951,0.377923912,0.374998371,0.370806391,0.366460904,0.362072224,0.358347571,0.357366279,0.356354564,0.354806196,0.353197402,0.35256803,0.350271107,0.348232051,0.346897979,0.345678649,0.343734382,0.341965362,0.340090325,0.338376094,0.336784076,0.335318715,0.333520197,0.333393576,0.331120384,0.327396775,0.326626178],
        lowEcon: [0.439910994,0.439910994,0.439910994,0.439910994,0.439910994,0.439910994,0.439910994,0.43991138,0.424249253,0.421077518,0.418008968,0.41903728,0.416362276,0.40356583,0.392695425,0.389890019,0.388121428,0.386002531,0.384170452,0.379362605,0.375748577,0.372004401,0.368339583,0.367404552,0.366581078,0.365597345,0.365555152,0.366528647,0.36595968,0.365758342,0.365087985,0.364634968,0.36322681,0.36219361,0.361377875,0.360569915,0.36083611,0.359993936,0.359394282,0.359446433,0.358632809,0.357783082,0.358073292],
        GaPower2014: [0.439910994,0.439910994,0.439910994,0.439910994,0.439910994,0.439910994,0.439910994,0.43991138,0.43991138,0.43991138,0.43991138,0.43991138,0.43991138,0.43991138,0.43991138,0.43991138,0.43991138,0.43991138,0.43991138,0.43991138,0.43991138,0.43991138,0.43991138,0.43991138,0.43991138,0.43991138,0.43991138,0.43991138,0.43991138,0.43991138,0.43991138,0.43991138,0.43991138,0.43991138,0.43991138,0.43991138,0.43991138,0.43991138,0.43991138,0.43991138,0.43991138,0.43991138,0.43991138],
        custom: [],
        selected: []
    }
};

let scenarios = {
    led: {
        //affects lightEUI of all space types
        amountFluorescent: 1,
        energyReduction: .3125, //see Light_Efficiencies.xlsx
        conversionRate: [[2008,0],[2013,0],[2018,0],[2023,0],[2028,0],[2033,0],[2038,0],[2043,0],[2050,0]],
        getKFactors: function() {
            let ledConversionFull = interpolateArray(this.conversionRate);
            let kFactors = [];
            for(let i=0,il=ledConversionFull.length;i<il;i++){
                kFactors[i] = 1-this.energyReduction*ledConversionFull[i][1]/100;
            }
            return kFactors;
        },
		
		costPerLedTube: 8.55/1000000, //MMUSD - https://www.ledlightingwholesaleinc.com/Default.asp
		numberOfTubesPerSqft: 0.8333333, //https://hub.currentbyge.com/current-articles/lighting-layout-estimator
		hoursOfLightOperation: 12, //per day
		staffWage: 12, // $/hour
		timeToChangeBulb: 0.1666666, //hours
		getNetCost: function(){
			let costToChangeBulb = this.staffWage*this.timeToChangeBulb/1000000; //MMUSD
			let ledLifespan = 50000/this.hoursOfLightOperation/365; //years - http://www.ledlightingwholesaleinc.com/ZY-T8-15W1200-BIXX-p/zy-t8-15w1200-bixx.htm
			let fluorescentLifespan = 10000/this.hoursOfLightOperation/365; //years
			let ledConversionFull = interpolateArray(this.conversionRate);
			let cost = [];
			let savings = [];
			let netCost = [];
			let carbonSavings = [];
			let initialCost = [];
			let operationCost = [];
			let elecSavings = [];
			let realConversionRate = scenarios.led.conversionRate;
			scenarios.led.conversionRate = [[2008,0],[2013,0],[2018,0],[2023,0],[2028,0],[2033,0],[2038,0],[2043,0],[2050,0]];
            let realOffsets = scenarios.natureConservancy.conversionRate;
            scenarios.natureConservancy.conversionRate = [[2008,0],[2013,0],[2018,0],[2023,0],[2028,0],[2033,0],[2038,0],[2043,0],[2050,0]];
			[buildingSpace, emissions] = calculateEmissions(buildingSpace,emissions,scenarios);
			let fakeKWh = [...buildingSpace.kWh];
			let fakeTotalEmissions = [...emissions.totalEmissions];
			scenarios.led.conversionRate = realConversionRate;
			[buildingSpace,emissions] = calculateEmissions(buildingSpace,emissions,scenarios);
			
            for(let i=0,il=ledConversionFull.length;i<il;i++){
				if(i==0){
					initialCost[i] = ledConversionFull[i][1]/100*this.numberOfTubesPerSqft*buildingSpace.totalSqft[i]*(this.costPerLedTube+costToChangeBulb); //MM USD
				}else{
					initialCost[i] = (ledConversionFull[i][1]-ledConversionFull[i-1][1])/100*this.numberOfTubesPerSqft*buildingSpace.totalSqft[i]*(this.costPerLedTube+costToChangeBulb); //MM USD
				}
				operationCost[i] = ledConversionFull[i][1]/100*this.numberOfTubesPerSqft*buildingSpace.totalSqft[i]*(1/ledLifespan-1/fluorescentLifespan)*costToChangeBulb; //MM USD
				elecSavings[i] = (fakeKWh[i] - buildingSpace.kWh[i]) * buildingSpace.costPerKWh/1000000; //MMUSD
				cost[i] = initialCost[i]; //MM USD
				savings[i] = elecSavings[i] - operationCost[i]; //MM USD
                netCost[i] = initialCost[i] + operationCost[i] - elecSavings[i]; //MM USD
				carbonSavings[i] = fakeTotalEmissions[i] - emissions.totalEmissions[i]; //kT
            }
            scenarios.natureConservancy.conversionRate = realOffsets;
			//console.log("Carbon Savings: " + carbonSavings);
			/*console.log("LED Conversion:" + ledConversionFull);
			console.log("Initial Cost:" + initialCost);
			console.log("Operation Cost:" + operationCost);
			console.log("Elec Savings:" + elecSavings);
			console.log("Net Cost:" + netCost);
			console.log("Carbon Savings:" + carbonSavings);
			console.log("Savings:" + savings);
			console.log("Cost:" + cost);*/
            return [netCost, carbonSavings, savings, cost];
		}
    },
    
    solarRoof: {
        //affects total kWh
        selected: 'Google Sunroof',
        maxKwhGoogle: [51615909],
        maxKwhNREL: [5148294],
		maxKWGoogle: 35440,
		maxKWNREL: 4421,
        implementationRate: [[2008,0],[2013,0],[2018,0],[2023,0],[2028,0],[2033,0],[2038,0],[2043,0],[2050,0]],
        defaultKFactors: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        getKFactors: function() {
            let solarRoofImplementationFull = interpolateArray(this.implementationRate);
            let kFactors = [];
            for(let i=0,il=solarRoofImplementationFull.length;i<il;i++){
                if(this.selected === 'Google Sunroof'){
                    if(this.maxKwhGoogle < buildingSpace.kWh[i]){
                        kFactors[i] = 1-solarRoofImplementationFull[i][1]/100*this.maxKwhGoogle/buildingSpace.kWh[i];
						//console.log('Solar Here');
                    }else{
                        kFactors[i] = 1-solarRoofImplementationFull[i][1]/100;
						//console.log('Solar Not Here 1');
                    }
                }else if(this.selected === 'NREL Study'){
                    if(this.maxKwhNREL < buildingSpace.kWh[i]){
                        kFactors[i] = 1-solarRoofImplementationFull[i][1]/100*this.maxKwhNREL/buildingSpace.kWh[i];
						//console.log('Solar Not Here 2');
                    }else{
                        kFactors[i] = 1-solarRoofImplementationFull[i][1]/100;
						//console.log('Solar Not Here 3');
                    }                    
                }
            }
            return kFactors;
        },
		getAddKWh: function() {
			let solarRoofImplementationFull = interpolateArray(this.implementationRate);
			let addKWh = [];
			for(let i=0,il=solarRoofImplementationFull.length;i<il;i++){
                if(this.selected === 'Google Sunroof'){
					addKWh[i] = solarRoofImplementationFull[i][1]/100*this.maxKwhGoogle;
					//console.log('Solar Here');
                }else if(this.selected === 'NREL Study'){
					addKWh[i] = solarRoofImplementationFull[i][1]/100*this.maxKwhNREL;          
                }
            }
            return addKWh;
		},
		costPerKWGoogle: 2273.46, //USD - from Google Project Sunroof
		costPerKWNREL: 2032.78, //fUSD - rom NREL study
		getNetCost: function(){
			let solarRoofImplementationFull = interpolateArray(this.implementationRate);
			let cost = [];
			let savings = [];
			let netCost = [];
			let carbonSavings = [];
			let initialCost = [];
			let operationCost = [];
			let elecSavings = [];
			let realImplementationRate = scenarios.solarRoof.implementationRate;
			let costPerKW = [];
			let maxKW = [];
			scenarios.solarRoof.implementationRate = [[2008,0],[2013,0],[2018,0],[2023,0],[2028,0],[2033,0],[2038,0],[2043,0],[2050,0]];
            let realOffsets = scenarios.natureConservancy.conversionRate;
            scenarios.natureConservancy.conversionRate = [[2008,0],[2013,0],[2018,0],[2023,0],[2028,0],[2033,0],[2038,0],[2043,0],[2050,0]];
			[buildingSpace, emissions] = calculateEmissions(buildingSpace,emissions,scenarios);
			let fakeKWh = [...buildingSpace.kWh];
			let fakeTotalEmissions = [...emissions.totalEmissions];
			scenarios.solarRoof.implementationRate = realImplementationRate;
			[buildingSpace,emissions] = calculateEmissions(buildingSpace,emissions,scenarios);
			
            for(let i=0,il=solarRoofImplementationFull.length;i<il;i++){
				if(this.selected === 'Google Sunroof'){
					costPerKW = this.costPerKWGoogle;
					maxKW = this.maxKWGoogle;
				}else if(this.selected === 'NREL Study'){
					costPerKW = this.costPerKWNREL;
					maxKW = this.maxKWNREL;
				}else{
					console.log('Something went wrong');
				};
				if(i==0){
					initialCost[i] = solarRoofImplementationFull[i][1]/100*maxKW*costPerKW/1000000; //MM USD
				}else{
					initialCost[i] = (solarRoofImplementationFull[i][1]-solarRoofImplementationFull[i-1][1])/100*maxKW*costPerKW/1000000; //MM USD
				};
				elecSavings[i] = (fakeKWh[i] - buildingSpace.kWh[i]) * buildingSpace.costPerKWh/1000000; //MMUSD
				cost[i] = initialCost[i];
				savings[i] = elecSavings[i];
                netCost[i] = initialCost[i] - elecSavings[i];
				carbonSavings[i] = fakeTotalEmissions[i] - emissions.totalEmissions[i];
            }
            scenarios.natureConservancy.conversionRate = realOffsets;
			//console.log('KWh w/o Solar' + fakeKWh.reduce((accumulator,currentValue) => accumulator + currentValue));
			//console.log('KWh w/ Solar' + buildingSpace.kWh.reduce((accumulator,currentValue) => accumulator + currentValue));
			//console.log(elecSavings.reduce((accumulator,currentValue) => accumulator + currentValue))
            return [netCost, carbonSavings, savings, cost];
		}
    },
    
    commissioning: {
        //affects total kWh and scope 1 emissions
        frequency: 50,
        getKFactors: function() {
            let kFactors = [1,1,1,1,1,1,1,1,1,1];
            for(let i=10,il=BAUGrowth.year.length;i<il;i++){
                let modulo = i % this.frequency;
                if(modulo === 0){
                    kFactors[i] = 1;
                }else{
                    kFactors[i] = kFactors[i-1]*BAUGrowth.degradation.degradationFactor;
                }
                if(kFactors[i]>BAUGrowth.degradation.maxDegradation){
                    kFactors[i] = BAUGrowth.degradation.maxDegradation;
                }
            }
            return kFactors;
        },
		costToCommission: 15, //MMUSD
		getNetCost: function(){
			//~~~~~~~~~~~~NEED TO ADD IN SAVINGS FROM REDUCED NATURAL GAS~~~~~~~~~~~~
			let realFrequency = this.frequency;
			let cost = [0,0,0,0,0,0,0,0,0,0];
			let savings = [0,0,0,0,0,0,0,0,0,0];
			let netCost = [0,0,0,0,0,0,0,0,0,0];
			let carbonSavings = [0,0,0,0,0,0,0,0,0,0];
			let initialCost = [0,0,0,0,0,0,0,0,0,0];
			let operationCost = [0,0,0,0,0,0,0,0,0,0];
			let elecSavings = [0,0,0,0,0,0,0,0,0,0];
			scenarios.commissioning.frequency = 50;
            let realOffsets = scenarios.natureConservancy.conversionRate;
            scenarios.natureConservancy.conversionRate = [[2008,0],[2013,0],[2018,0],[2023,0],[2028,0],[2033,0],[2038,0],[2043,0],[2050,0]];
			[buildingSpace, emissions] = calculateEmissions(buildingSpace,emissions,scenarios);
			let fakeKWh = [...buildingSpace.kWh];
			let fakeTotalEmissions = [...emissions.totalEmissions];
			scenarios.commissioning.frequency = realFrequency;
			[buildingSpace,emissions] = calculateEmissions(buildingSpace,emissions,scenarios);
			
			for(let i=10,il=BAUGrowth.year.length;i<il;i++){
                let modulo = i % this.frequency;
                if(modulo === 0){
                    operationCost[i] = this.costToCommission; //MMUSD
                }else{
                    operationCost[i] = 0; //MMUSD
                }
				elecSavings[i] = (fakeKWh[i] - buildingSpace.kWh[i]) * buildingSpace.costPerKWh/1000000; //MMUSD
				cost[i] = operationCost[i];
				savings[i] = elecSavings[i];
				netCost[i] = operationCost[i] - elecSavings[i];
				carbonSavings[i] = fakeTotalEmissions[i] - emissions.totalEmissions[i];
            }
            scenarios.natureConservancy.conversionRate = realOffsets;
			/*console.log("Initial Cost: " + initialCost);
			console.log("Operation Cost: " + operationCost);
			console.log("Elec Savings: " + elecSavings);*/
            return [netCost, carbonSavings, savings, cost];
		}
    },
    
    plantAutomation: {
        //affects plantEUI
        enabled: false,
        startYear: 2017,
        plantEUIReduction: 30,
        getKFactors: function() {
            let kFactors = [];
            for(let i=0,il=BAUGrowth.year.length;i<il;i++){
                if(BAUGrowth.year[i] < this.startYear){
                    kFactors[i] = 1;
                }else if(this.enabled === false){
                    kFactors[i] = 1;
                }else{
                    kFactors[i] = 1 - this.plantEUIReduction/100;
                }
            }
            return kFactors;
        },
		setUpCost: 8, //MM USD
        recurringCost: 0, //MM USD
		getNetCost: function(){
			let realEnabled = false;
			if(this.enabled === true){
				realEnabled = true;
			}else{
				realEnabled = false;
			}
			let cost = [];
			let savings = [];
			let netCost = [];
			let carbonSavings = [];
			let initialCost = [];
			let operationCost = [];
			let elecSavings = [];
			scenarios.plantAutomation.enabled = false;
            let realOffsets = scenarios.natureConservancy.conversionRate;
            scenarios.natureConservancy.conversionRate = [[2008,0],[2013,0],[2018,0],[2023,0],[2028,0],[2033,0],[2038,0],[2043,0],[2050,0]];
			[buildingSpace, emissions] = calculateEmissions(buildingSpace,emissions,scenarios);
			let fakeKWh = [...buildingSpace.kWh];
			let fakeTotalEmissions = [...emissions.totalEmissions];
			scenarios.plantAutomation.enabled = realEnabled;
			[buildingSpace,emissions] = calculateEmissions(buildingSpace,emissions,scenarios);
			
            for(let i=0,il=BAUGrowth.year.length;i<il;i++){
				if(BAUGrowth.year[i] === this.startYear & realEnabled === true){
                    //console.log("Plant Automation Setup Cost: " + this.setUpCost);
					initialCost[i] = this.setUpCost; //MM USD
                    //console.log("Plant Automation Cost: " + initialCost[i]);
                    operationCost[i] = 0;
				}else if(BAUGrowth.year[i] > this.startYear & realEnabled === true){
                    operationCost[i] = this.recurringCost;
                    initialCost[i] = 0;
                }else{
					initialCost[i] = 0; //MM USD
                    operationCost[i] = 0;
				}
				elecSavings[i] = (fakeKWh[i] - buildingSpace.kWh[i]) * buildingSpace.costPerKWh/1000000; //MMUSD
				cost[i] = initialCost[i]/1 + operationCost[i]/1;
                //console.log("Total Cost: " + initialCost[i]+operationCost[i]);
				savings[i] = elecSavings[i];
                netCost[i] = cost[i] - savings[i];
				carbonSavings[i] = fakeTotalEmissions[i] - emissions.totalEmissions[i];
            }
            scenarios.natureConservancy.conversionRate = realOffsets;
			//console.log(initialCost);
            return [netCost, carbonSavings, savings, cost];
		}
    },
    
    smartLabs: {
        //affects lab space HVAC EUI
        energyReduction: 33,
        conversionRate: [[2008,0],[2013,0],[2018,0],[2023,0],[2028,0],[2033,0],[2038,0],[2043,0],[2050,0]],
        getKFactors: function() {
            let smartLabsConversionFull = interpolateArray(this.conversionRate);
            let kFactors = [];
            for(let i=0,il=smartLabsConversionFull.length;i<il;i++){
                kFactors[i] = 1-this.energyReduction/100*smartLabsConversionFull[i][1]/100;
            }
            return kFactors;
        },
        implementationCost: 30, //USD per 1000 sqft of Lab space
        operatingCost: 0.5, //USD per 1000 sqft of Lab space
		getNetCost: function(){
			//~~~~~~~~~~~~NEED TO ADD IN SAVINGS FROM REDUCED NATURAL GAS~~~~~~~~~~~~
			let realConversionRate = this.conversionRate;
			let cost = [];
			let savings = [];
			let netCost = [];
			let carbonSavings = [];
			let initialCost = [];
			let operationCost = [];
			let elecSavings = [];
			this.conversionRate = [[2008,0],[2013,0],[2018,0],[2023,0],[2028,0],[2033,0],[2038,0],[2043,0],[2050,0]];
            let realOffsets = scenarios.natureConservancy.conversionRate;
            scenarios.natureConservancy.conversionRate = [[2008,0],[2013,0],[2018,0],[2023,0],[2028,0],[2033,0],[2038,0],[2043,0],[2050,0]];
			[buildingSpace, emissions] = calculateEmissions(buildingSpace,emissions,scenarios);
			let fakeKWh = [...buildingSpace.kWh];
			let fakeTotalEmissions = [...emissions.totalEmissions];
			this.conversionRate = realConversionRate;
			[buildingSpace,emissions] = calculateEmissions(buildingSpace,emissions,scenarios);
            let smartLabsConversionFull = interpolateArray(this.conversionRate);
			
			for(let i=0,il=BAUGrowth.year.length;i<il;i++){
                if(i==0){
                    initialCost[i] = (smartLabsConversionFull[i][1]*buildingSpace.labLayer.sqft[i]/1000*this.implementationCost)/1000000; //MMUSD
                }
                else{
                    initialCost[i] = ((smartLabsConversionFull[i][1]-smartLabsConversionFull[i-1][1])*buildingSpace.labLayer.sqft[i]/1000*this.implementationCost)/1000000; //MMUSD
                }
                operationCost[i] = (smartLabsConversionFull[i][1]*buildingSpace.labLayer.sqft[i]/1000*this.operatingCost)/1000000; //MMUSD
				elecSavings[i] = (fakeKWh[i] - buildingSpace.kWh[i]) * buildingSpace.costPerKWh/1000000; //MMUSD
				cost[i] = initialCost[i] + operationCost[i];
				savings[i] = elecSavings[i];
				netCost[i] = cost[i] - savings[i];
				carbonSavings[i] = fakeTotalEmissions[i] - emissions.totalEmissions[i];
            }
            scenarios.natureConservancy.conversionRate = realOffsets;
			/*console.log("Initial Cost: " + initialCost);
			console.log("Operation Cost: " + operationCost);
			console.log("Elec Savings: " + elecSavings);*/
            return [netCost, carbonSavings, savings, cost];
		}
    },
    
    electricFleet: {
        //affects scope1 emissions and increases kWh
        gasolineFleetGallonsConsumed: 64448, //from 2014 GT data
        dieselFleetGallonsConsumed: 92828, //from 2014 GT data
        gasolineTruckVehicleEfficiency: 18.7, //mpg - from fueleconomy.gov 2017 pickup truck comparison
        dieselBusEfficiency: 7.3, //mpg - https://www.rita.dot.gov/bts/sites/rita.dot.gov.bts/files/publications/national_transportation_statistics/html/table_04_15.html
        electricTruckEfficiency: 0.38, // kWh/mile - from Tesla Model X AWD P90D (no electric pickups)
        electricBusEfficiency: 2.0, // kWh/mile - Aber, J. (2016). Electric Bus Analysis for New York City Transit. New York City.
		numberOfBuses: 20, //just a guess
		numberOfTrucks: 100, //just a guess
        chargeRate: 1, //all campus fleet vehicles will charge on campus
        conversionRate: [[2008,0],[2013,0],[2018,0],[2023,0],[2028,0],[2033,0],[2038,0],[2043,0],[2050,0]],
        getKFactors: function() {
            let electricFleetConversionFull = interpolateArray(this.conversionRate);
            let kFactors = [];
            let addkWh = [];
            for(let i=0,il=electricFleetConversionFull.length;i<il;i++){
                kFactors[i] = 1-emissions.scope1FleetFraction*electricFleetConversionFull[i][1]/100;
                addkWh[i] = this.chargeRate*electricFleetConversionFull[i][1]/100*(this.gasolineFleetGallonsConsumed*this.gasolineTruckVehicleEfficiency*this.electricTruckEfficiency + this.dieselFleetGallonsConsumed*this.dieselBusEfficiency*this.electricBusEfficiency)
            }
            return [kFactors, addkWh];
        },
		costPerPortDCFC: 63662, //USD
		maintenanceCostDCFC: 500, // USD/year
		costPerPortLevel2: 5919, //USD
		portLifetime: 10, //years
		getNetCost: function(){
			//~~~~~~~~~~~~NEED TO ADD IN SAVINGS FROM REDUCED NATURAL GAS~~~~~~~~~~~~
			let realConversionRate = this.conversionRate;
			let cost = [];
			let savings = [];
			let netCost = [];
			let carbonSavings = [];
			let initialCost = [];
			let operationCost = [];
			let elecSavings = [];
			this.conversionRate = [[2008,0],[2013,0],[2018,0],[2023,0],[2028,0],[2033,0],[2038,0],[2043,0],[2050,0]];
            let realOffsets = scenarios.natureConservancy.conversionRate;
            scenarios.natureConservancy.conversionRate = [[2008,0],[2013,0],[2018,0],[2023,0],[2028,0],[2033,0],[2038,0],[2043,0],[2050,0]];
			[buildingSpace, emissions] = calculateEmissions(buildingSpace,emissions,scenarios);
			let fakeKWh = [...buildingSpace.kWh];
			let fakeTotalEmissions = [...emissions.totalEmissions];
			this.conversionRate = realConversionRate;
			[buildingSpace,emissions] = calculateEmissions(buildingSpace,emissions,scenarios);
			let electricFleetConversionFull = interpolateArray(this.conversionRate);
			
			for(let i=0,il=BAUGrowth.year.length;i<il;i++){
				if(i === 0){
					initialCost[i] = (electricFleetConversionFull[i][1]/100*(this.numberOfBuses*this.costPerPortDCFC + this.numberOfTrucks*this.costPerPortLevel2))/1000000;
					operationCost[i] = 0;
				}else if(i > 0 & i < this.portLifetime){
					initialCost[i] = ((electricFleetConversionFull[i][1]-electricFleetConversionFull[i-1][1])/100*(this.numberOfBuses*this.costPerPortDCFC + this.numberOfTrucks*this.costPerPortLevel2))/1000000;
					operationCost[i] = 0;
				}else if(i === this.portLifetime){
					initialCost[i] = ((electricFleetConversionFull[i][1]-electricFleetConversionFull[i-1][1])/100*(this.numberOfBuses*this.costPerPortDCFC + this.numberOfTrucks*this.costPerPortLevel2))/1000000;
					operationCost[i] = (electricFleetConversionFull[i-this.portLifetime][1]/100*(this.numberOfTrucks*this.costPerPortLevel2 + this.numberOfBuses*this.costPerPortDCFC) + (electricFleetConversionFull[i][1]-electricFleetConversionFull[i-this.portLifetime][1])/100*this.numberOfBuses*this.maintenanceCostDCFC)/1000000;
				}else{
					initialCost[i] = ((electricFleetConversionFull[i][1]-electricFleetConversionFull[i-1][1])/100*(this.numberOfBuses*this.costPerPortDCFC + this.numberOfTrucks*this.costPerPortLevel2))/1000000;
					operationCost[i] = ((electricFleetConversionFull[i-this.portLifetime][1]-electricFleetConversionFull[i-this.portLifetime-1][1])/100*(this.numberOfTrucks*this.costPerPortLevel2 + this.numberOfBuses*this.costPerPortDCFC) + (electricFleetConversionFull[i][1]-electricFleetConversionFull[i-this.portLifetime][1]+electricFleetConversionFull[i-this.portLifetime-1][1])/100*this.numberOfBuses*this.maintenanceCostDCFC)/1000000;
				}
				elecSavings[i] = (fakeKWh[i] - buildingSpace.kWh[i]) * buildingSpace.costPerKWh/1000000; //MMUSD
				cost[i] = initialCost[i] + operationCost[i] + elecSavings[i];
				savings[i] = 0;
				netCost[i] = initialCost[i] + operationCost[i] - elecSavings[i];
				carbonSavings[i] = fakeTotalEmissions[i] - emissions.totalEmissions[i];
            }
            scenarios.natureConservancy.conversionRate = realOffsets;
            return [netCost, carbonSavings, savings, cost];
		}
    },
    
    electricCommute: {
        //affects scope3 emissions and increases kWh
		//Does not take into account growth of parking
		numberOfParkingSpaces: 17000,
        gasolineVehicleMilesDriven: 92572859, //from 2014 GT commuting data
        electricVehicleEfficiency: 0.33, // kWh/mile - from fueleconomy.gov new electric vehicle comparison
        chargeRate: 0, //user input to determine how many vehicles are charged on campus
        conversionRate: [[2008,0],[2013,0],[2018,0],[2023,0],[2028,0],[2033,0],[2038,0],[2043,0],[2050,0]],
        getKFactors: function() {
            let electricCommuteConversionFull = interpolateArray(this.conversionRate);
            let kFactors = [];
            let addkWh = [];
            for(let i=0,il=electricCommuteConversionFull.length;i<il;i++){
                kFactors[i] = 1-emissions.scope3AutomobileCommutingFraction*electricCommuteConversionFull[i][1]/100;
                addkWh[i] = this.chargeRate*electricCommuteConversionFull[i][1]/100*this.gasolineVehicleMilesDriven*this.electricVehicleEfficiency;
            }
            return [kFactors, addkWh];
        },
		costPerPortLevel1: 540, //USD
		costPerPortLevel2: 5919, //USD
		portLifetime: 10, //years
		chargerRatio: 1, //Level1Chargers/(Level1+Level2)
		feePerKWh: 0.1, //$0.08/kWh 
		getNetCost: function() {
			let realConversionRate = this.conversionRate;
			let cost = [];
			let savings = [];
			let netCost = [];
			let carbonSavings = [];
			let initialCost = [];
			let operationCost = [];
			let elecSavings = [];
			this.conversionRate = [[2008,0],[2013,0],[2018,0],[2023,0],[2028,0],[2033,0],[2038,0],[2043,0],[2050,0]];
            let realOffsets = scenarios.natureConservancy.conversionRate;
            scenarios.natureConservancy.conversionRate = [[2008,0],[2013,0],[2018,0],[2023,0],[2028,0],[2033,0],[2038,0],[2043,0],[2050,0]];
			[buildingSpace, emissions] = calculateEmissions(buildingSpace,emissions,scenarios);
			let fakeKWh = [...buildingSpace.kWh];
			let fakeTotalEmissions = [...emissions.totalEmissions];
			this.conversionRate = realConversionRate;
			[buildingSpace,emissions] = calculateEmissions(buildingSpace,emissions,scenarios);
			let electricCommuteConversionFull = interpolateArray(this.conversionRate);
			let costPerPort = this.chargerRatio*this.costPerPortLevel1+(1-this.chargerRatio)*this.costPerPortLevel2;
			
			for(let i=0,il=BAUGrowth.year.length;i<il;i++){
				if(i === 0){
					initialCost[i] = (electricCommuteConversionFull[i][1]/100*this.numberOfParkingSpaces*costPerPort)/1000000;
					operationCost[i] = 0;
				}else if(i > 0 & i < this.portLifetime){
					initialCost[i] = ((electricCommuteConversionFull[i][1]-electricCommuteConversionFull[i-1][1])/100*this.numberOfParkingSpaces*costPerPort)/1000000;
					operationCost[i] = 0;
				}else if(i === this.portLifetime){
					initialCost[i] = ((electricCommuteConversionFull[i][1]-electricCommuteConversionFull[i-1][1])/100*this.numberOfParkingSpaces*costPerPort)/1000000;
					operationCost[i] = (electricCommuteConversionFull[i-this.portLifetime][1]/100*this.numberOfParkingSpaces*costPerPort)/1000000;
				}else{
					initialCost[i] = ((electricCommuteConversionFull[i][1]-electricCommuteConversionFull[i-1][1])/100*this.numberOfParkingSpaces*costPerPort)/1000000;
					operationCost[i] = ((electricCommuteConversionFull[i-this.portLifetime][1]-electricCommuteConversionFull[i-this.portLifetime-1][1])/100*this.numberOfParkingSpaces*costPerPort)/1000000;
				}
				elecSavings[i] = (fakeKWh[i] - buildingSpace.kWh[i]) * (buildingSpace.costPerKWh - this.feePerKWh)/1000000; //MMUSD
				if(elecSavings[i]>=0){
					cost[i] = initialCost[i] + operationCost[i];
					savings[i] = elecSavings[i];
				}else{
					cost[i] = initialCost[i] + operationCost[i] - elecSavings[i];
					savings[i] = 0;
				}
				netCost[i] = initialCost[i] + operationCost[i] - elecSavings[i];
				carbonSavings[i] = fakeTotalEmissions[i] - emissions.totalEmissions[i];
            }
            scenarios.natureConservancy.conversionRate = realOffsets;
            return [netCost, carbonSavings, savings, cost];
			/*console.log("Initial Cost: " + initialCost);
			console.log("Operation Cost: " + operationCost);
			console.log("Elec Savings: " + elecSavings);*/
		}
    },
    
    gaPowerSimpleSolar: {
        //affects remaining nonrenewable kWh
        conversionRate: [[2008,0],[2013,0],[2018,0],[2023,0],[2028,0],[2033,0],[2038,0],[2043,0],[2050,0]],
        getKFactors: function() {
            let gaPowerSimpleSolarConversionFull = interpolateArray(this.conversionRate);
            let kFactors = [];
            for(let i=0,il=gaPowerSimpleSolarConversionFull.length;i<il;i++){
                kFactors[i] = 1-gaPowerSimpleSolarConversionFull[i][1]/100;
            }
            return kFactors;
        },
		costPerKWh: 0.005, //$/kWh
		getNetCost: function(){
			let gaPowerSimpleSolarConversionFull = interpolateArray(this.conversionRate);
			let netCost = [];
			let realConversionRate = scenarios.gaPowerSimpleSolar.conversionRate;
			scenarios.gaPowerSimpleSolar.conversionRate = [[2008,0],[2013,0],[2018,0],[2023,0],[2028,0],[2033,0],[2038,0],[2043,0],[2050,0]];
			[buildingSpace, emissions] = calculateEmissions(buildingSpace,emissions,scenarios);
			let fakeKWh = [...buildingSpace.kWh];
			scenarios.gaPowerSimpleSolar.conversionRate = realConversionRate;
			[buildingSpace,emissions] = calculateEmissions(buildingSpace,emissions,scenarios);
            for(let i=0,il=gaPowerSimpleSolarConversionFull.length;i<il;i++){
                netCost[i] = this.costPerKWh*(fakeKWh[i] - buildingSpace.kWh[i])/1000000; //$MM
            }
            return netCost;
		}
    },
    
    natureConservancy: {
        //affects scope 1&2 remaining emissions
        conversionRate: [[2008,0],[2013,0],[2018,0],[2023,0],[2028,0],[2033,0],[2038,0],[2043,0],[2050,0]],
        getKFactors: function() {
            let natureConservancyConversionFull = interpolateArray(this.conversionRate);
            let kFactors = [];
            for(let i=0,il=natureConservancyConversionFull.length;i<il;i++){
                kFactors[i] = 1-natureConservancyConversionFull[i][1]/100;
            }
            return kFactors;
        },
		costPerKTonCO2: 15000, //$/kTonCO2
		getNetCost: function(){
			let natureConservancyConversionFull = interpolateArray(this.conversionRate);
			let cost = [];
			let savings = [];
			let netCost = [];
			let carbonSavings = [];
			let realConversionRate = scenarios.natureConservancy.conversionRate;
			scenarios.natureConservancy.conversionRate = [[2008,0],[2013,0],[2018,0],[2023,0],[2028,0],[2033,0],[2038,0],[2043,0],[2050,0]];
			[buildingSpace, emissions] = calculateEmissions(buildingSpace,emissions,scenarios);
			let fakeTotalEmissions = [...emissions.totalEmissions];
			scenarios.natureConservancy.conversionRate = realConversionRate;
			[buildingSpace,emissions] = calculateEmissions(buildingSpace,emissions,scenarios);
            for(let i=0,il=natureConservancyConversionFull.length;i<il;i++){
				cost[i] = this.costPerKTonCO2*(fakeTotalEmissions[i] - emissions.totalEmissions[i])/1000000;
				savings[i] = 0;
                netCost[i] = this.costPerKTonCO2*(fakeTotalEmissions[i] - emissions.totalEmissions[i])/1000000;
				carbonSavings[i] = fakeTotalEmissions[i] - emissions.totalEmissions[i];
            }
            return [netCost, carbonSavings, savings, cost];
		}
    },
    
    coda: {
        //increases sqft, which increases kWh and gas
        enabled: false,
        activationYear: 2019,
        addSqft: 297000, //estimated from https://codatechsquare.com/building/
        eui: 18, // kWh/sqft - from EIA mixed use office/computational space
        getAddSqft: function(){
            let addSqftArray = [];
            let addkWh = [];
            for(let i=0,il=buildingSpace.year.length;i<il;i++){
                if(2008+i < this.activationYear){
                    addSqftArray[i] = 0;    
                }else if(this.enabled === false){
                    addSqftArray[i] = 0;
                }else{
                    addSqftArray[i] = this.addSqft;
                }
                addkWh[i] = addSqftArray[i]*this.eui;
            }
            return [addSqftArray,addkWh]
        }
    }
};

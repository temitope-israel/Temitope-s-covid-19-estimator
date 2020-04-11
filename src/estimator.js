const covid19ImpactEstimator = (data) => {


return {
// INPUT DATA
data: {
    reportedCases: 35.235533,


},

//IMPACT OUTPUT DATA
impact: {
    currentlyInfected: '',
    infectionsByRequestedTime: '',

},

// SEVEREIMPACT DATA
severeImpact: {
    currentlyInfected: '',
    infectionsByRequestedTime: '',

},
};

//Currently INfected for the Impact Object/Output
currentlyInfected = data.reportedCases * 10;
impact.currentlyInfected = currentlyInfected;


//Currently Infected for the severeImpact Output
currentlyInfectedSevereImpact = data.reportedCases * 50;
severeImpact.currentlyInfected = currentlyInfectedSevereImpact;

//Computation for infectionsByREquestedTime for iMPACT OUTPUT
infectionsByRequestedTime = Math.round(currentlyInfected * 512);
impact.infectionsByRequestedTime = infectionsByRequestedTime;


//Computation for infectionsByREquestedTime for SEVEREiMPACT OUTPUT
severeImpactInfectionsByRequestedTime = Math.round(severeImpact.currentlyInfected * 512);
severeImpact.infectionsByRequestedTime = severeImpactInfectionsByRequestedTime;

}

/*var tope;
tope = "God help me with this project";
console.log(tope);*/


export default covid19ImpactEstimator;

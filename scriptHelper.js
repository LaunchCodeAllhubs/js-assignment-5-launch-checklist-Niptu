// Write your helper functions here!
//require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   document.getElementById ("missionTarget").innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}" alt="Planet ${name} Image">
                `;
};

function validateInput(testInput) {
   if (testInput === ""){
    return "Empty";
    }else if (isNaN(Number(testInput))){
    return "Not a Number";
    }else {
    return "Is a Number";
    }
};

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let faultyItems = document.getElementById("faultyItems");
    let launchStatus = this.document.getElementById("launchStatus");

    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
        alert ("All fields are required!");

pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;

if (fuelLevel < 10000) {
    faultyItems.style.visibility = "visible";
    launchStatus.innerHTML = "Shuttle not ready for launch";
    launchStatus.style.color = "#C7254E";
    pilotStatus.innerHTML = "Pilot not ready";
    copilotStatus.innerHTML = "Co-pilot not ready";
}
if (cargoLevel > 10000) {
    faultyItems.style.visibility = "visible";
    launchStatus.innerHTML = "Shuttle not ready for launch";
    launchStatus.style.color = "#C7254E";
    pilotStatus.innerHTML = "Pilot ready";
    copilotStatus.innerHTML = "Co-pilot ready";
}
if (fuelLevel >= 10000 && cargoLevel <= 10000) {
    faultyItems.style.visibility = "visible";
    launchStatus.innerHTML = "Shuttle is ready for launch";
    launchStatus.style.color = "#419F6A";
}
    }
};

async function myFetch() {
 
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
       return response.json();
    });

    return planetsReturned;
};

function pickPlanet(planets) {
    let randomIndex = Math.floor (Math.random()*planets.length);
    return planets[randomIndex];
};

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;

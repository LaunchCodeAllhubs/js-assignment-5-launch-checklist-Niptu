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
                <img src = "${imageUrl}" alt = "Planet ${name} Image">
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
    let launchStatus = document.getElementById("launchStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");

    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;

    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;

    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
        alert ("All fields are required!");
        return;
        /*event.preventDefault();

        if (validateInput(pilot) !=="Not a Number"|| validateInput(copilot) !== "Not a Number"){
            alert("Letters only");
            event.preventDefault();
        }
        if (validateInput(fuelLevel) !== "Is a Number" || validateInput(cargoLevel)!== "Is a Number"){
            alert("Numbers only");
            event.preventDefault();
        }*/
    }

    if (fuelLevel < 10000) {
    faultyItems.style.visibility = "visible";
    launchStatus.innerHTML = "Shuttle Not Ready for Launch";
    launchStatus.style.color = "#C7254E";
    list.style.visibility = "visible";
    //pilotStatus.innerHTML = "Pilot not ready";
    //copilotStatus.innerHTML = "Co-pilot not ready";
    fuelStatus.innerHTML = "Fuel level too low for launch";
    //cargoStatus.innerHTML = "Cargo mass low enough for launch";


} else if (cargoLevel > 10000) {
    faultyItems.style.visibility = "visible";
    launchStatus.innerHTML = "Shuttle Not Ready for Launch";
    launchStatus.style.color = "#C7254E";
    //pilotStatus.innerHTML = "Pilot ready";
    //copilotStatus.innerHTML = "Co-pilot ready";
    list.style.visibility = "visible";
    cargoStatus.innerHTML = "Cargo mass too heavy for launch";
   // fuelStatus.innerHTML = "Fuel level high enough for launch";


} else /*(fuelLevel >= 10000 && cargoLevel <= 10000)*/ {
    faultyItems.style.visibility = "hidden";
    launchStatus.innerHTML = "Shuttle is Ready for Launch";
    launchStatus.style.color = "#419F6A";
    //fuelStatus.innerHTML = "Fuel level high enough for launch";
    //cargoStatus.innerHTML = "Cargo mass low enough for launch";
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

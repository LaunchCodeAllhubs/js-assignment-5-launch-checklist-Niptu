// Write your JavaScript code here!
//import functions from scriptHelper
//const { addDestinationInfo, validateInput, formSubmission, pickPlanet, myFetch } = require("./scriptHelper");

//const { pickPlanet } = require("./scriptHelper");

//const { myFetch } = require("./scriptHelper");

//add eventlistenener - when window loads we see execute code
window.addEventListener("load", function() {
    //foarm from html
    let form = document.querySelector ("form");
    let list = document.getElementById ("faultyItems")
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let faultyItems = document.getElementById("faultyItems");
    let launchStatus = document.getElementById("launchStatus");

    //add eventListener to the form botton
    form.addEventListener ("submit",function(event) {
        event.preventDefault();
        let pilot = document.querySelector ("input[name=pilotName]").value;
        let copilot = document.querySelector ("input[name=copilotName]").value;
        let fuelLevel = document.querySelector ("input[name=fuelLevel]").value;
        let cargoLevel = document.querySelector ("input[name=cargoMass]").value;
        
    formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel,pilotStatus, copilotStatus, faultyItems, launchStatus);
 
  

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    let selectedPlanet = pickPlanet(listedPlanets);
       addDestinationInfo(
        document,
        selectedPlanet.name,
        selectedPlanet.diameter, 
        selectedPlanet.star,
        selectedPlanet.distance,
        selectedPlanet.moons,
        selectedPlanet.image,
       
        ); 
        });
    });
});
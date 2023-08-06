// Write your JavaScript code here!
//inport functions from scriptHelper
const { addDestinationInfo, validateInput, formSubmission, pickPlanet, myFetch } = require("./scriptHelper");

//const { myFetch } = require("./scriptHelper");

//add eventlistenener - when window loads we see execute code
window.addEventListener("load", function() {
    //foarm from html
    let form = document.querySelector ("form");
    //add eventListener to the form botton
    form.addEventListener ("submit",function(event) {
        event.preventDefault();
        let pilot = document.querySelector ("input[name=pilotName]").value;
        let copilot = document.querySelector ("input[name=copilotName]").value;
        let fuelLevel = document.querySelector ("input[name=fuelLevel]").value;
        let cargoLevel = document.querySelector ("input[name=cargoMass]").value;
        //let list = document.getElementById ("faultyItems")
    formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel)
    });

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    const pickedPlanet = pickPlanet(listedPlanets);
       addDestinationInfo(
        document,
        pickedPlanet.name,
        pickedPlanet.diameter, 
        pickedPlanet.star,
        pickedPlanet.distance,
        pickedPlanet.image,
        pickedPlanet.moons,
        ); 
    })
   
});
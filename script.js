// Write your JavaScript code here!

function init () {

   /* This block of code shows how to format the HTML once you fetch some planetary JSON!
   <h2>Mission Destination</h2>
   <ol>
      <li>Name: ${}</li>
      <li>Diameter: ${}</li>
      <li>Star: ${}</li>
      <li>Distance from Earth: ${}</li>
      <li>Number of Moons: ${}</li>
   </ol>
   <img src="${}">
   */

   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      response.json().then(function(json) {
         let missionTarget = document.getElementById("missionTarget");
         missionTarget.innerHTML = `
            <h2>Mission Destination</h2>
            <ol>
               <li>Name: ${json[2].name}</li>
               <li>Diameter: ${json[2].diameter}</li>
               <li>Star: ${json[2].star}</li>
               <li>Distance from Earth: ${json[2].distance}</li>
               <li>Number of Moons: ${json[2].moons}</li>
            </ol>
            <img src="${json[2].image}">
         `;
      });
   });

   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      let pilotName = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoWeight = document.querySelector("input[name=cargoWeight]");

      let inputs = [pilotName, copilotName, fuelLevel, cargoWeight];
      for (let i = 0; i < inputs.length; i++) {
         if (inputs[i].value === "") {
            window.alert("Please fill out all fields!");
            preventDefault(event);
         }
      }
      if (!isNaN(pilotName.value)) {
         window.alert("Please enter a valid pilot name!");
         preventDefault(event);
      } else if (!isNaN(copilotName.value)) {
         window.alert("Please enter a valid copilot name!");
         preventDefault(event);
      } else if (isNaN(fuelLevel.value)) {
         window.alert("Please enter a valid fuel level!");
         preventDefault(event);
      } else if (isNaN(cargoWeight.value)) {
         window.alert("Please enter a valid cargo weight!");
         preventDefault(event);
      }

      let faultyItems = document.getElementById("faultyItems");
      let pilotStatus = document.getElementById("pilotStatus");
      let copilotStatus = document.getElementById("copilotStatus");
      let fuelStatus = document.getElementById("fuelStatus");
      let cargoStatus = document.getElementById("cargoStatus");
      let launchStatus = document.getElementById("launchStatus");

      if (fuelLevel.value < 10000 || cargoWeight.value > 10000) {
         faultyItems.style.visibility = "visible";
         launchStatus.innerHTML = "Shuttle not ready for launch";
         launchStatus.style.color = "red";
         pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready for launch.`;
         copilotStatus.innerHTML = `Copilot ${copilotName.value} is ready for launch.`;
         fuelStatus.innerHTML = "Fuel level high enough for launch.";
         cargoStatus.innerHTML = "Cargo mass low enough for launch.";
         if (fuelLevel.value < 10000) {
            fuelStatus.innerHTML = "Fuel level too low for launch.";
         }
         if (cargoWeight.value > 10000) {
            cargoStatus.innerHTML = "Cargo mass too high for launch.";
         } 
      } else {
         launchStatus.style.color = "green";
         launchStatus.innerHTML = "Shuttle is ready for launch";
      }
      
   });

   
}

window.onload = init

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/

// Write your JavaScript code here!

function init () {
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

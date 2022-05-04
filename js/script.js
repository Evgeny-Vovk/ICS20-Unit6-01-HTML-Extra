// Created by: Evgeny
// Created on: mar 2022
// This file contains the JS functions for index.html

if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit6-01-HTML-Extra/sw.js", {
    scope: "/ICS2O-Unit6-01-HTML-Extra/",
  })
}

/*** This function calculates volume of a pyramid.***/
function calculate() {
  
  // input
  const radius = parseInt(document.getElementById('radius').value)
  
  // process
  const volume = 4 / 3 * Math.PI * radius ** 3

  // output
  document.getElementById('volume').innerHTML = '<p>The volume is: ' + volume.toFixed(2) + ' cm³.</p>'
}

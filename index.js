/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let input = document.getElementById("input");
const button = document.querySelector("button");
let length = document.getElementById("length");
let volume = document.getElementById("volume");
let mass = document.getElementById("mass");


button.addEventListener("click", () => {
    let value = input.value;
    let meter = value * 3.281;
    let liter = value * 0.264;
    let kilogram = value * 2.204;
    let feet  = value / 3.281; 
    let gallon = value / 0.264;
    let pound = value / 2.204;
    length.innerHTML = `${value} meters = ${feet.toFixed(3)} feet | ${value} feet = ${meter.toFixed(3)} meters`;
    volume.innerHTML = `${value} liters = ${gallon.toFixed(3)} gallons | ${value} gallons = ${liter.toFixed(3)} liters`;
    mass.innerHTML = `${value} kilos = ${pound.toFixed(3)} pounds | ${value} pounds = ${kilogram.toFixed(3)} kilos`
})

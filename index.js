const convertBtn = document.getElementById("convert")
const inputValue = document.getElementById("inputValue")
const lengthValue = document.getElementById("length")
const volumeValue = document.getElementById("volume")
const massValue = document.getElementById("mass")

convertBtn.addEventListener("click", function(){
    let value = inputValue.value

    let feetResult = value * 3.281
    let meterResult = value * 0.305
    
    let gallonResult = value * 0.264
    let litersResult = value * 3.78541
    
    let poundsResult = value * 2.204
    let kilosResult = value * 0.453592
    
    let lengthOutput = `${value} meters = ${feetResult} feet | ${value} feet = ${meterResult} meters`
    let volumeOuput = `${value} liters = ${gallonResult} gallons | ${value} feet = ${litersResult} liters`
    let massOutput = `${value} kilos = ${poundsResult} pounds | ${value} pounds = ${kilosResult} kilos`
    
    // console.log(lengthOutput)
    // console.log(volumeOuput)
    // console.log(massOutput) 

    lengthValue.textContent = lengthOutput
    volumeValue.textContent = volumeOuput
    massValue.textContent = massOutput
})
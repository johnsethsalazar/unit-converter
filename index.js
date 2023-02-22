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
    
    let lengthOutput = `${value} meters = ${feetResult.toFixed(3)} feet | ${value} feet = ${meterResult.toFixed(3)} meters`
    let volumeOuput = `${value} liters = ${gallonResult.toFixed(3)} gallons | ${value} feet = ${litersResult.toFixed(3)} liters`
    let massOutput = `${value} kilos = ${poundsResult.toFixed(3)} pounds | ${value} pounds = ${kilosResult.toFixed(3)} kilos`
    
    // console.log(lengthOutput)
    // console.log(volumeOuput)
    // console.log(massOutput) 

    lengthValue.textContent = lengthOutput
    volumeValue.textContent = volumeOuput
    massValue.textContent = massOutput
})
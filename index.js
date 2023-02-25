const convertBtn = document.getElementById("convert")
const inputValue = document.getElementById("inputValue")
// const lengthValue = document.getElementById("length")
// const volumeValue = document.getElementById("volume")
// const massValue = document.getElementById("mass")
const darkMode = document.getElementById("dark-mode")

const feetValue = document.getElementById("feet")
const meterValue = document.getElementById("meter")

const gallonValue = document.getElementById("gallon")
const literValue = document.getElementById("liter")

const poundValue = document.getElementById("pound")
const kiloValue = document.getElementById("kilo")

convertBtn.addEventListener("click", function(){
    let value = inputValue.value

    let feetResult = value * 3.281
    let meterResult = value * 0.305
    
    let gallonResult = value * 0.264
    let litersResult = value * 3.78541
    
    let poundsResult = value * 2.204
    let kilosResult = value * 0.453592

    let feetOutput = `${value} meters = ${feetResult.toFixed(3)} feet`
    let meterOutput = `${value} feet = ${meterResult.toFixed(3)} meters`

    let gallonOutput = `${value} liters = ${gallonResult.toFixed(3)} gallons`
    let literOutput = `${value} gallons = ${litersResult.toFixed(3)} liters`

    let poundOutput = `${value} kilos = ${poundsResult.toFixed(3)} pounds`
    let kiloOutput = `${value} pounds = ${kilosResult.toFixed(3)} kilos`

    feetValue.innerText = feetOutput
    meterValue.innerText = meterOutput

    gallonValue.innerText = gallonOutput
    literValue.innerText = literOutput

    poundValue.innerText = poundOutput
    kiloValue.innerText = kiloOutput
    
    // let lengthOutput = `${value} meters = ${feetResult.toFixed(3)} feet | ${value} feet = ${meterResult.toFixed(3)} meters`
    // let volumeOuput = `${value} liters = ${gallonResult.toFixed(3)} gallons | ${value} feet = ${litersResult.toFixed(3)} liters`
    // let massOutput = `${value} kilos = ${poundsResult.toFixed(3)} pounds | ${value} pounds = ${kilosResult.toFixed(3)} kilos`

    

    // lengthValue.textContent = lengthOutput
    // volumeValue.textContent = volumeOuput
    // massValue.textContent = massOutput
})

darkMode.addEventListener("click", function(){
        let element = document.body
        let btn = document.getElementById("dark-mode")
        let output = document.getElementById("output")
        let result = document.getElementsByClassName("result")
        let unitName = document.getElementsByClassName("unit-name")
        let unitResult = document.getElementsByClassName("unit-result")
        element.classList.toggle("dark-mode-body")

        if(element.classList.contains("dark-mode-body")){
            btn.innerHTML = "Toggle Light Mode"
            btn.style.border = "1px solid white"
            btn.style.color = "black"
            btn.style.background = "white"
            output.style.background = "#1F2937"
            for(let i=0; i<result.length; i++){
                result[i].style.background = '#273549'
            }
            for(let i=0; i<unitName.length; i++){
                unitName[i].style.color = '#CCC1FF'
            }
            for(let i=0; i<unitResult.length; i++){
                unitResult[i].style.color = 'white'
            }
        }
        else{
            btn.innerHTML = "Toggle Dark Mode"
            btn.style.border = "1px solid black"
            btn.style.color = "white"
            btn.style.background = "black"
            output.style.background = "#F4F4F4"
            for(let i=0; i<result.length; i++){
                result[i].style.background = 'white'
            }
            for(let i=0; i<unitName.length; i++){
                unitName[i].style.color = '#5A537B'
            }
            for(let i=0; i<unitResult.length; i++){
                unitResult[i].style.color = '#353535'
            }
        }
    }
)
const consumption = document.querySelector('#consumption')
const price = document.querySelector('#price')
const distance = document.querySelector('#distance')
const error = document.querySelector('.error')
const btnCalc = document.querySelector('.btn-calc')
const btnClear = document.querySelector('.btn-clear')
const resultInfo = document.querySelector('.result-info')
const result = document.querySelector('.result')

const show = (e) => {
    console.log(e.target);
}

const addError = () => {
    error.style.display = 'block'
    result.textContent = '0.0 zł'
}

const clearError = () => {
    error.style.display = 'none'
}

const clearForm = (inputs) => {
    inputs.forEach(input => {
        input.value = ''
    })
    result.textContent = '0.0 zł'

}

const calculate = () => {
    const fuelBurnt = (consumption.value * distance.value) / 100
    const cost = (fuelBurnt * price.value).toFixed(1)
    result.textContent = `${cost} zł`

}

const checkForm = () => {
    const inputs = document.querySelectorAll('input')
    let count = 0
    
    inputs.forEach(input => {
        const inputNumber = parseInt(input.value)
        if (inputNumber <= 0 || input.value === '') {
            count++
        }

        if(count === 0) {
            clearError()
            calculate()
        } else {
            addError()
        }
    })
}

btnCalc.addEventListener('click', () => {
    checkForm()
})

btnClear.addEventListener('click', () => {
    clearError()
    clearForm([consumption, price, distance])
})
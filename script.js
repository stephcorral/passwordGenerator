//this just connects the range and the number to each other
const pwLenRange = document.getElementById('pwLenRange')
const pwLenNumber = document.getElementById('pwLenNumber')

//adding gernerator form
const form = document.getElementById('passwordGeneratorForm')
const includeUppercaseElement = document.getElementById('includeUppercase')
const includeLowercaseElement = document.getElementById('includeLowercase')
const includeNumbersElement = document.getElementById('includeNumbers')
const includeSymbolsElement = document.getElementById('includeSymbols')

//making the list of possible password characters

const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65,90)
const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97,122)
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48,57)
const SYMBOL_CHAR_CODES = arrayFromLowToHigh(33,47).concat(arrayFromLowToHigh(58,64)
).concat(
    arrayFromLowToHigh(91, 96)    
).concat(
    arrayFromLowToHigh(123,126)
)


pwLenNumber.addEventListener('input',syncPwLen)
pwLenRange.addEventListener('input',syncPwLen)

form.addEventListener('submit', e =>{
    e.preventDefault()
    const characterAmount = pwLenNumber.value
    const includeUppercase = includeUppercaseElement.checked
    const includeLowercase = includeLowercaseElement.checked
    const includeNumbers = includeNumbersElement.checked
    const includeSymbols = includeSymbolsElement.checked

    const password = generatePassword(characterAmount, includeUppercase, includeLowercase, includeNumbers, includeSymbols)
})

function generatePassword(characterAmount, includeUppercase, includeLowercase, includeNumbers, includeSymbols){
    console.log(LOWERCASE_CHAR_CODES)
}

function arrayFromLowToHigh(low, high){
    const array = []
    for(let i=low; i <=high; i++){
        array.push(i)
    }
    return array
}

function syncPwLen(e){
    const value = e.target.value
    pwLenNumber.value = value
    pwLenRange.value = value
}


const pwLenRange = document.getElementById('pwLenRange')
const pwLenNumber = document.getElementById('pwLenNumber')

pwLenNumber.addEventListener('input',syncPwLen)
pwLenRange.addEventListener('input',syncPwLen)

function syncPwLen(e){
    const value = e.target.value
    pwLenNumber.value = value
    pwLenRange.value = value
}
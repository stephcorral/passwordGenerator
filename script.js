

generate(){
    
    //possible password values
    const values = "ABCDEFGHIJKLMNOPQRSTUVWZYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";
    
    const password = "";
    
    const complexity = document.getElementById('pwLenRange').value;
    
    //create for loop to choose pw chars
    for(var i =0; i<= complexity; i++){
        password = password + values.charAt(Math.floor(Math.random()*Math.floor(values.length -1)))
    }
    
    //add password to display
    
    document.getElementById('passwordDisplay').value = password;
    
}


//this just connects the range and the number to each other

document.getElementById('pwLenRange').oninput = function(){

    if(document.getElementById('pwLenRange').value > 0){

        document.getElementById('pwLenNumber').innerHTML = document.getElementById('pwLenRange').value
    }
    else{
        document.getElementById('pwLenNumber').innerHTML = "1"
    }
}


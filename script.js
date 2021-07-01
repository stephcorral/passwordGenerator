
var values = "";

uppercase = () =>{

    var checkSelectUc = document.getElementById("includeUppercase");
    if(checkSelectUc.checked){
        values += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        
    }

}

lowercase = () =>{

    var checkSelectLc = document.getElementById("includeLowercase");
    if(checkSelectLc.checked){
        values += "abcdefghijklmnopqrstuvwxyz";
    }

}

numbers = () =>{

    var checkSelectNums = document.getElementById("includeNumbers");
    if(checkSelectNums.checked){
        values += "0123456789";
    }


}

symbols = () =>{

    var checkSelectSym = document.getElementById("includeSymbols");
    if(checkSelectSym.checked){
        values += "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    }


}




generate = () => {   
    

    //possible password values

    uppercase();
    lowercase();
    numbers();
    symbols();

    console.log(values);


    var password = "";
    
    var complexity = document.getElementById('pwLenRange').value;
    
    //create for loop to choose pw chars
    for(var i =0; i<= complexity; i++){
        password = password + values.charAt(Math.floor(Math.random()*Math.floor(values.length -1)))
    }
    
    //add password to display
    
    document.getElementById('passwordDisplay').innerText = password;
    
}



/*
//this just connects the range and the number to each other
var rangeNumValue = document.getElementById('pwLenRange').value;

var lenNum = document.getElementById('pwLenNumber').value;
console.log(lenNum);

 rangeLenSelector = ()=> {


    rangeNumValue= lenNum;

    
}

lenSelected = () => {

    lenNum = 12;
    console.log(rangeNumValue);


}

*/


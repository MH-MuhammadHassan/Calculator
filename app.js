let display = document.getElementById('display');

function getvalues(value){
    display.value +=value;
}

function cleardisplay(){
    display.value="";
}

function calculateresult(){
    try{                     // The try statement defines a code block to run (to try).
        display.value=eval(display.value);      //eval ("2+2")=4
    }
    catch(error){         // The catch statement defines a code block to handle any error.
        display.value=error;
    }
}
let keys = document.getElementsByClassName('buttons');

let calc = document.getElementById('calc');

let result = document.getElementById('resultsPane');
//I SET THE VISIBILITY ATTRIBUTE OF THE RESULTS SECTION TO HIDDEN, BECAUSE I SET THE INNERTEXT OF THE RESULT PANE TO UPDATE ALONGSIDE THAT OF THE CALCULATION PANE. BUT IT HAS TO STAY HIDDEN, AND ONLY SHOW UP TO DISPLAY RESULTS WHEN THE USER CLICKS THE EQUAL TO BUTTON. REALIZE THAT I USED THE EVAL() METHOD TO ACHIEVE THE NUMERICAL EVALUATION OF THE DIV'S CONTENTS

result.style.visibility = 'hidden';

let division = document.getElementById('divisionOperator')

let multiplication = document.getElementById('multiplicationOperator')

let addition = document.getElementById('additionOperator')

let minus = document.getElementById('minusOperator')

let equals = document.getElementById('equalsOperator')

let del = document.getElementById('deleteOperator')

let clearAll = document.getElementById('clearAllOperator')

let flag = false;



for(let i=0; i<keys.length; i++){
    keys[i].addEventListener('click', function() {
        //I SET ALL THE NUMBER KEY'S VALUE ATTRIBUTES TO 'NUMBERKEY' IN THE INDEX.HTML FILE, SO I COULD TARGET ALL AND MAKE THEM WORK FOR THIS PARTICULAR FUNCTION, TO PREVENT THE NON-NUMBER OPERATORS FROM PRINTING TO THE SCREEN
        //EDIT. I SET THE OPERATORS LIKE MINUS, PLUS, ETC TO THE 'NUMBERKEY' VALUE TOO.
        if (flag ==  true){
            calc.innerText = "";
            result.innerText = ""; 
            result.style.visibility = "hidden";
        }

        if (this.value === 'numberKey'){
            calc.append(this.innerText);
            result.append(this.innerText)
        }
        //THE 'THIS' KEYWORD WORKED BECAUSE THE EVENT LISTENER FUNCTION I WAS OPERATING ON WAS ON 'THAT' PARTICULAR NUMBER. I DON'T KNOW IF 'THIS' MAKES SENSE TO YOU, FUTURE ME... HEHE. SEE WHAT I DID THERE?
        else{
            
        }

        flag = false;

    })
}

del.addEventListener('click', () => {
    //I TRIED PAIRING THE REPLACE() FUNCTION WITH THE CHARAT() FUNCTION, BUT FOR SOME REASON, THOSE DIDN'T WORK. AT LAST, THE SUBSTRING() METHOD, HAVING NO CAMEL CASING, ENDED UP BEING THE METHOD FOR THE JOB.
    calc.innerText = calc.innerText.substring(0, calc.innerText.length-1);
    result.innerText = calc.innerText.substring(0, calc.innerText.length);
})

clearAll.addEventListener('click', () => {
    //I SIMPLY SET THE CONTENTS OF THE CALCULATION PANE TO AN EMPTY STRING, ON CLICKING THE CLEAR-ALL (AC) BUTTON.
    calc.innerText = "";
    result.innerText = ""; 
    result.style.visibility = "hidden";
    //I HAD TO SET THE VISIBILITY PARAMETER OF THE RESULTPANE BACK TO HIDDEN IN THE CLEARALL FUNCTION, BECAUSE WHENEVER THE EQUALS SIGN GETS USED, IT SETS IT TO 'VISIBLE' AND LEAVES IT THAT WAY.
});

equals.addEventListener('click', () => {
    
    calc.innerText = "";
    result.style.visibility = "visible";
    result.innerText = eval(result.innerText);
    flag =  true;
    
});




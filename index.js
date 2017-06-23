//CONTAINER FUNCTIONS

function dieRoll(dieNum, dieSize) {  //rolls a number of dice of a certain size (number of sides), returns total
    

    //Simple error handling
    if (dieNum < 1) {
        alert("Invalid number of dice. Fix the HTML.")
        dieNum = 1;
    }

    if (dieSize < 1) {
        alert("Invalid size of dice. Fix the HTML.")
        dieSize = 1;
    }

    //End of error handling
    
    var dieTotal = 0;
    
    for (var i = 1; i <= dieNum; i++) {
        dieTotal += Math.floor(Math.random() * dieSize) + 1; //rolls a die with a number of sides equal to dieSize, adds the roll to the total
    }

    return dieTotal;
}

function exDieRoll(dieNum, double10s) { //rolls dice from Exalted; ten-sided dice, target number 7, 10s count twice if double10s is true, returns successes
    //This doesn't yet handle funky charms like "reroll 6s once" and such; it'll eventually do that, but it's not a top priority
    var dieSize = 10; //Exalted dice are always d10s

    //Simple error handling
    if (dieNum < 1) {
        alert("Invalid number of dice. Fix the HTML.")
        dieNum = 1;
    }
    //End of error handling

    var successTotal = 0;
    
    for (var i = 1; i <= dieNum; i++) {
        var newRoll = Math.floor(Math.random() * dieSize) + 1;
        
        if (newRoll >= 7) {
            successTotal += 1;
        }
        
        if (newRoll == 10 && double10s == true) {
            successTotal += 1;
        }  
        
    }

    return successTotal;
}

function srDieRoll(dieNum) { //rolls dice from Shadowrun 20th; six-sided dice, target number 5, returns successes
    //This doesn't yet handle edge dice or 1s, because I can't remember the rules off the top of my head and it's not a top priority
    /*I could merge this function with the Exalted function to just roll against a target number and return results, but I won't do that because
    they need to diverge later*/

    var dieSize = 6; //Shadowrun dice are always d6s

    //Simple error handling
    if (dieNum < 1) {
        alert("Invalid number of dice. Fix the HTML.")
        dieNum = 1;
    }
    //End of error handling

    var successTotal = 0;
    
    for (var i = 1; i <= dieNum; i++) {
        var newRoll = Math.floor(Math.random() * dieSize) + 1;
    
        if (newRoll >= 5) {
            successTotal += 1;
        }
        
    }

    return successTotal;
}

//PRESENTATIONAL FUNCTIONS (sorta)

function roll(dieNum, dieSize) {  //rolls dice, formats the result as text, outputs it to 'result-display'

    var fakeJSX = '<p><b>RESULT</br></br>' + dieRoll(dieNum, dieSize) + '</b></p>';
    outputReplace("result-display", fakeJSX);
    changeBlinker();
}

function exRoll(dieNum, double10s) {  //rolls Exalted dice, formats the result as text, outputs it to 'result-display'

    var fakeJSX = '<p><b>EX SUCCESSES</br></br>' + exDieRoll(dieNum, double10s) + '</b></p>';
    outputReplace("result-display", fakeJSX);
    changeBlinker();
}

function srRoll(dieNum) {  //rolls Shadowrun 20th dice, formats the result as text, outputs it to 'result-display'

    var fakeJSX = '<p><b>SR SUCCESSES</br></br>' + srDieRoll(dieNum) + '</b></p>';
    outputReplace("result-display", fakeJSX);
    changeBlinker();
}

function changeBlinker(){  /*changes colors to indicate that a die roll has been completed; otherwise, if a die returns the same result twice in a row,
 it's hard to be sure it was actually rolled the second time */

var blinker = document.getElementById("blinker");

    if (blinker.style.backgroundColor == "white") {
    blinker.style.backgroundColor = "green";

    } else {
    blinker.style.backgroundColor = "white";
    }

}


//OUTPUT FUNCTIONS
//Outputs data stored in "content" to HTML element with id matching "target."

function outputReplace (target, content) {  //Replaces existing target content with new content
    document.getElementById(target).innerHTML = content;  
}

function outputAdd (target, content) {  //Adds new content to existing target content
    document.getElementById(target).innerHTML += content;  
}

function outputAddLine (target, content) {  //Adds new content to existing target content, in a new line
    document.getElementById(target).innerHTML += "<br\>" + content;  
}

//RANDOM FUNCTIONS
//randomItem selects a random position from the sourceArray, returning the contents at that position
//randomItemPosition selects a random position from the sourceArray, returning position instead of contents
//randomRoll returns a number between 1 and the maximum result

function randomItem(sourceArray) { //rolls a die with a number of sides equal to the array's items, returns contents of the resulting position
    var diceRoll = Math.floor(Math.random() * sourceArray.length); 
    return sourceArray[diceRoll];
}

function randomItemPosition(sourceArray) {
    var diceRoll = Math.floor(Math.random() * sourceArray.length); //rolls a die with a number of sides equal to the array's items, returns the roll
    return diceRoll;
}

function randomRoll(dieSize) {
    var diceRoll = Math.floor(Math.random() * dieSize) + 1; //rolls a die with a number of sides equal to dieSize, returns the roll
    return diceRoll;
}
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

function loadDiceLayout(fakeJSX){  //Loads one of the dice layouts into the content panel
    outputReplace ("dice-layout", fakeJSX)
};

//LAYOUT FUNCTIONS
//Use loadDiceLayout for various configurations; these functions mostly just serve to store the HTML for each layout

function loadStandard(){
    var fakeJSX = '\
        <div id="dice-layout">\
        <button class="button" onclick="roll(1, 4)">d4</button>\
        <button class="button" onclick="roll(1, 6)">d6</button>\
        <button class="button" onclick="roll(1, 8)">d8</button>\
        <button class="button" onclick="roll(1, 10)">d10</button>\
        <button class="button" onclick="roll(1, 12)">d12</button>\
        <button class="button" onclick="roll(1, 20)">d20</button>\
        <button class="button" onclick="roll(1, 100)">d100</button>\
        </div>\
    '

    loadDiceLayout(fakeJSX);
}

function loadExalted(){
    var fakeJSX = '\
        <div id="dice-layout">\
        <button class="button" onclick="exRoll(1, 1)">EX 1</button>\
        <button class="button" onclick="exRoll(2, 1)">EX 2</button>\
        <button class="button" onclick="exRoll(3, 1)">EX 3</button>\
        <button class="button" onclick="exRoll(4, 1)">EX 4</button>\
        <button class="button" onclick="exRoll(5, 1)">EX 5</button>\
        <button class="button" onclick="exRoll(6, 1)">EX 6</button>\
        <button class="button" onclick="exRoll(7, 1)">EX 7</button>\
        <button class="button" onclick="exRoll(8, 1)">EX 8</button>\
        <button class="button" onclick="exRoll(9, 1)">EX 9</button>\
        <button class="button" onclick="exRoll(10, 1)">EX 10</button>\
        <br \>\
        <button class="button" onclick="exRoll(11, 1)">EX 11</button>\
        <button class="button" onclick="exRoll(12, 1)">EX 12</button>\
        <button class="button" onclick="exRoll(13, 1)">EX 13</button>\
        <button class="button" onclick="exRoll(14, 1)">EX 14</button>\
        <button class="button" onclick="exRoll(15, 1)">EX 15</button>\
        <button class="button" onclick="exRoll(16, 1)">EX 16</button>\
        <button class="button" onclick="exRoll(17, 1)">EX 17</button>\
        <button class="button" onclick="exRoll(18, 1)">EX 18</button>\
        <button class="button" onclick="exRoll(19, 1)">EX 19</button>\
        <button class="button" onclick="exRoll(20, 1)">EX 20</button>\
        <br \>\
        <button class="button" onclick="exRoll(21, 1)">EX 21</button>\
        <button class="button" onclick="exRoll(22, 1)">EX 22</button>\
        <button class="button" onclick="exRoll(23, 1)">EX 23</button>\
        <button class="button" onclick="exRoll(24, 1)">EX 24</button>\
        <button class="button" onclick="exRoll(25, 1)">EX 25</button>\
        <button class="button" onclick="exRoll(26, 1)">EX 26</button>\
        <button class="button" onclick="exRoll(27, 1)">EX 27</button>\
        <button class="button" onclick="exRoll(28, 1)">EX 28</button>\
        <button class="button" onclick="exRoll(29, 1)">EX 29</button>\
        <button class="button" onclick="exRoll(30, 1)">EX 30</button>\
        </div>\
    '

    loadDiceLayout(fakeJSX);
}

function loadShadowrun(){
    var fakeJSX = '\
        <div id="dice-layout">\
        <button class="button" onclick="srRoll(1)">SR 1</button>\
        <button class="button" onclick="srRoll(2)">SR 2</button>\
        <button class="button" onclick="srRoll(3)">SR 3</button>\
        <button class="button" onclick="srRoll(4)">SR 4</button>\
        <button class="button" onclick="srRoll(5)">SR 5</button>\
        <button class="button" onclick="srRoll(6)">SR 6</button>\
        </div>\
    '

    loadDiceLayout(fakeJSX);
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
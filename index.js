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

function exDieRoll(dieNum) { //rolls dice from Exalted; ten-sided dice, target number 7, 10s count twice if double10s is true, returns successes
    //This doesn't yet handle funky charms like "reroll 6s once" and such; that stuff is fairly rare and would clutter up the interface too much

    var dieSize = 10; //Exalted dice are always d10s
    var double10s = false;
    if (document.getElementById("double10s").checked == true) {
        double10s = true;
    }

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

function changeBackground(newColor){  /*changes dice panel background color to the new color*/

var panel = document.getElementById("content");
  
    panel.style.backgroundColor = newColor;

}


function loadDiceLayout(fakeJSX){  //Loads one of the dice layouts into the content panel
    outputReplace ("dice-layout", fakeJSX)
};

//LAYOUT FUNCTIONS
//Use loadDiceLayout for various configurations; these functions mostly just serve to store the HTML for each layout

function loadStandard(){
    var fakeJSX = '\
        <div id="dice-layout">\
        <button class="button" onclick="roll(1, 4)">1d4</button>\
        <button class="button" onclick="roll(1, 6)">1d6</button>\
        <button class="button" onclick="roll(1, 8)">1d8</button>\
        <button class="button" onclick="roll(1, 10)">1d10</button>\
        <button class="button" onclick="roll(1, 12)">1d12</button>\
        <button class="button" onclick="roll(1, 20)">1d20</button>\
        \
        <button class="button button--divider" onclick="roll(4, 4)">4d4</button>\
        <button class="button" onclick="roll(4, 6)">4d6</button>\
        <button class="button" onclick="roll(4, 8)">4d8</button>\
        <button class="button" onclick="roll(4, 10)">4d10</button>\
        <button class="button" onclick="roll(4, 12)">4d12</button>\
        <button class="button" onclick="roll(4, 20)">4d20</button>\
        <br \>\
        <button class="button" onclick="roll(2, 4)">2d4</button>\
        <button class="button" onclick="roll(2, 6)">2d6</button>\
        <button class="button" onclick="roll(2, 8)">2d8</button>\
        <button class="button" onclick="roll(2, 10)">2d10</button>\
        <button class="button" onclick="roll(2, 12)">2d12</button>\
        <button class="button" onclick="roll(2, 20)">2d20</button>\
        \
        <button class="button button--divider" onclick="roll(5, 4)">5d4</button>\
        <button class="button" onclick="roll(5, 6)">5d6</button>\
        <button class="button" onclick="roll(5, 8)">5d8</button>\
        <button class="button" onclick="roll(5, 10)">5d10</button>\
        <button class="button" onclick="roll(5, 12)">5d12</button>\
        <button class="button" onclick="roll(5, 20)">5d20</button>\
        <br \>\
        <button class="button" onclick="roll(3, 4)">3d4</button>\
        <button class="button" onclick="roll(3, 6)">3d6</button>\
        <button class="button" onclick="roll(3, 8)">3d8</button>\
        <button class="button" onclick="roll(3, 10)">3d10</button>\
        <button class="button" onclick="roll(3, 12)">3d12</button>\
        <button class="button" onclick="roll(3, 20)">3d20</button>\
        \
        <button class="button button--divider" onclick="roll(6, 4)">6d4</button>\
        <button class="button" onclick="roll(6, 6)">6d6</button>\
        <button class="button" onclick="roll(6, 8)">6d8</button>\
        <button class="button" onclick="roll(6, 10)">6d10</button>\
        <button class="button" onclick="roll(6, 12)">6d12</button>\
        <button class="button" onclick="roll(6, 20)">6d20</button>\
        <br \>\
        </div>\
    '
    changeBackground("peachpuff");
    loadDiceLayout(fakeJSX);
}

function loadExalted(){
    var fakeJSX = '\
        <div id="dice-layout">\
        <div class="dice-section">\
        <button class="button button--exalted" onclick="exRoll(1)">EX 1</button>\
        <button class="button button--exalted" onclick="exRoll(2)">EX 2</button>\
        <button class="button button--exalted" onclick="exRoll(3)">EX 3</button>\
        <button class="button button--exalted" onclick="exRoll(4)">EX 4</button>\
        <button class="button button--exalted" onclick="exRoll(5)">EX 5</button>\
        </div>\
        <div class="dice-section">\
        <button class="button button--exalted  onclick="exRoll(6)">EX 6</button>\
        <button class="button button--exalted" onclick="exRoll(7)">EX 7</button>\
        <button class="button button--exalted" onclick="exRoll(8)">EX 8</button>\
        <button class="button button--exalted" onclick="exRoll(9)">EX 9</button>\
        <button class="button button--exalted" onclick="exRoll(10)">EX 10</button>\
        </div>\
        <div class="dice-section">\
        <button class="button button--exalted" onclick="exRoll(11)">EX 11</button>\
        <button class="button button--exalted" onclick="exRoll(12)">EX 12</button>\
        <button class="button button--exalted" onclick="exRoll(13)">EX 13</button>\
        <button class="button button--exalted" onclick="exRoll(14)">EX 14</button>\
        <button class="button button--exalted" onclick="exRoll(15)">EX 15</button>\
        </div>\
        <div class="dice-section">\
        <button class="button button--exalted" onclick="exRoll(16)">EX 16</button>\
        <button class="button button--exalted" onclick="exRoll(17)">EX 17</button>\
        <button class="button button--exalted" onclick="exRoll(18)">EX 18</button>\
        <button class="button button--exalted" onclick="exRoll(19)">EX 19</button>\
        <button class="button button--exalted" onclick="exRoll(20)">EX 20</button>\
        </div>\
        <div class="dice-section">\
        <button class="button button--exalted" onclick="exRoll(21)">EX 21</button>\
        <button class="button button--exalted" onclick="exRoll(22)">EX 22</button>\
        <button class="button button--exalted" onclick="exRoll(23)">EX 23</button>\
        <button class="button button--exalted" onclick="exRoll(24)">EX 24</button>\
        <button class="button button--exalted" onclick="exRoll(25)">EX 25</button>\
        </div>\
        <div class="dice-section">\
        <button class="button button--exalted" onclick="exRoll(26)">EX 26</button>\
        <button class="button button--exalted" onclick="exRoll(27)">EX 27</button>\
        <button class="button button--exalted" onclick="exRoll(28)">EX 28</button>\
        <button class="button button--exalted" onclick="exRoll(29)">EX 29</button>\
        <button class="button button--exalted" onclick="exRoll(30)">EX 30</button>\
        </div>\
    </div>\
    '

    changeBackground("rgb(159,171,183)");
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
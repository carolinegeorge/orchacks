var dict = [{name: "Four Seasons",
composer: "Antonio Vivaldi's", 
era: "Baroque",
mood: "Happy",
known: "Yes",
soloist: "No"},
{name: "5th Symphony",
composer: "Ludwig van Beethoven",
era: "Classical",
mood: "Assertive",
known: "Yes",
soloist: "No"},
{name: "Sinfonia in D major",
composer: "Johann Christian Bach",
era: "Baroque",
mood: "Sad",
known: "No",
soloist: "No"}]

var userInputQ1 = [];
var userInputQ2 = [];
var userInputQ3 = [];
var userInputQ4 = [];
var userInputQ5 = [];
var results = [];

var inputCounter = 0;
var resultCounter = 0;
var unknownPiece = false;
var soloistAvail = false;


//if the user chooses baroque, set the input as Baroque, etc: Q1
if(bar) { 
    userInputQ1[inputCounter] = "Baroque";
    inputCounter++;
}

if(clas) {
    userInputQ1[inputCounter] = "Classical";
    inputCounter++;
}

if(rom) {
    userInputQ1[inputCounter] = "Romantic";
    inputCounter++;
}

if(imp) {
    userInputQ1[inputCounter] = "Impressionist";
    inputCounter++;
}

if(twnc) {
    userInputQ1[inputCounter] = "20th Century";
    inputCounter++;
}

if(snd) {
    userInputQ1[inputCounter] = "Soundtrack";
    inputCounter++;
}

if(ane) {
    userInputQ1[inputCounter] = "Any";
    inputCounter++;
}

// if the user chooses moods, sets input as happy, etc 
if(stormy) {
    userInputQ2[inputCounter] = "stormy";
    inputCounter++


// goes through q1 and looks for era
for(var i = 0; i < userInputQ1.length; i++){
  for(var q = 0; q < dict.length; q++){
    if(dict[q].era === userInputQ1[i]){
      results[resultCounter] = dict[q];
      resultCounter++;
    }
  }
}

// goes through q2 and looks for moods
for(var i = 0; i < userInputQ2.length; i++){
  for(var q = 0; q < dict.length; q++){
    if(dict[q].mood === userInputQ2[i]){
      results[resultCounter] = dict[q];
      resultCounter++;
    }
  }
}

// goes through q3 and looks for answer (?)
for(var i = 0; i < userInputQ3.length; i++){
  for(var q = 0; q < dict.length; q++){
    if(userInputQ3[i]){
      results[resultCounter] = dict[q];
      resultCounter++;
    }
  }
}

// goes through q4 and finds Y/N/No pref
for(var i = 0; i < userInputQ4.length; i++){
  for(var q = 0; q < dict.length; q++){
    if(userInputQ4[i] == "Yes"){
      results[resultCounter] = dict[q];
      resultCounter++;
    }
  }
}

// goes through q5 and fnds Y/N/No pref
for(var i = 0; i < userInputQ5.length; i++){
  for(var q = 0; q < dict.length; q++){
    if(userInputQ5[i] == "No" || ){
    // don't do anything: keep it false
      resultCounter++;
    }
    else if(userInputQ5[i] == "Yes") { 
        soloistAvail = true;
        resultCounter++;
    }
    else { 
  }
}

//Now we can output results.



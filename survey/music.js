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



// Question 1 

var bar = false;
var clas = false;
var rom = false;
var imp = false;
var twnc = false;
var snd = false;
var ane = false;


function setBar() { 
    bar = true;
    clas = false;
    rom = false;
    imp = false;
    twnc = false;
    snd = false;
    ane = false;
}


function setClas() {
    bar = false;
    clas = true;
    rom = false;
    imp = false;
    twnc = false;
    snd = false;
    ane = false;
}

function setRom() {
    bar = false;
    clas = false;
    rom = true;
    imp = false;
    twnc = false;
    snd = false;
    ane = false;
}

function setImp() {
    bar = false;
    clas = false;
    rom = false;
    imp = true;
    twnc = false;
    snd = false;
    ane = false;    
}

function setTwnc() {
    bar = false;
    clas = false;
    rom = false;
    imp = false;
    twnc = true;
    snd = false;
    ane = false;
}

function setSnd() {
    bar = false;
    clas = false;
    rom = false;
    imp = false;
    twnc = false;
    snd = true;
    ane = false;
}

function setAne() {
    bar = false;
    clas = false;
    rom = false;
    imp = false;
    twnc = false;
    snd = false;
    ane = true;
}

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

// Question 2

var stormy = false;
var sad = false;
var joyful = false;
var epic = false;
var abstract = false;

function setStormy() {
    stormy = true;
    sad = false;
    joyful = false;
    epic = false;
    abstract = false;
}

function setSad() {
    stormy = false;
    sad = true;
    joyful = false;
    epic = false;
    abstract = false;
}

function setJoyful() {
    stormy = false;
    sad = false;
    joyful = true;
    epic = false;
    abstract = false;
}

function setEpic() {
    stormy = false;
    sad = false;
    joyful = false;
    epic = true;
    abstract = false;
}

function setAbstract() {
    stormy = false;
    sad = true;
    joyful = false;
    epic = false;
    abstract = false;
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



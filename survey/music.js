var dict = [{name: "Four Seasons",
composer: "Antonio Vivaldi's", 
era: "Baroque",
mood: "Happy",
known: "Yes",
soloist: "No",
date: "05/12/2016", 
id: 1},
{name: "5th Symphony",
composer: "Ludwig van Beethoven",
era: "Classical",
mood: "Epic",
known: "Yes",
soloist: "No",
date: "07/02/2016",
id: 2},
{name: "Sinfonia in D major",
composer: "Johann Christian Bach",
era: "Baroque",
mood: "Sad",
known: "No",
soloist: "No",
date: "10/08/2015",
id: 3},
{name: "1812 Overture",
composer: "Peter Tchaikovsky",
era: "Impressionist",
mood: "Epic",
known: "Yes",
soloist: "No",
date: "07/20/2017",
id: 4},
{name: "Toccata And Fugue In D Minor",
composer: "Johann Sebastian Bach",
era: "Baroque",
mood: "Sad",
known: "Yes",
soloist: "No",
date: "01/12/2016",
id: 5},
{name: "Messiah: Hallelujah Chorus",
composer: "George Frideric Handel",
era: "Baroque",
mood: "Joyful",
known: "Yes",
soloist: "No",
date: "06/09/2016",
id: 6},
{name: "Gayane: Sabre Dance",
composer: "Aram Khachaturian",
era: "20th Century",
mood: "Joyful",
known: "Yes",
soloist: "No",
date: "12/17/2015",
id: 7},
{name: "Bolero",
composer: "Maurice Ravel",
era: "20th Century",
mood: "Abstract",
known: "Yes",
soloist: "No",
date: "04/22/2017",
id: 8},
{name: "Funeral March",
composer: "Frederic-Francois Chopin",
era: "Romantic",
mood: "Abstract",
known: "Yes",
soloist: "No",
date: "08/28/2016",
id: 9},
{name: "Magic Flute: Queen Of The Night",
composer: "Wolfgang Amadeus Mozart",
era: "Classical",
mood: "Epic",
known: "Yes",
soloist: "No",
date: "02/15/2016",
id: 10}];

// needed for keyvalue stuff
var keyvalDict = [];
var keyvalPosn = 0;


//DATE

var userInputQ1;
var userInputQ2;
var userInputQ3;
var userInputQ4;
var userInputQ5;

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

//Question 3

var none = false;
var pyotr = false;
var beethoven = false;
var mozart = false;
var bach = false;

function setNone(){
    none = true;
    pyotr = false;
    beethoven = false;
    mozart = false;
    bach = false;
}
function setPyotr(){
    none = false;
    pyotr = true;
    beethoven = false;
    mozart = false;
    bach = false;
}
function setBeethoven(){
    none = true;
    pyotr = false;
    beethoven = false;
    mozart = false;
    bach = false;
}
function setMozart(){
    none = false;
    pyotr = false;
    beethoven = false;
    mozart = true;
    bach = false;
}
function setBach(){
    none = false;
    pyotr = false;
    beethoven = false;
    mozart = false;
    bach = true;
}


//QUESTION 4


var Q4Yes = false;
var Q4No = false;
var Q4Pref = false;

function setQ4Yes(){
    Q4Yes = true;
    Q4No = false;
    Q4Pref = false;
}
function setQ4No(){
    Q4Yes = false;
    Q4No = true;
    Q4Pref = false;
}
function setQ4Pref(){
    Q4Yes = false;
    Q4No = false;
    Q4Pref = true;
}

// Question 5
var Q5Yes = false;
var Q5No = false;
var Q5Pref = false;

function setQ5Yes(){
    Q5Yes = true;
    Q5No = false;
    Q5Pref = false;
}
function setQ5No(){
    Q5Yes = false;
    Q5No = true;
    Q5Pref = false;
}
function setQ5Pref(){
    Q5Yes = false;
    Q5No = false;
    Q5Pref = true;
}

//if the user chooses baroque, set the input as Baroque, etc: All Question
function submitStuff(){
    //Q1
    if(bar) { 
        userInputQ1 = "Baroque";
    }
    else if(clas) {
        userInputQ1= "Classical";
    } 
    else if(rom) {
        userInputQ1 = "Romantic";
    }
    else if(imp) {
        userInputQ1 = "Impressionist";
    }
    else if(twnc) {
        userInputQ1 = "20th Century";
    }
    else if(snd) {
        userInputQ1 = "Soundtrack";
    }
    else if(ane) {
        userInputQ1 = "Any";
    }
    //Q2
    if(stormy) {
        userInputQ2 = "Stormy";
    }
    else if(sad) {
        userInputQ2 = "Sad";
    }
    else if(joyful) {
        userInputQ2 = "Joyful";
    }
    else if(epic) {
        userInputQ2 = "Epic";
    }
    else if(abstract) {
        userInputQ2 = "Abstract";
    }
    //Q3
    if(none) {
        userInputQ3 = "";
    }
    else if(pyotr) {
        userInputQ3 = "Pyotr Ilyich Tchaikovsky";
    }
    else if(beethoven) {
        userInputQ3 = "Ludwig van Beethoven";
    }
    else if(mozart) {
        userInputQ3 = "Wolfgang Amadeus Mozart";
    }
    else if(bach) {
        userInputQ3 = "Johann Sebastian Bach";
    }
    //Q4 
    if(Q4Yes) {
        userInputQ4 = "Yes";
    }
    else if(Q4No) { 
        userInputQ4 = "No";
    }
    else if(Q4Pref) {
        userInputQ4 = "Pref";
    }
    //Q5
    if(Q5Yes) {
        userInputQ5 = "Yes";
    }
    else if(Q5No) {
        userInputQ5 = "No";
    }
    else if(Q5Pref) {
        userInputQ5 = "Pref";
    }
    
    // goes through q1 and looks for era
    for(var q = 0; q < dict.length; q++){
      if(dict[q].era === userInputQ1){
        results[resultCounter] = dict[q];
        resultCounter++;
      }
    }


    // goes through q2 and looks for moods
    for(var q = 0; q < dict.length; q++){
        if(dict[q].mood === userInputQ2){
          results[resultCounter] = dict[q];
          resultCounter++;
        }
    }

    // goes through q3 and looks for answer (?)
    for(var q = 0; q < dict.length; q++){
        if(userInputQ3 === dict[q].composer){
          results[resultCounter] = dict[q];
          resultCounter++;
        }
    }


    // goes through q4 and finds Y/N/No pref
    for(var q = 0; q < dict.length; q++){
        if(userInputQ4 === dict[q].known){
            results[resultCounter] = dict[q];
            resultCounter++;
        }
    }


    // goes through q5 and fnds Y/N/No pref
    for(var q = 0; q < dict.length; q++){
        if(userInputQ4 === dict[q].known){
            results[resultCounter] = dict[q];
            resultCounter++;
        }
    }

    // to sort id's
    function idCompare(a,b) {
      if (a.id < b.id) {
        return -1;
      }
      else if (a.id > b.id) {
        return 1;
      }
      else {
      return 0;
      }
    }

    // to sort by occurrence 
    function idArrayCompare(a,b) {
      if (a[0] > b[0]) {
        return -1;
      }
      else if (a[0] < b[0]) {
        return 1;
      }
      else {
        return 0;
      }
    }


    results.sort(idCompare);

    // finding how many occurrences for each element
    for(var i = 0; i < results.length; i++){
        keyvalDict[keyvalPosn] = [1, results[i]];
        for(var q = i + 1; q < results.length; q++){
            if(results[i].id === results[q].id){
                keyvalDict[keyvalPosn][0]++;
                i = q;
            }
          else {
            keyvalPosn++;
            break;
          }
        }
    }
    results = [];
    keyvalDict.sort(idArrayCompare);
    for(var m = 0; m < keyvalDict.length; m++){
        results[m] = keyvalDict[m][1];
    }

    document.getElementById('results').appendChild(makeTable(results));
}



//Now we can output results.
function makeTable(array) {

    // Create the list element:
    var table = document.createElement('table');
    
    if(array.length == 0){
        console.log("no matches");
        return table;
    }
    var tableHead = document.createElement('thead');

    var tHeadRow = document.createElement('tr');

    var tHeadData = [];
    for(var i = 0; i < 5; i++) {
        tHeadData[i] = document.createElement('th');
    }

    tHeadData[0].appendChild(document.createTextNode("Piece"));
    tHeadData[1].appendChild(document.createTextNode("Composer"));
    tHeadData[2].appendChild(document.createTextNode("Era"));
    tHeadData[3].appendChild(document.createTextNode("Mood"));
    tHeadData[4].appendChild(document.createTextNode("Date Playing"));

    for(var i = 0; i < 5; i++) {
        tHeadRow.appendChild(tHeadData[i]);
    }
    tableHead.appendChild(tHeadRow);

    var tableBody = document.createElement('tbody');

    var tBodyRow = [];
    var tBodyData = [];

    for (var i = 0; i < array.length; i++) {
        tBodyRow[i] = document.createElement('tr');

        for (var j = 0; j < 5; j++) {
            tBodyData[j] = document.createElement('td');
        }
        tBodyData[0].appendChild(document.createTextNode(array[i].name));
        tBodyData[1].appendChild(document.createTextNode(array[i].composer));
        tBodyData[2].appendChild(document.createTextNode(array[i].era));
        tBodyData[3].appendChild(document.createTextNode(array[i].mood));
        tBodyData[4].appendChild(document.createTextNode(array[i].date));

        for(var k = 0; k < 5; k++) {
            tBodyRow[i].appendChild(tBodyData[k]);
        }

        tableBody.appendChild(tBodyRow[i]);
    }

    table.appendChild(tableHead);
    table.appendChild(tableBody);

    // Finally, return the constructed table:
    return table;
}

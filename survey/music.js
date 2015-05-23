var dict = [{name: "Four Seasons",
composer: "Antonio Vivaldi's", 
era: "Baroque"
mood: "Happy"},
{name: "5th Symphony",
composer: "Ludwig van Beethoven",
era: "Classical",
mood: "Assertive"},
{name: "Symphony in D major",
composer: "Johann Christian Bach",
era: "Baroque",
mood: "Sad"}]

var userInputQ1 = [];
var userInputQ2 = [];
var userInputQ3 = [];
var userInputQ4 = [];
var userInputQ5 = [];
var results = [];

var inputCounter = 0;
var resultCounter = 0;


//if the user chooses baroque, set the input as Baroque, etc
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
for(var i = 0; i < userInputQ4.length; i++){
  for(var q = 0; q < dict.length; q++){
    if(dict[q].era === userInputQ4[i]){
      results[resultCounter] = dict[q];
      resultCounter++;
    }
  }
}

//Now we can output results.



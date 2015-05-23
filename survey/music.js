var dict = [{name: "Four Seasons",
composer: "Antonio Vivaldi's"},
{name: "5th Symphony",
composer: "Beethoven"
era: "Classical",
mood: "Assertive"},
{name: "Symphony in D major",
composer: "Johann Christian Bach",
era: "Buroque",
mood: "Sad"}}

var userInputQ1 = [];
var userInputQ2 = [];
var userInputQ3 = [];
var userInputQ4 = [];
var results = [];

var inputCounter = 0;
var resultCounter = 0;

for(var i = 0; i < userInputQ1.length; i++){
  for(var q = 0; q < dict.length; q++){
    if(dict[q].era === userInputQ1[i]){
      results[resultCounter] = dict[q];
      resultCounter++;
    }
  }
}
for(var i = 0; i < userInputQ2.length; i++){
  for(var q = 0; q < dict.length; q++){
    if(dict[q].era === userInputQ2[i]){
      results[resultCounter] = dict[q];
      resultCounter++;
    }
  }
}
for(var i = 0; i < userInputQ3.length; i++){
  for(var q = 0; q < dict.length; q++){
    if(dict[q].era === userInputQ3[i]){
      results[resultCounter] = dict[q];
      resultCounter++;
    }
  }
}
for(var i = 0; i < userInputQ4.length; i++){
  for(var q = 0; q < dict.length; q++){
    if(dict[q].era === userInputQ4[i]){
      results[resultCounter] = dict[q];
      resultCounter++;
    }
  }
}

//Now we can output results.



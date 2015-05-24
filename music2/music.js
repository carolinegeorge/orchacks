if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);
  var dict = [{name: "New World Symphony", composer: "Antonin Dvorak", period: "Romantic", date: "2015"},
	             {name: "Symphony No. 25 in G Minor", composer: "Wolfgang Amadeus Mozart", period: "Classical", date: "2016"}];
  var results = [];

  Template.hello.helpers({
    
  });
  Template.resultSubmit.events({
    "submit": function() {
      var date = "2015";
      var period = "Romantic";
      var counter = 0;
      for(var i = 0; i < dict.length; i++){
        if(dict[i].date === date){
          results[counter] = dict[i];
          counter++;
        }
        else if (dict[i].period === period){
          results[counter] = dict[i];
          counter++;
        }
      }
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

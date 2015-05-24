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



//Now we can output results.
function makeTable(array) {
    // Create the list element:
    var table = document.createElement('table');

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



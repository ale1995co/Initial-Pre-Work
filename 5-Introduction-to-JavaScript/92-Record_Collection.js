// Using obect properties to build a Record collection
"tracks": [
  "1999",
  "Little Red Corvette"
]
},
"1245": {
"artist": "Robert Palmer",
"tracks": [ ]
},
"5439": {
"album": "ABBA Gold"
}
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {
if(prop === "tracks" && value !=="") {
if(collection[id][prop]) {
collection[id][prop].push(value);
}
else {
collection[id][prop]=[value];
}
} else if (value !=="") {
collection[id][prop]=value;
} else {
delete collection[id][prop];
}


return collection;
}

// Alter values below to test your code
updateRecords(5439, "artist", "ABBA");
updateRecords(5439, "tracks", "Take a Chance on Me");
updateRecords(2548, "artist", "");
updateRecords(1245, "tracks", "Addicted to Love");
updateRecords(2468, "tracks", "Free");
updateRecords(2548, "tracks", "");
updateRecords(1245, "alblum", "Riptide");

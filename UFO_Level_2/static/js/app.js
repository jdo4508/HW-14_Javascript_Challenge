// from data.js
var tableData = data;

//View data in console
console.log(tableData);

//Create variable for table body
var tbody = d3.select("tbody");


// Create function that will add data to the table
// (datetime, city, state, country, shape, duration, comments)
function createTable(data) {
  tbody.html("");

 
 //for each sighting event, append rows and cells to table
  data.forEach((sighting) => {
    
      var row = tbody.append("tr");
      Object.entries(sighting).forEach(function([key, value]) {
        console.log(key, value);

        var cell = row.append("td");
        cell.text(value);
    });
  });
}

  // Create function for when the button is selected
function buttonClick() {
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");
  let filteredData = tableData;

  // Check the date that is input and the table data
  console.log(inputValue);
  console.log(tableData);
  
  // Grab the user input to filter the data
  if (inputValue) {
    filteredData = tableData.filter(sightings => sightings.datetime === inputValue);
}
  
// Check to see if the data filtered correctly
console.log(filteredData);

// Build the filtered table
createTable(filteredData);
}

// Select the button
var button = d3.select("#filter-btn");
button.on("click", buttonClick);

// Build the unfiltered table
createTable(tableData);
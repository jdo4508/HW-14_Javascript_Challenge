// from data.js
var tableData = data;

//View data in console
console.log(tableData);

//Create variable for table body
var tbody = d3.select("tbody");


// Create function that will add data to the table (datetime, city, state, country, shape, duration, comments)
function createTable(data) {
  tbody.html("");

 
 //For each sighting event, append rows and cells to table
  data.forEach((sighting) => {
    
      var row = tbody.append("tr");
      Object.entries(sighting).forEach(function([key, value]) {
        console.log(key, value);

        var cell = row.append("td");
        cell.text(value);
    });
  });
}

  //Create function for button
function buttonClick() {
  //Select the date element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  //Get the value from the input 
  var inputValue = inputElement.property("value");
  let filteredData = tableData;

  //View table data
  console.log(inputValue);
  console.log(tableData);
  
  //Use user input to filter the data
  if (inputValue) {
    filteredData = tableData.filter(sightings => sightings.datetime === inputValue);
}
  
//View data for proper filtering
console.log(filteredData);

//Create the filtered table
createTable(filteredData);
}

//create button for filtering
var button = d3.select("#filter-btn");
button.on("click", buttonClick);

//Create table 
createTable(tableData);
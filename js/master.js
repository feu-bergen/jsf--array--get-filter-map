// get data from API and pass it striaght to handler function
fetch("https://api.punkapi.com/v2/beers")
 .then(resp => resp.json())
 .then(handleApiJson);

// handle response
function handleApiJson(json) {

    // filter out beers that are less than 5% abv
    
    // convert data to HTML
    // make sure to join("") the mapped array

    // select element and update the innerHTML with what we have created
}
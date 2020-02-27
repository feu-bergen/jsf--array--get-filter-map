// get data from API and pass it striaght to handler function
fetch("https://api.punkapi.com/v2/beers")
 .then(resp => resp.json())
 .then(handleApiJson);

// handle response
function handleApiJson(json) {

    // filter out beers that are less than 5% abv
    const strongBeers = json.filter(beer => beer.abv >= 5);

    
    // convert data to HTML
    const beersHTML = strongBeers.map(beer => `
        <article class="beer">
            <h2 class="beer__name">${beer.name}</h2>
            <h3 class="beer__tagline">${beer.tagline}</h3>

            <img class="beer__img" src="${beer.image_url}" alt="${beer.name} image" />
            
            <p class="beer__description">${beer.description}</p>

            <div class="beer__abv">${beer.abv}%</div>
        </article>
    `).join(""); // make sure to join("") the mapped array


    // select element and update the innerHTML with what we have created
    document.getElementById("beers").innerHTML = beersHTML;
}
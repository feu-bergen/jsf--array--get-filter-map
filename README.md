# Array map and filter

Get beer data from Brew Dog API and display the beers that are above 5% abv.

API URL: https://api.punkapi.com/v2/beers.

Output HTML is in the format:
```
<article class="beer">
    <h2 class="beer__name">NAME</h2>
    <h3 class="beer__tagline">TAGLINE</h3>

    <img class="beer__img" src="IMAGE URL" alt="NAME image" />
    
    <p class="beer__description">DESCRIPTION</p>

    <div class="beer__abv">ABV%</div>
</article>
```

**Note:** Styles are provided for you in master.css. Look in the file to find the approriate class names to use on your HTML elements.

### Example

[The example is here](https://jsf-array-get-filter-map.now.sh).

## Task

Clone or download this repository onto your computer.  You will start out in the "master" branch which contains an empty project.

Try to recreate the website above.  Firstly, try to create it without any help.  If you are unsure of what to do, you can follow the steps below.  If the steps don't help, checkout out the "answer" branch from this repository.  The answer branch contains a working example.

## Steps

1. Use fetch to retrieve JSON data (How to fetch: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch).
1. The returned data is an array of beer objects.  Use filter to select only the beers that have a abv of 5 or higher.
1. Then use the map function to convert the beer objects to HTML.
1. Make sure to join the array of HTML together (array.join("")).
1. Then update the innerHTML of the #beers element to the HTML that was created.
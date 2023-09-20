import { dataMap, buildData } from "./js/dataFetch.js";
import { searchHeightWeight } from "./js/search.js";

// let data = await buildData();
let data = dataMap;

// set trait and translate weight to mass
let trait = "mass";

// Get top5 characters matching input
let top5 = searchHeightWeight(trait, 75, data);

// Build top5 HTML
let top5HTML = "";
top5.forEach((character) => {
	console.log(character[trait]);
	top5HTML += `<li>${character.name} at ${character[trait]}</li>`;
});

document.querySelector('#answer').innerHTML = `
	<ol>
	${top5HTML}
	</ol>
`;

// render data to html
document.querySelector('#data').innerText = JSON.stringify(data, null, 2);
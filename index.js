import { dataMap, buildData } from "./js/dataFetch.js";
import { searchHeights } from "./js/search.js";

// let data = await buildData();
let data = dataMap;


let top5 = searchHeights(177.8, data);
let top5HTML = "";
top5.forEach((character) => {
	console.log(character);
	top5HTML += `<li>${character.name} at ${character.height}</li>`;
});

document.querySelector('#answer').innerHTML = `
	<ol>
	${top5HTML}
	</ol>
`;

// render data to html
document.querySelector('#data').innerText = JSON.stringify(data, null, 2);
import { dataMap, buildData } from "./js/dataFetch.js";
import { searchHeightWeight } from "./js/search.js";

document.querySelector('#findClone').addEventListener('click', findClone);

async function findClone() {
	const loader = document.querySelector('#loader');
	loader.style.display = "block";

	// let data = await buildData();
	let data = dataMap;

	const trait = document.querySelector('#trait').value;
	const userValue = document.querySelector('#userValue').value;

	// Get top5 characters matching input
	let top5 = searchHeightWeight(trait, userValue, data);

	// Build top5 HTML
	let top5HTML = "";
	top5.forEach((character) => {
		top5HTML += `<li>${character.name} at ${character[trait]}</li>`;
	});

	setTimeout(() => {
		loader.style.display = "none";
		document.querySelector('#answer').innerHTML = `
			<ol>
				${top5HTML}
			</ol>
		`;
	}, 5000);


	// render additional data to html
	// document.querySelector('#data').innerText = JSON.stringify(data, null, 2);
}
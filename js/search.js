

/**
 * Returns the 5 characters whose heights are closest to the user's
 * @param {string} trait - only supports height or mass currently
 * @param {number} userValue - a user's height/weight in cm/kg
 * @returns {Array} - 5 characters whose heights/weights are closest to the user's
 */
export function searchHeightWeight(trait="height", userValue, data) {
	// loop through data
	// find 5 characters where abs(character.trait - userValue) is the smallest number
	data.forEach(character => {
		character['diff'] = Math.abs(character[trait] - userValue);
	});

	data.sort((a, b) => {
		return a['diff'] - b['diff'];
	});

	console.log(data);
	let top5 = data.slice(0, 5);
	return top5;
}
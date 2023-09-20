/**
 * Sorts character list by given trait in given order
 * @param {Array} characters - array of characters
 * @param {string} trait - only supports height or weight currently
 * @param {string} order - "asc" or "desc" for ascending or descending order
 * @returns {Array}
 */
export function sortCharactersByTrait(characters, trait="height", order="desc") {
	characters.sort((a, b) => {
		if (order === 'asc') {
			return Math.sign(parseInt(a[trait]) - parseInt(b[trait]));
		}
		return Math.sign(parseInt(b[trait]) - parseInt(a[trait]));
	});

	return characters;
}
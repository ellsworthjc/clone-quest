export const unitsMap = {
	"imperial": {
		"length": "inches",
		"weight": "pounds",
	},
	"metric": {
		"length": "centimeters",
		"weight": "kilograms"
	},
}

/**
 * Converts feet/inches to just inches
 * @param {number} feet
 * @param {number} inches
 * @returns {number}
 */
export function ftInchesToInches(feet, inches) {
	return parseInt(feet * 12) + parseInt(inches);
}
/**
 * Converts inches to cm
 * @param {number} inches
 * @returns {number}
 */
export function inchesToCm(inches) {
	return parseInt(inches * 2.54);
}

/**
 * Converst pounds to inches
 * @param {number} pounds
 * @returns {number}
 */
export function poundsToKg(pounds) {
	return parseInt(pounds / 2.2046);
}
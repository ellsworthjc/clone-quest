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
 * @param {number} heightInInches
 * @returns {number}
 */
export function inchesToCm(heightInInches) {
	return parseInt(heightInInches * 2.54);
}
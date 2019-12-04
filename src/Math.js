/**
 * Create an array of a numeric squence
 * @example
 * // returns [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5]
 * Math.linspace(0, 5, 10);
 * @param {Number} start Lower range of the squence
 * @param {Number} end Upper range of the squence
 * @param {Number} amount Amount of elements in the sequence
 * @returns {Array} Returns the numeric array
 */
Math.linspace = function (start, end, amount) {
    if(typeof(start) != "number") throw new Error("Missing the first parameter");
    if(typeof(end) != "number") throw new Error("Missing the second parameter");

    amount = amount || 100;
    
	let sum = start;
    let arr = [];
    
	while(sum < end){
        arr.push(sum);
		sum += (end - start) / amount;
    }
    
	return arr;
}
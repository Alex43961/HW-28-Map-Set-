let myArray = [6, 3, 44, 1, 9, 10, 3, 5, 3, 5, 6, 44, 3, 5, 6, 1];

const mapFromArray = function (f) {
	let newArray = new Set(f.sort(function (a, b) {
		return a - b;
	}));

	let x = new Map(newArray[i], newArray[i + 1]);

	console.log(newArray);
	console.log(x);
}



mapFromArray(myArray);
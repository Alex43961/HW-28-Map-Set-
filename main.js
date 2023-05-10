let myArray = [6, 3, 44, 1, 9, 10, 3, 5, 3, 5, 6, 44, 3, 5, 6, 1];

const mapFromArray = function (f) {
	let myCollection = new Set(f.sort(function (a, b) {
		return a - b;
	}));
	const newArray = [...myCollection];
	const arrayOfArrays = [];
	for (let i = 0; i < newArray.length -1; i++) {
		let y = [newArray[i], newArray[i + 1]];
		arrayOfArrays.push(y);
	}
	const myMap = new Map(arrayOfArrays);

	return myMap ;

}

console.log(mapFromArray(myArray));
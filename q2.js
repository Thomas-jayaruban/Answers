


	function areEqual(arr1, arr2)
	{
		let array1 = arr1.length;
		let array2 = arr2.length;

		// If lengths of array are not equal means
		// array are not equal
		if (array1 != array2)
			return false;

		

		// compare the type of elements
		for (let i = 0; i < array1; i++)
			if (typeof(arr1[i] ) != typeof(arr2[i]))
				return false;

		// If all type of elements were same.
		return true;
	}


	let arr1 =   [1,2,[2,3,4,[4,5]]];
	let arr2 =[1,2,[2,3,4,[7,3]]] ;

	if (areEqual(arr1, arr2))
		console.log("Yes");
	else
		console.log("No");


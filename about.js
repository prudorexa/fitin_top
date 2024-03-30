async function fetchAboutData () {
	const url = 'https://exercisedb.p.rapidapi.com/exercises/name/%7Bname%7D?limit=10';
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': 'd1149e1416msh198f6fe8182459cp10bc36jsn4768637519c9',
			'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
		}
	};
	
	try {
		const response = await fetch(url, options);
		const result = await response.text();
		console.log(result);
	} catch (error) {
		console.error(error);
	}
}	
fetchAboutData();

async function fetchFitInTopData (){
const url = 'https://fitness10.p.rapidapi.com/';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd1149e1416msh198f6fe8182459cp10bc36jsn4768637519c9',
		'X-RapidAPI-Host': 'fitness10.p.rapidapi.com'
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
fetchFitInTopData();

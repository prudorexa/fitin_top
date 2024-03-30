async function fetchBmiData () {
const url = 'https://fitness-calculator.p.rapidapi.com/dailycalorie?age=25&gender=male&height=180&weight=70&activitylevel=level_1';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd1149e1416msh198f6fe8182459cp10bc36jsn4768637519c9',
		'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
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

fetchBmiData();
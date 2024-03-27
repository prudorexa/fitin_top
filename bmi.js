
async function fetchBmiData() {
const url = 'https://body-mass-index-bmi-calculator.p.rapidapi.com/metric?weight=150&height=1.83';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd1149e1416msh198f6fe8182459cp10bc36jsn4768637519c9',
		'X-RapidAPI-Host': 'body-mass-index-bmi-calculator.p.rapidapi.com'
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
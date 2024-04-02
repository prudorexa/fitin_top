const url = 'https://exercisedb.p.rapidapi.com/exercises?limit=10';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '8b2406591fmsh7e1778906aba802p19c05cjsn8882346b4d52',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};
async function fetchAndDisplayExercises() {
    try {
        const response = await fetch(url, options);
        const exercises = await response.json();
        displayExercises(exercises);
    } catch (error) {
        console.error(error);
    }
}
function displayExercises(exercises) {
    const exerciseContainer = document.getElementById('exercise-container');
    exercises.forEach(exercise => {
        const exerciseDiv = document.createElement('div');
        exerciseDiv.classList.add('exercise');
        exerciseDiv.innerHTML = `
            <h2>${exercise.name}</h2>
            <p><strong>Body Part:</strong> ${exercise.bodyPart}</p>
            <p><strong>Equipment:</strong> ${exercise.equipment}</p>
            <img src="${exercise.gifUrl}" alt="${exercise.name}">
            <p><strong>Target Muscles:</strong> ${exercise.target}</p>
            <p><strong>Secondary Muscles:</strong> ${exercise.secondaryMuscles.join(', ')}</p>
            <h3>Instructions:</h3>
            <ol>
                ${exercise.instructions.map(instruction => `<li>${instruction}</li>`).join('')}
            </ol>
        `;
        exerciseContainer.appendChild(exerciseDiv);
    });
}
// Call the function to fetch and display exercises
fetchAndDisplayExercises();
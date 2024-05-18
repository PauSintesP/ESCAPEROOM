function logRequest(url, method) {
    const logDiv = document.querySelector('div');
    const message = document.createElement('p');
    message.textContent = `fetch ${url} amb el mètode ${method}`;
    logDiv.appendChild(message);
}


function fetchAndDisplayProfessors() {
    logRequest("http://localhost:3005/api/horari", 'GET');
    fetch("http://localhost:3005/api/professors")
        .then(response => response.json())
        .then(data => {
            console.log('Raw data:', data); // Log the raw data
            const names = data.filter(professor => professor !== null ).map(professor => {
                return "Sospitós "+professor.id +": "+professor.nom;
            })
            console.log(names);
            console.log(names.join(", "));

            // Display the data
            const apiDataDiv = document.getElementById('api-dataProfes');
            apiDataDiv.innerHTML = names.join("<br>");
        })
        .catch(error => console.error('Error:', error));
}
document.getElementById('myForm').addEventListener('submit', function(event) {
    logRequest("http://localhost:3005/api/horari", 'DELETE');
    event.preventDefault(); // Prevent the form from submitting normally

    const professorId = document.getElementById('professorId').value;

    fetch(`http://localhost:3005/api/professors/${professorId}`, {
        method: 'DELETE',
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Server error');
        }
        return response.json();
    })
    .then(data => {
        console.log('Success:', data);
        fetchAndDisplayProfessors(); // Fetch and display the updated list of professors
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});

document.getElementById('resetButton').addEventListener('click', function() {
    logRequest("http://localhost:3005/api/professors/reset", 'POST');
    fetch('http://localhost:3005/api/professors/reset', {
        method: 'POST',
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Server error');
        }
        return response.json();
    })
    .then(data => {
        console.log('Success:', data);
        fetchAndDisplayProfessors(); // Fetch and display the updated list of professors
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});

document.getElementById('myForm2').addEventListener('submit', function(event) {
    logRequest("http://localhost:3005/api/culpable", 'PUT');
    event.preventDefault(); // Prevent the form from submitting normally

    const culpableId = document.getElementById('culpableId').value;
    fetch(`http://localhost:3005/api/culpable/${culpableId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ trobat: true }), 
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Server error');
        }
        return response.json();
    })
    .then(data => {
        console.log('Success:', data);
        fetchAndDisplayProfessors(); // Fetch and display the updated list of professors
        if (culpableId == 2) {
            window.location.href = '../html/guanyat.html'; // Redirect to the page
        }
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});
// Fetch and display the initial list of professors
fetchAndDisplayProfessors();
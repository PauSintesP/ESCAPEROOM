function logRequest(url, method) {
    const logDiv = document.querySelector('div');
    const message = document.createElement('p');
    message.textContent = `fetch ${url} amb el metode ${method}`;
    logDiv.appendChild(message);
}

logRequest("http://localhost:3005/api/horari", 'GET');
fetch("http://localhost:3005/api/professors")
    .then(response => response.json())
    .then(data => {
        console.log('Raw data:', data); // Log the raw data
        const names = data.filter(professor => professor !== null && professor.show !== false).map(professor => {
            return "Sospitós "+professor.id +": "+professor.nom;
        })
        console.log(names);
        console.log(names.join(", "));

        // Display the data
        const apiDataDiv = document.getElementById('api-dataProfes');
        apiDataDiv.innerHTML = names.join("<br>");
    })
    .catch(error => console.error('Error:', error));

document.getElementById('deleteForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const professorId = document.getElementById('professorId').value;

    fetch(`http://localhost:3005/api/professors/${professorId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            show: false,
        }),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});
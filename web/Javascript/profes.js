function logRequest(url, method) {
    const logDiv = document.querySelector('div');
    const message = document.createElement('p');
    message.textContent = `fetch ${url} amb el metode ${method}`;
    logDiv.appendChild(message);
}

document.getElementById('fetchDataProfes').addEventListener('click', function() {
    fetch("http://localhost:3005/api/professors")
        .then(response => response.json())
        .then(data => {
            console.log('Raw data:', data); // Log the raw data
            const names = data.filter(professor => professor !== null).map(professor => {
                return "Sospitós "+professor.id +": "+professor.nom;
            })
            console.log(names);
            console.log(names.join(", "));

            // Display the data
            const apiDataDiv = document.getElementById('api-dataProfes');
            apiDataDiv.innerHTML = names.join("<br>");
        })
        .catch(error => console.error('Error:', error));
});


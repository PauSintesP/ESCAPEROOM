function logRequest(url, method) {
    const logDiv = document.querySelector('div');
    const message = document.createElement('p');
    message.textContent = `fetch ${url} amb el metode ${method}`;
    logDiv.appendChild(message);
}

logRequest("http://localhost:3005/api/cuartades", 'GET');
fetch("http://localhost:3005/api/cuartades")
    .then(response => response.json())
    .then(data => {
        console.log('Raw data:', data); // Log the raw data
        const names = data.filter(cuartades => cuartades  !== null).map(cuartades  => {
            return cuartades.nom + ": " + cuartades.text+ "<br>";
        })
        console.log(names);
        console.log(names.join(", "));
        // Display the data
        const apiDataDiv = document.getElementById('api-dataCuartades');
        apiDataDiv.innerHTML = names.join("<br>","<br>");
    })
    .catch(error => console.error('Error:', error));
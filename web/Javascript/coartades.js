function logRequest(url, method) {
    const logDiv = document.querySelector('div');
    const message = document.createElement('p');
    message.textContent = `fetch ${url} amb el mètode ${method}`;
    logDiv.appendChild(message);
}

logRequest("http://localhost:3005/api/coartades", 'GET');
fetch("http://localhost:3005/api/coartades")
    .then(response => response.json())
    .then(data => {
        console.log('Raw data:', data);
        const names = data.filter(coartades => coartades  !== null).map(coartades  => {
            return coartades.nom + ": " + coartades.text+ "<br>";
        })
        console.log(names);
        console.log(names.join(", "));
        
        const apiDataDiv = document.getElementById('api-datacoartades');
        apiDataDiv.innerHTML = names.join("<br>","<br>");
    })
    .catch(error => console.error('Error:', error));
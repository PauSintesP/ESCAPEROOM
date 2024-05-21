function logRequest(url, method) {
    const logDiv = document.querySelector('div');
    const message = document.createElement('p');
    message.textContent = `fetch ${url} amb el mètode ${method}`;
    logDiv.appendChild(message);
}

logRequest("http://localhost:3005/api/horari", 'GET');
fetch("http://localhost:3005/api/intro")
    .then(response => response.json())
    .then(data => {
        console.log('Raw data:', data); // Log the raw data

        
        const elements = data.filter(intro => intro !== null).map(intro => {
            const text = document.createElement('p');
            return text.innerHTML = intro.text;
        })
        console.log(elements);
        console.log(elements.join(", "));

        // Display the data
        const apiDataDiv = document.getElementById('api-dataIntro');
        apiDataDiv.innerHTML = elements.join("<br>");
    })
    .catch(error => console.error('Error:', error));

    fetch("http://localhost:3005/api/intro")
    .then(response => {
        console.log('Response status:', response.status);
        return response.json();
    })
    .then(data => {
        console.log('Response data:', data);
        // Rest of your code...
    })
    .catch(error => console.error('Error:', error));
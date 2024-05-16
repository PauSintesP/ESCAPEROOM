function logRequest(url, method) {
    const logDiv = document.querySelector('div');
    const message = document.createElement('p');
    message.textContent = `fetch ${url} amb el metode ${method}`;
    logDiv.appendChild(message);
}
document.getElementById('fetchDataHorari').addEventListener('click', function() {
logRequest("http://localhost:3005/api/horari", 'GET');
fetch("http://localhost:3005/api/horari")
    .then(response => response.json())
    .then(data => {
        console.log('Raw data:', data); // Log the raw data
        const elements = data.filter(horari => horari !== null).map(horari => {
            const text = document.createElement('p');
            text.innerHTML = horari.id + ": " + horari.nom;
    
            const img = document.createElement('img');
            img.src = horari.image;
    
            const div = document.createElement('div');
            div.appendChild(text);
            div.appendChild(img);
    
            return div.outerHTML;
        })
        console.log(elements);
    
        // Display the data
        const apiDataDiv = document.getElementById('api-dataHorari');
        apiDataDiv.innerHTML = elements.join("");
    })
    .catch(error => console.error('Error:', error));
});
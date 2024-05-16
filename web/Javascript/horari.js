import { logRequest } from './index.js';

logRequest("http://localhost:3005/api/horari", 'GET');
fetch("http://localhost:3005/api/horari")
    .then(response => response.json())
    .then(data => {
        console.log('Raw data:', data); // Log the raw data
        const elements = data.filter(horari => horari !== null).map(horari => {
            const text = document.createElement('p');
            text.innerHTML = horari.id + ": " + horari.nom;

            const br = document.createElement('br');

            const img = document.createElement('img');
            img.src = horari.image;

            const div = document.createElement('div');
            div.appendChild(text);
            div.appendChild(br);
            div.appendChild(img);

            return div.outerHTML;
        })
        console.log(elements);

        // Display the data
        const apiDataDiv = document.getElementById('api-dataHorari');
        apiDataDiv.innerHTML = elements.join("<br>");
    })
    .catch(error => console.error('Error:', error));
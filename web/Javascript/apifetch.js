function logRequest(url, method) {
    const logDiv = document.querySelector('div');
    const message = document.createElement('p');
    message.textContent = `fetch ${url} amb el metode ${method}`;
    logDiv.appendChild(message);
}


fetch("http://localhost:3005/api/intro")
    .then(response => response.json())
    .then(data => {
        console.log('Raw data:', data); // Log the raw data
        const names = data.filter(intro => intro !== null).map(intro => {
            return intro.text;
        })
        console.log(names);
        console.log(names.join(", "));

        // Display the data
        const apiDataDiv = document.getElementById('api-dataIntro');
        apiDataDiv.innerHTML = names.join("<br>");
    })
    .catch(error => console.error('Error:', error));


document.getElementById('fetchDataCuartades').addEventListener('click', function() {
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
});

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

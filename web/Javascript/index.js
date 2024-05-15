function logRequest(url, method) {
    const logDiv = document.querySelector('div');
    const message = document.createElement('p');
    message.textContent = `fetch ${url} amb el metode ${method}`;
    logDiv.appendChild(message);
}
document.getElementById('fetchDataProfes').addEventListener('click', function() {
    logRequest("http://localhost:3005/api/professors", 'GET');
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

document.getElementById('fetchDataAules').addEventListener('click', function() {
    fetch("http://localhost:3000/aules")
        .then(response => response.json())
        .then(data => {
            console.log('Raw data:', data); // Log the raw data
            const names = data.filter(aules => aules !== null).map(aules => {
                return aules.A01;
            })
            console.log(names);
            console.log(names.join(", "));

            // Display the data
            const apiDataDiv = document.getElementById('api-dataAules');
            apiDataDiv.innerHTML = names.join("<br>");
        })
        .catch(error => console.error('Error:', error));
});


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
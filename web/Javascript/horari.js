document.getElementById('fetchDataHorari').addEventListener('click', function() {
    logRequest("http://localhost:3005/api/horari", 'GET');
    fetch("http://localhost:3005/api/horari")
        .then(response => response.json())
        .then(data => {
            console.log('Raw data:', data); // Log the raw data
            const names = data.filter(horari => horari  !== null).map(horari  => {
                return horari.id + ": " + horari.nom+ "<br>";
            })
            console.log(names);
            console.log(names.join(", "));

            // Display the data
            const apiDataDiv = document.getElementById('api-dataHorari');
            apiDataDiv.innerHTML = names.join("<br>");
        })
        .catch(error => console.error('Error:', error));
});
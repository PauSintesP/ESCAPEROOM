document.getElementById('fetchDataProfes').addEventListener('click', function() {
    fetch("http://localhost:3000/professors")
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


fetch("http://localhost:3000/intro")
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
    fetch("http://localhost:3000/cuartades")
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

document.getElementById('deleteForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting and causing a page reload

    let idToDelete = document.getElementById('professorId').value;
    let url = `http://localhost:3000/professors/${idToDelete}`;
    fetch(url, {
        method: 'DELETE',
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        // Check if the professor has been removed
        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (Object.keys(data).length === 0 && data.constructor === Object) {
                    console.log(`Professor with id ${idToDelete} has been removed`);
                } else {
                    console.log(`Professor with id ${idToDelete} has not been removed`);
                }
            })
            .catch((error) => console.error('Error:', error));
    })
    .catch((error) => console.error('Error:', error));
});
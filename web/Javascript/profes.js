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
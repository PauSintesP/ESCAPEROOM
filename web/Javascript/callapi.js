fetch("http://localhost:3005/api/professors")
    .then(response => response.json())
    .then(data => {
        const names = data.filter(professor => professor !== null).map(professor => {
            return professor.nom;
        })
        console.log(names);
        console.log(names.join(", "));
    })
    .catch(error => console.error('Error:', error));
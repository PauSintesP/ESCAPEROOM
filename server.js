const express = require('express');
const fs = require('fs');
const cors = require('cors'); // Include the cors library

const app = express();
const port = 3005;

fs.readFile('db.json', (err, data) => {
  if (err) throw err;
  let db = JSON.parse(data);

  const dbData = require('./db.json');

  // Apply CORS middleware with all origins allowed (not recommended for production)
  app.use(cors()); 

  //! GET ALL DB
  app.get('/api', (req, res) => {
    res.json(db);
  });

  //! GET ALL PROFESSORS
  app.get('/api/professors', (req, res) => {
    const professors = dbData.professors.map(professor => ({id: professor.id, nom: professor.nom}));
    res.json(professors);
  });

  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
  });
});

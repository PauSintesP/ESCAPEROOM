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
    const professors = dbData.professors.map(professor => ({id: professor.id, nom: professor.nom, show: professor.show}));
    res.json(professors);
  });
  app.delete('/api/professors/:id', (req, res) => {
    const { id } = req.params;
    const professor = dbData.professors.find(professor => professor.id == id);

    if (professor) {
        res.json(professor);
    } else {
        res.status(404).json({message: "Professor not found"});
    }
  });
  //! GET ALL HORARI
  app.get('/api/horari', (req, res) => {
    const horari = dbData.horari.map(horari => ({id: horari.id, nom: horari.nom, image: horari.image}));
    res.json(horari);
  });
  //! GET INTRO
  app.get('/api/intro', (req, res) => {
    const intro = dbData.intro.map(intro => ({text: intro.text}));
    res.json(intro);
  });
  //! GET CUARTADES
  app.get('/api/cuartades', (req, res) => {
    const cuartades = dbData.cuartades.map(cuartades => ({nom: cuartades.nom, text: cuartades.text}));
    res.json(cuartades);
  });

  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
  });
});



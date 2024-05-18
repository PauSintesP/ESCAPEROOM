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

  // GET ALL DB
  app.get('/api', (req, res) => {
    res.json(db);
  });

  // GET ALL PROFESSORS
  app.get('/api/professors', (req, res) => {
    const professors = dbData.professors.map(professor => ({id: professor.id, nom: professor.nom}));
    res.json(professors);
  });
  // DELETE PROFESSOR
  app.delete('/api/professors/:id', (req, res) => {
    const { id } = req.params;
    const professor = dbData.professors.find(professor => professor.id == id);
    if (professor) {
        dbData.professors = dbData.professors.filter(professor => professor.id != id);
        res.json({message: "Professor deleted"});
    } else {
        res.status(404).json({message: "Professor not found"});
    }
  });
  //RESET PROFESSORS
  app.post('/api/professors/reset', (req, res) => {
      dbData.professors = [
      { "id": 1, "nom": "Moisès"},
      { "id": 2, "nom": "Pau"},
      { "id": 3, "nom": "Jordi"},
      { "id": 4, "nom": "Faro"},
      { "id": 5, "nom": "Juan Luis"}];
      res.json({ message: 'All professors reset to default' });
  });

  // GET ALL HORARI
  app.get('/api/horari', (req, res) => {
    const horari = dbData.horari.map(horari => ({id: horari.id, nom: horari.nom, image: horari.image}));
    res.json(horari);
  });

  // GET INTRO
  app.get('/api/intro', (req, res) => {
    const intro = dbData.intro.map(intro => ({text: intro.text}));
    res.json(intro);
  });

  // GET coartades
  app.get('/api/coartades', (req, res) => {
    const coartades = dbData.coartades.map(coartades => ({nom: coartades.nom, text: coartades.text}));
    res.json(coartades);
  });

  // GET CULPABLE
  app.put('/api/culpable/:id', (req, res) => {
    const { id } = req.params;
    const culpable = dbData.culpable.find(culpable => culpable.id == id);
    if (culpable) {
        if (id == 2) {
            culpable.trobat = true;
        }
        res.json({ message: `Culpable ${id} updated` });
    } else {
        res.status(404).json({ message: 'Culpable not found' });
    }
  });

  //PORT
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
  });
});



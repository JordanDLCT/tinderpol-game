const express = require('express');
const path = require('path');
const app = express();

// Configuration du serveur
const PORT = process.env.PORT || 3000;
const PUBLIC_DIR = path.join(__dirname, 'public');
const IMAGES_DIR = path.join(__dirname, 'images');

// Middleware
app.use(express.static(PUBLIC_DIR));
app.use('/images', express.static(IMAGES_DIR));

// Route principale
app.get('/', (req, res) => {
  res.sendFile(path.join(PUBLIC_DIR, 'index.html'));
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Serveur Node.js démarré sur le port ${PORT}`);
});

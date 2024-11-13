const express = require('express');
const fs = require('fs');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('build'));
app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
  //affiche le lien de toutes les pages html
  const htmlFiles = fs.readdirSync('./build').filter(file => file.endsWith('.html'));
  htmlFiles.forEach(file => {
    console.log(`http://localhost:${port}/${file}`);
  });
})
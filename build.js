const path = require('path');
const fs = require('fs');
const showdown  = require('showdown');
const converter = new showdown.Converter();

const assetPath = path.join(__dirname, 'app', 'assets');
const publicPath = path.join(__dirname, 'app', 'public');
const buildPath = path.join(__dirname, 'build');

const baseHTML = fs.readFileSync(path.join(assetPath, 'default.html'), 'utf8');
const baseCSS = fs.readFileSync(path.join(assetPath, 'global.css'), 'utf8');
const baseMarkdownCSS = fs.readFileSync(path.join(assetPath, 'styleMarkdown.css'), 'utf8');
const baseJS = fs.readFileSync(path.join(assetPath, 'global.js'), 'utf8');

//delete the build folder
if (fs.existsSync(buildPath)) {
    fs.rmdirSync(buildPath, { recursive: true });
    //create the build folder
    fs.mkdirSync(buildPath);
}

const mdFiles = fs.readdirSync(publicPath).filter(file => file.endsWith('.md'));
//pour chaque fichier markdown, on le convertie en html
mdFiles.forEach(file => {
    const md = fs.readFileSync(path.join(publicPath, file), 'utf8');
    const html = converter.makeHtml(md);
    const newHTML = baseHTML.replace('%content%', html);
    //ecriture du fichier html dans le dossier build
    fs.writeFileSync(path.join(buildPath, file.replace('.md', '.html')), newHTML);
})
//create the assets folder
fs.mkdirSync(path.join(buildPath, 'assets'));
//ecriture des fichiers css et js dans le dossier build
fs.writeFileSync(path.join(buildPath, 'assets', 'global.css'), baseCSS);
fs.writeFileSync(path.join(buildPath, 'assets', 'global.js'), baseJS);
fs.writeFileSync(path.join(buildPath, 'assets', 'styleMarkdown.css'), baseMarkdownCSS);
    
const fs = require('fs');
const path = require('path');

function generateTree(dir, prefix = '') {
  const files = fs.readdirSync(dir);
  let tree = '';
  files.forEach((file, index) => {
    const filePath = path.join(dir, file);
    const isDir = fs.lstatSync(filePath).isDirectory();
    const isLast = index === files.length - 1;

    tree += `${prefix}${isLast ? '└── ' : '├── '}${file}\n`;

    if (isDir) {
      tree += generateTree(filePath, `${prefix}${isLast ? '    ' : '│   '}`);
    }
  });
  return tree;
}

const pagesDir = path.join(__dirname, 'src');
if (fs.existsSync(pagesDir)) {
  const tree = generateTree(pagesDir);
  console.log('Alberatura delle pagine:');
  console.log(tree);
} else {
  console.log("La directory 'pages' non esiste nella root del progetto.");
}

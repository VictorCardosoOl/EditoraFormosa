import fs from 'fs';
import path from 'path';

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir(path.join(process.cwd(), 'src'), (filePath) => {
  if (filePath.endsWith('.tsx')) {
    let content = fs.readFileSync(filePath, 'utf8');
    content = content.replace(/bg-white/g, 'bg-bg');
    content = content.replace(/bg-black/g, 'bg-fg');
    content = content.replace(/text-white/g, 'text-bg');
    content = content.replace(/text-black/g, 'text-fg');
    content = content.replace(/border-black/g, 'border-border');
    content = content.replace(/border-white/g, 'border-bg');
    content = content.replace(/bg-\[\#f4f4f4\]/g, 'bg-muted');
    content = content.replace(/bg-\[\#050505\]/g, 'bg-bg');
    fs.writeFileSync(filePath, content);
  }
});
console.log('Done');

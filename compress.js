const fs = require('fs');
const zlib = require('zlib');
const path = require('path');

const folderPath = './dist/sandbox-angular';

fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.error('Erro ao ler a pasta:', err);
    return;
  }

  files.forEach((file) => {
    const filePath = path.join(folderPath, file);

    // Ignorar subpastas e verificar apenas arquivos
    if (fs.statSync(filePath).isFile()) {
      const readStream = fs.createReadStream(filePath);
      const writeStream = fs.createWriteStream(filePath + '.gz');
      const gzip = zlib.createGzip();

      readStream.pipe(gzip).pipe(writeStream);

      writeStream.on('finish', () => {
        console.log(`Arquivo ${file} convertido para ${file}.gz`);
      });

      writeStream.on('error', (error) => {
        console.error(`Erro ao converter arquivo ${file}:`, error);
      });
    }
  });
});

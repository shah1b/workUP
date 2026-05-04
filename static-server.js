#!/usr/bin/env node
const http = require('http');
const fs = require('fs');
const path = require('path');

const port = process.env.PORT || 3000;
const publicFile = path.join(__dirname, 'nexthire_ai_job_matching_app.html');

const server = http.createServer((req, res) => {
  let reqPath = req.url.split('?')[0];
  if (reqPath === '/' || reqPath === '/index.html') {
    fs.readFile(publicFile, 'utf8', (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end('Error loading application');
        return;
      }
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(data);
    });
    return;
  }

  const filePath = path.join(__dirname, decodeURIComponent(reqPath));
  if (filePath.indexOf(__dirname) !== 0) {
    res.writeHead(400);
    res.end('Bad request');
    return;
  }

  fs.stat(filePath, (err, stat) => {
    if (err || !stat.isFile()) {
      res.writeHead(404);
      res.end('Not found');
      return;
    }
    const ext = path.extname(filePath).toLowerCase();
    const contentType = {
      '.js': 'application/javascript',
      '.css': 'text/css',
      '.json': 'application/json',
      '.png': 'image/png',
      '.jpg': 'image/jpeg',
      '.jpeg': 'image/jpeg',
      '.svg': 'image/svg+xml',
      '.woff2': 'font/woff2',
      '.woff': 'font/woff',
      '.ttf': 'font/ttf',
      '.map': 'application/octet-stream',
    }[ext] || 'application/octet-stream';
    res.writeHead(200, { 'Content-Type': contentType });
    const stream = fs.createReadStream(filePath);
    stream.pipe(res);
    stream.on('error', () => {
      res.writeHead(500);
      res.end('Server error');
    });
  });
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE' && port === 3000) {
    console.log(`Port 3000 in use, trying port 8080...`);
    server.listen(8080, () => {
      console.log(`Static web server running at http://localhost:8080`);
    });
  } else {
    throw err;
  }
});

server.listen(port, () => {
  console.log(`Static web server running at http://localhost:${port}`);
});

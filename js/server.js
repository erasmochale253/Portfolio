http = require('http');
fs = require('fs');
url = require('url');
path = require('path');

http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  
  // If the path is the root '/', serve index.html
  var filename = (q.pathname == '/') ? '../index.html' : '.' + q.pathname;
  
  // Get the file extension
  var extname = path.extname(filename).toLowerCase();

  // Set the default content type based on the file extension
  var contentType = 'text/html';
  
  // Set content type for CSS, JS, and images
  if (extname == '.css') {
    contentType = 'text/css';
  } else if (extname == '.js') {
    contentType = 'application/javascript';
  } else if (extname == '.jpg' || extname == '.jpeg') {
    contentType = 'image/jpeg';
  } else if (extname == '.png') {
    contentType = 'image/png';
  } else if (extname == '.gif') {
    contentType = 'image/gif';
  } else if (extname == '.svg') {
    contentType = 'image/svg+xml';
  } else if (extname == '.ico') {
    contentType = 'image/x-icon';
  }

  // Read and serve the file
  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    }
    res.writeHead(200, {'Content-Type': contentType});
    res.write(data);
    return res.end();
  });
}).listen(8080);

console.log("Server running at http://localhost:8080/");

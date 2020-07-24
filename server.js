var http = require('http'); 
var PORT = 3000;
var server = http.createServer(function (req, res) { 

    if (req.method == 'GET' && req.url == '/') { 

     res.end('Hello World, Welcome to WeJapa Internships');

    }
    else if (req.method == 'POST' && req.url == '/' ) {

        req.on('data', function(name) {
            res.end(`Hello ${name}, Welcome to WeJapa Internships `);
          });

    }
  
});

server.listen(PORT); 

console.log('server running on port:', PORT);
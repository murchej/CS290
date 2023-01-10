/*
 * Write your server code in this file.  Don't forget to add your name and
 * @oregonstate.edu email address below, so we know whose code we're grading.
 *
 * name: Joseph Murche
 * email: murchej@oregonstate.edu
 */

var http = require('http');

var fs = require('fs');

var indexhtml;

var errorhtml;

var stylecss;

var indexjs;




var server = http.createServer(function(req, resp){

    if(req.url == '/' || req.url == '/index.html'){

        resp.writeHead(200, {"Content-Type": "text/html"});

        resp.write(indexhtml);

        resp.end();

    }
    
    else if(req.url == '/style.css'){

        resp.writeHead(200, {"Content-Type": "text/css"});
        
        resp.write(stylecss);

        resp.end();

    }

    else if(req.url =='/index.js'){

        resp.writeHead(200, {"Content-Type": "application/javascript"});
        
        resp.write(indexjs);

        resp.end();

    }

    else if(req.url == '/404.html'){

        resp.writeHead(200, {"Content-Type": "text.html"});

        resp.write(errorhtml);

        resp.end();

    }

    else{

        resp.writeHead(404, {"Content-Type": "text/html"});

        resp.write(errorhtml);

        resp.end();

    }
});


fs.readFile('public/404.html', 'utf8', function (error, fileContents){
    			
	if (error) {
        	console.log("== Warning: Error reading file:", error);
    	}
   	else {
			
		errorhtml = fileContents;
	}
});


fs.readFile('public/index.js', 'utf8', function (error, fileContents){
    			
	if (error) {
        	console.log("== Warning: Error reading file:", error);
    	}
   	else {
			
		indexjs = fileContents;
	}
});


fs.readFile('public/style.css', 'utf8', function (error, fileContents){
    			
	if (error) {
        	console.log("== Warning: Error reading file:", error);
    	}
   	else {
			
		stylecss = fileContents;
	}
});


fs.readFile('public/index.html', 'utf8', function (error, fileContents){		
	
	if (error) {
        	console.log("Warning: Error reading file:", error);
    	}
   	else {
			
		indexhtml = fileContents;	
	}
});


if (process.env.PORT) {
    server.listen(process.env.PORT, function () {
         console.log("== Server is listening on environmental port.");
     });
 }
 
 else {
     server.listen(3000, function () {
         console.log("Server is listening on port 3000");
 
     });
 }
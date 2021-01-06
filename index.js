const http = require('http');
const fs = require('fs');


http.createServer((request, response) => {
   let req = request.url;
   response.setHeader("Content-Type", "text/html; charset=utf-8");
   const notFound = "<h1>404</h1>";

   console.log(request);

   const webPage = (page) => {
      fs.readFile(page, (error, content) => {
         if(!error){
            response.write(content);
            response.end();
         }else{
            response.write(notFound);
            response.end();
         }
      });
   };

   switch (req) {
      case "/": webPage("./index.html");
         break;
      case "/nosotros": webPage("./about.html");
         break;
      case "/proyectos": webPage("./projects.html");
         break;
      case "/contacto": webPage("./contact.html");
         break;
      case "/favicon.ico": webPage("./favicon.ico")
      default: webPage("./404.html");
   }
}).listen(8080);


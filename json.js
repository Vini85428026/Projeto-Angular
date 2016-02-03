var http = require('http');

http.createServer(function(req,res) {
  res.writeHead(200, { 'Content-Type': 'text/plain'});
res.end("{'nome':'Ythalo','telefone':'1111-2222','data':'02/12/2006','operadora':{'nome':'Oi','codigo':'12','categoria':'celular'}},{'nome':'José','telefone':'5555-3333','data':'15/09/2010','operadora':{'nome':'Vivo','codigo':'15','categoria':'celular'}},{'nome':'Edgar','telefone':'6666-7777','data':'21/01/2013','operadora':{'nome':'Tim','codigo':'18','categoria':'celular'}}");
}).listen(3000);
console.log('Servidor iniciado em localhost:3000. Ctrl+C para encerrar…');
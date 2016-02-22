var express = require('express');
var mysql = require('mysql');
var connection  = require('express-myconnection');
var app = express();

connection = mysql.createConnection({
     host: 'localhost',
     user: 'root',
     password : '123',
     port : 3306, //port mysql
     database:'project_angular',
     multipleStatements : true
   });
connection.connect();

app.use(express.static(__dirname + '/public'));
app.use(express.bodyParser());

/*var contatos = [
	{nome: "Bruno da sIlva", telefone: "9999-2222", data: new Date(), operadora: {nome: "Oi", codigo: 14, categoria: "Celular"}},
	{nome: "Sandra de SouZa", telefone: "9999-3333", data: new Date(), operadora: {nome: "Vivo", codigo: 15, categoria: "Celular"}},
	{nome: "Mariana rios", telefone: "9999-9999", data: new Date(), operadora: {nome: "Tim", codigo: 41, categoria: "Celular"}}
];
var operadoras = [
	{nome: "Oi", codigo: 14, categoria: "Celular", preco: 2},
	{nome: "Vivo", codigo: 15, categoria: "Celular", preco: 1},
	{nome: "Tim", codigo: 41, categoria: "Celular", preco: 3},
	{nome: "GVT", codigo: 25, categoria: "Fixo", preco: 1},
	{nome: "Embratel", codigo: 21, categoria: "Fixo", preco: 2}
];*/

app.listen(process.env.PORT || 3030);

app.get('/', function(req, res) {
	res.render('index', {});
});

app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.post('/contatos', function(req, res) {

	var contato = {
		nome:req.body.nome,
		telefone:req.body.telefone,
		data:req.body.data,
		operadora:req.body.operadora
	};

	connection.query("insert into lista SET ?", contato, function(err, result){
		if(err){
			console.error(err);
			return;
		}	
  		res.json(result);
	});  
});

app.get('/contatos/obter', function(req, res) {
  connection.query("select * from lista;", function(err, result){
	if(err){
		console.error(err);
		return;
	}
	res.json(result);
  });
});





/*app.get('/operadoras', function(req, res) {
  connection.query("select * from operadoras", function(err, result){
	if(err){
		console.error(err);
		return;
	}
	res.json(result);
  });
});



// Inicializa a função no console
	var get = function(url, callback) {
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function(){
		if(xhr.readyState === 4){
			callback(xhr.responseText, xhr.status);
		}
	};		
};*/
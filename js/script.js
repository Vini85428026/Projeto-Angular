/*Criando um modulo*/ 
		angular.module("listaTele", []);
		/* Lendo um modulo */
		angular.module("listaTele").controller("listaCtrl", function ($scope){
			$scope.app = "Lista Telefônica";
			$scope.contatos = [
				{nome: "Pedro", telefone: "8888-8888" , cor: "red"},
				{nome: "Ana", telefone: "8888-8887" , cor: "blue"},
				{nome: "Maria", telefone: "8888-8886" , cor: "green"}
			];
			$scope.operadoras = [
				{nome: "Oi", codigo: "12"},
				{nome: "Vivo", codigo: "15"},
				{nome: "Tim", codigo: "18"},
				{nome: "Claro", codigo: "19"}
			];

			$scope.apagarContatos = function (contatos){
				$scope.contatos=contatos.filter(function (cont){
					if (!cont.selecionado){
						return cont;
					}
				});
			};

			$scope.adicionarContatos = function (contato){
				$scope.contatos.push(angular.copy(contato));
			};

			$scope.mandar = function(contatos){
				var a = contatos.some(function(c){
					return c.selecionado;
				});
				return a;
			}
		});	
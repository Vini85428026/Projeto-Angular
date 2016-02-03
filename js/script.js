/*Criando um modulo*/ 
		angular.module("listaTele", []);
		/* Lendo um modulo */
		angular.module("listaTele").controller("listaCtrl", function ($scope, $filter){
			$scope.app = "Lista Telefônica";
			$scope.contatos = [
				{nome: $filter('uppercase')("Pedro"), telefone: "8888-8888" , data: new Date(), operadora: {nome:"Oi", codigo: "12"}, cor: "red"},
				{nome: "Ana", telefone: "8888-8887" ,  data: new Date(), operadora: {nome:"Tim", codigo: "18"}, cor: "blue"},
				{nome: "Maria", telefone: "8888-8886" , data: new Date(), operadora: {nome:"Vivo", codigo: "15"}, cor: "green"}
			];
			$scope.operadoras = [
				{nome: "Oi", codigo: "12", preco: 3},
				{nome: "Vivo", codigo: "15", preco: 1},
				{nome: "Tim", codigo: "18", preco: 4},
				{nome: "Claro", codigo: "19", preco: 2}
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

			$scope.ordenarPor = function(campo){
				$scope.criterioOrdenacao = campo;
				$scope.direcaoOrdenacao = !$scope.direcaoOrdenacao;
			}

		});	
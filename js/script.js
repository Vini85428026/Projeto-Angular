/*Criando um modulo*/ 
		angular.module("listaTele", []);
		/* Lendo um modulo */
		angular.module("listaTele").controller("listaCtrl", function ($scope, $filter, contatosAPI, operadorasAPI, serialGenerator) /*contatosAPI é o nome da factory*/{
			
			$scope.app = "Lista Telefônica";
			$scope.contatos = [];
			$scope.operadoras = [];

			var carregarOperadoras = function(){
				operadorasAPI.getOperadoras().success(function(data){
					$scope.operadoras = data;
				});
			};

			var carregarContatos = function(){
				contatosAPI.getContatos().success(function(data){
					$scope.contatos = data;
				}).error(function(data,status){
					$scope.message = "Aconteceu um erro! " + data;
				});
			};

			$scope.apagarContatos = function (contatos){
				$scope.contatos=contatos.filter(function (cont){
					if (!cont.selecionado){
						return cont;
						carregarContatos();
					}
				});
			};

			$scope.adicionarContatos = function (contato){
				contato.serial = serialGenerator.generate();
				contato.data = new Date();
				contatosAPI.saveContato(contato).success( function (data){
					delete $scope.contato;
					carregarContatos();
				});
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

			carregarContatos();
			carregarOperadoras();

		});	
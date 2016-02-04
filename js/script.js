/*Criando um modulo*/ 
		angular.module("listaTele", []);
		/* Lendo um modulo */
		angular.module("listaTele").controller("listaCtrl", function ($scope, $filter, $http){
			$scope.app = "Lista Telefônica";
			$scope.contatos = [];
			$scope.operadoras = [];

			var carregarOperadoras = function(){
				$http.get("http://localhost:3000/operadoras").success(function(data){
					$scope.operadoras = data;
				});
			};

			var carregarContatos = function(){
				$http.get("http://localhost:3000/contatos").success(function(data){
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
				contato.data = new Date();
				$http.post("http://localhost:3000/contatos", contato).success( function (data){
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
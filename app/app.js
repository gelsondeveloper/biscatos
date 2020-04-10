 'use strict';
var app = angular.module('app', ['ngRoute']);


app.directive("isActive", function($location, $rootScope, isActiveConfig) {
    return {
      restrict: "A",
      link: function(scope, element, attr) {
        if (element[0].nodeName.toLowerCase() !== "a") {
          return;
        }
        var locWatch = $rootScope.$on("$locationChangeSuccess", function(event, newUrl){
          var href = element.prop('href');
          if (newUrl !== href) {
            attr.$removeClass(name);
          } else {
            attr.$addClass(name);
          }
        });
        var name = attr.isActive || isActiveConfig.activeClass || "active";
        scope.$on("$destroy", locWatch);
      }
    }
  })

//Configuração das Rotas 

app.config(function ($routeProvider) {
    $routeProvider

    //Rotas da nossa aplicação
    
    //Rota para Home 
    .when('/', {
        templateUrl : '../app/views/home.html',
        controller : 'homeController'
    })

    //Rota para Sobre 
    .when('/about', {
        templateUrl : '../app/views/about.html',
        controller : 'aboutController'
    })

    //Rota para Home 
    .when('/contact', {
        templateUrl : '../app/views/contact.html',
        controller : 'contactController'
    })

     //Rota para Registo profissional 
     .when('/regPro', {
        templateUrl : '../app/views/registoProfissional.html',
        controller : 'registoProfissionalController'
    })

     
     //Rota para Registo Clientes 
     .when('/regCli', {
        templateUrl : '../app/views/registoCliente.html',
        controller : 'registoClienteController'
    })
    .otherwise({
        redirectTo: "/"
    });
})
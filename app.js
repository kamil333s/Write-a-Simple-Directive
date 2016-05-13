var app = angular.module("myApp", []);


app.directive('mynav', function () {
  return {
    restrict: 'E',
    templateUrl: './templates/navbar.html'
  };
});

app.directive('charList', function() {
  return {
      restrict: 'E',
    scope: {},
    templateUrl: './templates/charList.html',
    replace: true,
    controller: 'CharacterListCtrl',
    controllerAs: 'ctrl'
  };
});

app.controller('CharacterListCtrl', function() {
  this.characters = [
    {name:'James Kirk', rank:'Captain'},
    {name:'Spock', rank:'Commander'},
    {name:'Pavel Chekov', rank:'Admiral'}
  ];
});

app.directive('charEditorForm', function() {
  return {
      restrict: 'E',
    scope: {
      characters: '=',
    },
    templateUrl:'./templates/charEditor.html',
    replace:true,
    controller: 'characterEditorFormCtrl',
    controllerAs: 'ctrl'
  };
});

app.controller('characterEditorFormCtrl', function($scope) {
  this.character = {};

  this.save = function() {
    $scope.characters.push(this.character);
    this.character = {};
  };
});

app.directive('bgChange', function() {
    return {
      restrict: 'A',
      link: function(scope, element){
        element.on('click', function(evt){
          evt.preventDefault();
        });// mouseup
        element.on('focus', function(){
          element.css({
            'background-color': 'salmon'
          });
        });// focus
        element.on('blur', function(){
          element.css({
            'background-color': 'white'
          });
        });// blur
      }// link
    }// return
  }); 

app.directive('another', function() {
  return {
    restrict: 'E',
    templateUrl: './templates/another.html'
  };
});
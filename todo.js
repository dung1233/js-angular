angular.module("myApp", []).controller("TodoController", function ($scope) {
  $scope.todos = [
    { city: "Hà Nội", name: "Nguyễn Văn A", age: 25 },
    { city: "TP.HCM", name: "Trần Thị B", age: 30 },
    { city: "Đà Nẵng", name: "Lê Văn C", age: 28 },
  ];

  $scope.addTodo = function () {
    var newTodo = {
      city: $scope.newTodoCity,
      name: $scope.newTodoName,
      age: $scope.newTodoAge,
    };
    $scope.todos.push(newTodo);

    $scope.newTodoCity = "";
    $scope.newTodoName = "";
    $scope.newTodoAge = "";
  };
});

$(document).ready(function(){
  $("form#form1").submit(function(event){
    event.preventDefault();
    var userInput = $("input#input1").val();
  });
});

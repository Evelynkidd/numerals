// Business Logic
var convert = function (inputNumber){
  var symbol = ["I", "V", "X", "L", "C", "D", "M"];
  var value = [1, 5,10,50,100,500,1000];
  var numerals=[];
  var bookmark = [];
  var sum = 0


  for(var i =0; i < value.length; i++){

    if(value[i] <= inputNumber ){
    }
    else{
      numerals.push(symbol[i-1]);
      bookmark.push(i);

      console.log(bookmark);
      console.log(numerals);
      // return bookmark, numerals;
      // return bookmark.toString;

      return symbol[i-1];


    };
  };
};








// User interface
$(document).ready(function(){
  $("form#numeral").submit(function(event){
    event.preventDefault();
    var inputNumber = parseInt($("input#number").val());
 // Need to add appropriate variable inside text below
    $("#convertedNumerals").text(convert(inputNumber));

  });
});

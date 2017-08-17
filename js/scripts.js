// Business Logic
var convert = function (inputNumber){
  var symbol = ["M","D", "C", "L","X","V","I"];
  var value = [1000,500,100,50,10,5,1];
  var numerals=[];
  var bookmark = [];
  var sum = 0
  var input =


    if(input>=1000){
      input = inputNumber
      numerals.push("M") ;
    }else if (input>=500){
      numerals.push("D");
      return ;
    }else if (input>=100){
      numerals.push("C");
      return ;
    }else if (input>=50){
      numerals.push("L")
      return ;
    }else if (input>=10){
      numerals.push("X")
      return ;
    }else if (input>=5){
      numerals.push("V")
      return ;
    }else{
      numerals.push("I")
      return ;
    }

};

  // for(var i =0; i < value.length; i++){
  //
  //   if(value[i] <= inputNumber ){
  //   }
  //   else{
  //     numerals.push(symbol[i-1]);
  //     bookmark.push(i);
  //
  //     console.log(bookmark);
  //     console.log(numerals);
  //     // return bookmark, numerals;
  //     // return bookmark.toString;
  //
  //     return symbol[i-1];
  //
  //
  //   };
  // };









// User interface
$(document).ready(function(){
  $("form#numeral").submit(function(event){
    event.preventDefault();
    var inputNumber = parseInt($("input#number").val());
 // Need to add appropriate variable inside text below
    $("#convertedNumerals").text(convert(inputNumber));

  });
});

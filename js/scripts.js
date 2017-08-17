// Business Logic
var convert = function (number){
  var symbol = ["M","D", "C", "L","X","V","I"];
  var value = [1000,500,100,50,10,5,1];
  var numerals=[];
  // var bookmark = [];
  var input = 0
// debugger
      while(number>0){
        if(number- 1000>=0){
          numerals.push("M");
          number -= 1000;
        }else if (number>=500){
          numerals.push("D");
          number -= 500;
        }else if (number>=100){
          numerals.push("C");
          number-=100
        }else if (number>=50){
          numerals.push("L")
          number -=50
        }else if (number>=10){
          number -=10
          numerals.push("X")
        }else if (number>=5){
         number-=5
          numerals.push("V")
        }else{
          number-=1
          numerals.push("I");
        };
      };
      var result = numerals.join("");
      return result;
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
    var number = parseInt($("input#number").val());
 // Need to add appropriate variable inside text below
    $("#convertedNumerals").text(convert(number));

  });
});

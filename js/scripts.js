// Business Logic
var convert = function (number){
  var symbol = ["M","CM","D","CD","C","L","XL","X","IX","V","VI", "I"];
  var value = [1000,900,500,400,100,50,40,10,9,5,4,1];
  var numerals=[];
  var input = 0
// debugger
      while(number>0){
        if(number- 1000>=0){
          numerals.push("M");
          number -= 1000;
        }else if (number>=900){
            numerals.push("CM");
            number -= 900;
        }else if (number>=500){
          numerals.push("D");
          number -= 500;
        }else if (number>=400){
          numerals.push("CD");
          number-=400;
        }else if (number>=100){
          numerals.push("C");
          number-=100
        }else if (number>=50){
          numerals.push("L");
          number -=50
        }else if (number>=40){
          numerals.push("XL");
          number -=40
        }else if (number>=10){
          number -=10
          numerals.push("X")
        }else if (number>=9){
          number -=9
          numerals.push("IX")
        }else if (number>=5){
         number-=5
          numerals.push("IV")
        }else if (number>=4){
         number-=4
          numerals.push("V")
        }else{
          number-=1
          numerals.push("I");
        };
      };
      var result = numerals.join("");
      return result;
};


// User interface
$(document).ready(function(){
  $("form#numeral").submit(function(event){
    event.preventDefault();
    var number = parseInt($("input#number").val());
 // Need to add appropriate variable inside text below
    $("#convertedNumerals").text(convert(number));

  });
});

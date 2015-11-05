/* your code should go in this file */

/* 
 * The data is available in the array *data*
 * Each element of the array has the following structure:
 *  {
 *    word_en : "Apple",  // word in english
 *    word_de : "Apfel"   // word in german
 *  }
 */ 
var correctAnswers = 0;
$(document).ready(function(){    
    initGame();
    var index = 0;
        nextWord(index);
        $(".current").click(function(){
            $(".word").addClass("hidden");
            $(".solution").removeClass("hidden");
            $(".options").removeClass("hidden");
        });

        $(".opt-correct").click(function(){
            correctAnswers++;
        });
        $(".btn").click(function(){
           // $(this).hasClass("opt-")
            index++;
            if(index < data.length)
                nextWord(index);
            else
                endGame();
        });
});


function initGame(){
    if(data.length == 0)
        endGame();
      var tmpl = ' <li id="ID" class = "current">' +
           '  <h3 class = "word">WORD</h3>' +
           '  <h3 class="solution hidden">SOLUTION</h3>'+
           ' </li> ';
    $(".cards").empty();
    $(".options").removeClass("hidden").addClass("hidden");
    var index = 0;
    var card = tmpl.replace("ID", index);
        card = card.replace("WORD", data[index].word_en);
        card = card.replace("SOLUTION", data[index].word_de);
        $(".cards").append(card);
    
}

function nextWord(index){
    $(".options").removeClass("hidden").addClass("hidden");
    $(".word").text(data[index].word_en);
    $(".word").removeClass("hidden");
    $(".solution").text(data[index].word_de);
    $(".solution").removeClass("hidden").addClass("hidden");
    $(".current").attr("id", index);
}

function endGame(){
    $(".practice").addClass("hidden");
    $("#tot-good").text(correctAnswers);
    $("#tot").text(data.length);
    $(".final").removeClass("hidden");
}








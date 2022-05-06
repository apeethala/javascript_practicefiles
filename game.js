var gamePattern=[];
var userClickedPattern=[];
var buttonColours=["red","blue","green","yellow"];
var startGame=false;
var userChosenColour="";
var level;
function nextSequence(){
    $("#level-title").text("Level "+level);
    var randomNumber=Math.floor((Math.random()*4));
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $('#'+randomChosenColour).fadeTo(600, 0.3, function() { $(this).fadeTo(600, 1.0); });
    makesound(randomChosenColour); 
    level++;
}
function makesound(soundColour){
    var audio = new Audio("sounds/" + soundColour + ".mp3");
    audio.play();
}
$(".btn").click(userSequence);
function userSequence(){
    userChosenColour=this.id;
    userClickedPattern.push(userChosenColour);
    makesound(userChosenColour); 
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
     }
function animatePress(currentColour)
{
    $("#"+currentColour).addClass("pressed");
    setTimeout(function(){$('#'+currentColour).removeClass("pressed");},200);
}

$("body").keypress(function(){
    if(startGame===false){
        startGame=true;
        level=0
        nextSequence();
        //$("#level-title").text("Level 0");
    }  
  });

  function checkAnswer(currentLevel){

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        if (userClickedPattern.length === gamePattern.length){
          setTimeout(function () {
            nextSequence();
          }, 1000);
        }
      } 
      else {
        makesound("wrong");
        $("body").addClass("game-over");
        $("#level-title").text("Game Over, Press Any Key to Restart");
  
        setTimeout(function () {
          $("body").removeClass("game-over");
        }, 200);
  
        startOver();
      }
  }
  function startOver() {
    level = 0;
    startGame = false;
  }
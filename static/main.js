$( document ).ready(function() {
    setBackgroundColor();
});


var _BACKGROUND_COLORS = ["#381D2A", "#98B9AB", "#9BC995", "#595959", "#4C5454", "#62929E", "#5C6D70", "#484A47", "#46B1C9"];
function setBackgroundColor(){
    var index = Math.floor( Math.random() * ( _BACKGROUND_COLORS.length + 1 ) )
    $('body').css("background-color", _BACKGROUND_COLORS[index]);
    $('.badges a').css("color", _BACKGROUND_COLORS[index])
    $('body').css("color", _BACKGROUND_COLORS[index])
}
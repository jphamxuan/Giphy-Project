$( document ).ready(function() {
    
    // An array of actions, new actions will be pushed into this array;
    var buttons = ["lol", "cool", "bro", "dude", "dawg", "coding", "friday", "yay", "dogs", "wut","meme"];
   
   
    //makes buttons from array

    function displayGifButtons(){
        $("#gifButtonsView").empty(); 
        for (var i = 0; i < buttons.length; i++){
            var gifButton = $("<button>");
            gifButton.addClass("buttons");
            gifButton.addClass("btn btn-primary")
            gifButton.attr("data-name", buttons[i]);
            gifButton.text(buttons[i]);
            $("#gifButtonsView").append(gifButton);
        }
    }
   
   
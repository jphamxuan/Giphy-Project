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
   
//displays gifs
    function displayGifs(){
        var action = $(this).attr("data-name");
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + action + "&api_key=dc6zaTOxFJmzC&limit=10";
        console.log(queryURL); // displays the constructed url
        $.ajax({
            url: queryURL,
            method: 'GET'
        })
        
   
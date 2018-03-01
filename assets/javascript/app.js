var buttons = ["lol", "cool", "bro", "dude", "dawg", "coding", "friday", "yay", "dogs", "wut"];

      // shows  gif buttons
      function renderButtons() {
        $("#gif-view").empty();

        
        for (var i = 0; i < buttons.length; i++) {
          var gifButton = $("<button>");
          gifButton.addClass("gif");          
          gifButton.attr("data-name", buttons[i]);          
          gifButton.text(buttons[i]);          
          $("#gif-view").append(gifButton);
        }
      }

      // adds user input to gif button list
      $("#add-gif").on("click", function(event) {
             event.preventDefault();
        var gif = $("#gif-input").val().trim();
        if (gif == ""){
            return false; 
        }
        buttons.push(gif);

        renderButtons();
      });

   
      renderButtons();

    //   displays gifs
function displayGifs() {

  var giphy = $(this).attr("data-name");
  var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +giphy+ "&api_key=zDcx4n31eEurSTfxNLb5LAeCmiJJeqDD&limit=10";
    console.log(queryURL); 
            
    $.ajax({
    url: queryURL,
    method: "GET"
  })

    
  .done(function(response) {
          
//  $(".gif-display").empty(); 
  var results = response.data; 
   for (var i=0; i<results.length; i++){
  
    var gifDiv = $("<div>"); 
    gifDiv.addClass("gifDiv");
//rating
  var gifRating = $("<p>").text("Rating: " + results[i].rating);
      gifDiv.append(gifRating);
//image
  var gifImage = $("<img>");
      gifImage.attr("src", results[i].images.fixed_height_small_still.url); 
      gifImage.attr("data-still",results[i].images.fixed_height_small_still.url); 
      gifImage.attr("data-animate",results[i].images.fixed_height_small.url);      
      gifImage.attr("data-state", "animate"); 
      gifImage.addClass("image");
      gifDiv.append(gifImage);
              
      $(".gif-display").prepend(gifDiv);
          }

          $(".image").on("click", function(){
            var state = $(this).attr("data-state")
            console.log(state)
            if(state === "still"){
                $(this).attr("data-state", "animate")
                $(this).attr('src', $(this).attr('data-animate'))
                
            }
            else{
                $(this).attr("data-state", "still")
                $(this).attr('src', $(this).attr('data-still'))
            }
        })
      });
  }

 
  

  
  $(document).on("click", ".gif", displayGifs);
  



            
    
            
    
            
    
          

        
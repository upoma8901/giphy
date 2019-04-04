// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */

$("#search-button").click(function(){


 $.ajax({
      url:"https://api.giphy.com/v1/gifs/search?q=puppy&rating=pg&api_key=dc6zaTOxFJmzC",
      method: "GET",
      success: function(response) {
         console.log(response);
      },
    });

   var input=$("#search-term").val();
  var request_url = "https://api.giphy.com/v1/gifs/search?q="+input+ "&rating=pg&api_key=dc6zaTOxFJmzC";

    $.ajax({
      url: request_url,
      method: "GET",
      success: function(response) {
           var pic_url = response.data[0].images.original.url;

           $('.form-inline').html('<img src=' + pic_url + '>');
      },
    });




});




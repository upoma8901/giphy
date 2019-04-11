// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */

$("#search-button").click(function(){


   var input=$("#search-term").val();
  var request_url = "https://api.giphy.com/v1/gifs/search?q="+input+ "&rating=pg&api_key=dc6zaTOxFJmzC";

    $.ajax({
      url: request_url,
      method: "GET",
      success: function(response) {
           var pic_url = response.data[0].images.original.url;

           $('.gallery').html('<img src=' + pic_url + '>');

             $(function () {
  $('#emailLink').on('click', function (event) {
      event.preventDefault();
    alert("send");
    var email = '';
    var subject = 'gif';
    var emailBody =  pic_url ;
    window.location = 'mailto:' + email + '?subject=' + subject + '&body=' +   emailBody;
  });
});
      },
    });




});




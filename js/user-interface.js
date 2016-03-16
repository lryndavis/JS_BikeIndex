var apiKey = "836d1cb2b10624b566b42f1711ac962df243e9cda4aee63a5d555458f4012530";

titley = "";


$(function(){
  $('#city-form').submit(function(event){
    event.preventDefault();
    var city = $('#city').val();
    $("#city").val("");
    $('.bike-info').text("The City you have chosen is " + city + ".");
    $.get('https://bikeindex.org:443/api/v2/bikes_search/stolen?page=1&proximity=' + city + '%2C%20OR&proximity_square=100', function(response) {
        $.each(response.bikes, function(i, bike){
          console.log(response.bikes);
          titley = this.title;
          $('.bike-info').append('<li class="bike">' + this.title + '</li>');
      });
      $('.bikes .bike-info .bike').click(function(){
        console.log("hi");
        $('.bike-stats .title').html(titley);
      });
          console.log(response.bikes);
    });
  });

});


// Potentially create new bike objects for each when looping thru array of bikey

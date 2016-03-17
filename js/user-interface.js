var apiKey = "836d1cb2b10624b566b42f1711ac962df243e9cda4aee63a5d555458f4012530";

// titley = "";


$(function(){
  $('#city-form').submit(function(event){
    event.preventDefault();
    var city = $('#city').val();
    $("#city").val("");
    $('.bike-info').prepend("The City you have chosen is " + city + ".");
    $.get('https://bikeindex.org:443/api/v2/bikes_search/stolen?page=1&proximity=' + city + '%2C%20OR&proximity_square=100', function(response) {
        $.each(response.bikes, function(i, bike){

          titley = this.title;
          yearModel = this.year;
          manufacturerName = this.manufacturer_name;
          stolenFrom = this.stolen_location;
          stuff = '<div class="bk bike-data' + i + '">' +
                          '<p>Title: <span class="title">' + titley + '</span></p>' +
                          '<p>Year: <span class="title">' + yearModel + '</span></p>' +
                          '<p>Make: <span class="title">' + manufacturerName + '</span></p>' +
                          '<p>Stolen From: <span class="title">' + stolenFrom + '</span></p>' +
                        '</div>'
          $('.bike-info').append('<li class="bike" id=' + i + '>' + this.title + stuff + '</li>');
          });
          $('.bike-info').on("click",".bike", function(){
            $(".bike-data" + this.id).show();
            console.log(this.id);
        });
      });
    });
  });

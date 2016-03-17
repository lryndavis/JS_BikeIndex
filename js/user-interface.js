var apiKey = "836d1cb2b10624b566b42f1711ac962df243e9cda4aee63a5d555458f4012530";


$(function(){
  $('#city-form').submit(function(event){
    event.preventDefault();
    var city = $('#city').val();
    $('.bike-info').text("");
    $("#city").val("");
    $.get('https://bikeindex.org:443/api/v2/bikes_search/stolen?page=1&per_page=999&proximity=' + city + '%2C%20OR&proximity_square=100', function(response) {
      $.each(response.bikes, function(i, bike){
        titley = this.title;
        yearModel = this.year;
        manufacturerName = this.manufacturer_name;
        stolenFrom = this.stolen_location;
        colors = this.frame_colors;
        if (this.thumb !== "null") {
          bikeImage = this.thumb;
        } else {
          bikeImage = "Image is not available";
        }

        stuff = '<div class="bk bike-data' + i + '">' +
                  '<p>Year: <span class="title">' + yearModel + '</span></p>' +
                  '<p>Make: <span class="title">' + manufacturerName + '</span></p>' +
                  '<p>Stolen From: <span class="title">' + stolenFrom + '</span></p>' +
                  '<p>Colors: <span class="title">' + colors + '</span></p>' +
                  '<p><img src="' + bikeImage +'"></p>' +
                '</div>'
        $(".searching").show();
        $(".search-city").text(city);
        $('.bike-info').append('<li class="bike" id=' + i + '>' + titley + stuff + '</li>');
        });

        $('.bike-info').on("click",".bike", function(){
          $(".bike-data" + this.id).slideToggle();
      });
    });
  });
});

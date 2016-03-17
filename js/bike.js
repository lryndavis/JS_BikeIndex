exports.bikeGetter = function(city) {
  $.get('https://bikeindex.org:443/api/v2/bikes_search/stolen?page=1&per_page=100&proximity=' + city + '%2C%20OR&proximity_square=100').then(function(response) {
    $.each(response.bikes, function(i, bike){
      titley = this.title;
      yearModel = this.year;
      manufacturerName = this.manufacturer_name;
      stolenFrom = this.stolen_location;
      colors = this.frame_colors;
      serialNum = this.serial;
      frameModel = this.frameModel;
      if (this.thumb !== null) {
        bikeImage = '<img src="' + this.thumb +'">';
      } else {
        bikeImage = "<span>Image is not available</span>";
      }

      bikeStats = '<div class="bk bike-data' + i + '">' +
                    '<p><strong>Year: </strong><span class="title">' + yearModel + '</span></p>' +
                    '<p><strong>Make: </strong><span class="title">' + manufacturerName + '</span></p>' +
                    '<p><strong>Stolen From: </strong><span class="title">' + stolenFrom + '</span></p>' +
                    '<p><strong>Colors: </strong><span class="title">' + colors + '</span></p>' +
                    '<p><strong>Serial Number: </strong><span class="title">' + serialNum + '</span></p>' +
                    '<p><strong>Frame Model: </strong><span class="title">' + frameModel + '</span></p>' +
                    '<p>' + bikeImage + '</p>' +
                  '</div>';
      $(".searching").show();
      $(".search-city").text(city);
      $('.bike-info').append('<li class="bike" id=' + i + '>' + titley + bikeStats + '</li>');
    });
      $('.bike-info').off("click",".bike");
      $('.bike-info').on("click",".bike", function(){
        $(".bike-data" + this.id).slideToggle();
    });
    }).fail(function(error) {
    $('.bike-info').text(error.responseJSON.message);
    console.log(error.responseJSON.message);
  });
}

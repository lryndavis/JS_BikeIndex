var bikeGetter = require('./../js/bike.js').bikeGetter;

$(function(){
  $('#city-form').submit(function(event){
    event.preventDefault();
    var city = $('#city').val();
    $('.bike-info').empty();
    $("#city").val("");
    bikeGetter(city);
  });
});

$().ready( function () {
  var apiKey = "d9f4929417fc919f";
  var weatherUrl = "https://api.wunderground.com/api/" + apiKey + "/conditions/EN/q/";
  var tempToggle = "F"; //Fahrenheit to Celsius toggle
  
  $.getJSON("https://ipapi.co/json/", function (position) {
    
    weatherUrl += position.latitude.toString() + "," + position.longitude.toString() + ".json";
   
    $.getJSON(weatherUrl, function (data) {
      
      var weather = data.current_observation.weather;
      var tempF = data.current_observation.temp_f.toString() + " &deg;F";
      var tempC = data.current_observation.temp_c.toString() + " &deg;C";
      var srcWithIcon = "https://rawgit.com/benjaminboruff/assets/master/wuicons/" + data.current_observation.icon + ".svg";
      var wuIcon = data.current_observation.image.url;
      
      $("#fullLocation").html(data.current_observation.display_location.full + " Local Weather");
      $("#icon-url").attr("src", srcWithIcon);
      $("#weather").html("<h7><strong>" + weather + "</strong></h7>");
      $("#toggle-f-c").html(tempF);
      $("#toggle-f-c").on("click", function (e) {
        e.preventDefault();
        if (tempToggle == "F") {
          tempToggle = "C";
          $("#toggle-f-c").html(tempC);
        } else {
          tempToggle = "F";
          $("#toggle-f-c").html(tempF);
        }
        
      });
      $("#wu-logo").attr("src", wuIcon);
    });
  });
});
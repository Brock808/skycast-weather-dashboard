$.ajax({
  url: "https://api.open-meteo.com/v1/forecast?latitude=59.91&longitude=10.75&current=temperature_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m,weather_code,is_day&daily=temperature_2m_max,temperature_2m_min,weather_code,precipitation_probability_max&forecast_days=7&timezone=auto",

  success: function (data) {
    console.log(data);
  },
});

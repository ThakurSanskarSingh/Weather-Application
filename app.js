const apiKey = "b37074c8ac8e771c76ab3d71c01f95c1";
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
        let searchBox = document.querySelector(".search input");
        let searchBtn = document.querySelector(".search button");
        const weatherIcon = document.querySelector(".weather-icon")
    async function checkWeather(city){
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        var data = await response.json();

        console.log(data);
    
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+ "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
        if(data.weather[0].main == "Clouds"){
weatherIcon.src = "images/clouds.png";
        } else   if(data.weather[0].main == "Clear"){
weatherIcon.src = "images/clear.png";
        } else   if(data.weather[0].main == "Wind"){
weatherIcon.src = "images/wind.png";
        } else   if(data.weather[0].main == "snow"){
weatherIcon.src = "images/snow.png";
        } else   if(data.weather[0].main == "rain"){
weatherIcon.src = "images/rain.png";
        } else   if(data.weather[0].main == "mist"){
weatherIcon.src = "images/mist.png";
        }


        }
        document.querySelector(".weather").style.display = "block";
    searchBtn.addEventListener("click", () =>{
        checkWeather(searchBox.value);

    })
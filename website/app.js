/* Global Variables */
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const genBtn = document.getElementById("generate");
const zipInput = document.getElementById("zip");
const feelInput = document.getElementById("feelings");
const finalDate = document.getElementById("date");
const finalTemp = document.getElementById("temp");
const finalFeelings = document.getElementById("content");

// Personal API Key for OpenWeatherMap API
const apiKey = "&appid=b36940defbf43153a728eae736068df6";
const url = `https://api.openweathermap.org/data/2.5/weather?zip=`;

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = months[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear();

// Event listener to add function to existing HTML DOM element
genBtn.addEventListener("click", genWeather);

/* Function called by event listener */
function genWeather(e) {
  e.preventDefault();

  // get weather data from api...
  const zipCode = zipInput.value;
  const fullUrl = url + zipCode + apiKey;

  getFrmApi(fullUrl).then((weatherData) => {
    // post all user data to server...
    // console.log(weatherData);
    const srvrUrl = "http://localhost:9000/weatherdata/";
    const data = {
      temp: weatherData.main.temp,
      date: newDate,
      feelings: feelInput.value,
    };
    sendData(srvrUrl, data).then(() => {
      // get all needed data from serverApi...

      const srvrAll = "http://localhost:9000/all/";
      getAllData(srvrAll).then((d) => {
        // Update all DOM Elements...

        updateDOM(d);
      });
    });
  });
}

/* Function to GET Web API Data*/
async function getFrmApi(url) {
  const res = await fetch(url);
  try {
    const dataFrmApi = await res.json();
    return dataFrmApi;
  } catch (err) {
    console.log(err);
  }
}

/* Function to POST data */
async function sendData(url, data) {
  const res = await fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}

/* Function to GET Project Data */
async function getAllData(url) {
  const res = await fetch(url);
  try {
    const allData = await res.json();
    return allData;
  } catch (err) {
    console.log(err);
  }
}

/* Function to Update DOM Elements */
function updateDOM(d) {
  finalDate.innerHTML = d.date;
  finalTemp.innerHTML = ((5 / 9) * (d.temperature - 32)).toFixed(0) + "&#8451;";
  finalFeelings.innerHTML = d.userResponse;
}

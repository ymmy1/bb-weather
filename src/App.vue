<template id="app">
  <Nav />
  <main>
    <input
      type="text"
      class="search-bar"
      placeholder="Search..."
      v-model="query"
      @keypress="fetchWeather"
    />
    <div class="weather-data" v-if="weather.main !== undefined">
      <img
        v-bind:src="
          'http://openweathermap.org/img/wn/' +
          weather.weather[0].icon +
          '@2x.png'
        "
        v-bind:alt="weather.weather[0].main"
      />
      <p class="location">{{ weather.name }}, {{ weather.sys.country }}</p>
      <p class="date">{{ dateBuilder() }}</p>
      <p class="temp">{{ Math.round(weather.main.temp) }}°C</p>
      <p class="min-max">
        <span class="temp-low">Low:</span>
        {{ Math.round(weather.main.temp_min) }}°C
        <span class="temp-high">High:</span>
        {{ Math.round(weather.main.temp_max) }}°C
      </p>
      <p class="weather">{{ weather.weather[0].description }}</p>
    </div>
    <div class="weather-data" v-if="weather.main === undefined">
      <p class="date">Please select another location</p>
    </div>
  </main>
  <Footer />
</template>

<script>
import Nav from "./components/Nav";
import Footer from "./components/Footer";
export default {
  name: "App",
  components: {
    Nav,
    Footer,
  },
  data() {
    return {
      api_key: "d1c59648c144681a6a487b45f5b0c58b",
      url_base: "https://api.openweathermap.org/data/2.5/",
      query: "",
      weather: {},
      weatherForecast: {},
    };
  },
  created() {
    fetch(
      `${this.url_base}weather?q=seattle&units=metric&APPID=${this.api_key}`
    )
      .then((res) => {
        return res.json();
      })
      .then(this.setResult);
  },
  methods: {
    fetchWeather(e) {
      if (e.key == "Enter") {
        fetch(
          `${this.url_base}weather?q=${this.query}&units=metric&APPID=${this.api_key}`
        )
          .then((res) => {
            return res.json();
          })
          .then(this.setResult);
      }
    },
    setResult(result) {
      this.weather = result;

      if (this.weather.main !== undefined) {
        fetch(
          `${this.url_base}forecast?q=${this.query}&units=metric&APPID=${this.api_key}`
        )
          .then((res) => {
            return res.json();
          })
          .then(this.setForecastResult);
      }
    },
    setForecastResult(result) {
      let newList = [{}];
      let index = 0;
      let months = [
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
      for (let i = 0; i < result.list.length; i++) {
        let dateTime = result.list[i].dt_txt.split(" ");
        let convertDate = dateTime[0].slice(5, 11).split("-");
        let date = months[convertDate[0] - 1] + " " + convertDate[1];
        let time = dateTime[1];
        if (newList[index].date !== date) {
          index++;
          result.list[i].dt_txt = time.slice(0, 5);
          let item = {
            date: date,
            items: [result.list[i]],
          };
          newList.push(item);
        } else {
          result.list[i].dt_txt = time.slice(0, 5);
          newList[index].items.push(result.list[i]);
        }
      }
      newList.shift();
      this.weatherForecast = newList;
    },
    dateBuilder() {
      let d = new Date();
      let months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];

      let day = days[d.getDay()];
      let date = d.getDate();
      let month = months[d.getMonth()];
      let year = d.getFullYear();

      return `${day} ${date} ${month} ${year}`;
    },
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  background: $bg;
  min-height: 100vh;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}
</style>

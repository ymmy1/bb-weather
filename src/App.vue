<template id="app">
  <Nav />
  <div class="main">
    <router-view
      :weatherData="weather"
      v-model="query"
      :error="error"
      @fetchWeather="fetchWeather()"
    />
  </div>
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
      lat: 0,
      lon: 0,
      name: "",
      country: "",

      error: "empty",

      query: "Seattle",
      weather: {},
    };
  },
  methods: {
    fetchWeather() {
      fetch(
        `${this.url_base}weather?q=${this.query}&units=metric&APPID=${this.api_key}`
      )
        .then((res) => {
          return res.json();
        })
        .then(this.latLon);
    },
    latLon(coord) {
      if (coord.cod != 200) {
        this.weather = {};
        this.error = coord.message;
      } else {
        this.lat = coord.coord.lat;
        this.lon = coord.coord.lon;
        this.name = coord.name;
        this.country = coord.sys.country;
        fetch(
          `${this.url_base}onecall?lat=${this.lat}&lon=${this.lon}&exclude=minutely,hourly,alerts&units=imperial&appid=${this.api_key}`
        )
          .then((res) => {
            return res.json();
          })
          .then(this.setForecastResult);
      }
    },
    setForecastResult(result) {
      let finalResult = result;
      finalResult["name"] = this.name;
      finalResult["country"] = this.country;
      console.log(finalResult);

      this.weather = finalResult;
      this.query = "";
      this.error = false;
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  background: $bg;
  font-family: "Open Sans", sans-serif;
  min-height: 100vh;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  word-wrap: break-word;
  color: $default;
  .main {
    flex: 1;
    z-index: 2;
  }
}
</style>

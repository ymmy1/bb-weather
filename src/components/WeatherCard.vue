<template>
  <div class="card-box">
    <div class="card-box_header">
      <div class="iconArea">
        <fa class="locIcon" icon="map-marker-alt" />
      </div>

      <h2>{{ weatherList.name }}, {{ weatherList.country }}</h2>
    </div>
    <div class="card-box_body">
      <div class="weather-box">
        <h3>Currently</h3>
        <div class="data">
          <div class="image-area">
            <img
              v-bind:src="
                'http://openweathermap.org/img/wn/' +
                weatherList.current.weather[0].icon +
                '@2x.png'
              "
              v-bind:alt="weatherList.current.weather[0].main"
            />
            <p class="image-title">
              {{ weatherList.current.weather[0].description }}
            </p>
          </div>
          <div class="temp-area">
            <p class="main">{{ Math.round(weatherList.current.temp) }}°</p>
            <div class="minor">
              <div class="min">
                <h3>min</h3>
                <p>{{ Math.round(weatherList.daily[0].temp.min) }}°</p>
              </div>
              <div class="max">
                <h3>max</h3>
                <p>{{ Math.round(weatherList.daily[0].temp.max) }}°</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="weather-box">
        <h3>Tomorrow's Forecast</h3>
        <div class="data">
          <div class="image-area">
            <img
              v-bind:src="
                'http://openweathermap.org/img/wn/' +
                weatherList.daily[1].weather[0].icon +
                '@2x.png'
              "
              v-bind:alt="weatherList.daily[1].weather[0].main"
            />
            <p class="image-title">
              {{ weatherList.daily[1].weather[0].description }}
            </p>
          </div>
          <div class="temp-area">
            <p class="main">{{ Math.round(weatherList.daily[1].temp.day) }}°</p>
            <div class="minor">
              <div class="min">
                <h3>min</h3>
                <p>{{ Math.round(weatherList.daily[1].temp.min) }}°</p>
              </div>
              <div class="max">
                <h3>max</h3>
                <p>{{ Math.round(weatherList.daily[1].temp.max) }}°</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card-box_footer">
      <router-link
        :to="{
          name: 'Location',
          params: {
            id: `${weatherList.name}_01`,
          },
        }"
      >
        <button>View 4-day Forecast</button>
      </router-link>
    </div>
  </div>
  <div></div>
</template>

<script>
export default {
  name: "WeatherCard",
  props: ["weatherList"],
};
</script>

<style lang="scss" scoped>
.card-box {
  display: flex;
  flex-direction: column;
  width: 410px;
  -webkit-box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
  background: #ffffff;
  &_header {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #e7e7e7;
    .iconArea {
      padding: 20px;
      border-right: 1px solid #e7e7e7;
      .locIcon {
        font-size: 30px;
      }
    }
    h2 {
      padding-left: 30px;
      font-weight: 600;
    }
  }
  &_body {
    display: flex;
    flex-direction: column;
    .weather-box:nth-child(2) {
      padding: 40px 20px;
      background: #fbfbfb;
    }
    .weather-box {
      padding: 30px 20px;
      h3 {
        font-size: 17px;
        font-weight: 400;
        color: $main;
      }
      .data {
        display: flex;
        justify-content: space-evenly;
        align-items: flex-end;
        .image-area {
          padding: 0 20px;
          text-align: center;
          img {
            width: 80px;
          }
          .image-title {
            text-transform: uppercase;
            font-size: 12px;
          }
        }
        .temp-area {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0 20px;
          color: $main;
          .main {
            font-size: 50px;
            font-weight: 600;
            margin-left: 20px;
          }
          .minor {
            display: flex;
            justify-content: space-between;
            font-size: 20px;
            .min,
            .max {
              padding: 0 5px;
              h3 {
                color: $default;
                text-transform: uppercase;
                font-size: 12px;
              }
            }
          }
        }
      }
    }
  }
  &_footer {
    width: 100%;
    button {
      width: 100%;
      background: $main;
      padding: 15px 20px;
      color: #ffffff;
      font-size: 17px;
      border: none;
      text-transform: uppercase;
      font-weight: 600;
      cursor: pointer;
      transition: 0.2s;
      &:hover {
        background: rgba($main, 0.9);
      }
    }
  }
}
</style>
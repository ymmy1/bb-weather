<template>
  <div v-if="weatherData[index]" class="location">
    <div class="link">
      <router-link
        :to="{
          name: 'Home',
        }"
      >
        Back to homepage
      </router-link>
    </div>
    <div class="weather-area">
      <div class="weather-area_navigation">
        <div class="iconArea">
          <fa class="locIcon" icon="map-marker-alt" />
        </div>
        <h2 class="titleArea">
          <span>{{ buttonTitle }}</span>
          <span>/</span>
          <span
            >{{ weatherData[index].name }},
            {{ weatherData[index].country }}</span
          >
        </h2>
      </div>
      <div class="weather-area_box">
        <div class="weather-section">
          <h3 class="weather-section_header">Today's Weather</h3>
          <div class="weather-section_body">
            <div class="weather-display">
              <div class="image-area">
                <img
                  v-bind:src="
                    'http://openweathermap.org/img/wn/' +
                    weatherData[index].current.weather[0].icon +
                    '@2x.png'
                  "
                  v-bind:alt="weatherData[index].current.weather[0].main"
                />
                <p class="image-title">
                  {{ weatherData[index].current.weather[0].description }}
                </p>
              </div>
              <div class="temp-area">
                <p class="main">
                  {{ Math.round(weatherData[index].current.temp) }}°
                </p>
                <div class="minor">
                  <div class="min">
                    <h3>min</h3>
                    <p>
                      {{ Math.round(weatherData[index].daily[0].temp.min) }}°
                    </p>
                  </div>
                  <div class="max">
                    <h3>max</h3>
                    <p>
                      {{ Math.round(weatherData[index].daily[0].temp.max) }}°
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="forecast-section">
          <div
            class="forecast-box"
            v-for="dayWheater in weatherData[index].daily.slice(1, 4)"
            :key="dayWheater.moonrise"
          >
            <h4>
              {{ newDate(dayWheater.dt) }}
            </h4>
            <div class="forecast-data">
              <img
                v-bind:src="
                  'http://openweathermap.org/img/wn/' +
                  dayWheater.weather[0].icon +
                  '@2x.png'
                "
                v-bind:alt="dayWheater.weather[0].description"
              />
              <p class="image-title">
                {{ dayWheater.weather[0].description }}
              </p>
              <div class="temp-area">
                <div class="min">
                  <h5>min</h5>
                  <p>{{ Math.round(dayWheater.temp.min) }}°</p>
                </div>
                <div class="max">
                  <h5>max</h5>
                  <p>{{ Math.round(dayWheater.temp.max) }}°</p>
                </div>
                <div class="humidity">
                  <h5>humidity</h5>
                  <p>{{ Math.round(dayWheater.humidity) }}<span>%</span></p>
                </div>
                <div class="wind">
                  <h5>wind</h5>
                  <p>{{ Math.round(dayWheater.wind_speed) }}<span>mph</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="else" v-else>This location is not added to your list</div>
</template>

<script>
export default {
  props: ["id", "weatherData", "buttonTitle", "index"],
  name: "Location",
  mounted() {
    window.scrollTo(0, 0);
  },
  methods: {
    newDate(date) {
      const tod = new Date(this.weatherData[this.index].current.dt * 1000);
      const d = new Date(date * 1000);
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
      let today = days[tod.getDay()];

      if (
        days.indexOf(today) + 1 === days.indexOf(day) ||
        (days.indexOf(today) === 6 && days.indexOf(day) === 0)
      ) {
        return "Tomorrow";
      }
      return day;
    },
  },
};
</script>

<style lang="scss" scoped>
.else {
  padding: 20px;
  width: 100%;
  text-align: center;
  font-size: 20px;
}
.location {
  padding: 40px;
  .link {
    a {
      text-decoration: none;
      color: $default;
      text-transform: uppercase;
      font-weight: 600;
      font-size: 20px;
      transition: 0.2s;
      &:hover {
        color: $main;
      }
    }
  }
  .weather-area {
    max-width: 1200px;
    margin: auto;
    z-index: 3;
    &_navigation {
      display: flex;
      align-items: center;
      .iconArea {
        padding: 20px;
        .locIcon {
          font-size: 30px;
        }
      }
      h2 {
        font-weight: 600;
        text-transform: capitalize;
        font-size: 30px;
        span {
          margin: 0 8px;
          &:nth-child(2) {
            font-weight: 400;
          }
        }
      }
    }
    &_box {
      display: flex;
      -webkit-box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
      box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
      .weather-section {
        flex: 1;
        background: #ffffff;
        border-right: 1px solid #e7e7e7;
        display: flex;
        flex-direction: column;

        &_header {
          color: $main;
          padding: 25px;
          font-weight: 400;
          font-size: 22px;
          border-bottom: 1px solid #e7e7e7;
        }
        &_body {
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 1;
          .weather-display {
            margin-bottom: 50px;
            display: flex;
            flex-wrap: wrap;
            .image-area {
              text-align: center;
              margin-right: 50px;
              img {
                width: 160px;
              }
              p {
                text-transform: uppercase;
              }
            }
            .temp-area {
              text-align: center;
              .main {
                color: $main;
                font-size: 110px;
                margin-left: 20px;
              }
              .minor {
                display: flex;
                .min,
                .max {
                  margin: 0 10px;
                  h3 {
                    text-transform: uppercase;
                    font-weight: 400;
                    font-size: 18px;
                  }
                  p {
                    color: $main;
                    font-size: 34px;
                    margin-left: 12px;
                  }
                }
              }
            }
          }
        }
      }
      .forecast-section {
        width: 45%;
        display: flex;
        flex-direction: column;
        .forecast-box {
          display: flex;
          flex-direction: column;
          padding: 30px;
          &:nth-child(even) {
            background: #ffffff;
          }
          &:nth-child(odd) {
            background: #fbfbfb;
          }
          h4 {
            color: $main;
            font-weight: 400;
            font-size: 16px;
          }
          .forecast-data {
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
            img {
              width: 80px;
            }
            p {
              font-size: 12px;
              text-transform: uppercase;
            }
            .temp-area {
              display: flex;
              flex: 0.7;
              div {
                margin: 0 5px;
                text-align: center;
                h5 {
                  font-weight: 400;
                  text-transform: uppercase;
                  font-size: 11px;
                }
                p {
                  color: $main;
                  font-size: 22px;
                  span {
                    font-size: 11px;
                    text-transform: lowercase;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
@media only screen and (max-width: 943px) {
  .location {
    .weather-area {
      &_box {
        flex-direction: column;
        .forecast-section {
          width: 100%;
        }
      }
    }
  }
}
@media only screen and (max-width: 666px) {
  .location {
    .weather-area {
      &_navigation {
        h2 {
          span:nth-child(1),
          span:nth-child(2) {
            display: none;
          }
        }
      }
      &_box {
        .weather-section {
          &_body {
            .weather-display {
              justify-content: center;
              .image-area {
                margin-right: 0px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
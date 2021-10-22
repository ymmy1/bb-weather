<template>
  <div class="home">
    <div class="input-box">
      <label for="search">Search for a location</label>
      <div class="row">
        <input
          name="search"
          type="text"
          class="search-bar"
          placeholder="Enter city & state..."
          v-bind:value="modelValue"
          @input="$emit('update:modelValue', $event.target.value)"
          @keyup.enter="searchClick"
          autocomplete="off"
        />
        <button @click="searchClick">Add&nbsp;Location</button>
      </div>
      <p v-if="error">{{ error }}</p>
    </div>
    <div class="data-box">
      <h1>Your Locations</h1>
      <div class="cards" v-if="empty">{{ empty }}</div>
      <div class="cards" v-else>
        <WeatherCard
          v-for="(card, index) in weatherData"
          :key="index"
          :weatherList="card"
          :index="index"
        />
      </div>
    </div>
  </div>
</template>

<script>
import WeatherCard from "../components/WeatherCard.vue";

export default {
  components: { WeatherCard },
  name: "Home",
  props: ["weatherData", "modelValue", "error", "joke", "empty"],
  methods: {
    searchClick() {
      console.log("clicking on child");
      if (this.modelValue.length > 0) {
        this.$emit("fetchWeather");
      }
    },
  },
};
</script>

<style>
</style>
<style lang="scss" scoped>
.home {
  padding: 50px 20px;
  .input-box {
    max-width: 700px;
    display: flex;
    margin: auto;
    flex-direction: column;
    margin-bottom: 30px;
    label {
      font-size: 14px;
      margin-bottom: 10px;
      color: $search;
    }
    .row {
      display: flex;
      input {
        width: 100%;
        padding: 15px;
        outline: none;
        border: 2px solid #bbbbbb;
        margin-right: 10px;
      }
      button {
        background: $main;
        padding: 20px 35px;
        color: #ffffff;
        font-size: 12px;
        border: none;
        text-transform: uppercase;
        font-weight: 700;
        cursor: pointer;
        transition: 0.2s;
        &:hover {
          background: rgba($main, 0.9);
        }
        &:active {
          transform: translateY(2px);
        }
      }
    }
  }
  .data-box {
    h1 {
      color: $main;
      font-weight: 600;
      font-size: 35px;
      margin-left: 18%;
    }
    .cards {
      justify-content: center;
      flex-direction: row-reverse;
      display: flex;
      width: 100%;
      flex-wrap: wrap;
    }
  }
}
@media only screen and (max-width: 585px) {
  .home {
    .input-box {
      .row {
        flex-direction: column;
        button {
          margin-top: 20px;
        }
      }
    }
    .data-box {
      h1 {
        margin-left: 0px;
        text-align: center;
      }
    }
  }
}
</style>
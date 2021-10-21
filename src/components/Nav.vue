<template>
  <nav>
    <router-link :to="{ name: 'Home' }">
      <img class="navLogo" src="@/assets/logo.png" alt="BuyerBridge" />
    </router-link>
  </nav>
</template>

<script>
export default {
  name: "Nav",
};
</script>

<style lang="scss" scoped>
nav {
  background: rgb(111, 117, 178);
  background: linear-gradient(160deg, $l-start 25%, $l-end 100%);
  padding: 30px 60px;
  .navLogo {
    width: 270px;
    filter: brightness(0) invert(1);
  }
}
@media only screen and (max-width: 400px) {
  nav {
    padding: 5%;
    .navLogo {
      width: 100%;
    }
  }
}
</style>
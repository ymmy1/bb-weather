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
  background: linear-gradient(160deg, $l-start 38%, $l-end 100%);
  padding: 30px 60px;
  .navLogo {
    width: 270px;
    filter: brightness(0) invert(1);
  }
}
</style>
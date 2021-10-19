<template >
  <footer class="footer">
    <img class="navLogoFooter" src="@/assets/logo.png" alt="BuyerBridge" />
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  padding: 30px 60px;
  display: flex;
  flex-direction: row-reverse;

  //always bottom
  .navLogoFooter {
    width: 270px;
  }
}
</style>
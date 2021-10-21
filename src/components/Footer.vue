<template >
  <footer class="footer">
    <img
      class="littleManLogo"
      src="@/assets/little-man.png"
      alt="BuyerBridge"
    />
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
  display: flex;
  position: relative;
  flex-direction: row-reverse;
  padding: 80px 60px;
  .littleManLogo {
    z-index: 1;
    position: absolute;
    bottom: 0;
    left: 0;
  }
  .navLogoFooter {
    width: 270px;
    z-index: 2;
  }
}
@media only screen and (max-width: 585px) {
  .footer {
    .littleManLogo {
      display: none;
    }
  }
}
@media only screen and (max-width: 400px) {
  .footer {
    padding: 5%;
    .navLogoFooter {
      width: 100%;
    }
  }
}
</style>
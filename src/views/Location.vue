<template>
  <div>
    <p>
      {{ weatherData }}
    </p>
  </div>
</template>

<script>
export default {
  props: ["id", "weatherData"],
  name: "Location",
};
</script>

<style>
</style>
<template>
  <div class="holder">
    <!-- <div class="">KM</div> -->
    <div class="">
      <Nav></Nav>
    </div>

    <div class="pt-20">
      <Home></Home>
    </div>
  </div>
</template>

<script>
import Nav from "./Nav.vue";
import Home from "./Home.vue";

export default {
  name: "ALl",
  components: { Nav, Home },
};
</script>

<style scoped>
</style>
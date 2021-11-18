<template>
  <div class="holder">
    <!-- <div class="">KM</div> -->
    <div class="">
      <Nav></Nav>
    </div>

    <div class="pt-20">
      <Home></Home>
    </div>
    <div>
      <AboutUs></AboutUs>
    </div>
    <div>
      <Services></Services>
    </div>
  </div>
</template>

<script>
import Nav from "./Nav.vue";
import Home from "./Home.vue";
import AboutUs from "./AboutUs.vue";
import Services from "./Services.vue";

export default {
  name: "ALl",
  components: { Nav, Home, AboutUs, Services },
};
</script>

<style scoped>
</style>
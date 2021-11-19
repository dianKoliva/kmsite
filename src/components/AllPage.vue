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
    <div>
      <Clients></Clients>
    </div>
    <div>
      <ContactUs></ContactUs>
    </div>
  </div>
</template>

<script>
import Nav from "./Nav.vue";
import Home from "./Home.vue";
import AboutUs from "./AboutUs.vue";
import Services from "./Services.vue";
import Clients from "./Clients.vue";
import ContactUs from "./ContactUs.vue";

export default {
  name: "ALl",
  components: { Nav, Home, AboutUs, Services, Clients, ContactUs },
};
</script>

<style scoped>
</style>
<template>
  <div class="holder">
    <!-- <div class="">KM</div> -->
    <div class="">
      <Nav></Nav>
    </div>

    <div class="pt-20" id="home">
      <Home></Home>
    </div>
    <div id="about">
      <AboutUs></AboutUs>
    </div>
    <div id="services">
      <Services></Services>
    </div>

    <div id="client">
      <Clients></Clients>
    </div>

    <div id="contact">
      <ContactUs></ContactUs>
    </div>

    <div>
      <div class="bg-red text-white relative w-full bottom-0">
        <div class="flex">
          <div
            class="
              mr-auto
              cursor-pointer
              ml-auto
              flex
              text-sm
              pt-6
              font-light
              pb-4
            "
          >
            <a href="#">
              <p class="mr-8 cursor-pointer">Home</p>
            </a>

            <a href="#about">
              <p class="mr-8 cursor-pointer">About</p>
            </a>

            <a href="#services">
              <p class="mr-8 cursor-pointer">Services</p>
            </a>

            <a href="#contact">
              <p class="mr-8 cursor-pointer">Contact Us</p>
            </a>
          </div>
        </div>

        <div class="text-center pb-2">
          <i class="fa fa-instagram cursor-pointer text-2xl mr-6"></i>
          <i class="fa fa-twitter cursor-pointer text-2xl mr-6"></i>
          <i class="fa fa-linkedin cursor-pointer text-2xl mr-6"></i>
        </div>
      </div>
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
import Footer from "./Footer.vue";
export default {
  name: "ALl",
  components: { Nav, Home, AboutUs, Services, Clients, ContactUs, Footer },
};
</script>

<style scoped>
</style>
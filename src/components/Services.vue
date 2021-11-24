<template>
  <div class="flex pb-10 mt-16">
    <div class="w-1/2 mt-20">
      <div
        class="ml-24 w-96"
        data-aos="fade-right"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="900"
      >
        <h1 class="text-xl text-red font-extrabold mt-10">
          SERVICES WE CAN HELP YOU WITH
        </h1>
        <p class="text-sm leading-7 mt-4">
          The services listed on the right side are the services you can find at
          Koliva motors.Come to Koliva Motors receive the best services of all
          time.
        </p>
      </div>
    </div>
    <div class="w-1/2 flex" data-aos="zoom-in" data-aos-duration="900">
      <div class="mt-12 ml-8">
        <div class="bg-red-lighter w-40 text-center rounded-lg shadow-lg">
          <i class="fa fa-truck text-red text-2xl pt-4"></i>
          <p class="text-sm pl-2 pb-4 pr-2 pt-2">
            Koliva Motors can give your truck a new look
          </p>
        </div>

        <div
          data-aos="zoom-in"
          data-aos-duration="900"
          class="
            bg-red-lighter
            w-40
            text-center
            rounded-lg
            shadow-lg
            mt-12
            ml-6
          "
        >
          <i class="fa fa-money text-red text-2xl pt-4"></i>
          <p class="text-sm pl-2 pb-4 pr-2 pt-2">
            Koliva Motors sells the best used trucks in the city
          </p>
        </div>
      </div>

      <div class="ml-14" data-aos="zoom-in" data-aos-duration="900">
        <div class="bg-red-lighter w-40 text-center rounded-lg shadow-lg">
          <i class="fa fa-money text-red text-2xl pt-4"></i>
          <p class="text-sm pl-2 pb-4 pr-2 pt-2">
            You can also sell your truck to Koliva Motors
          </p>
        </div>

        <div
          class="
            bg-red-lighter
            w-40
            text-center
            rounded-lg
            shadow-lg
            mt-12
            ml-6
          "
          data-aos="zoom-in"
          data-aos-duration="900"
        >
          <i class="fa fa-wrench text-red text-2xl pt-4"></i>
          <p class="text-sm pl-2 pb-4 pr-2 pt-2">
            Koliva Motors sends you a mechanic to repair your truck.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AOS from "aos";
export default {
  created() {
    AOS.init();
  },
};
</script>

<style scoped>
</style>
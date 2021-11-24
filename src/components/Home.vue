<template>
  <div class="flex">
    <div class="w-1/2">
      <div class="ml-20 w-4/5">
        <h1
          class="font-bold text-3xl mb-4 text-red"
          data-aos="fade-right"
          data-aos-duration="3000"
        >
          BEST CHASSIS REPAIRING COMPANY IN RWANDA
        </h1>
        <p
          class="leading-7 text-sm"
          data-aos="fade-right"
          data-aos-duration="3000"
        >
          Koliva Motors is the best chassis repairing company in the country .We
          make your car brand new and you got to testify the we got the best
          customer service. You can book a mechanic, get a preform or get a car
          breakdown by contacting us.With Koliva motors, keep your wheels
          moving.
        </p>
        <a href="#contact">
          <button
            data-aos="fade-right"
            data-aos-duration="3000"
            class="
              transition
              duration-500
              ease-in-out
              transform
              hover:-translate-y-1 hover:scale-110
              bg-red
              mt-12
              px-4
              py-2
              text-white text-tiny
              rounded-md
              focus:outline-none
              onfocus:bg-green-700
            "
          >
            Contact Us
          </button>
        </a>
      </div>
    </div>

    <div class="w-1/2">
      <img src="/truck.svg" class="max-w-lg ml-24 pt-4" alt="" />
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

<template>
  <div class="bg-back bg-cover">
    <div class="flex mt-20">
      <div class="w-1/2">
        <img src="/about.png" class="max-w-xs mt-10" alt="" />
      </div>

      <div class="absolute right-0 w-1/2 pr-16 mt-24">
        <h1
          class="font-bold text-lg pb-4 text-red"
          data-aos="fade-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="900"
        >
          About Koliva Motors
        </h1>
        <p
          class="text-sm leading-7"
          data-aos="fade-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="900"
        >
          Koliva Motors is a mechanichs company that has many intelligent and
          skilled car mechanics who can repair your car and make it brand new.
          Koliva Motors is located In Kigali-Kagugu. You can contact us to book
          your car mechanic or deal with us about your car repair Koliva Motors
          is a mechanichs company that has many intelligent and skilled car
          mechanics who can repair your car and make it brand new.
        </p>
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
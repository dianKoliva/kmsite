<template>
  <div class="w-full bg-red-light">
    <p class="font-bold text-xl pt-10 text-red text-center">
      Our Clients Speak
    </p>
    <div>
      <div
        v-if="show == 1"
        class="flex mt-10 pb-6"
        data-aos="fade-left"
        data-aos-duration="900"
      >
        <div class="w-72 ml-20 mt-10 text-sm">
          <img
            src="/three.jpg"
            class="ml-auto mr-auto rounded-full h-12 w-12"
            alt=""
          />
          <p class="text-center pt-1 pb-2">Akaliza Ange</p>
          <span class="text-center">
            “I went to Koliva Motors when my truck was damaged and I was
            suprised by the hospitality and good service at the worksop “
          </span>
        </div>
        <div class="w-72 ml-24 mt-10 text-sm">
          <img
            src="/four.jpg"
            class="w-12 h-12 ml-auto mr-auto rounded-full"
            alt=""
          />
          <p class="text-center pt-1 pb-2 text-sm">Keza Divine</p>
          <span class="text-center">
            “I can testify that Koliva motors is the best chassis repairing
            company in Rwanda after renewing my truck “
          </span>
        </div>
        <div class="w-72 ml-24 mt-10 text-sm">
          <img
            src="/11.jpg"
            class="w-12 h-12 rounded-full ml-auto mr-auto"
            alt=""
          />
          <p class="text-center pt-1 pb-2">Kizito Flex</p>
          <span class="">
            “I was searching for the best place to sell my truck , they
            recommended me Koliva motors and they sold it at a good price “
          </span>
        </div>
      </div>

      <div
        v-else
        class="flex mt-10 pb-6"
        data-aos="fade-left"
        data-aos-duration="900"
      >
        <div class="w-72 ml-20 mt-10 text-sm">
          <img
            src="/12.jpg"
            class="w-12 h-12 ml-auto mr-auto rounded-full"
            alt=""
          />
          <p class="text-center pt-1 pb-2">Ngenzi David</p>
          <span class="">
            “If you are looking for the best garage to get your car chassis
            repaired, think of Koliva Motors “
          </span>
        </div>
        <div class="w-72 ml-24 mt-10 text-sm">
          <img src="/d.png" class="w-10 ml-auto mr-auto" alt="" />
          <p class="text-center pt-1 pb-2">Diane Pretty</p>
          <span class="">
            “Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum “
          </span>
        </div>
        <div class="w-72 ml-24 mt-10 text-sm">
          <img src="/d.png" class="w-10 ml-auto mr-auto" alt="" />
          <p class="text-center pt-1 pb-2">Diane Pretty</p>
          <span class="">
            “Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum “
          </span>
        </div>
      </div>

      <div class="ml-96 pl-52 pb-4">
        <input type="radio" @change="onChange(1)" name="change" id="" />

        <input
          type="radio"
          @change="onChange(2)"
          name="change"
          id=""
          class="ml-4"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import AOS from "aos";
export default {
  setup() {
    let show = ref(1);

    let onChange = (put) => {
      if (put == 1) {
        show.value = 1;

        console.log(sec);
      } else {
        show.value = 2;
      }
    };

    return {
      show,
      onChange,
    };
  },
  created() {
    AOS.init();
  },
};
</script>

<style scoped>
</style>
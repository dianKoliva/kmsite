<template>
  <div class="w-full bg-red-light">
    <p class="font-bold text-xl pt-10 text-red text-center">
      Our Clients Speak
    </p>
    <div>
      <div v-if="show == 1" class="flex mt-10 pb-6">
        <div class="w-72 ml-20 mt-10 text-sm">
          <img src="/d.png" class="w-10 ml-auto mr-auto" alt="" />
          <p class="text-center pt-1 pb-2">Diane Pretty</p>
          <span class="">
            “kkLorem Ipsum is simply dummy text of the printing and typesetting
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
        <div class="w-72 ml-24 mt-10 text-sm">
          <img src="/d.png" class="w-10 ml-auto mr-auto" alt="" />
          <p class="text-center pt-1 pb-2">Diane Pretty</p>
          <span class="">
            “Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum “
          </span>
        </div>
      </div>

      <div v-else class="flex mt-10 pb-6">
        <div class="w-72 ml-20 mt-10 text-sm">
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
        <div class="w-72 ml-24 mt-10 text-sm">
          <img src="/d.png" class="w-10 ml-auto mr-auto" alt="" />
          <p class="text-center pt-1 pb-2">Diane Pretty</p>
          <span class="">
            “Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum “
          </span>
        </div>
      </div>

      <div class="content-center pb-4">
        <input type="radio" @change="onChange(1)" name="change" id="" />

        <input
          type="radio"
          @change="onChange(2)"
          name="change"
          id=""
          class="ml-1"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
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
};
</script>

<style scoped>
</style>
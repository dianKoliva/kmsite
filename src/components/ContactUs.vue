<template>
  <div class="flex mb-6 mt-6">
    <div
      class="w-1/2"
      data-aos="fade-right"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="3000"
    >
      <img src="/contact.png" class="max-w-md ml-16 mt-8" alt="" />
    </div>

    <div class="w-1/2">
      <p class="font-bold text-xl text-red text-center pt-4">CONTACT US</p>

      <div class="inputs text-sm ml-32">
        <div class="mt-4">
          <p v-if="noName" class="text-red-dark text-xs">Name required</p>
          <p>Name</p>
          <input
            type="text"
            spellcheck="false"
            v-model="name"
            class="
              border-solid border-2 border-red
              rounded-md
              focus:outline-none
              mt-1
              h-8
              px-2
              w-96
              text-xs
              py-2
            "
          />
        </div>

        <div class="mt-4">
          <p v-if="noEmail" class="text-xs text-red-dark">
            Phone number needed
          </p>

          <p>Phone number</p>
          <input
            type="text"
            spellcheck="false"
            v-model="email"
            class="
              border-solid border-2 border-red
              rounded-md
              focus:outline-none
              mt-1
              h-8
              px-2
              py-4
              w-96
              text-xs
            "
          />
        </div>

        <div class="mt-4">
          <p v-if="noMessage" class="text-red text-xs">Message needed</p>
          <p>Message</p>
          <textarea
            v-model="message"
            name=""
            class="
              border-solid border-2 border-red
              rounded-md
              focus:outline-none
              w-96
              h-28
              resize-none
              px-2
              py-2
              text-xs
            "
          ></textarea>
        </div>
        <div class="ml-24">
          <button
            class="
              mt-4
              hover:bg-red hover:text-white
              text-xs
              transition
              duration-500
              ease-in-out
              transform
              hover:-translate-y-1 hover:scale-110
              bg-red-light
              border-solid border-red border-2
              py-2
              px-20
              rounded-md
              focus:outline-none
            "
            @click="submit"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import validator from "email-validator";
import AOS from "aos";
export default {
  created() {
    AOS.init();
  },
  data() {
    return {
      name: "",
      email: "",
      message: "",
      noName: false,
      noEmail: false,
      noMessage: false,
    };
  },

  methods: {
    submit() {
      let info = {};
      if (this.name != "" && this.email != "" && this.message != "") {
        info = {
          name: this.name,
          number: this.email,
          message: this.message,
        };
        axios
          .post("http://localhost:4000/send/email", info)
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
      }
      if (this.name == "") {
        this.noName = true;
      } else {
        this.noName = false;
      }

      if (this.email == "") {
        this.noEmail = true;
        this.notEmail = false;
      } else {
        this.noEmail = false;
        this.notEmail = false;
      }

      if (this.message == "") {
        this.noMessage = true;
      } else {
        this.noMessage = false;
      }
    },
  },
};
</script>

<style scoped>
</style>
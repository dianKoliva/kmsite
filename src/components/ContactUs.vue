<template>
  <div class="flex mb-6 mt-6">
    <div class="w-1/2">
      <img src="/contact.png" class="max-w-md" alt="" />
    </div>

    <div class="w-1/2">
      <p class="font-bold text-xl text-red text-center pt-4">CONTACT US</p>

      <div class="inputs text-sm ml-44">
        <div class="mt-4">
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
              w-80
              text-xs
              py-2
            "
          />
        </div>

        <div class="mt-4">
          <p>Email</p>
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
              w-80
              text-xs
            "
          />
        </div>

        <div class="mt-4">
          <p>Message</p>
          <textarea
            v-model="message"
            name=""
            class="
              border-solid border-2 border-red
              rounded-md
              focus:outline-none
              w-80
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
              px-14
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
export default {
  data() {
    return {
      name: "",
      email: "",
      message: "",
      noName: false,
      noEmail: false,
      noMessage: false,
      notEmail: false,
    };
  },

  methods: {
    submit() {
      let info = {};
      if (
        this.name != "" &&
        this.email != "" &&
        this.message != "" &&
        !this.notEmail
      ) {
        info = {
          name: this.name,
          email: this.email,
          message: this.message,
        };
      }
      if (this.name == "") {
        this.noName = true;
      } else {
        this.noName = false;
      }

      if (this.email == "") {
        this.noEmail = true;
        this.notEmail = false;
      } else if (!validator.validate(this.email)) {
        this.notEmail = true;
        this.noName = false;
      } else {
        this.noEmail = false;
        this.notEmail = false;
      }

      if (this.message == "") {
        this.noMessage = true;
      } else {
        this.noMessage = false;
      }

      axios
        .post("http://localhost:4000/send/email", info)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
</style>
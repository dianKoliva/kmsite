<template>
  <div class="flex mb-6 mt-6">
    <div class="w-1/2">
      <img src="/contact.png" class="max-w-md" alt="" />
    </div>

    <div class="w-1/2">
      <p class="font-bold text-xl text-red text-center pt-4">CONTACT US</p>

      <div class="inputs text-sm ml-auto">
        <div class="mt-4 mr-auto ml-auto">
          <p>Name</p>
          <input
            type="text"
            spellcheck="false"
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
        <button
          class="
            ml-auto
            mr-auto
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
        >
          Submit
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>
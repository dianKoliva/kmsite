<template>
  <div class="flex">
    <div class="w-1/2">
      <img src="/contact" alt="" />
    </div>

    <div class="w-1/2">
      <p class="font-bold text-xl text-red text-center">CONTACT US</p>

      <div class="inputs text-sm">
        <div class="mt-4">
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
              w-72
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
              w-72
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
              w-72
              h-28
              resize-none
              px-2
              py-2
              text-sm
            "
          ></textarea>
        </div>
        <button
          class="
            hover:bg-red hover:text-white
            text-xs
            transition
            duration-500
            ease-in-out
            transform
            hover:-translate-y-1 hover:scale-110
            bg-red-light
            border-solid border-red border-2
            py-1
            px-4
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
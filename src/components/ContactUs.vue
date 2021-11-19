<template>
  <div class="flex">
    <div class="w-1/2">
      <img src="/contact" alt="" />
    </div>

    <div class="w-1/2">
      <p>CONTACT US</p>

      <div class="inputs text-sm">
        <div class="mt-4">
          <p>Name</p>
          <input
            type="text"
            spellcheck="false"
            class="
              border-solid border-2 border-black
              rounded-md
              focus:outline-none
              mt-1
              h-8
              px-2
              w-72
            "
          />
        </div>

        <div class="mt-4">
          <p>Email</p>
          <input
            type="text"
            spellcheck="false"
            class="
              border-solid border-2 border-black
              rounded-md
              focus:outline-none
              mt-1
              h-8
              px-2
              w-72
            "
          />
        </div>

        <div class="mt-4">
          <p>Message</p>
          <textarea
            name=""
            class="
              border-solid border-2 border-black
              rounded-md
              focus:outline-none
              w-72
              h-28
              resize-none
              px-2
              py-2
            "
          ></textarea>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>
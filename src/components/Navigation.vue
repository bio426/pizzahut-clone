<template>
  <div class="flex items-center w-full bg-black overflow-x-auto">
    <a
      class="p-2 bg-red-500 text-white whitespace-nowrap"
      >Combos 🌟</a
    >
    <a
      class="p-2 text-white whitespace-nowrap"
      v-for="i in 6"
      >Combos 🌟</a
    >
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Navigation",
  setup() {},
});
</script>

<template>
<div class="relative bg-gray-300">
    <header class="flex justify-center items-center p-3 bg-white">
      <a href="/" class="block w-1/3">
        <img src="../assets/pizza-logo.png" />
      </a>
    </header>
    <div class="grid grid-cols-2 gap-2 m-2">
      <Product v-for="i in 6" />
    </div>
    <div class="w-full h-28"></div>
    <div class="fixed bottom-0 w-full">
      <Navigation />
      <div class="p-2 bg-white">
        <button class="w-full p-2 bg-green-500 text-white font-medium">
          Ver Carrito de Compra
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue"

import Product from "../components/Product.vue";
import Navigation from "../components/Navigation.vue";

export default defineComponent({
  name: "menu-view",
  components: {
    Product,
    Navigation,
  },
  setup(){

  }
})
</script>
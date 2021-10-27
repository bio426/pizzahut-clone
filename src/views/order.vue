<template>
	<div class="relative min-h-screen bg-gray-200">
		<div class="relative">
			<img src="../assets/combo.jpg" />
			<button class="absolute top-2 right-2" @click="router.go(-1)">
				<img class="w-8" src="../assets/icons/close.svg" />
			</button>
		</div>
		<h2
			class="
				p-2
				bg-gray-800
				text-white text-xl text-center
				font-medium
				uppercase
			"
		>
			Hut combo mediano
		</h2>
		<div class="p-2 bg-white">
			<div class="my-2 px-2 text-gray-800 text-sm">
				Desde
				<span class="text-lg font-medium">S/ 99.99</span>
			</div>
			<p>
				1 Pizza Mediana <br />
				4 Alitas en tu salsa favorita o <br />
				4 Palitos a la Siciliana <br />
				1 Gaseosa Personal <br />
			</p>
      <p class="mt-4 text-gray-500 text-sm">Imagenes referenciales.</p>
		</div>
    <div class="p-4">
      <Selector v-for="i in 3" />
    </div>
    <div class="fixed bottom-0 w-full p-2 bg-white border border-gray-400">
      <button class="w-full py-2 px-4 bg-green-500 rounded text-white text-left font-medium">
        <span>Añadir oferta al carrito</span>
        <span class="float-right">+ S/ 99.99</span>
      </button>
    </div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import {useRouter} from "vue-router"

import Selector from "../components/Selector.vue"

export default defineComponent({
	name: "order-view",
	components: {
    Selector
  },
	setup() {
    const router = useRouter()

    return {
      router
    }
  },
})
</script>

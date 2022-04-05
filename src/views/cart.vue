<template>
	<div class="min-h-screen">
		<h2 class="m-6 text-center text-2xl font-semibold">Tu carrito
			<router-link class="absolute right-4 text-sm font-normal" to="/menu">Cancelar</router-link>
		</h2>
		<div class="p-4">
			<item v-for="i in 10" />
		</div>
		<div class="h-36">
			
		</div>
		<div class="fixed bottom-0 w-full p-2 bg-white border border-gray-300">
			<div class="flex justify-between text-gray-500 text-sm">
				<span>Costo de entrega</span>
				<span>S/ 99.99</span>
			</div>
			<div class="flex justify-between text-lg font-medium">
				<span>Tu total</span>
				<span>S/ 99.99</span>
			</div>
      <h6 class="py-6 text-center text-lg">¿Te provoca algo más? ¡Agrégalo!</h6>
      <div class="flex justify-between gap-2">
        <button>
          <img class="w-6" src="../assets/icons/left.svg">
        </button>
        <div class="flex items-center gap-2">
          <img class="w-10" src="../assets/combo.jpg">
          <span class="text-center">Rollls de pepperoni & queso (6 UN)</span>
          <span class="font-medium whitespace-nowrap">S/ 99.99</span>
          <button class="p-2 text-white bg-green-500 rounded font-medium">Añadir</button>
        </div>
        <button>
          <img class="w-6" src="../assets/icons/right.svg">
        </button>
      </div>
			<button class="w-full mt-2 py-2 px-4 bg-green-500 text-white font-medium" @click="$router.push('/payment')">
				<div class="relative float-left">
					<img class="w-6" src="../assets/icons/cart.svg" />
					<span
						class="
							absolute
							-top-1
							-right-3
							flex
							items-center
							justify-center
							w-5
							h-5
							bg-white
							text-green-500
							rounded-full
							text-xs
						"
						>99</span
					>
				</div>
				Proceder al Pago
			</button>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

import Item from "../components/Item.vue"

export default defineComponent({
	name: "cart-view",
	components: {
		Item,
	},
	setup() {},
})
</script>

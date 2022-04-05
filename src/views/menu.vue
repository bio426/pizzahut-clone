<template>
	<div class="relative min-h-screen bg-gray-300">
		<div class="md:w-3/5">
			<header class="flex justify-center items-center p-3 bg-white">
				<span class="absolute left-4 text-sm">&#128338; 30 min</span>
				<a href="/" class="block w-1/3">
					<img class="h-8 mx-auto" src="../assets/pizza-logo.png" />
				</a>
			</header>
			<Navigation class="hidden md:block" />
			<div class="grid grid-cols-2 lg:grid-cols-3 gap-2 m-2">
				<Product v-for="i in 4" />
				<Product v-for="i in 4" select />
			</div>
			<div class="md:hidden w-full h-28"></div>
			<div class="fixed bottom-0 md:hidden w-full">
				<Navigation class="md:hidden" />
				<div class="p-2 bg-white">
					<button
						class="w-full py-2 px-4 bg-green-500 text-white font-medium"
						@click="$router.push('/cart')"
					>
						<div class="relative float-left mr-8">
							<img class="w-6" src="../assets/icons/cart.svg" />
							<span
								class="absolute -top-1 -right-3 flex items-center justify-center w-5 h-5 bg-white text-green-500 rounded-full text-xs"
								>99</span
							>
						</div>
						Ver Carrito de Compra
						<span class="float-right">S/ 99.99</span>
					</button>
				</div>
			</div>
		</div>
		<div
			class="hidden md:block fixed top-0 right-0 w-2/5 h-screen bg-white overflow-auto"
		>
			<h2 class="m-6 text-center text-2xl font-medium">
				Tu carrito
			</h2>
			<div class="p-4 overflow-auto">
				<item v-for="i in 10" />
			</div>
			<div class="h-36"></div>
			<div class="fixed bottom-0 w-2/5 p-2 bg-white border border-gray-300">
				<div class="flex justify-between text-gray-500 text-sm">
					<span>Costo de entrega</span>
					<span>S/ 99.99</span>
				</div>
				<div class="flex justify-between text-lg font-medium">
					<span>Tu total</span>
					<span>S/ 99.99</span>
				</div>
				<button
					class="w-full mt-2 py-2 px-4 bg-green-500 text-white font-medium"
					@click="$router.push('/payment')"
				>
					<div class="relative float-left">
						<img class="w-6" src="../assets/icons/cart.svg" />
						<span
							class="absolute -top-1 -right-3 flex items-center justify-center w-5 h-5 bg-white text-green-500 rounded-full text-xs"
							>99</span
						>
					</div>
					Proceder al Pago
				</button>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"

import Product from "../components/Product.vue"
import Navigation from "../components/Navigation.vue"
import Item from "../components/Item.vue"

export default defineComponent({
	name: "menu-view",
	components: {
		Product,
		Navigation,
		Item
	},
	setup() {},
})
</script>

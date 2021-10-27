<template>
	<div>
		<header class="flex items-center gap-2 w-full p-2">
			<img class="h-8 mr-auto" src="../assets/pizza-logo.png" />
			<button
				class="
					flex
					items-center
					gap-1
					p-2
					bg-red-500
					text-white
					rounded-lg
					text-sm
				"
			>
				<img class="w-4" src="../assets/icons/phone.svg" />
				(99) 999-9999
			</button>
			<a class="">
				<img class="w-6" src="../assets/icons/user.svg" />
			</a>
			<img class="h-6" src="../assets/peru.png" />
		</header>
		<img class="" src="../assets/banner.jpg" />
		<main class="p-2">
			<div class="my-4 shadow-lg border border-gray-300">
				<!--separar a coponente individual-->
				<div class="flex">
					<button class="w-1/2 p-4 bg-white text-red-500 text-lg font-semibold">
						Entrega a domicilio
					</button>
					<button class="w-1/2 p-4 bg-gray-300 text-gray-500">
						Recojo en tienda
					</button>
				</div>
				<div class="p-4">
					<p>Por favor ingresa tu dirección para continuar con tu compra.</p>
					<div
						class="
							flex
							w-full
							my-4
							border border-gray-300
							rounded-md
							overflow-hidden
						"
					>
						<input
							class="flex-grow p-2"
							type="text"
							placeholder="Ingresa tu calle y número"
						/>
						<button class="p-2 bg-green-500">
							<img class="w-8" src="../assets/icons/search.svg" />
						</button>
					</div>
					<button class="flex items-center text-blue-500 text-sm">
						<img class="w-4" src="../assets/icons/location.svg" />
						Utilizar mi ubicación
					</button>
				</div>
			</div>
			<img class="my-2" src="../assets/offer1.png" />
			<img class="my-2" src="../assets/offer2.png" />
			<router-link
				class="
					block
					w-full
					p-4
					bg-green-500
					text-white
					rounded-xl
					text-center
					font-semibold
					uppercase
				"
				to="/menu"
			>
				Ver todas las ofertas
			</router-link>
		</main>
		<Footer />
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

import Product from "../components/Product.vue"
import Navigation from "../components/Navigation.vue"
import Footer from "../components/Footer.vue"

export default defineComponent({
	name: "index-view",
	components: {
		Product,
		Navigation,
		Footer,
	},
	setup() {},
})
</script>

<style></style>

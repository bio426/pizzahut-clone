<template>
	<div class="relative min-h-screen bg-gray-200">
		<header class="hidden md:block p-2 bg-white">
			<div class="flex items-center gap-2 xl:w-3/4 mx-auto">
				<img class="h-8 mr-auto" src="../assets/pizza-logo.png" />
				<div class="flex items-center gap-2">
					<p class="hidden lg:block">
						<img
							class="inline-block w-4"
							src="../assets/icons/marker.svg"
							alt=""
						/>
						Entrega en
						<span class="font-semibold"
							>Av. Cesar Canevaro 1010, Lince 15073, Perú</span
						>
					</p>
					<span class="ml-2 text-sm">&#128338; 30 min</span>
				</div>
			</div>
		</header>
		<Navigation class="hidden lg:block" />
		<div class="lg:hidden">
			<div class="relative">
				<img class="block mx-auto" src="../assets/combo.jpg" />
				<button class="absolute top-2 right-2" @click="router.go(-1)">
					<img class="w-8" src="../assets/icons/close-gray.svg" />
				</button>
			</div>
			<h2
				class="p-2 bg-gray-800 text-white text-xl text-center font-medium uppercase"
			>
				Hut combo mediano
			</h2>
		</div>
		<div class="p-2 lg:pt-4 bg-white">
			<div class="mx-auto xl:w-3/4">
				<img class="hidden lg:inline float-right w-1/3" src="../assets/combo.jpg" />
				<router-link class="hidden lg:block mb-4 underline" to="/menu"
					>&#x3c; Regresar al menú</router-link
				>
				<h2 class="hidden lg:block text-3xl font-medium uppercase">
					Combo Familiar
				</h2>
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
		</div>
		<div class="xl:w-3/4 mx-auto p-4">
			<Selector v-for="i in 3" />
		</div>
		<div class="h-6 lg:hidden"></div>
		<div class="fixed bottom-0 w-full p-2 bg-white border border-gray-400">
			<button
				class="block w-full xl:w-3/4 mx-auto py-2 px-4 bg-green-500 rounded text-white text-left font-medium"
			>
				<span>Añadir oferta al carrito</span>
				<span class="float-right">+ S/ 99.99</span>
			</button>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { useRouter } from "vue-router"

import Selector from "../components/Selector.vue"
import Navigation from "../components/Navigation.vue"
import Navigation1 from "../components/Navigation.vue"

export default defineComponent({
	name: "order-view",
	components: {
		Selector,
		Navigation,
		Navigation1,
	},
	setup() {
		const router = useRouter()

		return {
			router,
		}
	},
})
</script>

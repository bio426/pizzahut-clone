<template>
	<footer class="py-8 px-4 bg-black">
		<div class="grid grid-cols-2 gap-4">
			<div class="" v-for="i in 3">
				<h4 class="text-white text-xl font-medium uppercase">Menu</h4>
				<a class="block my-2 text-white text-sm" v-for="i in 6">Ofertas 🌟</a>
			</div>
		</div>
		<div class="mt-4">
			<h4 class="text-white text-xl font-medium uppercase">
				Conectate con pizza hut
			</h4>
			<a class="flex gap-2 items-center my-3 text-white text-sm">
				<img class="w-8" src="../assets/icons/facebook.svg" />
				Siguenos en Facebook
			</a>
			<a class="flex gap-2 items-center my-3 text-white text-sm">
				<img class="w-8" src="../assets/icons/instagram.svg" />
				Siguenos en Instagram
			</a>
		</div>
		<div class="my-4 p-4 text-gray-400 border-t border-b border-gray-400 text-center text-sm">
			© 2020 Yum Brands Inc. Todos los derechos reservados.
		</div>
		<p class="text-gray-400 text-xs text-center">
			Las imágenes son de carácter ilustrativo. Área de entrega limitada. Los
			precios pueden variar de unidad en unidad y en servicio a domicilio sin
			previo aviso. Sujeto a disponibilidad. Consulta nuestra
			<a class="text-white font-medium">política de privacidad</a>. COCA-COLA es
			una marca registrada de The Coca-Cola Company. D.R. © The Coca-Cola
			Company. 2020.
		</p>
	</footer>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
	name: "Footer",
	setup() {},
})
</script>

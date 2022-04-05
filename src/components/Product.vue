<template>
	<div class="bg-white">
		<img src="../assets/product-image.jpg" />
		<div class="p-2">
			<h4 class="text-xl">Hut combo mediano</h4>
			<p class="text-gray-500 text-sm">
				1 Pizza Mediana <br />
				4 Alitas en tu salsa favorita o <br />
				4 Palitos a la Siciliana <br />
				1 Gaseosa Personal <br />
			</p>
			<div class="my-2 text-right font-semibold" v-if="!select">
				<span class="text-sm font-normal">Desde</span>
				S/ 99.99
			</div>
			<div class="my-2" v-else>
				<p class="mb-2 text-sm">Seleccione el tamaño y tipo de masa</p>
				<select class="block w-full p-2 text-sm">
					<option value="1" selected>Grande Artesanal</option>
					<option value="2" selected>Mediana Artesanal</option>
					<option value="3" selected>Pequeña Artesanal</option>
				</select>
			</div>
			<router-link class="block w-full p-1 bg-green-500 text-white font-medium text-center" to="/order">
				Seleccionar
			</router-link>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
	name: "Product",
	props:{
		select: {
			type: Boolean,
			default: false
		}
	},
	setup() {},
})
</script>

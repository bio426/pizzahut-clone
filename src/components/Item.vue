<template>
	<div class="py-2">
		<div class="flex justify-between">
			<span class="font-medium">Grande PEPPERONI</span>
			<div class="flex gap-2">
				<button class="px-2 border border-gray-300 text-sm font-medium">
					x1
				</button>
				<span class="font-medium">S/ 99.99</span>
				<button>
					<img class="w-5" src="../assets/icons/close-gray.svg" />
				</button>
			</div>
		</div>
		<div class="flex justify-between mt-2 text-gray-500 text-sm">
			<span>Masa Artesanal</span>
			<span>S/ 99.99</span>
		</div>
    <div class="flex justify-between mt-2 pl-2 text-gray-500 text-sm">
			<span>Ingrediente</span>
			<!-- <span>S/ 99.99</span> -->
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
	name: "Item",
	setup() {},
})
</script>

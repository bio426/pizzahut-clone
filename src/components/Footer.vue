<template>
	<footer class="py-8 px-4 lg:px-0 bg-black">
		<div class="lg:flex gap-4 lg:w-3/4 lg:mx-auto">
			<div class="grid grid-cols-2 md:grid-cols-3 gap-4">
				<div>
					<h4 class="text-white text-xl font-medium uppercase">Menu</h4>
					<a class="block my-2 text-white text-sm">Combos 🍕+🥤</a>
					<a class="block my-2 text-white text-sm">Ofertas 🌟</a>
					<a class="block my-2 text-white text-sm">Pizzas 🍕</a>
					<a class="block my-2 text-white text-sm">Pastas 🍝</a>
					<a class="block my-2 text-white text-sm">Entradas 🍞</a>
					<a class="block my-2 text-white text-sm">Salsas 🍯</a>
				</div>
				<div>
					<h4 class="text-white text-xl font-medium uppercase">
						Sobre nosotros
					</h4>
					<a class="block my-2 text-white text-sm">Nuestra Historia</a>
					<a class="block my-2 text-white text-sm">Visión y valores</a>
					<a class="block my-2 text-white text-sm">Responsabilidad Social</a>
					<a class="block my-2 text-white text-sm">Trabaja con Nosotros</a>
					<a class="block my-2 text-white text-sm">Informacion Nutricional</a>
				</div>
				<div>
					<h4 class="text-white text-xl font-medium uppercase">
						Ayuda y servicio
					</h4>
					<a class="block my-2 text-white text-sm">Contáctanos</a>
					<a class="block my-2 text-white text-sm">Zona de reparto Lima</a>
					<a class="block my-2 text-white text-sm">Comprobante Electrónico</a>
					<a class="block my-2 text-white text-sm">Encuesta GES</a>
					<a class="block my-2 text-white text-sm">Preguntas Frecuentes</a>
					<a class="block my-2 text-white text-sm">Línea Ética</a>
				</div>
				<div>
					<h4 class="text-white text-xl font-medium uppercase">Políticas</h4>
					<a class="block my-2 text-white text-sm">Condiciones de Uso</a>
					<a class="block my-2 text-white text-sm">Términos y condiciones</a>
					<a class="block my-2 text-white text-sm">Política de Privacidad</a>
					<a class="block my-2 text-white text-sm">Política de Delivery</a>
					<a class="block my-2 text-white text-sm">Terminos de Campaña</a>
				</div>
			</div>
			<div class="hidden lg:block mx-auto border-l border-white"></div>
			<div class="mt-4 lg:m-0">
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
		</div>
		<div
			class="my-4 p-4 text-gray-400 border-t border-b border-gray-400 text-center text-sm"
		>
			© 2020 Yum Brands Inc. Todos los derechos reservados.
		</div>
		<p class="lg:w-3/4 lg:mx-auto text-gray-400 text-xs text-center">
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

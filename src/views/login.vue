<template>
	<div class="min-h-screen bg-gray-300">
		<header class="flex justify-center items-center p-3 bg-white">
			<router-link class="absolute left-4 text-sm" to="/"
				>&#x3c; Regresar</router-link
			>
			<a href="/" class="block w-1/3">
				<img class="block h-8 mx-auto" src="../assets/pizza-logo.png" />
			</a>
		</header>
		<h2 class="m-6 text-center text-xl font-medium uppercase">Entrar</h2>
		<div class="md:w-3/4 lg:w-1/2 mx-auto p-4 bg-white">
			<h4 class="p-2 text-center font-medium">O inicie sesion</h4>
			<label class="block my-2 text-gray-500">
				Correo Electronico
				<input
					class="w-full mt-2 p-2 border border-gray-400 rounded"
					type="text"
					placeholder="Email Registrado"
				/>
			</label>
			<label class="block my-2 text-gray-500">
				Su contraseña
				<input
					class="w-full mt-2 p-2 border border-gray-400 rounded"
					type="text"
					placeholder="Contraseña de su cuenta"
				/>
			</label>
			<a class="block my-2 text-red-500 text-center md:text-right">
				¿Olvidaste tu contraseña?
			</a>
			<button
				class="w-full p-2 bg-green-500 text-white rounded-md text-lg font-medium"
			>
				Iniciar sesion
			</button>
			<span class="block m-4 text-center text-lg">O entra con</span>
			<div class="grid grid-cols-1 gap-2 md:grid-cols-2 my-2">
				<button class="w-full  p-1 bg-red-500 text-white rounded">
					Iniciar sesión con Facebook
				</button>
				<button class="w-full  p-1 bg-blue-500 text-white rounded">
					Iniciar sesión con Google
				</button>
			</div>
			<span class="block m-4 text-center text-lg">¿No tienes cuenta?</span>
			<button
				class="w-full p-2 bg-green-500 text-white rounded-md text-lg font-medium"
			>
				Iniciar sesion
			</button>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
	name: "login-view",
	setup() {},
})
</script>

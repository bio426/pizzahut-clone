<template>
	<div class="min-h-screen bg-gray-300">
		<header class="flex justify-center items-center p-3 bg-white">
			<router-link class="absolute left-4 text-sm" to="/menu"
				>&#x3c; Regresar</router-link
			>
			<a href="/" class="block w-1/3">
				<img class="block h-8 mx-auto" src="../assets/pizza-logo.png" />
			</a>
		</header>
		<h2 class="m-6 text-center text-xl font-medium uppercase">
			Finalizar pedido
		</h2>
		<div class="md:w-3/4 lg:w-1/2 mx-auto p-4 bg-white">
			<p class="mb-4">&#128338; 30 min</p>
			<button
				class="w-full mb-4 p-2 bg-green-500 text-white rounded-md text-lg font-medium"
			>
				<img
					class="inline-block w-6 mr-2"
					src="../assets/icons/user-white.svg"
					alt=""
				/>
				Ingresar a mi cuenta
			</button>
			<p class="mb-4 text-lg text-center font-medium">
				¿A quién le estamos entregando?
			</p>
			<label class="block mb-2 text-gray-500" v-for="i in 3">
				Nombre
				<input
					class="block w-full mt-1 p-2 border border-gray-400"
					type="text"
					placeholder="Por favor ingrese su nombre"
				/>
			</label>
			<p class="mt-6 mb-4 text-lg text-center font-medium">
				¿Dónde debemos entregarlo?
			</p>
			<p class="text-sm mb-4">
				<img class="inline-block w-4" src="../assets/icons/marker.svg" alt="" />
				Entregando en
				<span class="text-base font-semibold"
					>Avenida César Canevaro 1350, Lince 15073, Perú</span
				>
			</p>
			<label class="block mb-2 text-gray-500" v-for="i in 3">
				Numero exterior
				<input
					class="block w-full mt-1 p-2 border border-gray-400"
					type="text"
					placeholder="Ejemplo: 2090"
				/>
			</label>
			<label class="flex items-center text-xl mb-4">
				<input class="w-6 h-6 mr-2" type="checkbox" />
				¿Desea acumular puntos Bonus y Boleta Eléctronica?
			</label>
			<label class="flex items-center text-xl mb-4">
				<input class="w-6 h-6 mr-2" type="checkbox" />
				Necesita Factura
			</label>
			<p class="mt-6 mb-4 text-lg text-center font-medium">
				¿Cómo le gustaría pagar?
			</p>
			<label class="block mb-4 p-2 border border-green-500 rounded">
				<div class="flex items-center">
					<input class="w-6 h-6 mr-2" type="radio" name="method" />
					<span class="flex-grow text-lg">Pago en casa con tarjeta</span>
					<img
						class="inline-block float-right w-8"
						src="../assets/icons/cash.svg"
						alt=""
					/>
				</div>
				<p class="text-sm text-gray-500">
					El pago se hara al recibir el pedido. Se enviará POS inalambrico.
				</p>
			</label>
			<label class="block mb-6 p-2 border border-gray-400 rounded">
				<div class="flex items-center">
					<input class="w-6 h-6 mr-2" type="radio" name="method" />
					<span class="flex-grow text-lg">Pago en casa con tarjeta</span>
					<img
						class="inline-block float-right w-8"
						src="../assets/icons/cash.svg"
						alt=""
					/>
				</div>
				<p class="text-sm text-gray-500">
					El pago se hara al recibir el pedido. Se enviará POS inalambrico.
				</p>
			</label>
			<label class="flex items-center mb-4" v-for="i in 2">
				<input class="w-6 h-6 mr-2" type="checkbox" />
				<span class="inline-block w-3/4 text-sm">
					Autorizo el tratamiento de mis datos para fines de prospección y
					promoción comercial por parte de Pizza Hut y sus
					<a class="underline">empresas vinculadas.</a>
				</span>
			</label>
			<button
				class="w-full p-2 bg-green-500 text-white rounded-md text-lg font-medium"
			>
				Haga su pedido (S/ 99.99)
			</button>
		</div>
		<div class="hidden md:block h-8"></div>
	</div>
</template>

<script></script>

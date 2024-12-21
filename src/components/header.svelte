<script lang="ts">
	import { Github, Mail } from 'lucide-svelte';
</script>

<header class="w-full">
	<div
		class=" mx-auto flex h-16 max-w-7xl flex-shrink-0 items-center justify-between border-b border-gray-200 bg-white px-6 text-gray-600 shadow-sm"
	>
		<div class="flex items-center justify-center gap-3 text-primary-600">
			<Mail />
			<a class="logo" data-not="external" href="/"
				><h2 class="text-2xl font-semibold">Svelte Temp Mail</h2></a
			>
		</div>
		<nav class="flex gap-5 text-lg text-gray-700">
			<a href="/about"> About </a>
			<a href="/about"> Api Info </a>
			<a href="/about"> Privacy </a>
			<a
				data-not="external"
				class="flex gap-2 rounded-md bg-slate-700 px-2 py-1 text-white"
				href="/about"
			>
				On <Github />
			</a>
		</nav>
	</div>
</header>

<style lang="postcss">
	nav {
		a:hover:not([data-not='external']) {
			@apply border-b-2 border-primary-200;
		}
	}
	.logo {
		&:hover {
			@apply border-b-2 border-primary-500;
		}
	}
</style>

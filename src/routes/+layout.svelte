<script lang="ts">
	import '../app.css';
	import '@fontsource/poppins/100.css';
	import '@fontsource/poppins/200.css';
	import '@fontsource/poppins/300.css';
	import '@fontsource/poppins/400.css';
	import '@fontsource/poppins/500.css';
	import '@fontsource/poppins/600.css';
	import '@fontsource/poppins/700.css';
	import '@fontsource/poppins/800.css';
	import '@fontsource/poppins/900.css';
	import Header from '../components/header.svelte';
	import Mailarea from '../components/mailarea.svelte';

	let { data, children } = $props();
</script>

<Header />
<main class="flex-1 bg-gray-100 pt-8">
	<Mailarea mail={data.me} />
	{@render children()}
</main>

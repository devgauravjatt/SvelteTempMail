<script lang="ts">
	import { Copy, CopyCheck, Mail, RefreshCcw } from 'lucide-svelte';

	let copying = $state(false);

	function copyMail() {
		copying = true;
		navigator.clipboard.writeText(mail);
		setTimeout(() => {
			copying = false;
		}, 3000);
	}

	const { mail }: { mail: string } = $props();

	function ChangeMail() {
		const domain = window.location.origin;
		window.location.href = domain + '/?reload=true';
	}
</script>

<div
	class="mx-auto flex max-w-2xl flex-col items-center justify-center gap-5 rounded-md bg-white p-2 text-gray-600 shadow-sm sm:p-4 md:p-10"
>
	<div class="flex items-center justify-center gap-3 rounded-md border-2 border-gray-200">
		<div class="flex items-center justify-center gap-2 bg-white pl-2">
			<Mail />
			<p class="overflow-hidden">{mail}</p>
		</div>
		<button onclick={copyMail} class="flex gap-1 bg-gray-200 px-3 py-2">
			{#if copying}
				<CopyCheck />
				<p>Copied</p>
			{:else}
				<Copy />
			{/if}
		</button>
	</div>
	<div>
		<button onclick={ChangeMail} class="flex gap-1 rounded-md bg-gray-200 px-3 py-2">
			<RefreshCcw />
			<p>Change Mail</p>
		</button>
	</div>
</div>

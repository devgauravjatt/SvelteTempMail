<script lang="ts">
	import { ChevronLeft, ChevronRight } from 'lucide-svelte';
	import type { OneMail } from '../app';
	import Time from 'svelte-time';

	const { mail }: { mail: OneMail } = $props();
</script>

<div class="mx-auto mb-10 max-w-3xl">
	<a href="/"
		><h2 class="flex gap-2 py-3 text-xl font-semibold text-gray-600"><ChevronLeft />Back</h2></a
	>
	<h3 class="pb-2 pl-3">{mail.subject}</h3>
	<div class="rounded-md bg-white p-4">
		<div class="flex items-center justify-between gap-4 p-4">
			<div class="flex gap-4">
				<div class="flex size-11 items-center justify-center rounded-full bg-primary-400">
					<span class="font-semibold italic text-white">{mail.from.address[0].toUpperCase()}</span>
				</div>
				<div class="text-gray-600">
					<p class="font-semibold">{mail.from.name}</p>
					<p>{mail.from.address}</p>
				</div>
			</div>
			<div class="flex flex-col gap-1 text-gray-600">
				<Time relative timestamp={mail.createdAt} />
				<Time timestamp={mail.createdAt} />
			</div>
		</div>
	</div>
	<div class="mx-auto h-[50rem] max-h-[80rem] max-w-3xl bg-white p-5">
		<iframe
			class="h-full w-full overflow-auto"
			srcdoc={mail.html.toString()}
			frameborder="0"
			title={mail['@id']}
		></iframe>
	</div>
</div>

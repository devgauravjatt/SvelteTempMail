<script lang="ts">
	import { Archive, ChevronRight, Clock9, Mail, ShieldAlert } from 'lucide-svelte';
	import type { HydraMember } from '../app';
	import Time from 'svelte-time/Time.svelte';

	const { mails }: { mails: HydraMember[] } = $props();
</script>

<div class="mx-auto mt-6 max-w-3xl">
	<h2 class="flex items-center gap-3 pb-3 text-xl font-semibold text-primary-500">
		<Archive />Mail Inbox
	</h2>
	<div class="min-h-40 rounded-md border-2 border-gray-300">
		{#if mails.length > 0}
			{#each mails as mail}
				<a href={'/mail?id=' + mail.id}>
					<div
						class=" relative flex items-center justify-between rounded-md bg-white p-4 text-gray-600 shadow-sm hover:shadow-lg"
					>
						<span class="absolute right-2 top-1 flex items-center gap-1 text-sm"
							><Clock9 size={16} /><Time relative timestamp={mail.createdAt} /></span
						>
						<div class="flex items-center gap-5">
							<div class="flex size-11 items-center justify-center rounded-full bg-primary-600">
								<span class="font-semibold italic text-white"
									>{mail.from.address[0].toUpperCase()}</span
								>
							</div>
							<div>
								<p class="text-primary-600">{mail.from.name}</p>
								<p class="flex items-center gap-2"><Mail />{mail.from.address}</p>
							</div>
						</div>
						<div>
							<p>{mail.subject}</p>
							<p>{mail.intro}</p>
						</div>
						<div class="pt-2">
							<ChevronRight class="text-primary-400" />
						</div>
					</div></a
				>
			{/each}
		{:else}
			<div class="flex items-center justify-center pt-10">
				<h2 class="flex items-center gap-3 pb-3 text-xl font-semibold text-gray-400">
					<ShieldAlert />No Mails
				</h2>
			</div>
		{/if}
	</div>
</div>

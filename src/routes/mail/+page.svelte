<script lang="ts">
	import MailOpen from '../../components/mailOpen.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<div>
	<div>
		<MailOpen mail={data.mail as any} />
	</div>
</div>

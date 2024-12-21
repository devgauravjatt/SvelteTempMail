<script lang="ts">
	import MailLists from '../components/mailLists.svelte';
	import type { PageData } from './$types';

	const { data }: { data: PageData } = $props();
</script>

<div>
	<div>
		<MailLists mails={data.mails as any} />
	</div>
</div>

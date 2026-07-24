<script lang="ts">
	import { resolve } from '$app/paths';
	import zone01oujda from '$lib/assets/zone01oujda.png';
	import AssignedAuditors from '$lib/components/audit/AssignedAudits.svelte';
	import GlobalSearch from '$lib/components/search/GlobalSearch.svelte';
	import User from './User.svelte';
</script>

<header>
	<a href={resolve('/')}>
		<img src={zone01oujda} alt="zone01oujda-logo" id="zone01oujda-logo" />
	</a>
	<div class="header-actions">
		<GlobalSearch />
		<AssignedAuditors />
		<User />
	</div>
</header>

<style>
	header {
		--header-height: clamp(50px, 10vh, 70px);

		display: flex;
		align-items: center;
		justify-content: space-between;
		height: var(--header-height);
		padding: 30px 30px;

		img {
			width: auto;
			height: var(--header-height);
		}
	}

	.header-actions {
		display: flex;
		align-items: center;
		gap: 10px;
	}
</style>

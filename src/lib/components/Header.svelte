<script lang="ts">
	import Logo from '#lib/components/Logo.svelte';
	import karta from '#lib/assets/karta.jpg?enhanced&w=805;400';
	import { company } from '#lib/data.ts';

	let dialog: HTMLDialogElement;
</script>

<header>
	<div class="wrap bar">
		<Logo />
		<address>
			{#each company.phones as p}
				<a href="tel:+7{p.replace(/\D/g, '')}" class="phone">{p}</a>
			{/each}
			<span>{company.address}</span>
			<button type="button" onclick={() => dialog.showModal()}>Показать на карте</button>
		</address>
	</div>
</header>

<dialog bind:this={dialog} onclick={(e) => e.target === dialog && dialog.close()}>
	<enhanced:img src={karta} alt="Карта: {company.address}" sizes="min(900px, 95vw)" loading="lazy" />
	<button type="button" onclick={() => dialog.close()} aria-label="Закрыть">×</button>
</dialog>

<style>
	header { background: var(--header-bg); box-shadow: var(--shadow); }
	.bar { display: flex; flex-wrap: wrap; gap: 1rem 2rem; align-items: center; justify-content: space-between; padding-block: 1rem; }
	address { font-style: normal; display: grid; gap: 0.15rem; color: var(--header-text); font-size: 0.95rem; }
	.phone { font-size: 1.25rem; font-weight: 600; text-decoration: none; color: var(--header-link); }
	address button { justify-self: start; background: none; border: 0; padding: 0.6rem 0; min-height: 2.75rem; color: var(--header-link); font: inherit; text-decoration: underline dashed; cursor: pointer; }
	@media (pointer: coarse) { .phone { display: inline-flex; align-items: center; min-height: 2.75rem; } address { gap: 0; } }
	dialog { border: 0; padding: 0; border-radius: var(--radius); max-width: min(900px, 95vw); overflow: visible; }
	dialog::backdrop { background: rgb(0 0 0 / 0.6); }
	dialog :global(img) { display: block; width: 100%; height: auto; border-radius: var(--radius); }
	dialog button { position: absolute; top: 0.5rem; right: 0.5rem; width: 2.25rem; height: 2.25rem; border-radius: 50%; border: 0; background: var(--surface); color: var(--text); font-size: 1.5rem; line-height: 1; cursor: pointer; box-shadow: var(--shadow); }
</style>

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
			<span class="phones">
				{#each company.phones as p}
					<a href="tel:+7{p.replace(/\D/g, '')}" class="phone">{p}</a>
				{/each}
			</span>
			<span class="where">
				{company.address}
				<button type="button" onclick={() => dialog.showModal()}>На карте</button>
			</span>
		</address>
	</div>
</header>

<dialog bind:this={dialog} onclick={(e) => e.target === dialog && dialog.close()}>
	<enhanced:img src={karta} alt="Карта: {company.address}" sizes="min(900px, 95vw)" loading="lazy" />
	<button type="button" onclick={() => dialog.close()} aria-label="Закрыть карту">×</button>
</dialog>

<style>
	header { border-bottom: 1px solid var(--line); background: var(--bg); }
	.bar { display: flex; flex-wrap: wrap; gap: 0.75rem 2rem; align-items: center; justify-content: space-between; padding-block: 0.9rem; }
	address { font-style: normal; display: grid; gap: 0.1rem; justify-items: end; font-size: 0.9rem; color: var(--muted); }
	.phones { display: flex; flex-wrap: wrap; gap: 0.25rem 1.25rem; justify-content: flex-end; font-variant-numeric: tabular-nums; }
	.phone { font-size: 1.15rem; font-weight: 600; color: var(--text); text-decoration: none; }
	.phone:hover { color: var(--accent); }
	.where button { background: none; border: 0; padding: 0 0 0 0.4rem; color: var(--accent); text-decoration: underline; text-underline-offset: 0.2em; cursor: pointer; font-size: inherit; }
	@media (max-width: 640px) { .bar { justify-content: center; } address { justify-items: center; text-align: center; } .phones { justify-content: center; } }
	dialog { border: 1px solid var(--line-strong); padding: 0; border-radius: var(--radius); max-width: min(900px, 95vw); overflow: visible; background: var(--surface); }
	dialog::backdrop { background: rgb(0 0 0 / 0.7); }
	dialog :global(img) { display: block; width: 100%; height: auto; border-radius: var(--radius); }
	dialog button { position: absolute; top: 0.5rem; right: 0.5rem; width: 2.25rem; height: 2.25rem; border-radius: 50%; border: 1px solid var(--line-strong); background: var(--raised); color: var(--text); font-size: 1.4rem; line-height: 1; cursor: pointer; }
</style>

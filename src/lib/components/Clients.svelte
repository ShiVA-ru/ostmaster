<script lang="ts">
	import { experience, experienceMore, commercial, trusted, trustedMore } from '#lib/data.ts';

	let open = $state(false);
</script>

<section class="wrap section">
	<div class="cols">
		<div>
			<h2>Наш опыт</h2>
			<h3>Муниципальные учреждения</h3>
			<ul>{#each experience as x}<li>{x}</li>{/each}{#if open}{#each experienceMore as x}<li>{x}</li>{/each}{/if}</ul>
			{#if open}
				<h3>Коммерческие учреждения</h3>
				<ul>{#each commercial as x}<li>{x}</li>{/each}</ul>
			{/if}
		</div>
		<div>
			<h2>Нам доверяют</h2>
			<ul>{#each trusted as x}<li>{x}</li>{/each}{#if open}{#each trustedMore as x}<li>{x}</li>{/each}{/if}</ul>
		</div>
	</div>

	<p class="toggle">
		<button type="button" aria-expanded={open} onclick={() => (open = !open)}>
			{open ? 'Свернуть' : 'Показать списки целиком'}
		</button>
	</p>
</section>

<style>
	.cols { display: grid; gap: 2rem; margin-bottom: 1.5rem; }
	@media (min-width: 800px) { .cols { grid-template-columns: 1fr 1fr; } }
	ul { list-style: none; margin: 0; padding: 0; font-size: 0.92rem; }
	li { padding: 0.55rem 0; border-bottom: 1px solid var(--line); }
	h3 { font-size: 1.1rem; margin-top: 1.5rem; color: var(--muted); font-weight: 600; }
	.toggle { text-align: center; }
	.toggle button { font: inherit; padding: 0.6rem 1.4rem; border-radius: 999px; border: 1px solid var(--accent); background: transparent; color: var(--accent); cursor: pointer; }
	.toggle button:hover { background: var(--accent); color: var(--bg); }
</style>

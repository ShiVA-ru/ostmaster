<script lang="ts">
	import { experience, experienceMore, commercial, trusted, trustedMore } from '#lib/data.ts';

	let open = $state(false);
</script>

<section class="rule">
	<div class="wrap section">
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
				{open ? 'Свернуть списки' : 'Показать списки целиком'}
			</button>
		</p>
	</div>
</section>

<style>
	.cols { display: grid; gap: 3rem; }
	@media (min-width: 900px) { .cols { grid-template-columns: 1fr 1fr; gap: 4rem; } }
	ul { list-style: none; margin: 0 0 2rem; padding: 0; border-top: 1px solid var(--line); }
	li { padding: 0.7rem 0; border-bottom: 1px solid var(--line); font-size: 0.95rem; color: var(--muted); }
	h3 { margin-top: 2rem; margin-bottom: 0.9rem; color: var(--text); font-size: 1.05rem; }
	.toggle { margin: 1rem 0 0; }
	.toggle button { padding: 0.8rem 1.5rem; border-radius: var(--radius); border: 1px solid var(--line-strong); background: transparent; color: var(--text); font-weight: 600; cursor: pointer; transition: border-color 0.2s, color 0.2s; }
	.toggle button:hover { border-color: var(--accent); color: var(--accent); }
</style>

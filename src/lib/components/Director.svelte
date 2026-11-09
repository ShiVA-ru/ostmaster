<script lang="ts">
	import photo from '#lib/assets/photo.jpg?enhanced&w=250';
	import { director } from '#lib/data.ts';
</script>

<section class="wrap section grid">
	<figure>
		<enhanced:img src={photo} alt={director.name} sizes="250px" loading="lazy" />
		<figcaption><b>{director.name}</b><br /><i>{director.role}</i></figcaption>
	</figure>
	<div>
		<h2>{director.title}</h2>
		{#each director.paragraphs as p}<p>{p}</p>{/each}
	</div>
</section>

<style>
	.grid { display: grid; gap: 2rem; }
	@media (min-width: 800px) { .grid { grid-template-columns: 250px 1fr; } }
	figure { margin: 0; font-size: 0.9rem; color: var(--muted); }
	figure :global(img) { width: 100%; max-width: 250px; height: auto; border-radius: var(--radius); box-shadow: var(--shadow); display: block; margin-bottom: 0.75rem; }
	figcaption b { color: var(--text); }
</style>

<script lang="ts">
	import { services } from '#lib/data.ts';

	let index = $state(0);
	let prev = $state(-1);
	let dir = $state(1);
	let hovered = $state(false);
	const paused = $derived(hovered);
	const count = services.length;

	const go = (i: number, d?: number) => {
		const next = (i + count) % count;
		if (next === index) return;
		dir = d ?? (i < index ? -1 : 1);
		prev = index;
		index = next;
	};
	// Which side an inactive slide waits on: the one just left exits opposite to the travel direction.
	const side = (i: number) => (i === prev ? -dir : dir);

	$effect(() => {
		if (paused) return;
		const id = setInterval(() => go(index + 1, 1), 7000);
		return () => clearInterval(id);
	});
</script>

<section
	class="wrap section"
	aria-roledescription="carousel"
	aria-label="Наши услуги"
	onmouseenter={() => (hovered = true)}
	onmouseleave={() => (hovered = false)}
	onfocusin={() => (hovered = true)}
	onfocusout={() => (hovered = false)}
>
	<div class="card">
		<div class="stage" aria-live={paused ? 'polite' : 'off'}>
		{#each services as s, i (s.title)}
			<article class="slide" class:active={i === index} style:--side={side(i)} aria-hidden={i !== index} aria-roledescription="slide" aria-label="{i + 1} из {count}">
				<div class="text">
					<h2>{s.title}</h2>
					<p>{s.text}</p>
				</div>
				<div class="pic"><enhanced:img src={s.image} alt="" sizes="(min-width: 800px) 460px, 90vw" loading={i === 0 ? 'eager' : 'lazy'} fetchpriority={i === 0 ? 'high' : 'auto'} /></div>
			</article>
		{/each}
		</div>
		<div class="controls">
			<button type="button" onclick={() => go(index - 1, -1)} aria-label="Предыдущая услуга">‹</button>
			<div class="dots">
				{#each services as s, i}
					<button type="button" class:on={i === index} aria-label={s.title} aria-current={i === index} onclick={() => go(i, i < index ? -1 : 1)}></button>
				{/each}
			</div>
			<button type="button" onclick={() => go(index + 1, 1)} aria-label="Следующая услуга">›</button>
		</div>
	</div>
</section>

<style>
	.card { --ease: cubic-bezier(0.16, 1, 0.3, 1); --pad: clamp(1.25rem, 4vw, 3rem); background: var(--surface); border-radius: var(--radius); box-shadow: var(--shadow); padding: var(--pad); overflow: hidden; }
	.stage { display: grid; margin-inline: calc(var(--pad) * -1); padding-inline: var(--pad); }
	.slide {
		grid-area: 1 / 1;
		display: grid; gap: 2rem; align-items: center; min-height: 22rem;
		opacity: 0; visibility: hidden;
		transition: opacity 0.45s var(--ease), visibility 0s linear 0.6s;
	}
	.slide.active { opacity: 1; visibility: visible; transition: opacity 0.6s var(--ease) 0.1s, visibility 0s; }
	.text, .pic { transition: transform 0.7s var(--ease), opacity 0.45s var(--ease); opacity: 0; transform: translateX(calc(var(--side) * 3rem)); }
	.pic { transform: translateX(calc(var(--side) * 6rem)) scale(0.94); }
	.slide.active .text, .slide.active .pic { opacity: 1; transform: none; transition-duration: 0.7s, 0.6s; transition-delay: 0.1s; }
	.slide.active .pic { transition-delay: 0.18s; }
	.slide > * { min-width: 0; }
	.pic { display: grid; place-items: center; aspect-ratio: 5 / 4; max-height: 22rem; margin-inline: auto; width: 100%; }
	@media (min-width: 800px) { .slide { grid-template-columns: 1.2fr 1fr; } }
	.pic :global(img) { width: 100%; height: 100%; object-fit: contain; }
	.text p { color: var(--muted); font-size: 1.05rem; }
	.controls { display: flex; align-items: center; justify-content: center; gap: 1rem; margin-top: 1.5rem; }
	.controls > button { width: 2.5rem; height: 2.5rem; border-radius: 50%; border: 1px solid var(--line); background: var(--surface); color: var(--text); font-size: 1.4rem; cursor: pointer; }
	.controls > button:hover { border-color: var(--accent); }
	.dots { display: flex; flex-wrap: wrap; justify-content: center; }
	.dots button { position: relative; width: 1.5rem; height: 1.75rem; padding: 0; border: 0; background: none; cursor: pointer; }
	.dots button::after { content: ''; position: absolute; inset: 50% auto auto 50%; width: 0.65rem; height: 0.65rem; margin: -0.325rem; border-radius: 50%; background: var(--line); transition: background 0.2s, transform 0.2s; }
	.dots button.on::after { background: var(--accent); transform: scale(1.3); }
	.dots button:hover::after { background: var(--muted); }
	.controls { flex-wrap: wrap; }
</style>

<script lang="ts">
	import { tick } from 'svelte';
	import { fly } from 'svelte/transition';
	import { expoOut } from 'svelte/easing';
	import { services } from '#lib/data.ts';

	let index = $state(0);
	const current = $derived(services[index]);
	let dur = $state(0);
	$effect(() => {
		dur = matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 450;
	});
	// On narrow screens the previously open item collapses above the tapped one;
	// keep the tapped title under the finger instead of letting the page jump.
	const pick = async (i: number, e: MouseEvent) => {
		const btn = e.currentTarget as HTMLElement;
		const before = btn.getBoundingClientRect().top;
		index = i;
		await tick();
		const delta = btn.getBoundingClientRect().top - before;
		if (delta) scrollBy({ top: delta, behavior: 'instant' });
	};
	const keynav = (e: KeyboardEvent) => {
		const k = e.key;
		if (!['ArrowDown', 'ArrowUp', 'ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(k)) return;
		e.preventDefault();
		const n = services.length;
		index = k === 'Home' ? 0 : k === 'End' ? n - 1 : (index + (k === 'ArrowDown' || k === 'ArrowRight' ? 1 : -1) + n) % n;
		document.getElementById(`tab-${index}`)?.focus();
	};
</script>

{#snippet detail()}
	{#key index}
		<div class="detail" in:fly={{ y: 14, duration: dur, easing: expoOut }}>
			<div class="pic"><enhanced:img src={current.image} alt="" sizes="(min-width: 900px) 420px, 90vw" /></div>
			<div class="text">
				<h3>{current.title}</h3>
				<p>{current.text}</p>
			</div>
		</div>
	{/key}
{/snippet}

<section class="wrap section" aria-labelledby="services-h">
	<h2 id="services-h">Что мы устанавливаем</h2>
	<div class="layout">
		<div class="tabs" role="tablist" aria-orientation="vertical" aria-label="Системы безопасности" tabindex="-1" onkeydown={keynav}>
			{#each services as s, i}
				<div class="item" class:on={i === index}>
					<button
						type="button"
						role="tab"
						id="tab-{i}"
						aria-selected={i === index}
						aria-controls="panel"
						tabindex={i === index ? 0 : -1}
						onclick={(e) => pick(i, e)}>{s.title}</button
					>
					{#if i === index}<div class="inline" aria-hidden="true">{@render detail()}</div>{/if}
				</div>
			{/each}
		</div>
		<div class="aside" id="panel" role="tabpanel" aria-labelledby="tab-{index}" tabindex="-1">{@render detail()}</div>
	</div>
</section>

<style>
	.layout { display: grid; gap: 0; margin-top: 2rem; }
	@media (min-width: 900px) { .layout { grid-template-columns: minmax(0, 5fr) minmax(0, 7fr); gap: 3rem; align-items: start; } }
	.tabs { border-top: 1px solid var(--line); }
	.item { border-bottom: 1px solid var(--line); }
	.item button {
		display: block; width: 100%; text-align: left; padding: 1rem 2.5rem 1rem 0; background: none; border: 0; color: var(--muted);
		font-size: 1.02rem; line-height: 1.35; cursor: pointer; position: relative; transition: color 0.2s;
	}
	.item button::after {
		content: ''; position: absolute; right: 0.25rem; top: 50%; width: 0.55rem; height: 0.55rem; margin-top: -0.35rem;
		border-right: 2px solid currentColor; border-bottom: 2px solid currentColor; transform: rotate(-45deg); transition: transform 0.3s var(--ease);
	}
	.item button:hover { color: var(--text); }
	.item.on button { color: var(--text); font-weight: 600; }
	.item.on button::after { transform: rotate(45deg); color: var(--accent); }
	.inline { display: block; padding-bottom: 1.5rem; min-width: 0; }
	.inline :global(h3) { display: none; }
	.inline :global(.text p) { margin-top: 0; }
	.aside { display: none; }
	@media (min-width: 900px) {
		.inline { display: none; }
		.aside { display: block; position: sticky; top: 1.5rem; }
		.item.on button::after { transform: rotate(-45deg); }
	}
	.detail { display: grid; gap: 1.5rem; min-width: 0; }
	.layout > * { min-width: 0; }
	.text h3 { font-size: clamp(1.3rem, 2.4vw, 1.7rem); letter-spacing: -0.01em; }
	.text p { color: var(--muted); font-size: 1.05rem; max-width: 62ch; }
	.pic { position: relative; background: var(--paper); border-radius: var(--radius); height: clamp(13rem, 32vw, 20rem); overflow: hidden; }
	.pic :global(img) { position: absolute; inset: 1.25rem; width: calc(100% - 2.5rem); height: calc(100% - 2.5rem); object-fit: contain; }
</style>

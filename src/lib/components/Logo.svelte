<script lang="ts">
	import { resolve } from '$app/paths';
	import emblem from '#lib/assets/emblem.svg';
	import { company } from '#lib/data.ts';
</script>

<a href={resolve('/')} class="logo">
	<img src={emblem} alt="" width="766" height="482" />
	<span class="words">
		<span class="name">ООО «ОстМастер»</span>
		<span class="tagline">{company.tagline}</span>
	</span>
</a>

<style>
	.logo { display: flex; align-items: center; gap: 0.6rem; text-decoration: none; color: var(--header-text); width: fit-content; }
	.logo:hover { color: var(--header-text); }
	img { display: block; height: 4.5rem; width: auto; flex: none; }
	.words { display: grid; gap: 0.15rem; min-width: 0; }
	.name { font-size: clamp(1.35rem, 4.6vw, 1.9rem); font-weight: 800; line-height: 1.1; letter-spacing: 0.02em; overflow-wrap: anywhere; }
	@media (max-width: 420px) { img { height: 3.25rem; } .name { font-size: 1.15rem; } }
	.tagline { font-size: clamp(0.8rem, 2.6vw, 0.95rem); font-style: italic; line-height: 1.2; }
</style>

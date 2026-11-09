<script lang="ts">
	import '@fontsource/ibm-plex-sans/cyrillic-400.css';
	import '@fontsource/ibm-plex-sans/cyrillic-500.css';
	import '@fontsource/ibm-plex-sans/cyrillic-600.css';
	import '@fontsource/ibm-plex-sans/latin-400.css';
	import '@fontsource/ibm-plex-sans/latin-600.css';
	import '../app.css';
	import favicon from '#lib/assets/emblem.svg';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}

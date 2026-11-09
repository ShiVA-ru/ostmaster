<script lang="ts">
	import Header from '#lib/components/Header.svelte';
	import Services from '#lib/components/Services.svelte';
	import Director from '#lib/components/Director.svelte';
	import Clients from '#lib/components/Clients.svelte';
	import Footer from '#lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>ООО «ОстМастер». Комплексные системы безопасности</title>
	<meta name="description" content="Пожарная и охранная сигнализация, видеонаблюдение, СКУД, пожаротушение, оповещение, телефонные и кабельные сети. Сургут." />
</svelte:head>

<Header />
<main>
	<Services />
	<Director />
	<Clients />
</main>
<Footer />

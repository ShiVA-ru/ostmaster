<script lang="ts">
  import Header from "#lib/components/Header.svelte";
  import Hero from "#lib/components/Hero.svelte";
  import Services from "#lib/components/Services.svelte";
  import Director from "#lib/components/Director.svelte";
  import Clients from "#lib/components/Clients.svelte";
  import Footer from "#lib/components/Footer.svelte";
</script>

<svelte:head>
  <title>ООО «ОстМастер». Комплексные системы безопасности</title>
  <meta
    name="theme-color"
    content="#0c0f13"
    media="(prefers-color-scheme: dark)"
  />
  <meta
    name="theme-color"
    content="#eceff3"
    media="(prefers-color-scheme: light)"
  />
  <meta property="og:type" content="website" />
  <meta property="og:locale" content="ru_RU" />
  <meta property="og:image" content="https://ostmaster.net/og.png" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content="Логотип ООО «ОстМастер»" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    property="og:title"
    content="ООО «ОстМастер». Комплексные системы безопасности"
  />
  <meta
    property="og:description"
    content="Пожарная и охранная сигнализация, видеонаблюдение, СКУД, пожаротушение, оповещение, телефонные и кабельные сети. Сургут."
  />
  <meta
    name="description"
    content="Пожарная и охранная сигнализация, видеонаблюдение, СКУД, пожаротушение, оповещение, телефонные и кабельные сети. Сургут."
  />
</svelte:head>

<Header />
<main>
  <Hero />
  <Services />
  <Director />
  <Clients />
</main>
<Footer />

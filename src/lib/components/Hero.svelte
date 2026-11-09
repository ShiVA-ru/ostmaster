<script lang="ts">
  import emblem from "#lib/assets/emblem.svg";
  import { company } from "#lib/data.ts";
  const tel = `tel:+7${company.phones[0].replace(/\D/g, "")}`;
</script>

<section class="hero">
  <div class="wrap inner">
    <div class="copy">
      <h1>{company.tagline}</h1>
      <p>
        Пожарная и охранная сигнализация, видеонаблюдение, контроль доступа,
        пожаротушение, оповещение, телефонные и кабельные сети. Объекты в
        Сургуте, Нефтеюганске, Нижневартовске, Когалыме и других городах Югры.
      </p>
      <div class="actions">
        <a class="primary" href={tel}>Позвонить {company.phones[0]}</a>
        <a class="ghost" href="mailto:{company.emails[0].address}"
          >{company.emails[0].address}</a
        >
      </div>
    </div>
    <img class="mark" src={emblem} alt="" width="766" height="482" />
  </div>
</section>

<style>
  .hero {
    position: relative;
    overflow: hidden;
    border-bottom: 1px solid var(--line);
  }
  @media (min-width: 900px) {
    .inner {
      grid-template-columns: 1.25fr 1fr;
    }
  }
  .inner {
    position: relative;
    display: grid;
    gap: 2.5rem;
    align-items: center;
    padding-block: clamp(3rem, 9vw, 7rem);
  }
  h1 {
    font-size: clamp(2.25rem, 6.4vw, 4.6rem);
    line-height: 1.04;
    letter-spacing: -0.03em;
    max-width: 14ch;
    margin-bottom: 0.5em;
  }
  .copy p {
    max-width: 52ch;
    font-size: 1.15rem;
    color: var(--muted);
  }
  .actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin-top: 1.75rem;
  }
  .actions a {
    display: inline-flex;
    align-items: center;
    min-height: 3rem;
    padding: 0 1.4rem;
    border-radius: var(--radius);
    font-weight: 600;
    text-decoration: none;
    transition:
      background 0.2s,
      border-color 0.2s,
      color 0.2s;
  }
  @media (max-width: 599px) {
    .actions {
      display: grid;
      grid-template-columns: 1fr;
    }
    .actions a {
      justify-content: center;
      text-align: center;
    }
  }
  .primary {
    background: var(--accent);
    color: var(--accent-ink);
    font-variant-numeric: tabular-nums;
  }
  .primary:hover {
    color: var(--accent-ink);
    filter: brightness(1.1);
  }
  .ghost {
    border: 1px solid var(--line-strong);
    color: var(--text);
  }
  .ghost:hover {
    border-color: var(--accent);
    color: var(--accent);
    text-decoration: none;
  }
  .mark {
    width: min(100%, 460px);
    height: auto;
    justify-self: center;
    filter: drop-shadow(0 14px 28px rgb(0 0 0 / 0.28));
  }
  @media (max-width: 899px) {
    .mark {
      display: none;
    }
  }
</style>

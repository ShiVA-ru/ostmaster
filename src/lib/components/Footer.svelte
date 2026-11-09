<script lang="ts">
  import { company } from "#lib/data.ts";
</script>

<footer class="rule">
  <div class="wrap grid">
    <div>
      <h3>Контакты</h3>
      <ul>
        {#each company.phones as p}<li>
            <a href="tel:+7{p.replace(/\D/g, '')}">{p}</a>
          </li>{/each}
        <li>{company.address}</li>
      </ul>
    </div>
    <div>
      <h3>Эл. почта</h3>
      <ul>
        {#each company.emails as e}
          <li>
            <a href="mailto:{e.address}">{e.address}</a><span>{e.label}</span>
          </li>
        {/each}
      </ul>
    </div>
    <div>
      <h3>Режим работы</h3>
      <ul>
        {#each company.hours as h}<li>{h.days}<span>{h.time}</span></li>{/each}
      </ul>
    </div>
  </div>
  <p class="wrap copy">© ООО «ОстМастер», {new Date().getFullYear()}</p>
</footer>

<style>
  footer {
    padding-block: clamp(2.5rem, 6vw, 4rem) 2rem;
    font-size: 0.95rem;
  }
  .grid {
    display: grid;
    gap: 2rem;
  }
  @media (min-width: 800px) {
    .grid {
      grid-template-columns: 1fr 1.4fr 1fr;
      gap: 3rem;
    }
  }
  h3 {
    font-size: 0.95rem;
    color: var(--muted);
    font-weight: 500;
    margin-bottom: 0.75rem;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    gap: 0.35rem;
  }
  li {
    display: grid;
  }
  li span {
    color: var(--muted);
    font-size: 0.85rem;
  }
  a {
    color: var(--text);
    text-underline-offset: 0.2em;
  }
  a:hover {
    color: var(--accent);
  }
  .copy {
    margin: 2.5rem auto 0;
    color: var(--muted);
    font-size: 0.85rem;
  }
</style>

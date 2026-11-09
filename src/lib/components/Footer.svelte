<script lang="ts">
  import { company } from "#lib/data.ts";
</script>

<footer>
  <div class="wrap grid">
    <p>© ООО ОстМастер, {new Date().getFullYear()}</p>
    <div>
      <b>Эл. почта:</b>
      <ul>
        {#each company.emails as e}
          <li><a href="mailto:{e.address}">{e.address}</a> — {e.label}</li>
        {/each}
      </ul>
    </div>
    <div>
      <b>Режим работы:</b>
      <ul>
        {#each company.hours as h}<li>{h.days}: {h.time}</li>{/each}
      </ul>
    </div>
  </div>
</footer>

<style>
  footer {
    border-top: 1px solid var(--line);
    padding-block: 2rem;
    font-size: 0.9rem;
    color: var(--muted);
  }
  .grid {
    display: grid;
    gap: 1.5rem;
  }
  @media (min-width: 800px) {
    .grid {
      grid-template-columns: 1fr 2fr 1.5fr;
    }
  }
  ul {
    list-style: none;
    margin: 0.4rem 0 0;
    padding: 0;
  }
  b {
    color: var(--text);
  }
  li a {
    display: inline-block;
    padding-block: 0.25rem;
  }
  @media (pointer: coarse) {
    li a {
      padding-block: 0.7rem;
    }
  }
</style>

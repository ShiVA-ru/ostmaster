<script lang="ts">
  import photo from "#lib/assets/photo.jpg?enhanced&w=250";
  import { director } from "#lib/data.ts";
  const [lead, ...rest] = director.paragraphs;
</script>

<section class="rule">
  <div class="wrap section grid">
    <figure>
      <enhanced:img
        src={photo}
        alt={director.name}
        sizes="250px"
        loading="lazy"
      />
      <figcaption>
        <b>{director.name}</b><span>{director.role}</span>
      </figcaption>
    </figure>
    <div class="words">
      <h2>{director.title}</h2>
      <p class="lead">{lead}</p>
      {#each rest as p}<p>{p}</p>{/each}
    </div>
  </div>
</section>

<style>
  .grid {
    display: grid;
    gap: 2.5rem;
  }
  @media (min-width: 900px) {
    .grid {
      grid-template-columns: 250px minmax(0, 1fr);
      gap: 4rem;
    }
  }
  figure {
    margin: 0;
  }
  figure :global(img) {
    width: 100%;
    max-width: 250px;
    height: auto;
    border-radius: var(--radius);
    display: block;
    margin-bottom: 0.9rem;
  }
  figcaption {
    display: grid;
    gap: 0.1rem;
    font-size: 0.92rem;
    color: var(--muted);
  }
  figcaption b {
    color: var(--text);
    font-weight: 600;
  }
  .words {
    max-width: 68ch;
  }
  .lead {
    font-size: clamp(1.25rem, 2.4vw, 1.6rem);
    line-height: 1.35;
    font-weight: 500;
    letter-spacing: -0.01em;
    color: var(--text);
  }
  .words p {
    color: var(--muted);
  }
  .words p.lead {
    color: var(--text);
  }
</style>

<script lang="ts">
  import emblem from "#lib/assets/emblem.svg";
  import { company } from "#lib/data.ts";
</script>

<a href="/" class="logo">
  <img src={emblem} alt="" width="766" height="482" />
  <span class="words">
    <span class="name">ООО «ОстМастер»</span>
    <span class="tagline">{company.tagline}</span>
  </span>
</a>

<style>
  .logo {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    text-decoration: none;
    color: var(--text);
    width: fit-content;
  }
  .logo:hover {
    color: var(--text);
    text-decoration: none;
  }
  img {
    display: block;
    height: 3rem;
    width: auto;
    flex: none;
  }
  .words {
    display: grid;
    gap: 0.1rem;
  }
  .name {
    font-size: 1.15rem;
    font-weight: 600;
    line-height: 1.1;
    letter-spacing: 0.01em;
    white-space: nowrap;
  }
  .tagline {
    font-size: 0.8rem;
    color: var(--muted);
    line-height: 1.2;
  }
  @media (max-width: 420px) {
    .tagline {
      display: none;
    }
  }
  @media (max-width: 640px) {
    img {
      height: 4.25rem;
    }
    .logo {
      gap: 0.65rem;
    }
  }
</style>

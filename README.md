# ОстМастер

Сайт ООО «ОстМастер». SvelteKit 3, Svelte 5, статическая сборка (`adapter-static`), Bun 1.4.4.

```sh
bun install
bun run dev      # разработка
bun run check    # типы
bun run build    # статическая сборка в build/
bun run preview  # просмотр сборки
```

## Публикация на GitHub Pages

Публикация идёт через GitHub Actions: `.github/workflows/deploy.yml`.

1. В репозитории откройте **Settings → Pages** и в поле **Source** выберите **GitHub Actions**.
2. Отправьте изменения в ветку `main`. Workflow проверит типы, соберёт сайт и опубликует `build/`.

Адрес сайта зависит от настройки:

- **Без своего домена:** сайт живёт в `https://<пользователь>.github.io/<репозиторий>/`. Базовый путь `/<репозиторий>` workflow задаёт сам через переменную `BASE_PATH`.
- **Со своим доменом** (например, `ostmaster.net`): создайте файл `static/CNAME` с одной строкой, доменом. Тогда workflow собирает сайт от корня (`BASE_PATH` пустой). В DNS у домена нужна запись `CNAME` на `<пользователь>.github.io` (или `A`-записи GitHub Pages для корневого домена), а в **Settings → Pages → Custom domain** укажите домен и включите HTTPS.

Локальная проверка сборки с базовым путём:

```sh
BASE_PATH=/ostmaster bun run build && bun run preview
```

Файл `static/.nojekyll` отключает обработку Jekyll, иначе GitHub Pages игнорирует каталог `_app`.

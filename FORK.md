# farwill/cookiecutter-django

This fork tracks [cookiecutter/cookiecutter-django](https://github.com/cookiecutter/cookiecutter-django) and adds an optional **HTMX + Alpine.js + Tailwind CSS** stack. When the option is off, Bootstrap 5 remains as in upstream. PostgreSQL is already the only database in upstream.

## Generate a project

```bash
uvx cookiecutter https://github.com/farwill/cookiecutter-django --checkout htmx-alpine
```

When prompted, keep `use_htmx_alpine_tailwind` as `y` (the default).

## Git remotes

Keep upstream as a clean mirror, and this fork as `origin`:

```bash
git remote add upstream https://github.com/cookiecutter/cookiecutter-django.git
git remote add origin https://github.com/farwill/cookiecutter-django.git
```

If you cloned the official repo first:

```bash
git remote rename origin upstream
git remote add origin https://github.com/farwill/cookiecutter-django.git
```

## Branch layout (keeps upgrades easy)

| Branch | Role |
| --- | --- |
| `main` / `master` | Fast-forward mirror of `upstream/main`. No fork-only commits. |
| `htmx-alpine` | Fork customizations (`use_htmx_alpine_tailwind` and related files). |

Do **not** commit HTMX/Alpine work onto `main`/`master`. That keeps `git merge --ff-only upstream/main` working.

## Sync `main` with upstream

```bash
git fetch upstream
git checkout main          # or master, if that is the fork default
git merge --ff-only upstream/main
git push origin main
```

## Bring upstream into `htmx-alpine`

```bash
git checkout htmx-alpine
git fetch upstream
git merge upstream/main
```

Resolve conflicts by keeping the `{% if cookiecutter.use_htmx_alpine_tailwind == 'y' %}` (and matching Python `{%- if ... %}`) blocks. Find every fork change with:

```bash
git grep use_htmx_alpine_tailwind
```

Then:

```bash
git push origin htmx-alpine
```

## What this fork changes

All fork-specific logic is gated on `use_htmx_alpine_tailwind` so turning it off generates a project close to upstream.

- `cookiecutter.json` — `use_htmx_alpine_tailwind` (`y` / `n`, default `y`)
- `requirements/base.txt` — `django-htmx` and `crispy-tailwind`
- `config/settings/base.py` — `django_htmx`, `HtmxMiddleware`, `crispy_tailwind`
- `templates/base.html` — local Tailwind browser runtime, `htmx_script`, Alpine.js, CSRF `hx-headers` on `<body>`
- `static/js/project.js` — re-init Alpine after HTMX swaps
- `templates/pages/home.html` — small Alpine demo when the option is on

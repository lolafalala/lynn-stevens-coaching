# Lynn Stevens Coaching — Homepage

Plain HTML, CSS, and vanilla JavaScript. No framework, no build step —
Netlify deploys it as-is.

## Structure

```
index.html       Page markup (hero, about, offer, contact)
css/style.css     Brand styles (palette, type, layout, @font-face rules)
js/main.js        Mobile nav toggle + progressive-enhancement contact form
netlify.toml      Tells Netlify to publish the repo root, no build command
fonts/            Licensed brand font files, self-hosted (see Fonts below)
images/           Drop real photography here (see images/README.md)
```

## Local preview

No install needed — open `index.html` directly in a browser, or serve it
locally:

```
python3 -m http.server 8000
```

## Contact form

The form uses [Netlify Forms](https://docs.netlify.com/forms/setup/) —
`data-netlify="true"` on the `<form>` is all Netlify needs to detect and
handle submissions at deploy time, no backend required. `js/main.js`
progressively enhances it with an AJAX submit + inline status message; the
form still works with JavaScript disabled via a normal POST.

Submissions land in **Site settings → Forms** in the Netlify dashboard, or
can be forwarded to email from there.

## Fonts

The brand fonts — La Luxe Script, IvyPresto Display, and Glacial
Indifference — are self-hosted from `fonts/` and loaded via `@font-face`
rules at the top of `css/style.css`. No external font service, so this
stays a zero-config static deploy.

Only two weights shipped per family, so every rule in the stylesheet is
pinned to one of these:

- **La Luxe Script** — Regular (400) only
- **IvyPresto Display** — Regular (400) + Semi-Bold (600)
- **Glacial Indifference** — Regular (400) + Bold (700)

If you add more weights later (e.g. an italic or a light), add a matching
`@font-face` block and reference its exact `font-weight` where needed.

## Photography

The brand bible calls for full-bleed real photography. This build ships
with flat color-block placeholders instead — drop portraits into `images/`
and swap the `<img>` tags in `index.html` (marked with HTML comments).

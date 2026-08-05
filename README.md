# Lynn Stevens Coaching — Homepage

Plain HTML, CSS, and vanilla JavaScript. No framework, no build step —
Netlify deploys it as-is.

## Structure

```
index.html       Page markup (hero, about, offer, contact)
css/style.css     Brand styles (palette, type, layout)
js/main.js        Mobile nav toggle + progressive-enhancement contact form
netlify.toml      Tells Netlify to publish the repo root, no build command
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

The brand bible calls for La Luxe Script, IvyPresto, and Glacial
Indifference. Those are licensed fonts, so this build uses close, freely
licensed Google Fonts stand-ins instead (see the comment in `index.html`'s
`<head>`). Swap in `@font-face` rules in `css/style.css` once the licensed
font files are available.

## Photography

The brand bible calls for full-bleed real photography. This build ships
with flat color-block placeholders instead — drop portraits into `images/`
and swap the `<img>` tags in `index.html` (marked with HTML comments).

# Component screenshots

The [`index.html`](./index.html) in this folder contains all the components, styled
and clipped in such a way as to make good small screenshots.

Each child of the `<div class="renders">` element is a `div` that limits the size of
the component inside it. For example:

```html
<div>
    <ilw-back-to-top style="position: static; display: block"></ilw-back-to-top>
</div>
```

The styles are applied directly to elements to keep the code for each component
in one place.

Optionally, each component may have a second wrapper element, for example:

```html
<div data-name="ilw-global-button-anchor">
    <div style="width: 340px; text-align: center">
        <a href="#" class="ilw-button">Copy to Clipboard</a>
    </div>
</div>
```

The screenshot is taken of the direct child of the top `div`, the wrapper can thus
be used for adding whitespace to the screenshot.

The name of the component is taken automatically if possible, but it can be
provided explicitly by setting `data-name` on the top `div`.

The screenshots are stored in [`site/img/components`](../site/img/components), and
can be recreated with Playwright:

```
npx playwright test
```

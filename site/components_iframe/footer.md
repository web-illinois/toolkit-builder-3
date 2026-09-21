---
title: Footer Information
layout: components/base.liquid
permalink: "component/ilw-footer/custom/index.html"
scripturl: "//cdn.toolkit.illinois.edu/ilw-footer/1/ilw-footer.js"
stylesheeturl: "//cdn.toolkit.illinois.edu/ilw-footer/1/ilw-footer.css"
---
<script>
    const defaults = {
        'site-name': 'Sample Site',
        'site-name-url': 'https://localhost',
        'source': 'sample_site',
    };

    function formValue(id) {
        return document.getElementById(id).value.trim();
    }

    function createTextSlot(slot, text, href, elementOverride) {
        if (!text) {
            return null;
        }

        const element = document.createElement(href ? 'a' : 'div');
        element.textContent = text;

        if (href) {
            element.href = href;
        }

        if (!elementOverride || elementOverride == '') {
           element.slot = slot;
           return element;
        }

        const elementParent = document.createElement(elementOverride);
        elementParent.slot = slot;
        elementParent.append(element);
        return elementParent;
    }

    function appendRawHtml(component, html) {
        if (!html) {
            return;
        }

        const template = document.createElement('template');
        template.innerHTML = html;
        component.append(template.content.cloneNode(true));
    }

    function updateUrl(values) {
        const url = new URL(window.location.href);

        for (const [key, value] of Object.entries(values)) {
            if (value) {
                url.searchParams.set(key, value);
            } else {
                url.searchParams.delete(key);
            }
        }

        window.history.replaceState({}, '', url);
    }

    function updateOutput(component) {
        document.getElementById('output').textContent = component.outerHTML;
    }

    function build(updateSearchParams = true) {
        const values = {
            'site-name': formValue('site-name'),
            'site-name-url': formValue('site-name-url'),
            'source': formValue('source'),
        };

        const component = document.getElementById('footer-preview');
        component.replaceChildren();

        const siteName = createTextSlot('site-name', values['site-name'], values['site-name-url'], '');
        if (siteName) {
            component.append(siteName);
        }

        if (Object.hasOwn(values, 'source')) {
            component.setAttribute('source', values['source']);
        }

        updateOutput(component);
    }

    document.addEventListener('DOMContentLoaded', () => {
        const urlParams = new URLSearchParams(window.location.search);

        for (const [key, fallback] of Object.entries(defaults)) {
            document.getElementById(key).value = urlParams.get(key) ?? fallback;
        }

        build(false);
    });
</script>
<h2>Footer Builder</h2>
<p>This is using the <strong>production</strong> version of the footer.</p>
<div id="original" style="margin: 10px 0;">
    <ilw-footer id="footer-preview"></ilw-footer>
</div>
<p><button class="ilw-button" onclick="build();">Build Footer</button></p>
<div style="max-width: 700px;">
    <p><label for="site-name">Site Name</label></p>
    <input id="site-name" name="site-name" style="width: 100%;">
    <p><label for="site-name-url">Site URL</label></p>
    <input id="site-name-url" name="site-name-url" style="width: 100%;">
    <p><label for="source">Source</label></p>
    <input id="source" name="source" style="width: 100%;">
</div>
<h2>Generated Footer HTML</h2>
<pre><code id="output"></code></pre>

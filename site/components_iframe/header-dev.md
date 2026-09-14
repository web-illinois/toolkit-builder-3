---
title: Header Information - Development
layout: components/base.liquid
permalink: "notes/header-dev/index.html"
scripturl: "//dev.toolkit.illinois.edu/ilw-header/latest/ilw-header.js"
stylesheeturl: "//dev.toolkit.illinois.edu/ilw-header/latest/ilw-header.css"
---
<script>
    const defaults = {
        'primary-unit': 'Campus Header Component',
        'primary-unit-link': 'https://example.edu/',
        'site-name': 'Sample Header',
        'site-name-link': 'https://example.edu/',
        'search': `<form slot="search" method="get" action="/search" role="search">
    <input type="search" name="search" aria-labelledby="search-button">
    <button id="search-button" type="submit">Search</button>
</form>`,
        'links': `<nav slot="links" aria-label="Utility">
    <ul>
        <li><a href="/apply">Apply</a></li>
        <li><a href="/visit">Visit</a></li>
        <li><a href="/give">Give</a></li>
    </ul>
</nav>`
    };

    function formValue(id) {
        return document.getElementById(id).value.trim();
    }

    function createTextSlot(slot, text, href) {
        if (!text) {
            return null;
        }

        const element = document.createElement(href ? 'a' : 'div');
        element.slot = slot;
        element.textContent = text;

        if (href) {
            element.href = href;
        }

        return element;
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
            'primary-unit': formValue('primary-unit'),
            'primary-unit-link': formValue('primary-unit-link'),
            'site-name': formValue('site-name'),
            'site-name-link': formValue('site-name-link'),
            'search': document.getElementById('search').value.trim(),
            'links': document.getElementById('links').value.trim()
        };

        const component = document.getElementById('header-preview');
        component.replaceChildren();

        const primaryUnit = createTextSlot('primary-unit', values['primary-unit'], values['primary-unit-link']);
        if (primaryUnit) {
            component.append(primaryUnit);
        }

        const siteName = createTextSlot('site-name', values['site-name'], values['site-name-link']);
        if (siteName) {
            component.append(siteName);
        }

        appendRawHtml(component, values.search);
        appendRawHtml(component, values.links);

        if (updateSearchParams) {
            updateUrl(values);
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
<h2>Header Builder</h2>
<p>This is using the <strong>development</strong> version of the header.</p>
<div id="original" style="margin: 10px 0;">
    <ilw-header id="header-preview"></ilw-header>
</div>
<p><button class="ilw-button" onclick="build();">Build Header</button></p>
<div style="max-width: 700px;">
    <p><label for="primary-unit">Primary Unit Text</label></p>
    <input id="primary-unit" name="primary-unit" style="width: 100%;">
    <p><label for="primary-unit-link">Primary Unit Link</label></p>
    <input id="primary-unit-link" name="primary-unit-link" style="width: 100%;">
    <p><label for="site-name">Site Name Text</label></p>
    <input id="site-name" name="site-name" style="width: 100%;">
    <p><label for="site-name-link">Site Name Link</label></p>
    <input id="site-name-link" name="site-name-link" style="width: 100%;">
    <p><label for="search">Search Raw HTML</label></p>
    <textarea id="search" name="search" style="width: 100%; height: 180px; font-family: monospace; font-size: 16px;"></textarea>
    <p><label for="links">Links Raw HTML</label></p>
    <textarea id="links" name="links" style="width: 100%; height: 180px; font-family: monospace; font-size: 16px;"></textarea>
</div>
<h2>Generated Header HTML</h2>
<pre><code id="output"></code></pre>

---
title: Footer Information
layout: components/base.liquid
permalink: "component/ilw-footer/custom/index.html"
scripturl: "//cdn.toolkit.illinois.edu/ilw-footer/1/ilw-footer.js"
stylesheeturl: "//cdn.toolkit.illinois.edu/ilw-footer/1/ilw-footer.css"
---
<script>
    const defaults = {
        'actions': `
            <div slot="actions">
                <a href="#">Register</a>
                <a href="#">Eject</a>
            </div>
        `,
        'address': `
            <address slot="address">
                <p>5678 West Example Street<br>
                MC-0000<br>
                Champaign, IL 61820</p>
                <p>Email: <a href="mailto:address@illinois.edu">address@illinois.edu</a></p>
                <p>Phone: <a href="tel:+12175551234" aria-label="Example Site Office">(217) 555-1234</a></p>
            </address>
        `,
        'freeform-content': `
            <ilw-column>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur</p>
            </ilw-column>

            <ilw-column>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi</p>
            </ilw-column>
        `,
        'legal-link': 'https://localhost',
        'legal-link-text': 'Compliance Documentation',
        'primary-unit': 'University Unit',
        'primary-unit-link': 'https://localhost',
        'site-name': 'Sample Site',
        'site-name-url': '/',
        'social': `
            <nav slot="social" aria-label="Social Media">
                <ul>
                    <li><a href="http://example.com/"><ilw-icon alt="Our Bluesky account" icon="bluesky" size="44px"></ilw-icon></a></li>
                    <li><a href="http://example.com/"><ilw-icon alt="Our GitHub account" icon="github" size="44px"></ilw-icon></a></li>
                </ul>
            </nav>
        `,
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
            'actions': formValue('actions'),
            'address': formValue('address'),
            'freeform-content': formValue('freeform-content'),
            'legal-link': formValue('legal-link'),
            'legal-link-text': formValue('legal-link-text'),
            'primary-unit': formValue('primary-unit'),
            'primary-unit-link': formValue('primary-unit-link'),
            'site-name': formValue('site-name'),
            'site-name-url': formValue('site-name-url'),
            'social': formValue('social'),
            'source': formValue('source'),
        };

        const component = document.getElementById('footer-preview');
        component.replaceChildren();

        appendRawHtml(component, values.actions);
        appendRawHtml(component, values.address);
        appendRawHtml(component, values['freeform-content']);

        const legalLink = createTextSlot('legal-link', values['legal-link-text'], values['legal-link'], '');
        if (legalLink) {
            component.append(legalLink);
        }

        const primaryUnit = createTextSlot('primary-unit', values['primary-unit'], values['primary-unit-link'], '');
        if (primaryUnit) {
            component.append(primaryUnit);
        }

        const siteName = createTextSlot('site-name', values['site-name'], values['site-name-url'], '');
        if (siteName) {
            component.append(siteName);
        }

        appendRawHtml(component, values.social);

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
    <p><label for="actions">Actions</label></p>
    <input id="actions" name="actions" style="width: 100%;">
    <p><label for="address">Address</label></p>
    <input id="address" name="address" style="width: 100%;">
    <p><label for="freeform-content">Freeform Content</label></p>
    <input id="freeform-content" name="freeform-content" style="width: 100%;">
    <p><label for="legal-link-text">Legal Link Text</label></p>
    <input id="legal-link-text" name="legal-link-text" style="width: 100%;">
    <p><label for="legal-link">Legal Link</label></p>
    <input id="legal-link" name="legal-link" style="width: 100%;">
    <p><label for="primary-unit">Primary Unit</label></p>
    <input id="primary-unit" name="primary-unit" style="width: 100%;">
    <p><label for="primary-unit-link">Primary Unit URL</label></p>
    <input id="primary-unit-link" name="primary-unit-link" style="width: 100%;">
    <p><label for="site-name">Site Name</label></p>
    <input id="site-name" name="site-name" style="width: 100%;">
    <p><label for="site-name-url">Site URL</label></p>
    <input id="site-name-url" name="site-name-url" style="width: 100%;">
    <p><label for="social">Social Media Links</label></p>
    <input id="social" name="social" style="width: 100%;">
    <p><label for="source">Source</label></p>
    <input id="source" name="source" style="width: 100%;">
</div>
<h2>Generated Footer HTML</h2>
<pre><code id="output"></code></pre>

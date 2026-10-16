---
title: Footer Information - Development
layout: components/base.liquid
permalink: "component/ilw-footer/custom-dev/index.html"
scripturl: "//dev.toolkit.illinois.edu/ilw-footer/latest/ilw-footer.js"
stylesheeturl: "//dev.toolkit.illinois.edu/ilw-footer/latest/ilw-footer.css"
---
<script>
    const defaults = {
        'actions': `<a href="#">Register</a>\n<a href="#">Eject</a>`,
        'address': `<p>\n    5678 West Example Street<br>\n    MC-0000<br>\n    Champaign, IL 61820\n</p>\n\n<p>Email: <a href="mailto:address@illinois.edu">address@illinois.edu</a></p>\n<p>Phone: <a href="tel:+12175551234" aria-label="Example Site Office">(217) 555-1234</a></p>`,
        'freeform-content': `<ilw-column>\n    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur</p>\n</ilw-column>\n\n<ilw-column>\n    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi</p>\n</ilw-column>`,
        'legal-link': 'https://localhost',
        'legal-link-text': 'Compliance Documentation',
        'primary-unit': 'University Unit',
        'primary-unit-link': 'https://localhost',
        'site-name': 'Sample Site',
        'site-name-url': '/',
        'social': `<ul>\n\    <li><a href="http://example.com/"><ilw-icon alt="Our Bluesky account" icon="bluesky" size="44px"></ilw-icon></a></li>\n    <li><a href="http://example.com/"><ilw-icon alt="Our GitHub account" icon="github" size="44px"></ilw-icon></a></li>\n</ul>`,
        'source': 'sample_site',
    };

    function formValue(id) {
        return document.getElementById(id).value.trim();
    }

    function parseHTML(html) {
        const template = document.createElement('template');
        template.innerHTML = (html ?? '').trim();
        return template.content;
    }

    async function waitForRender(el, maxCycles = 10) {
        if (!('updateComplete' in el)) return;

        for (let i = 0; i < maxCycles; i++) {
            if (await el.updateComplete) return;
        }
    }

    function formatHTML(node, depth = 0) {
        const indent = '  '.repeat(depth);

        if (node.nodeType === Node.TEXT_NODE) {
            const text = node.textContent.trim();
            return text ? `${indent}${text}\n` : '';
        }

        if (node.nodeType === Node.COMMENT_NODE) {
            return `${indent}<!--${node.textContent}-->\n`;
        }
        if (node.nodeType !== Node.ELEMENT_NODE) return '';

        const tag = node.tagName.toLowerCase();
        const attrs = Array.from(node.attributes)
            .map((a) => (a.value === '' ? ` ${a.name}` : ` ${a.name}="${a.value.replace(/"/g, '&quot;')}"`))
            .join('');

        const voidTags = new Set(['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'source', 'track', 'wbr']);
        if (voidTags.has(tag)) return `${indent}<${tag}${attrs}>\n`;

        const children = Array.from(node.childNodes);
        const meaningful = children.filter(
            (c) => c.nodeType !== Node.TEXT_NODE || c.textContent.trim() !== ''
        );

        // Inline elements that contain only a single text node: <button>Save</button>
        if (meaningful.length === 1 && meaningful[0].nodeType === Node.TEXT_NODE) {
            return `${indent}<${tag}${attrs}>${meaningful[0].textContent.trim()}</${tag}>\n`;
        }
        if (meaningful.length === 0) {
            return `${indent}<${tag}${attrs}></${tag}>\n`;
        }

        const inner = meaningful.map((c) => formatHTML(c, depth + 1)).join('');
        return `${indent}<${tag}${attrs}>\n${inner}${indent}</${tag}>\n`;
    }

    function buildComponent({ actions, address, freeformContent, legalLink, legalLinkText, primaryUnit, primaryUnitLink, siteName, siteNameUrl, social, source }) {
        const component = document.createElement('ilw-footer');
        const warnings = [];

        const addressFragment = parseHTML(address);
        if (addressFragment) {
            const wrapper = document.createElement('address');
            wrapper.slot = 'address';
            wrapper.append(addressFragment);
            component.append(wrapper);
        }

        const actionsFragment = parseHTML(actions);
        if (actionsFragment) {
            const wrapper = document.createElement('div');
            wrapper.slot = 'actions';
            wrapper.append(actionsFragment);
            component.append(wrapper);
        }

        const freeformFragment = parseHTML(freeformContent);
        if (freeformFragment) {
            component.append(freeformFragment);
        }

        if (legalLink && legalLinkText) {
            const link = document.createElement('a');
            link.slot = 'legal-link';
            link.href = legalLink;
            link.innerText = legalLinkText;
            component.append(link);
        }

        if (primaryUnit) {
            const fragment = document.createElement('p');
            fragment.slot = 'primary-unit';

            if (primaryUnitLink) {
                const link = document.createElement('a');
                link.href = primaryUnitLink;
                link.innerText = primaryUnit;
                fragment.append(link);
            } else {
                fragment.innerText = primaryUnit;
            }

            component.append(fragment);
        }

        if (siteName) {
            const fragment = document.createElement('p');
            fragment.slot = 'site-name';

            if (siteNameUrl) {
                const link = document.createElement('a');
                link.href = siteNameUrl;
                link.innerText = siteName;
                fragment.append(link);
            } else {
                fragment.innerText = siteName;
            }

            component.append(fragment);
        }

        const socialFragment = parseHTML(social);
        if (socialFragment) {
            const wrapper = document.createElement('nav');
            wrapper.slot = 'social';
            wrapper.setAttribute('aria-label', 'Social Media');
            wrapper.append(socialFragment);
            component.append(wrapper);
        }

        if (source) {
            component.setAttribute('source', source);
        }

        return { component, warnings };
    }

    async function build() {
        const values = {
            'actions': formValue('actions'),
            'address': formValue('address'),
            'freeformContent': formValue('freeform-content'),
            'legalLink': formValue('legal-link'),
            'legalLinkText': formValue('legal-link-text'),
            'primaryUnit': formValue('primary-unit'),
            'primaryUnitLink': formValue('primary-unit-link'),
            'siteName': formValue('site-name'),
            'siteNameUrl': formValue('site-name-url'),
            'social': formValue('social'),
            'source': formValue('source'),
        };

        const preview = document.getElementById('original');
        const codeOutput = document.getElementById('output');

        await customElements.whenDefined('ilw-footer');

        const { component, warnings } = buildComponent(values);

        // textContent isn't rendered
        codeOutput.textContent = formatHTML(component).trim();

        // Connecting the element triggers its first render and firstUpdated()
        preview.replaceChildren(component);

        await waitForRender(component);

        warnings.forEach((w) => console.warn(`[ilw-footer] ${w}`));
        return component;
    }

    function init() {
        const urlParams = new URLSearchParams(window.location.search);

        for (const [key, fallback] of Object.entries(defaults)) {
            document.getElementById(key).value = urlParams.get(key) ?? fallback;
        }

        const form = document.getElementById('footer-form');
        if (!form) {
            console.error(`[ilw-footer] Form #footer-form not found.`);
            return;
        }

        form.addEventListener('submit', (event) => {
            event.preventDefault();
            build().catch((err) => console.error('[ilw-footer] Render failed:', err));
        });

        build().catch((err) => console.error('[ilw-footer] Initial render failed:', err));
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
</script>

<h2>Footer Builder</h2>
<p>This is using the <strong>production</strong> version of the footer.</p>
<div id="original" style="margin: 10px 0;">
    <ilw-footer id="footer-preview"></ilw-footer>
</div>
<p>
<form id="footer-form">
<button class="ilw-button" onclick="build();">Build Footer</button></p>
<div style="max-width: 700px;">
    <p><label for="actions">Actions</label></p>
    <textarea id="actions" name="actions" style="width: 100%; height: 180px; font-family: monospace; font-size: 16px;"></textarea>
    <p><label for="address">Address</label></p>
    <textarea id="address" name="address" style="width: 100%; height: 180px; font-family: monospace; font-size: 16px;"></textarea>
    <p><label for="freeform-content">Freeform Content</label></p>
    <textarea id="freeform-content" name="freeform-content" style="width: 100%; height: 180px; font-family: monospace; font-size: 16px;"></textarea>
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
    <textarea id="social" name="social" style="width: 100%; height: 180px; font-family: monospace; font-size: 16px;"></textarea>
    <p><label for="source">Source</label></p>
    <input id="source" name="source" style="width: 100%;">
</div>
</form>

<h2>Generated Footer HTML</h2>
<pre><code id="output"></code></pre>

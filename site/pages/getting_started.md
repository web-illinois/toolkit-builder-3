---
title: Getting Started
layout: page.liquid
permalink: "getting_started/index.html"
title_background: https://cdn.brand.illinois.edu/patterns/ascend/orange.svg
---
<style>
code {
    display: block;
    padding: 30px;
    background: #e7e7f7;
    margin: 20px 0;
    border: thin solid black;
    font-size: 1.2rem;
    overflow-wrap: break-word;
}
</style>


First, note that this is in beta state. **Do not use this in an important production system.**

Having said that, you need to add the following lines to your HTML:

```html
    <link rel="stylesheet" href="//dev.toolkit.illinois.edu/latest/toolkit.css">
    <script type="module" src="//dev.toolkit.illinois.edu/latest/toolkit.js"></script>
```

This will get you the latest beta version of the toolkit. 

## Builder

The Component Builder is a way to see components that have been designed by the WIGG Web Components group and other areas that have submitted components to the builder. This includes both production and development versions.

<a href="/#components" class="ilw-button ilw-theme-orange-1">View All Components</a>

## Other links

There are a few other links that are recommended. 

* <a href="https://cdn.brand.illinois.edu/">Illinois Branding CDN</a>, which has the campus stylesheet, header, and footer. <strong>The campus stylesheet is required for the toolkit to work effectively.</strong>
* <a href="https://accessibleit.disability.illinois.edu/tools/skipto/">Campus skip-to link</a>, an accessibility "nice-to-have" that allows users to go specifically to a section of a page. 
* <a href="https://www.vpaa.uillinois.edu/cms/One.aspx?portalId=420456&pageId=1050467">GDPR cookie banner</a>, a security requirement to meet privacy standards.

## Alternate versions of the toolkit

If you need to hit a specific version of the toolkit due to maintenance reasons or technology concerns, you can do so by replacing the *beta* with the specific beta version. For example: 

```html
    <link rel="stylesheet" href="//dev.toolkit.illinois.edu/3.0.0-beta/toolkit.css">
    <script type="module" src="//dev.toolkit.illinois.edu/3.0.0-beta/toolkit.js"></script>
```

## What next? 

* <a href="/upgrade/index.html">Upgrade a site from version 2</a>
* <a href="/create_page/index.html">View a step-by-step guide to create a new page</a>
* <a href="/components_toc/index.html">Dive right into the component specifications directly</a>
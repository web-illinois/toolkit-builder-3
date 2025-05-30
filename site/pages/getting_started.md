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

Add the following lines to your HTML:

```html
    <link rel="stylesheet" href="//cdn.toolkit.illinois.edu/3/toolkit.css">
    <script type="module" src="//cdn.toolkit.illinois.edu/3/toolkit.js"></script>
```

This will get you the latest production version of the toolkit. 

## Builder

The Component Builder is a way to see components that have been designed by the WIGG Web Components group and other areas that have submitted components to the builder. This includes both production and development versions.

<a href="/#components" class="ilw-button ilw-theme-orange-1">View All Components</a>

## Other links

There are a few other links that are recommended. 

* <a href="https://cdn.brand.illinois.edu/">Illinois Branding CDN</a>, which has the campus stylesheet, header, and footer. <strong>The campus stylesheet is required for the toolkit to work effectively. Starting with version 3.1.0 of the toolkit, the campus stylesheet is automatically added via an include statement in the <em>toolkit.css</em>. </strong>
* <a href="https://accessibleit.disability.illinois.edu/tools/skipto/">Campus skip-to link</a>, an accessibility "nice-to-have" that allows users to go specifically to a section of a page. 
* <a href="https://www.vpaa.uillinois.edu/cms/One.aspx?portalId=420456&pageId=1050467">GDPR cookie banner</a>, a security requirement to meet privacy standards.

## Alternate versions of the toolkit

If you need to hit a specific version of the toolkit due to maintenance reasons or technology concerns, you can do so by replacing the *3* with the specific version (either minor or patch). For example: 

```html
    <link rel="stylesheet" href="//cdn.toolkit.illinois.edu/3.0/toolkit.css">
    <script type="module" src="//cdn.toolkit.illinois.edu/3.0/toolkit.js"></script>
```

```html
    <link rel="stylesheet" href="//cdn.toolkit.illinois.edu/3.0.0/toolkit.css">
    <script type="module" src="//cdn.toolkit.illinois.edu/3.0.0/toolkit.js"></script>
```

[Note the implications of pointing to a specific version of the toolkit.](/releases_support_lifecycle/index.html#support_lifecycle)

If you want to hit the latest beta version of the toolkit, you can do so by connecting to our development server. For example: 

```html
    <link rel="stylesheet" href="//dev.toolkit.illinois.edu/latest/toolkit.css">
    <script type="module" src="//dev.toolkit.illinois.edu/latest/toolkit.js"></script>
```

If you want to hit a specific beta version of the toolkit, you can do so by replacing the *latest* with the specific beta version. For example: 

```html
    <link rel="stylesheet" href="//dev.toolkit.illinois.edu/3.0.0-beta/toolkit.css">
    <script type="module" src="//dev.toolkit.illinois.edu/3.0.0-beta/toolkit.js"></script>
```

**You should not use the beta version on a production system.** The development / beta versions are not stable and can be removed at any time. 

## What next? 

* <a href="/generic_html/index.html">Get a generic HTML template</a>
* <a href="/upgrade/index.html">Upgrade a site from version 2</a>
* <a href="/create_page/index.html">View a step-by-step guide to create a new page</a>
* <a href="/components_toc/index.html">Dive right into the component specifications directly</a>
* <a href="/links/index.html">Get more resource links on how to build a web page using a campus CMS</a>
* <a href="/releases_support_lifecycle/index.html">Learn about our release schedule and support</a>

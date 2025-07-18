---
title: Generic HTML Template
layout: page.liquid
permalink: "generic_html/index.html"
title_background: https://cdn.brand.illinois.edu/patterns/ascend/orange.svg
---
<style>
.template code {
    display: block;
    padding: 30px;
    background: #e7e7f7;
    margin: 20px 0;
    border: thin solid black;
    font-size: 1.2rem;
    overflow-wrap: break-word;
}
</style>

If you need a generic HTML template, feel free to use this:
<div class="template">

```html
<!DOCTYPE html> 
<html lang="en"> 
    <head> 
        <meta charset="utf-8">
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"> 
        <meta name="viewport" content="width=device-width, initial-scale=1"> 
        <link rel="icon" href="https://cdn.brand.illinois.edu/favicon.ico"> 
        <link rel="apple-touch-icon" href="https://cdn.brand.illinois.edu/touch-icon-40x40.png">
        <link rel="apple-touch-icon" sizes="152x152" href="https://cdn.brand.illinois.edu/touch-icon-152x152.png">
        <link rel="apple-touch-icon" sizes="167x167" href="https://cdn.brand.illinois.edu/touch-icon-167x167.png">
        <link rel="apple-touch-icon" sizes="180x180" href="https://cdn.brand.illinois.edu/touch-icon-180x180.png">
        <link rel="dns-prefetch" href="//cdn.toolkit.illinois.edu"> 
        <link rel="dns-prefetch" href="//cdn.disability.illinois.edu"> 
        <link rel="stylesheet" href="//cdn.toolkit.illinois.edu/3/toolkit.css">
        <script type="module" src="//cdn.toolkit.illinois.edu/3/toolkit.js"></script>
        <script src="//cdn.disability.illinois.edu/skipto.min.js"></script>
        <script>var SkipToConfig = { 'settings': { 'skipTo': { colorTheme: 'illinois' } } };</script>
        <title> <!-- Add title here --> </title>
        <!-- Add custom header tags here --> 
    </head>
    <body style="margin: 0;">
        <ilw-page>
            <ilw-header slot="header">
            <!-- Add header details here -->
            </ilw-header>
            <main>
            <!-- Add content details here -->
            </main>
            <ilw-footer slot="footer">
            <!-- Add footer details here -->
            </ilw-footer>
    </body>
</html>
```

</div>

## Notes

1. Add `<!DOCTYPE>`, `<html>` and `<head>` tags
2. Add standard `<meta>` tags
3. Add `<link>` tags for icons
4. Add `<link>` tags for DNS prefetch (for optimized loading)
5. Add `<link>` and `<script>` tags for toolkit
6. Add `<script>` tags for SkipTo links
7. Add your `<title>` tags and any custom tags in your header
8. Add your `<body>` tag. Note that you should make the body margin 0. 
9. Add your `<ilw-page>`, `<ilw-header>`, and `<ilw-footer>` tags. The `<header>` and `<footer>` regions are automatically added by the `<ilw-header>`, and `<ilw-footer>` components.

## What next? 

* <a href="/upgrade/index.html">Upgrade a site from version 2</a>
* <a href="/create_page/index.html">View a step-by-step guide to create a new page</a>
* <a href="/components_toc/index.html">Dive right into the component specifications directly</a>
* <a href="/links/index.html">Get more resource links on how to build a web page using a campus CMS</a>
* <a href="/releases_support_lifecycle/index.html">Learn about our release schedule and support</a>

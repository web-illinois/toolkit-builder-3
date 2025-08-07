---
title: Header Information
layout: page.liquid
permalink: "notes/header/index.html"
---

Unlike many components, the header and footer will be handled by your content management system. 

See https://github.com/web-illinois/ilw-header for more information about the header. 

See https://github.com/web-illinois/ilw-header-menu for more information about the header menu. 

## Updating from campus header to v3 header

The header is basically the same as the campus version as far as the interface goes. You just need to change `<il-header>` to `<ilw-header>` and `</il-header>` to `<\ilw-header>`. All the slots are the same. 

The menu is almost the same. 
* Change `<il-header-nav>` to `<ilw-header-menu>` and `<\il-header-nav>` to `<\ilw-header-menu>`
* Change `<il-header-nav-section>` and `<il-header-nav-section-with-link>` to `<ilw-header-menu-section>`. 
* If there is a link in the menu along with the dropdown, then you need to add the `linked` attribute and assign the link to the `link` slot. Otherwise, assign the label to the `label` slot.

If you are incorporating the header into the ilw-page component, then make sure you add the `header` slot to the `<ilw-header>` tag.

## Sample Header Information

```
<ilw-header slot="header">
  <a slot="primary-unit" href="https://wigg.illinois.edu/">Web Implementation Guidelines Group</a>
  <a slot="site-name" href="/index.html">Component Builder Information (v3+)</a>
  <nav slot="links" aria-label="Utility">
    <ul>
      <li><a href="https://builder.toolkit.illinois.edu">Old Builder</a></li>
      <li><a href="https://wigg.illinois.edu/membership/web-components/">About Our Team</a></li>
    </ul>
  </nav>
  <form slot="search" method="get" action="/search.php" role="search">
    <input type="search" name="search" aria-labelledby="search-button">
    <button id="search-button" type="submit">Search</button>
  </form>
  <ilw-header-menu slot="navigation">
    <ul>
      <li>
        <ilw-header-menu-section>
          <span slot="label">Start Here</span>
          <ul>
            <li><a href="/getting_started/index.html">Getting Started</a></li>
            <li><a href="/create_page/index.html">Create a Page</a></li>
            <li><a href="/upgrade/index.html">Upgrade from V2</a></li>
          </ul>
        </ilw-header-menu-section>
      </li>
      <li>
        <ilw-header-menu-section>
          <span slot="label">Information</span>
          <ul>
            <li><a href="/philosophy/index.html">Philosophy</a></li>
            <li><a href="/links/index.html">Helpful Links</a></li>
            <li><a href="/github/index.html">Organization and Github</a></li>
          </ul>
        </ilw-header-menu-section>
      </li>
      <li>
        <a href="/demo/index.html">Demo Pages</a>
      </li>
      <li>
        <a href="/components_toc/index.html">Components</a>
      </li>
      <li>
        <a href="/preview/index.html">Component Preview</a>
      </li>
    </ul>
  </ilw-header-menu>
</ilw-header>
```

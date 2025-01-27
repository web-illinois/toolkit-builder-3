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

THe menu is almost the same. 
* Change `<il-header-nav>` to `<ilw-header-menu>` and `<\il-header-nav>` to `<\ilw-header-menu>`
* Change `<il-header-nav-section>` and `<il-header-nav-section-with-link>` to `<ilw-header-menu-section>`. 
* If there is a link in the menu along with the dropdown, then you need to add the `linked` attribute and assign the link to the `link` slot. Otherwise, assign the label to the `label` slot.


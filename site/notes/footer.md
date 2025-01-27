---
title: Footer Information
layout: page.liquid
permalink: "notes/footer/index.html"
---

Unlike many components, the header and footer will be handled by your content management system. 

See https://github.com/web-illinois/ilw-footer for more information about the footer. 

## Updating from campus header to v3 header

The footer is basically the same as the campus version as far as the interface goes. You just need to change `<il-footer>` to `<ilw-footer>` and `</il-footer>` to `<\ilw-footer>`. All the slots are the same. 

The footer includes the `data-service="x"` attribute for X / Twitter. 
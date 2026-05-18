---
title: Color Checker
permalink: "colorchecker/production/index.html"
layout: colorcheck.liquid
---

# Color Checker

This is a simple color checker ported from the Toolkit Builder used to test [new Illinois-branded colors](https://cdn.brand.illinois.edu/colors.html) with AA accessibility. Note the following:

* While these colors meet legal accessibility requirements, you should have actual people test the final color combination
* A higher ratio means an easier reading experience, and you should strive for a high contrast ratio
* For gradients, you should test all colors used in the gradient and only use the colors that are accessible on all options
* This does not account for taste 

To quote the [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/): "WCAG 2.0 level AA requires a contrast ratio of at least 4.5:1 for normal text and 3:1 for large text. WCAG 2.1 requires a contrast ratio of at least 3:1 for graphics and user interface components (such as form input borders). WCAG Level AAA requires a contrast ratio of at least 7:1 for normal text and 4.5:1 for large text."

[The JSON file for the Illinois colors](/data/colors.json)
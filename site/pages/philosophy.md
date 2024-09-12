---
title: Philosophy
layout: page.liquid
permalink: "philosophy/index.html"
---
<ilw-page-title width="full">
<img src="https://cdn.brand.illinois.edu/patterns/ascend/orange.svg" alt="" slot="background">
<h1>Philosophy</h1>
</ilw-page-title>

The University always had multiple sites that looked a little (or a lot) different from the other sites on campus. The [Website Implementation Guidelines Group](https://webtheme.illinois.edu/about/) was created in 2019 to combat this issue and create a sense of cohesion on campus concerning how pages looked and behaved. 

One of the early problems was how to easily make websites follow the design practices that WIGG promoted. There are a lot of Content Management Systems on campus, and many sites were still coded by hand. If we wanted a common header, each group on campus would need to build their own header, which would require a web developer comfortable with their particular CMS or raw HTML / JS / CSS. To address this, the WIGG Web Components group was created to build standalone web components that could be used in any CMS. The web components would be written using common standards. 

The ultimate goal is to build these web components once at a central location, and allow each area on campus to use them. They can be implemented by both individual web developers on campus and larger groups that manage CMSs. As branding and accessibility standards change, we can modify these in a single area and everyone using the components can benefit from the updates. 

As the web components became more complex, having them in a single repository became more problematic. In 2024, we re-architectured the toolkit to allow it to live in multiple repositories and published through Node Package Manager (NPM). This way, people can mix and match their components and not be locked to a single instance. However, we are still supporting an [overall build of the toolkit](https://github.com/web-illinois/toolkit-management) to allow areas to easily use the toolkit. 

## Where do your designs come from? 

[WIGG has a design team](https://webtheme.illinois.edu/about/design/) that creates designs for us. These designs are collaborative and are not required to be used by any unit. However, they are vetted by designers, accessibility experts, and usability experts across campus.

## Who uses your components?

Anyone on campus is welcome to use our components. We focus on the [WIGG WordPress team](https://webtheme.illinois.edu/about/wordpress/), the [WIGG Drupal team](https://webtheme.illinois.edu/about/drupal/), other areas on campus that manage CMSs, and those units that hand-code their web pages. 

## Is this just the look and feel of the website? 

Yes. The Web Component team is not responsible for storing, retrieving, or standardizing data. 

## What next? 

* <a href="https://webtheme.illinois.edu/about/web-components/">Learn about our team</a>
* <a href="/demo/index.html">See all the components in a sample page</a>
* <a href="/preview/index.html">See all the components individually</a>
* <a href="/getting_started/index.html">Get started using the components</a>
* <a href="/components_toc/index.html">Dive right into the component specifications directly</a>
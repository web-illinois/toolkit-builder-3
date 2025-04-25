---
title: Philosophy
layout: page.liquid
permalink: "philosophy/index.html"
title_background: https://cdn.brand.illinois.edu/patterns/ascend/orange.svg
lede: Toolkit web components are built once, and then can be used across the campus. They provide a central location for implementing brand and accessibility standards, and then are used by individual websites as well as large Content Management System groups.
---

The University always had multiple sites that looked a little (or a lot) different from the other sites on campus. The [Website Implementation Guidelines Group](https://webtheme.illinois.edu/about/) was created in 2019 to combat this issue and create a sense of cohesion on campus concerning how pages looked and behaved. 

One of the early problems was how to easily make websites follow the design practices that WIGG promoted. There are a lot of Content Management Systems on campus, and many sites were still coded by hand. If we wanted a common header, each group on campus would need to build their own header, which would require a web developer comfortable with their particular CMS or raw HTML / JS / CSS. To address this, the WIGG Web Components group was created to build standalone web components that could be used in any CMS. The web components would be written using common standards. 

The ultimate goal is to build these web components once at a central location, and allow each area on campus to use them. They can be implemented by both individual web developers on campus and larger groups that manage CMSs. As branding and accessibility standards change, we can modify these in a single area and everyone using the components can benefit from the updates. 

As the web components became more complex, having them in a single repository became more problematic. In 2024, we re-architectured the toolkit to allow it to live in multiple repositories and published through Node Package Manager (NPM). This way, people can mix and match their components and not be locked to a single instance. However, we are still supporting an [overall build of the toolkit](https://github.com/web-illinois/toolkit-management) to allow areas to easily use the toolkit. 

## What are the goals of the Toolkit

The Toolkit contains components that are: 
* accessible (able to be used by assistive technologies)
* brand-compliant (uses brand-approved colors and fonts)
* fast (can be loaded and processed quickly)
* responsive (can be run on both mobile and desktops)
* easy to use

## Where do your designs come from? 

[WIGG has a design team](https://wigg.illinois.edu/membership/design/) that creates designs for us. These designs are collaborative and are not required to be used by any unit. However, they are vetted by designers, accessibility experts, and user experience designers across campus.

## Do I have to use the entire toolkit set? Is this required? 

The web components may not meet all of your needs, so don't feel like you are constrained to use just these options or force your content to these components. The only official requirements are that your Illinois site must meet [accessibility guidelines](https://itaccessibility.illinois.edu/) and [brand guidelines](https://brand.illinois.edu/). These componets are here to make your life easier. 

## Who uses your components?

Anyone on campus is welcome to use our components. We focus on the [WIGG WordPress team](https://wigg.illinois.edu/membership/wordpress/), the [WIGG Drupal team](https://wigg.illinois.edu/membership/drupal/), other areas on campus that manage CMSs, and those units that hand-code their web pages. 

## Is this just the look and feel of the website? 

Yes. The Web Component team is not responsible for storing, retrieving, or standardizing data. 

## What next? 

* <a href="/demo/index.html">See all the components in a sample page</a>
* <a href="/preview/index.html">See all the components individually</a>
* <a href="/links/index.html">Get more resource links on how to build a web page using a campus CMS</a>
* <a href="/getting_started/index.html">Get started using the components</a>
* <a href="/components_toc/index.html">Dive right into the component specifications directly</a>

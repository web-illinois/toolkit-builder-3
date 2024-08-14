---
title: Web Toolkit Builder
layout: page.liquid
---
# Web Toolkit Builder

**Note that this is the new version of the toolkit builder.** For the original version that targets version 2 of the toolkit, please go to https://builder.toolkit.illinois.edu. If you have questions about this site, please see the [Helpful Links page](/links/index.html).

The toolkit is a way to see components that have been designed by the WIGG Web Components group and other areas that have submitted components to the builder. This includes both production and development versions. You can use [the production version](/production_components/index.html) to create components that you can manually insert into your HTML, or [the development version](/development_components/index.html) to see what's coming up. As we update the web components, you can easily get the benefits of these updates without having to hand-code a lot of changes yourself. 

The web components may not meet all of your needs, so don't feel like you are constrained to use just these options or force your content to these components. The only official requirements are that your Illinois site must meet [accessibility guidelines](https://itaccessibility.illinois.edu/) and [brand guidelines](https://brand.illinois.edu/). These web components help ensure that you meet these requirements. 

One of the things we needed in the last iteration are full-page setups. How do these components interact with each other? Will one component cause another component to have problems? There are two sample pages: <a href="/sample_page/index.html">one without the "illinois" mode</a> (preferred), and <a href="/sample_page_mode/index.html">one with the "illinois" mode</a> (for CMSs that can't put everything in an il-content block). This uses the <a href="https://cdn.brand.illinois.edu/">brand stylesheets and components</a>, the <a href="https://accessibleit.disability.illinois.edu/tools/skipto/">campus skip-to link</a>, and the <a href="https://www.vpaa.uillinois.edu/cms/One.aspx?portalId=420456&pageId=1050467">GDPR cookie banner</a>. Note that the header and footer are in beta, so be warned. 

Why does this page not look like an "Illinois site"? I was going to build this site with the latest web components, but these aren't really ready for prime-time. As these components and tools become more production-ready, we'll add them to this site to make it more branded. 

This also generates <a href="/preview/index.html">a preview of all the components</a>. This will be used by the aXe monitor to ensure that these components pass automated accessibility tests. 

[Create an issue with the new toolkit builder](https://github.com/web-illinois/toolkit-builder-3/issues).
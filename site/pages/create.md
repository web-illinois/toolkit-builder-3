---
title: Creating a Page
layout: page.liquid
permalink: "create_page/index.html"
title_background: https://cdn.brand.illinois.edu/patterns/ascend/orange.svg
---

<ilw-content mode="introduction" padding="40px">
<p><em>Here are nine steps on how to build a webpage from scratch.</em></p><p> We recommend having a basic knowledge of HTML, but you definitely don't to "be a coder" to create a web page. </p>
</ilw-content>
<ilw-accordion>
<ilw-accordion-panel><h3 slot="summary">Create the page skeleton: <code>ilw-page</code></h3>
<p>One of the problems with version 2 is that each component didn't have a way to work with other components. To fix this, we created a Page component that can house all the other components. This includes the brand header and footer component. </p>
<h4>Resource Links</h4>
<ul>
<li><a href="/component/ilw-page/index.html">ilw-page builder link</a> - <a href=" https://github.com/web-illinois/ilw-page/blob/main/README.md">ilw-page detailed documentation</a></il>
</ul>
</ilw-accordion-panel>
<ilw-accordion-panel><h3 slot="summary">Add the brand header and footer: <code>il-header</code>, <code>il-footer</code></h3>
<p>Add the header and footer. This is handled by the Strategic Communications and Marketing department, and questions concerning these components should be directed there.</p>
<h4>Resource Links</h4>
<ul>
<li><a href="https://cdn.brand.illinois.edu/header.html">il-header at cdn.brand.illinois.edu</a></il>
<li><a href="https://cdn.brand.illinois.edu/footer.html">il-foooter at cdn.brand.illinois.edu</a></il>
</ul>
</ilw-accordion-panel>
<ilw-accordion-panel><h3 slot="summary">Create a title: <code>ilw-hero</code>, <code>ilw-page-title</code>, <code>ilw-content</code></h3>
<p>All pages need an <code>h1</code> that should match the page title. You can add this with:</p>
<ul>
<li>Hero: a large text with an image and buttons. Use this if you have a strong opening image and/or an immediate call to action.</li> 
<li>Page Title: a large text with a smaller image. Use this if you are creating a main page, but you don't have a strong image.</li>  
<li>Content with an h1: a simple title. Use this if you are building pages that contain a lot of text.</li>
</ul>
<h4>Resource Links</h4>
<ul>
<li><a href="/component/ilw-hero/index.html">ilw-hero builder link</a> - <a href=" https://github.com/web-illinois/ilw-hero/blob/main/README.md">ilw-hero detailed documentation</a></il>
<li><a href="/component/ilw-page-title/index.html">ilw-page-title builder link</a> - <a href=" https://github.com/web-illinois/ilw-page-title/blob/main/README.md">ilw-page-title detailed documentation</a></il>
<li><a href="/component/ilw-content/index.html">ilw-content builder link</a> - <a href=" https://github.com/web-illinois/ilw-content/blob/main/README.md">ilw-content detailed documentation</a></il>
</ul>
</ilw-accordion-panel>
<ilw-accordion-panel><h3 slot="summary">Add in-page navigation: <code>ilw-breadcrumbs</code>, <code>ilw-section-nav</code>, <code>ilw-back-to-top</code></h3>
<p>The page has a menu, but you may want to create some types of in-page navigation. Some examples are:</p>
<ul>
<li>Breadcrumbs: a way to show where this page is in relationship to parent pages. This is a list of pages on the top of the page or under the page title.</li>
<li>Section Navigation: a way to show where this page is in relationship to sibling pages and child pages. This is a list of pages on the left-side of the page. You can add this to the left-hand side by using the <code>ilw-columns</code> component.</li>
<li>Back To Top: a way to move the focus to the top of the screen, useful for mobile views or long pages.</li>
</ul>
<h4>Resource Links</h4>
<ul>
<li><a href="/component/ilw-breadcrumbs/index.html">ilw-breadcrumbs builder link</a> - <a href=" https://github.com/web-illinois/ilw-breadcrumbs/blob/main/README.md">ilw-breadcrumbs detailed documentation</a></il>
<li><a href="/component/ilw-section-nav/index.html">ilw-section-nav builder link</a> - <a href=" https://github.com/web-illinois/ilw-section-nav/blob/main/README.md">ilw-section-nav detailed documentation</a></il>
<li><a href="/component/ilw-back-to-top/index.html">ilw-back-to-top builder link</a> - <a href=" https://github.com/web-illinois/ilw-back-to-top/blob/main/README.md">ilw-back-to-top detailed documentation</a></il>
</ul>
</ilw-accordion-panel>
<ilw-accordion-panel><h3 slot="summary">Add calls to action: <code>ilw-call-to-action</code>, <code>ilw-button</code></h3>
<p>What do you want the user to do? Do you want them to enroll in a course, apply, join a group? You have a few options.</p>
<ul>
<li>Button: this class will style your link to look like a button and make it more inviting. </li>
<li>Call to Action: this component will create a section that grabs attention and directs the user to a specific action.</li>
</ul>
<h4>Resource Links</h4>
<ul>
<li><a href="/component/ilw-global-button-anchor/index.html">global anchor class builder link</a></il>
<li><a href="/component/ilw-global-button-button/index.html">global button class builder link</a></il>
<li><a href="/component/ilw-call-to-action/index.html">ilw-call-to-action builder link</a> - <a href=" https://github.com/web-illinois/ilw-call-to-action/blob/main/README.md">ilw-call-to-action detailed documentation</a></il>
</ul>
</ilw-accordion-panel>
<ilw-accordion-panel><h3 slot="summary">Add text: <code>ilw-content</code>, <code>ilw-columns</code></h3>
<p>You will add text to your page. This is mainly with the Content component, and you can break up the text into columns using the Columns component.</p>
<h4>Resource Links</h4>
<ul>
<li><a href="/component/ilw-content/index.html">ilw-content builder link</a> - <a href=" https://github.com/web-illinois/ilw-content/blob/main/README.md">ilw-content detailed documentation</a></il>
<li><a href="/component/ilw-columns/index.html">ilw-columns builder link</a> - <a href=" https://github.com/web-illinois/ilw-columns/blob/main/README.md">ilw-columns detailed documentation</a></il>
</ul>
</ilw-accordion-panel>
<ilw-accordion-panel><h3 slot="summary">Break up text with highlights, video, quotes, and other impactful statements: <code>ilw-video</code>, <code>ilw-statistic</code>, <code>ilw-quote</code>, <code>ilw-content</code>, <code>ilw-columns</code>, <code>ilw-card</code>, <code>ilw-tabs</code></h3>
<p>Text on its own can be daunting -- you don't want a wall of text. To break this up, you have several options:</p>
<ul>
<li>Video: this component will auto-size your video. </li>
<li>Statistics: this component will display some statistics in a large format. You can have several of these in columns using the Column component.</li>
<li>Quotes: this component will display a quote in a large format.</li>
<li>Introduction and Ledes: the Content component with the Introduction or Lede option will create a larger format.</li>
<li>Features: you can break up text by putting a column group in a different color, and then put an impactful picture on one side and text on the other. If you do this, you can use the Content component with the Inset option.</li>
<li>Cards: this component will display an image or icon with some text. You can have several of these in columns using the Column component.</li>
<li>Tabs: this component will display a bunch of information in a compact yet attractive format.</li>
</ul>
<h4>Resource Links</h4>
<ul>
<li><a href="/component/ilw-video/index.html">ilw-video builder link</a> - <a href=" https://github.com/web-illinois/ilw-video/blob/main/README.md">ilw-video detailed documentation</a></il>
<li><a href="/component/ilw-statistic/index.html">ilw-statistic builder link</a> - <a href=" https://github.com/web-illinois/ilw-statistic/blob/main/README.md">ilw-statistic detailed documentation</a></il>
<li><a href="/component/ilw-quote/index.html">ilw-quote builder link</a> - <a href=" https://github.com/web-illinois/ilw-quote/blob/main/README.md">ilw-quote detailed documentation</a></il>
<li><a href="/component/ilw-content/index.html">ilw-content builder link</a> - <a href=" https://github.com/web-illinois/ilw-content/blob/main/README.md">ilw-content detailed documentation</a></il>
<li><a href="/component/ilw-columns/index.html">ilw-columns builder link</a> - <a href=" https://github.com/web-illinois/ilw-columns/blob/main/README.md">ilw-columns detailed documentation</a></il>
<li><a href="/component/ilw-card/index.html">ilw-card builder link</a> - <a href=" https://github.com/web-illinois/ilw-card/blob/main/README.md">ilw-card detailed documentation</a></il>
<li><a href="/component/ilw-tabs/index.html">ilw-tabs builder link</a> - <a href=" https://github.com/web-illinois/ilw-tabs/blob/main/README.md">ilw-tabs detailed documentation</a></il>
</ul>
</ilw-accordion-panel>
<ilw-accordion-panel><h3 slot="summary">Condense large blocks of information to smaller sections: <code>ilw-accordion</code>, <code>ilw-grid</code>, <code>ilw-pagination</code></h3>
<p>If you need to condense a lot of information into a smaller space, you have a few options:</p>
<ul>
<li>Accordion: this component will take a heading and make it collapsable. </li>
<li>Grid: this component will take a large number of cards, statistics, or other information and put it in a grid form. This grid will expand to the length of the page.</li>
<li>Pagination: this component will list page numbers to create a pagination structure.</li>
</ul>
<h4>Resource Links</h4>
<ul>
<li><a href="/component/ilw-accordion/index.html">ilw-accordion builder link</a> - <a href=" https://github.com/web-illinois/ilw-accordion/blob/main/README.md">ilw-accordion detailed documentation</a></il>
<li><a href="/component/ilw-grid/index.html">ilw-grid builder link</a> - <a href=" https://github.com/web-illinois/ilw-grid/blob/main/README.md">ilw-grid detailed documentation</a></il>
<li><a href="/component/ilw-pagination/index.html">ilw-pagination builder link</a> - <a href=" https://github.com/web-illinois/ilw-pagination/blob/main/README.md">ilw-pagination detailed documentation</a></il>
</ul>
</ilw-accordion-panel>
<ilw-accordion-panel><h3 slot="summary">Clean up the page: <code>ilw-spacer</code></h3>
<p>At this point, you can clean up the page by adding space between items as needed. You can do this with the Spacer component.</p>
<h4>Resource Links</h4>
<ul>
<li><a href="/component/ilw-spacer/index.html">ilw-spacer builder link</a> - <a href=" https://github.com/web-illinois/ilw-spacer/blob/main/README.md">ilw-spacer detailed documentation</a>
</il>
</ul>
</ilw-accordion-panel>
</ilw-accordion>

<h2>Special pages</h2>
<p>Some pages will be customized, like news items, profiles, program pages, courses, etc. We will be creating these templates as we get them from the WIGG design group. </p>

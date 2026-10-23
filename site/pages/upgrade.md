---
title: Upgrade from Version 2
layout: general/page.liquid
permalink: "upgrade/index.html"
title_background: https://cdn.brand.illinois.edu/patterns/ascend/blue.svg
---
If you are upgrading from version 2, you should be able to do a swap from the old component to the new component. Most of them are a one-to-one swap, but there are a few exceptions. 

Refer to the documentation of each component to see what needs to be changed with the component to move from v2 to v3. 

| Version 2 Component  | Version 3 Component   |
| ---   | ---   |
| il-accordion         | [ilw-accordion](/component/ilw-accordion/index.html)         |
| il-accordion-panel   | [ilw-accordion-panel](/component/ilw-accordion-panel/index.html)  |
| il-back-to-top       | [ilw-back-to-top](/component/ilw-back-to-top/index.html)     |
| il-breadcrumbs-page  | N/A <sup><a class="sub" href="#1">[1]</a> </sup>                 |
| il-breadcrumbs       | [ilw-breadcrumbs](/component/ilw-breadcrumbs/index.html) |
| il-button class      | [ilw-button](/component/ilw-global-button-anchor/index.html) class                |
| il-call-to-action    | [ilw-call-to-action](/component/ilw-call-to-action/index.html)  |
| il-card              | [ilw-card](/component/ilw-card/index.html)  |
| il-clickable-card    | ilw-card with clickable attribute |
| il-footer            | [ilw-footer](/notes/footer/index.html)    |
| il-formatted class   | [ilw-page](/component/ilw-page/index.html) <sup><a class="sub" href="#4">[4]</a></sup>  |
| il-gallery-detail    | N/A <sup><a class="sub" href="#3">[3]</a></sup>                  |
| il-gallery           | N/A <sup><a class="sub" href="#3">[3]</a></sup>                  |
| il-header            | [ilw-header](/notes/header/index.html)            |
| il-hero              | [ilw-hero](/component/ilw-hero/index.html)           |
| il-icon              | [ilw-icon](/component/ilw-icon/index.html)             |
| il-image-feature     | [ilw-columns](/component/ilw-columns/index.html) / ilw-image-cover class   |
| il-introduction      | [ilw-content](/component/ilw-content/index.html) with introduction mode    |
| il-lede              | ilw-content with lede mode     |
| il-page-title        | [ilw-page-title](/component/ilw-page-title/index.html)        |
| il-pagination        | [ilw-pagination](/component/ilw-pagination/index.html)       |
| il-profile-card      | [ilw-profile-card](/component/ilw-profile-card/index.html)              |
| il-profile           | [ilw-profile](/component/ilw-profile/index.html)          |
| il-quote             | [ilw-quote](/component/ilw-quote/index.html)            |
| il-section-nav       | [ilw-section-nav](/component/ilw-section-nav/index.html)       |
| il-statistic         | [ilw-statistic](/component/ilw-statistic/index.html)         |
| il-vertical-tab      | [ilw-tabs](/component/ilw-tabs/index.html)              |
| il-video-feature     | ilw-columns / ilw-video <sup><a class="sub" href="#2">[2]</a></sup>  |
| il-video             | [ilw-video](/component/ilw-video/index.html)             |

1. <a name="1"></a>The il-breadcrumbs-page was used by the il-breadcrumbs. The new component doesn't use a child component. 
2. <a name="2"></a>The il-image-feature and il-video-feature components have been deprecated. You can build them by using the ilw-columns component to create columns, and then fill one of the columns with an image with the ilw-image-cover class, a video, or another component.  
3. <a name="3"></a>The il-gallery and il-gallery-detail components have been deprecated. 
4. <a name="4"></a>The il-formatted class has been deprecated. Instead, use the ilw-page with one of the modes, based on your needs. 
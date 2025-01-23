---
title: Upgrade from Version 2
layout: page.liquid
permalink: "upgrade/index.html"
title_background: https://cdn.brand.illinois.edu/patterns/ascend/blue.svg
---
<style>
    ilw-content table {
        border-collapse: collapse;
        margin-top: 30px;
    }
    
    ilw-content thead tr {
        background-color: var(--il-blue);
        color: #fff;
        position: relative;
    }

    ilw-content thead tr th {
        border-left: 2px solid #fff;
        color: #fff;
        min-width:  90px;
        padding: 10px;
        font-weight: 700;
    }

    ilw-content thead tr th:first-of-type {
        border-left: 2px solid var(--il-blue);
    }

ilw-content tbody tr td {
    border: 2px solid var(--il-blue);
    min-width: 300px;
    min-height: 90px;
    padding: 10px;
}

ilw-content tbody tr:nth-child(even) td {
    background: var(--il-industrial-lighter-4);
}
</style>

If you are upgrading from version 2, you should be able to do a swap from the old component to the new component. Most of them are a one-to-one swap, but there are a few exceptions. 

Refer to the documentation of each component to see what needs to be changed with the component to move from v2 to v3. 

| Version 2 Component  | Version 3 Component   |
| ---   | ---   |
| il-accordion         | ilw-accordion         |
| il-accordion-panel   | ilw-accordion-panel   |
| il-back-to-top       | ilw-back-to-top       |
| il-breadcrumbs-page  | N/A <sup><a class="sub" href="#1">[1]</a> </sup>                 |
| il-breadcrumbs       | ilw-breadcrumbs       |
| il-button class      | ilw-button class      |
| il-call-to-action    | ilw-call-to-action    |
| il-card              | ilw-card              |
| il-clickable-card    | ilw-card with clickable attribute |
| il-footer            | ilw-footer    |
| il-formatted class   | ilw-page <sup><a class="sub" href="#4">[4]</a></sup>  |
| il-gallery-detail    | N/A <sup><a class="sub" href="#3">[3]</a></sup>                  |
| il-gallery           | N/A <sup><a class="sub" href="#3">[3]</a></sup>                  |
| il-header            | il-header             |
| il-hero              | ilw-hero              |
| il-icon              | ilw-icon              |
| il-image-feature     | ilw-columns / ilw-image-cover class   |
| il-introduction      | ilw-content with introduction mode    |
| il-lede              | ilw-content with lede mode     |
| il-page-title        | ilw-page-title        |
| il-pagination        | ilw-pagination        |
| il-profile-card      | ilw-card              |
| il-profile           | ilw-profile           |
| il-quote             | ilw-quote             |
| il-section-nav       | ilw-section-nav       |
| il-statistic         | ilw-statistic         |
| il-vertical-tab      | ilw-tabs              |
| il-video-feature     | ilw-columns / ilw-video <sup><a class="sub" href="#2">[2]</a></sup>  |
| il-video             | ilw-video             |

1. <a name="1"></a>The il-breadcrumbs-page was used by the il-breadcrumbs. The new component doesn't use a child component. 
2. <a name="2"></a>The il-image-feature and il-video-feature components have been depreciated. You can build them by using the ilw-columns component to create columns, and then fill one of the columns with an image with the ilw-image-cover class, a video, or another component.  
3. <a name="3"></a>The il-gallery and il-gallery-detail components have been depreciated. 
4. <a name="4"></a>The il-formatted class has been depreciated. Instead, use the ilw-page with one of the modes, based on your needs. 
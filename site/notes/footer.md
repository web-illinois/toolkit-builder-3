---
title: Footer Information
layout: page.liquid
permalink: "notes/footer/index.html"
---

Unlike many components, the header and footer will be handled by your content management system. 

See https://github.com/web-illinois/ilw-footer for more information about the footer. 

## Updating from campus header to v3 header

The footer is basically the same as the campus version as far as the interface goes. You just need to change `<il-footer>` to `<ilw-footer>` and `</il-footer>` to `<\ilw-footer>`. All the slots are the same. 

The cookie button now has a `cookies-button` slot. If you want to include the cookie button, ensure that you follow the instructions listed in https://github.com/web-illinois/ilw-footer.  

Note you can include other components in the `<ilw-footer>` tag, like `<ilw-columns>`, `<ilw-content>`, and `<ilw-grid>`. Do not do this for any slotted components.

If you are incorporating the footer into the ilw-page component, then make sure you add the `footer` slot to the `<ilw-footer>` tag.

## Sample Footer Information

```
<ilw-footer slot='footer'>
  <a slot="primary-unit" href="/">Toolkit Builder 3</a>
  <a slot="site-name" href="/sample_page/index.html">Whispering Pines College</a>
  <address slot="address">
    <div>1313 Pine Avenue</div>
    <div>Normal, ZZ 99999</div>
    <div>Phone: 555-874-3000</div>
    <div>Email: contact@iou.edu</div>
  </address>
  <div slot="actions">
    <a href="#">Give</a>
    <a href="#">Apply</a>
  </div>
  <nav slot="social" aria-label="Social media">
    <ul>
      <li><a data-service="facebook" href="#">Facebook</a></li>
      <li><a data-service="instagram" href="#">Instagram</a></li>
      <li><a data-service="linkedin" href="#">LinkedIn</a></li>
    </ul>
  </nav>
  <ilw-columns>
    <ilw-content theme="gray">
      <p class="ilw-heading">Explore</p>
         <ul>
         <li><a href="#">Calendars</a></li>
         <li><a href="#">Directory</a></li>
         <li><a href="#">Careers</a></li>
         <li><a href="#">Maps</a></li>
         <li><a href="#">Strategic Plan</a></li>
         <li><a href="#">Diversity and Equity</a></li>
         <li><a href="#">Plan a Visit</a></li>
         </ul>
      </ilw-content>
    <ilw-content theme="gray">
      <p class="ilw-heading">Connect</p>
        <ul>
        <li><a href="#">Undergraduate Programs</a></li>
        <li><a href="#">Graduate Programs</a></li>
        <li><a href="#">Online Programs</a></li>
        <li><a href="#">Research Partners</a></li>
        <li><a href="#">Office of the Dean</a></li>
        </ul>
      </ilw-content>
  </ilw-columns>
</ilw-footer>
```

## Data-service options

* facebook
* instagram
* linkedin
* pinterest
* snapchat
* twitter
* weibo
* whatsapp
* x
* youtube
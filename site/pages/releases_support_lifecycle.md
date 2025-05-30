---
title: Releases and Support Lifecycle
layout: page.liquid
permalink: "releases_support_lifecycle/index.html"
title_background: https://cdn.brand.illinois.edu/patterns/ascend/blue.svg
---

Technical discussions about our Best Practices concerning development, releases, support, etc. can be found [on our Github pages](https://github.com/web-illinois/toolkit-management/blob/main/documentation/BEST_PRACTICES.md). This is meant to be a high-level version of our support. 

## Toolkit Releases

At this point (5/30/2025), we are trying to standardize a minor release every 1-2 months. This happens at the third week of the month after our monthly meeting (closer to the end of the week). Announcements will be made on the Web Component Channel in the WIGG Teams team when we plan the deploy (usually that Monday) and after the change is released (usually Thursday or Friday). There may be several patches in the next week to fix any minor issues that come up. 

We will not make any changes during the "no-change" period. 

All changes are tracked on [our Github Project board](https://github.com/orgs/web-illinois/projects/7). This includes items that are pending (our to-do area). If anyone wants to take on a specific task or needs a component, you are [welcome to join us and contribute to the process](https://wigg.illinois.edu/membership/web-components/). Most of our direction comes from the WIGG design group, but we can generate components on our own. 

A full list of Toolkit versions can be found on [our Github Release area](https://github.com/web-illinois/toolkit-management/releases).

## Support

Because we are consumers of the web toolkit, it is in our best interest to keep it working and up-to-date. 

Because this is not our main job, it may be a little bit before we can get to fixes. If there's an issue that is pressing for your shop, we encourage you to put in a pull request that fixes the issue. The toolkit allows us to tweak a specific component without fear that the change will affect other components. If you cannot submit a pull request, [please create a Github Issue in the appropriate repository](/github/index.html) and we can look at it. 

We prioritize fixing existing components over creating new components. 

### "The Illinois Toolkit"

Note that the Illinois Toolkit is really just a very thin NPM package along with a global CSS stylesheet. If you need a specific update to a component or you want to build your own toolkit with your changes, this is allowed. You are going to be responsible for updating the individual component references, but this gives you the greatest flexibility to pull in changes as you need them. 

<span id="support_lifecycle"></span>
### Support Lifecycle and Minor Versions

If you are going to be maintaining a website using the Illinois Toolkit, we recommend that you use the latest major version of the toolkit. This version is going to have the latest changes and will allow you to introduce new components easier. 

If you are not maintaining a website using the Illinois Toolkit, you may use a specific minor version of the Illinois Toolkit. This is guaranteed to not be changed during our regular deployment, but you will not get any updates to the code aside from accessibility and functionality patches. **Our standard practice is to not make changes to minor versions unless requested.** If you need a change to a specific old minor version, create a Github issue and we can review it. 

### Version 2 Support

Version 2 of the toolkit is no longer supported. If you need a change, you can contact jonker@illinois.edu, but there will need to be a very pressing reason to make this change. 

## What next? 

* <a href="/generic_html/index.html">Get a generic HTML template</a>
* <a href="/upgrade/index.html">Upgrade a site from version 2</a>
* <a href="/create_page/index.html">View a step-by-step guide to create a new page</a>
* <a href="/components_toc/index.html">Dive right into the component specifications directly</a>
* <a href="/philosophy/index.html">Learn more about the philosophy of the toolkit</a>
* <a href="/links/index.html">Get more resource links on how to build a web page using a campus CMS</a>
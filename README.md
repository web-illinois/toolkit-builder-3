# Web toolkit builder 3

The goal of this is to help test the web components and to serve as a training module for new users. 

This is a replacement of the old toolkit builder.

You can run the following commands to build the test site:

````
npm install
npm rebuild
npm run build-full
````

This will generate a static site under _site. You can use a live server tool to run this from your local machine. 

## Adding components

All of the components are driven through a .json file in the /imported_json/components and /imported_json/component_versions folders. 

## Deployment

This deploys to:
* https://builder3.toolkit.illinois.edu: the individual environment for a version 3 build. This is for both development (dev.toolkit.illinois.edu) and production (cdn.toolkit.illinois.edu).

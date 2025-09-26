# Web toolkit builder 3

The goal of this is to help test the web components and to serve as a training module for new users. 

This is a replacement of the old toolkit builder.

## Deployment

This deploys to:
* https://builder3.toolkit.illinois.edu: the individual environment for a version 3 build. This is for both development (dev.toolkit.illinois.edu) and production (cdn.toolkit.illinois.edu).

## Adding to this project

The bad news is GitHub actions don't support looping except with the matrix option and external jobs have a limit of 20. I am using judicious copy-paste. To add a new component to the toolkit builder, update the */.github/workflows/deploy_release.yml* file and add another Checkout section  name of the repository. You will need to update the name of the repository in two places -- once in the title, once in the with repository name. This will check out the repository and copy the json files from the */builder/* and */builder/versions/* folders.

## Running the builder on your local machine

Copy component JSON files. If you have the `toolkit-management` repository, you can use something like:

```bash
rm toolkit-builder-3/site/imported_json/components/*.json
rm toolkit-builder-3/site/imported_json/component_versions/*.json
cp toolkit-management/node_modules/@illinois-toolkit/*/builder/*.json toolkit-builder-3/site/imported_json/components/.
cp toolkit-management/node_modules/@illinois-toolkit/*/builder/versions/*.json toolkit-builder-3/site/imported_json/component_versions/.
cp toolkit-management/global-css/builder/*.json toolkit-builder-3/site/imported_json/components/.
cp toolkit-management/global-css/builder/versions/*.json toolkit-builder-3/site/imported_json/component_versions/.
```

You can run the following commands to build the test site:

````
npm install
npm rebuild
npm run build
````

This will generate a static site under _site. You can use a live server tool to run this from your local machine. If you are using Visual Studio Code, you can choose *File* --> *Add Folder to Workspace* to add _site and make this the root. 

**Note:** this is assuming that the root directory is *_site*. If you are using Visual Studio Code, you can choose *Add Folder to Workspace* to add *_site* to the workspace so you can run Live Server with _site as the root folder. 

## Using the builder to test your components

You can use the builder to test your components without publishing. 

Before you run this on your local machine, make sure you include the json files in */site/imported_json/component_versions* and */site/imported_json/components*. By default, this will be blank, so you will need to manually copy the files from your component repository to these folders. 

Note that if you are testing the component using the path /component/*name*/*version*/index.html, it's not going to use the NPM package. It will use the file path listed in your */site/imported_json/component_versions/* file. 

To point to a local copy of your files, copy your js and css files to */_localfiles/* and change your component_versions file to

```
    "css": "/_localfiles/ilw-hero.css",
    "js": "/_localfiles/ilw-hero.js",
```

Any files in the directories */site/imported_json/component_versions*, */site/imported_json/components*, and */site/_localfiles* will not be pushed to GitHub. 

## Using local NPM packages to test demo pages

You may want to run a local version of code so you can test interactions with other components. The toolkit builder and toolkit management Github repositories support this workflow. 

In Github, make a local copy of the toolkit-management repository. Manually run an NPM install of the packages you want to run, and then run the build step for the toolkit management. Then, copy those build files to the _localfiles folder in the builder application. These _localfiles will not be deployed to Github. Below is a sample Windows script to run that installs the local version of *ilw-page*, assuming you are on the toolkit-management repository. 

```
cd source/repos/toolkit-management
npm install ../ilw-page/
npm run build
copy dist-toolkit\* ..\toolkit-builder-3\site\_localfiles /Y
```

To run the demo pages, change the `localFiles` of the demo pages to true in the .md file and run the npm build script for the toolkit builder 3 project. Make sure you change the `localFiles` variable back to false before checking the files back in. 

If you are changing the toolkit-management repository, make sure you rebuild the package.json and package-lock.json files. Updating the package.json can be done manually, but to update the package-lock.json, run `npm update --save`.

## Building a component.json and component_version.json file

### Component JSON file notes
* "tag": if you have multiple instances of the tag, then use this as a unique identifier, so for ilw-content for lede, this is ilw-content-lede
* "description": longer description of what this can do
* "purpose": short statement, declarative purpose
* "element-name": if you have multiple instances of the tag, then this is the tag name, so for ilw-content for lede, this is ilw-content
* "builder-override-link": Used if you don't want to use the default component builder link -- this will go to a static page inside the builder site. 

### Component Version JSON file notes
* "tag": if you have multiple instances of the tag, then use this as a unique identifier, so for ilw-content for lede, this is ilw-content-lede
* "description": longer description of what this can do
* "element-name": if you have multiple instances of the tag, then this is the tag name, so for ilw-content for lede, this is ilw-content
* "builder-version": the builder version doesn't necessarily means the actual version of the component -- some components may have multiple iterations but have the same builder version file because the interface doesn't change
* "version": the actual component version
* "notes": any version-specific infomration you want pointed out
* "parent-style": if this needs to be wrapped in a parent CSS style, put the style definition here, like `margin: 0 auto; max-width: 1200px;`
* "addon-html": if you need to add HTML as a helper class (like a tooltip or button that triggers a certain action), add the raw HTML here, like `<button class='ilw-button' data-modal-target='modal'>Open Modal</button>`
* "added-components": This is an array of objects that can get added to a component. They consisit of a name, description, link, css, and js. 
`{"name": "Icon", "description": "You can use the icon component inside the modal for decorative purposes.", "link": "https://toolkit.illinois.edu/components/ilw-icon/", "css": "https://cdn.toolkit.illinois.edu/ilw-icon/1/ilw-icon.css", "js": "https://cdn.toolkit.illinois.edu/ilw-icon/1/ilw-icon.js" }`
* "samples": This is an array of samples that can get populated in a dropdown. They consisit of a name, description, and text (HTML of the sample). `{ "name": "default", "description": "Default information", "text": "<h2 slot=\"title\">Default Modal</h2>\n" }`
* "attributes-fixed", "classes-fixed": This is an array of attributes or classes that automatically get added to the component. They consist of name (used only for attributes), description, depreciated (boolean saying if they are depreciated or not), and value
* "attributes-text": This is an array of attributes that automatically get added to the component and users can enter a free value. They consist of name, description, depreciated (boolean saying if they are depreciated or not), and value (default value)
* "attributes" and "classes": This is an array of attributes or classes that get added to the component as a dropdown of available options. They consist of name (used only for attributes), description, depreciated (boolean saying if they are depreciated or not), and values (an array of string options, make sure you have the first one be "" if you don't have to fill this in)
* "css-variables": This is an array of css variables that can be overwritten. They consist of name (used only for attributes), description, and depreciated (boolean saying if they are depreciated or not)

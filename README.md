# Web toolkit builder 3

The goal of this is to help test the web components and to serve as a training module for new users. 

This is a replacement of the old toolkit builder.

## Deployment

This deploys to:
* https://builder3.toolkit.illinois.edu: the individual environment for a version 3 build. This is for both development (dev.toolkit.illinois.edu) and production (cdn.toolkit.illinois.edu).

## Adding to this project

To add a new component to the toolkit builder, update `site/component-repositories.json` with the repository name. 

The deployment workflow runs `npm run import-components`, which checks out each repository, copies JSON files from the `builder/` and `builder/versions/` folders, and imports each repository README into the builder site under `/readme/{repository}/`.

[The Builder Files readme](https://github.com/web-illinois/toolkit-builder-3/blob/main/BUILDER_FILES.md) outlines what is in the `builder/` and `builder/versions/` folders.

If a repository keeps builder JSON files in a different folder, add a `builderPath` value in `component-repositories.json`.

If a repository uses a README.md file for other information besides component information, add a `file` value in `component-repositories.json` that points to the markdown file you want to use. This is case sensitive.

## Running the builder on your local machine

Copy component JSON files. If you have the `toolkit-management` repository, you can use something like:

```bash

```

You can run the following commands to build and run the test site:

````
npm install
npm rebuild
npm import-components
npm clean-external-only
npm dev
````

## Using the builder to test your components

You can use the builder to test your components without publishing. 

To point to a local copy of your files
1. Copy your js and css files to `site/_localfiles/`
2. Change the `localFiles` of the `site/components_iframe/component_version.md` to true in the .md file
3. Run `npm import-components` and `npm clean-external-only` if needed
4. Run `npm dev` to run a local version and go to the component tester

Any files in the directories */site/_localfiles* will not be pushed to GitHub. 

## Using local NPM packages to test demo pages

You may want to run a local version of code so you can test interactions with other components. The toolkit builder and toolkit management Github repositories support this workflow. 

In Github, make a local copy of the `toolkit-management` repository. Manually run an NPM install of the packages you want to run, and then run the build step for the toolkit management. Then, copy those build files to the _localfiles folder in the builder application. These _localfiles will not be deployed to Github. Below is a sample Windows script to run that installs the local version of *ilw-page*, assuming you are on the toolkit-management repository. 

```
cd source/repos/toolkit-management
npm install ../ilw-page/
npm run build
copy dist-toolkit\* ..\toolkit-builder-3\site\_localfiles /Y
```

To run the demo pages, change the `localFiles` of the demo pages to true in the .md file and run the npm build script for the toolkit builder 3 project. Make sure you change the `localFiles` variable back to false before checking the files back in. 

If you are changing the toolkit-management repository, make sure you rebuild the package.json and package-lock.json files. Updating the package.json can be done manually, but to update the package-lock.json, run `npm update --save`.


## Creating a custom demo page for special cases
For special case components that cannot be duplicated inside of the builder website, like the [org chart](https://github.com/web-illinois/toolkit-builder-3/blob/main/site/components_iframe/orgchart.md), an override builder page can be created. 

1. Create a new branch in toolkit-builder-3 for your customizations.
2. In your new branch, build out the custom page inside: `toolkit-builder-3/site/components_iframe/YOUR-NEW-COMPONENT.md`
    * This will be put in an `<iframe>` inside your component builder page, so start with an H2
    * Use the `components/base.liquid` layout -- this just has the bare structure for your page.
    * Your permalink should be nested inside the component -- in most cases, this will be `component/YOUR-COMPONENT/`. Make sure you give it a subdirectory inside this structure -- do not write to the root index.html or it will break.
    * Make sure to add your production or development version JS and CSS with the parameters `scripturl` and `stylesheeturl`. If you want testing for both production and development, create two .md files, one pointing to dev and one pointing to production. 
3. Submit a pull-request to request the custom override. 
4. Once approved, go to your component repo: builder/ilw-YOUR-NEW-COMPONENT.json
5. Follow the steps to add a Custom Templates (used in component.json) in [the Builder Files readme](https://github.com/web-illinois/toolkit-builder-3/blob/main/BUILDER_FILES.md).
6. If you do not want to have any automatic builders, remove the versions/ file and the versions array in your components json. 

Note: If this component is updated, its custom builder page will need to be updated manually with it. 

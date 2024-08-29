# Web toolkit builder 3

The goal of this is to help test the web components and to serve as a training module for new users. 

This is a replacement of the old toolkit builder.

Before you run this on your local machine, make sure you include the json files in */imported_json/component_versions* and */imported_json/components*.

Any json files in these directories will not be pushed to GitHub. Instead, there's a process to pull them from GitHub repositories directly. This will allow us to test everything before we create NPM packages and put them in the toolkit package. 

You can run the following commands to build the test site:

````
npm install
npm rebuild
npm run build-full
````

This will generate a static site under _site. You can use a live server tool to run this from your local machine. 

## Deployment

This deploys to:
* https://builder3.toolkit.illinois.edu: the individual environment for a version 3 build. This is for both development (dev.toolkit.illinois.edu) and production (cdn.toolkit.illinois.edu).

## Adding to this project

The bad news is GitHub actions don't support looping except with the matrix option and external jobs have a limit of 20. I am using judicious copy-paste. To add a new component to the toolkit builder, update the */.github/workflows/deploy_release.yml* file and add another Checkout section  name of the repository. You will need to update the name of the repository in two places -- once in the title, once in the with repository name. This will check out the repository and copy the json files from the */builder/* and */builder/versions/* folders.

## Using local NPM packages

You may want to run a local version of code so you can test interactions with other components. The toolkit builder and toolkit management Github repositories support this workflow. 

In Github, make a local copy of the toolkit-management repository. Manually run an NPM install of the packages you want to run, and then run the build step for the toolkit management. Then, copy those build files to the _localfiles folder in the builder application. These _localfiles will not be deployed to Github. Below is a sample Windows script to run that installs the local version of *ilw-page*, assuming you are on the toolkit-management repository. 

```
cd source/repos/toolkit-management
npm install ../ilw-page/
npm run build
copy dist-toolkit\* ..\toolkit-builder-3\site\_localfiles /Y
```

When you are ready to test, change the `localFiles` of the sample pages to true in the .md file and run the npm build script for the toolkit builder 3 project. Make sure you change the `localFiles` variable back to false before checking the files back in. 

If you are changing the toolkit-management repository, make sure you rebuild the package.json and package-lock.json files. Updating the package.json can be done manually, but to update the package-lock.json, run `npm update --save`.
# Building a component.json and component_version.json file

## Component JSON file notes
* `title`: The title of the builder item.
* `id`: This is a unique identifier used by the builder. If you have multiple builder files, these need to be unique.
* `type`: "Web Component", "Stylesheet", or "Pattern". 
* `description`: longer description of what this can do.
* `purpose`: short statement, declarative purpose, shows up on the builder homepage.
* `customtemplates`: Array of custom templates for more complex items. See *custom templates* below.
* `versions`: Array of versions. See *versions* below.

### Custom Templates (used in component.json)
* `name`: The name of the custom template.
* `path`: The path of the custom template in the builder application.
* `notes`: Notes describing what the custom template does. This will show up as explanation text in the dropdown.

### Versions (used in component.json)
* `name`: The name of the version.
* `template`: The template that should be used for this version.
* `notes`: Notes describing what the version added. This will show up as explanation text in the dropdown.

## Component Version JSON file notes
* `template`: The title of the template.
* `id`: The ID of the Component JSON it is associated with.
* `notes`: Notes describing what the template does. This will show up as explanation text in the dropdown.
* `usejs`: True/false saying if you should import JS. For web components, this is true. For styles embedded in the ilw-global, this is false.
* `usecss`: True/false saying if you should import CSS. For web components, this is true. For styles embedded in the ilw-global, this is false.
* `builder-information`: A single object that gives builder information. See *builder information* below.
* `added-components`: This is an array of added components objects that can get added to a component. For example, an Icon Panel will most likely require the Icon web component. For patterns that have multiple components, you will add all the components you need here. See *added components* below.
* `samples`: This is an array of samples that can get populated in a dropdown. See *samples* below.
* `attributes-fixed`: This is an array of attributes that automatically get added to the component. See *attributes fixed* below.
* `attributes-text`: This is an array of attributes that automatically get added to the component and users can enter a free value. See *attributes text* below.
* `attributes`: This is an array of attributes that get added to the component as a dropdown of available options. See *attributes* below.
* `classes-fixed`: This is an array of classes that automatically get added to the component. See *classes fixed* below.
* `classes`: This is an array of classes that get added to the component as a dropdown of available options. See *classes* below.
* `css-variables`: This is an array of css variables that can be overwritten. See *css variables* below. 

### Builder Information (used in component_version.json)
* `element-name`: this is the tag name. In most web components, this will be the web component, but this may be `<div>`, `<button>`, etc. All the attributes, classes, and css will be applied to this item.
* `parent-style`: if this needs to be wrapped in a parent CSS style, put the style definition here, like `margin: 0 auto; max-width: 1200px;`. This can be modified by the end-user in the builder.
* `addon-html`: if you need to add HTML as a helper class (like a tooltip or button that triggers a certain action), add the raw HTML here, like `<button class='ilw-button' data-modal-target='modal'>Open Modal</button>`

### Added Components (used in component_version.json)
* `name`: Name of the component
* `description`: Description on how it could be used in the component
* `link`: A link to more information. You can add the builder for this if you want.
* `css`: A link to the CSS for this. For web components, you should use the major version unless you need to reference a development version. 
* `js`: A link to the JavaScript for this. For web components, you should use the major version unless you need to reference a development version. 

### Samples (used in component_version.json)
* `name`: Name of the sample. This should be all lowercase with no spaces. The first one should be called "default".
* `description`: Description of the sample. This shows up as the label for the dropdown. The first one should be called "Default information". 
* `text`: HTML. Include \" to handle double quotes, and \n to handle line breaks.

### Attributes Fixed (used in component_version.json)
* `name`: Text of the attribute that is in the HTML. If the code is `<ilw-content mode="lede">`, the name would be `mode`.
* `description`: Description of the attribute. This shows next to the name of the attribute.
* `depreciated`: True/false value to indicate if this is depreciated.
* `value`: The value of the attribute. If the code is `<ilw-content mode="lede">`, the name would be `lede`.

### Attributes Text (used in component_version.json)
* `name`: Text of the attribute that is in the HTML. If the code is `<ilw-content mode="lede">`, the name would be `mode`.
* `description`: Description of the attribute. This shows next to the name of the attribute.
* `depreciated`: True/false value to indicate if this is depreciated.
* `value`: The default value of the attribute.

### Attributes (used in component_version.json)
* `name`: Text of the attribute that is in the HTML. If the code is `<ilw-content mode="lede">`, the name would be `mode`.
* `description`: Description of the attribute. This shows next to the name of the attribute.
* `depreciated`: True/false value to indicate if this is depreciated.
* `values`: An array of the possible values. If this is an optional attribute, make sure the first item is a "" string. If the code is `<ilw-content mode="lede">`, the values would be `["", "lede", "introduction"]`, etc.

### Classes Fixed (used in component_version.json)
* `description`: Description of the attribute. This shows next to the name of the class.
* `depreciated`: True/false value to indicate if this is depreciated.
* `value`: Text of the class that is in the HTML. If the code is `<ilw-content class="highlight">`, the name would be `highlight`.

### Classes (used in component_version.json)
* `description`: Description of the attribute. This shows next to the name of the class.
* `depreciated`: True/false value to indicate if this is depreciated.
* `values`: An array of the possible values. If this is an optional attribute, make sure the first item is a "" string. If the code is `<ilw-content class="lede">`, the values would be `["", "lede", "introduction"]`, etc.

### CSS Variables (used in component_version.json)
* `name`: Text of the CSS variable that is in the HTML. Include the starting `--`. 
* `description`: Description of the CSS variable. This shows next to the name of the CSS variable.
* `depreciated`: True/false value to indicate if this is depreciated.

## Example component.json

`  {
    "title": "Accordion",
    "id": "ilw-accordion",
    "type": "Web Component",
    "repository-name": "ilw-accordion",
    "description": "This is an accordion where you have headers and each header can be opened to display more information. ",
    "purpose": "Reduce the need for scrolling with collapsible accordions.",
    "customtemplates": [
      {
         "name": "Custom Template",
         "path": "/notes/orgchart/index.html",
         "notes": ""
      }
    ],
    "versions": [
      {
        "name": "1.0",
        "notes": "",
        "template": "1.0"
      },
      {
        "name": "1.1",
        "notes": "",
        "template": "1.1"
      },
      {
        "name": "1.2",
        "notes": "",
        "template": "1.1"
      },
      {
        "name": "1.3",
        "notes": "",
        "template": "1.3"
      }
    ]
  }`

## Example component_version.json

`{
    "template": "1.0",
    "id": "ilw-accordion",
    "notes": "",
    "usejs": true,
    "usecss": true,
    "builder-information": {
        "element-name": "ilw-accordion",
        "addon-html": "",
        "parent-style": "margin: 0 auto; max-width: 1200px;"
    },
    "added-components": [
      {
        "name": "Icon",
        "description": "You can use the icon component in the card.",
        "link": "https://builder3.toolkit.illinois.edu/component/ilw-icon/1-1/index.html",
        "css": "https://cdn.toolkit.illinois.edu/ilw-icon/1/ilw-icon.css",
        "js": "https://cdn.toolkit.illinois.edu/ilw-icon/1/ilw-icon.js"
      }
    ],
    "samples": [
      {
        "name": "default",
        "description": "Default information",
        "text": "<ilw-accordion-panel><h3 slot=\"summary\">What are the admission requirements for enrolling in a degree program?</h3><p>To enroll in a degree program, you typically need to meet certain admission requirements, which may include:</p><ul><li>A high school diploma or equivalent (e.g., GED)</li><li>Satisfactory SAT, ACT, or other standardized test scores (if required)<li>Completion of prerequisite courses, particularly for specialized programs (e.g., math and science courses for engineering)<li>Letters of recommendation, a personal statement, or an admissions essay<li>A minimum GPA requirement, which varies by program and institution</ul></ilw-accordion-panel><ilw-accordion-panel><h3 slot=\"summary\">How do I submit my application?</h3><p>Applications are usually submitted online through the university's admissions portal.</p></ilw-accordion-panel><ilw-accordion-panel><h3 slot=\"summary\">When is the application deadline?</h3><p>Application deadlines vary by program, so check the specific dates on the university’s website.</p></ilw-accordion-panel>"
      },
      {
        "name": "firstopened",
        "description": "Accordion with First Panel Open",
        "text": "<ilw-accordion-panel open=\"true\"><h3 slot=\"summary\">What are the admission requirements for enrolling in a degree program?</h3><p>To enroll in a degree program, you typically need to meet certain admission requirements, which may include:</p><ul><li>A high school diploma or equivalent (e.g., GED)</li><li>Satisfactory SAT, ACT, or other standardized test scores (if required)<li>Completion of prerequisite courses, particularly for specialized programs (e.g., math and science courses for engineering)<li>Letters of recommendation, a personal statement, or an admissions essay<li>A minimum GPA requirement, which varies by program and institution</ul></ilw-accordion-panel><ilw-accordion-panel><h3 slot=\"summary\">How do I submit my application?</h3><p>Applications are usually submitted online through the university's admissions portal.</p></ilw-accordion-panel><ilw-accordion-panel><h3 slot=\"summary\">When is the application deadline?</h3><p>Application deadlines vary by program, so check the specific dates on the university’s website.</p></ilw-accordion-panel>"
      }
    ],
    "attributes-fixed": [],
    "attributes-text": [],
    "attributes": [
      {
        "name": "theme",
        "description": "Color theme used, defaults to blue",
        "depreciated": false,
        "values": [
          "",
          "blue",
          "orange",
          "industrial",
          "arches"
        ]
      },
      {
        "name": "width",
        "description": "Width of the accordion (should it use the containing controller or break to full width)",
        "depreciated": false,
        "values": [
          "",
          "full",
          "auto",
          "page"
        ]
      },
      {
        "name": "limit",
        "description": "Whether or not it limits the number of open items to a single item",
        "depreciated": false,
        "values": [
          "",
          "true"
        ]
      }
    ],
    "classes-fixed": [],
    "classes": [],
    "css-variables": [
      {
        "name": "--ilw-accordion-panel--color",
        "depreciated": false,
        "description": "Text color of the accordion"
      },
      {
        "name": "--ilw-accordion-panel--background",
        "depreciated": false,
        "description": "Background color of the accordion"
      },
      {
        "name": "--ilw-accordion-panel--hover-color",
        "depreciated": false,
        "description": "Text color of the accordion when hovered or focused"
      },
      {
        "name": "--ilw-accordion-panel--hover-background",
        "depreciated": false,
        "description": "Background color of the accordion when hovered or focused"
      },
      {
        "name": "--ilw-accordion-panel--image-transform",
        "depreciated": false,
        "description": "Transform of the chevron when not expanded"
      },
      {
        "name": "--ilw-accordion-panel--image-transform-expand",
        "depreciated": false,
        "description": "Transform of the chevron when expanded"
      },
      {
        "name": "--ilw-accordion--margin",
        "depreciated": false,
        "description": "Margin of the main accordion"
      },
      {
        "name": "--ilw-accordion-panel--margin",
        "depreciated": false,
        "description": "Margin of the panel"
      },
      {
        "name": "--ilw-accordion-panel--padding",
        "depreciated": false,
        "description": "Padding of the panel content"
      },
      {
        "name": "--ilw-accordion-panel--border-left",
        "depreciated": false,
        "description": "Color of the left border of the panel"
      }
    ]
  }`
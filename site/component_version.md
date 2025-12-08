---
pagination:
  data: component-versions
  size: 1
  alias: component-version
permalink: component/{{ component-version.tag | slugify }}{% if component-version.builder-version %}/{{ component-version.builder-version | slugify }}{% else %}/{{ component-version.version | slugify }}{% endif %}/ 
layout: component.liquid

---
## Details

{{ component-version.description }}

Toolkit Permalink: http://builder3.toolkit.illinois.edu/component/{{ component-version.tag }}/toolkit/index.html

Full Version: {{ component-version.version }}

Type: {{ component-version.type }}

Date Created: {{ component-version.date }}

Version notes: {{ component-version.notes }}

Github repository: <a href="{{ component-version.github }}">{{ component-version.github }}</a>

Javascript file:  <a href="{{ component-version.js }}">{{ component-version.js }}</a>

CSS file: <a href="{{ component-version.css }}">{{ component-version.css }}</a>

JSON information: <a href="/imported_json/component_versions/{{ component-version.tag }}.{{ component-version.builder-version }}.json">{{ component-version.tag }}.{{ component-version.builder-version }}.json</a>

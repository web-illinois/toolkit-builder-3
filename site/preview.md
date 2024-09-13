---
pagination:
  data: component-versions
  size: 1
  alias: component-version
permalink: "preview/{{ component-version.tag | slugify }}/{{ component-version.version | slugify }}/"
layout: preview.liquid

---
## Details

{{ component-version.description }}

Full Version: {{ component-version.version }}

Type: {{ component-version.type }}

Date Created: {{ component-version.date }}

Version notes: {{ component-version.notes }}

Github repository: <a href="{{ component-version.github }}">{{ component-version.github }}</a>

Javascript file:  <a href="{{ component-version.js }}">{{ component-version.js }}</a>

CSS file: <a href="{{ component-version.css }}">{{ component-version.css }}</a>

JSON information: <a href="/imported_json/component_versions/{{ component-version.tag }}.{{ component-version.builder-version }}.json">{{ component-version.tag }}.{{ component-version.builder-version }}.json</a>

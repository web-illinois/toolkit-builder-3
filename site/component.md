---
pagination:
  data: components
  size: 1
  alias: component
permalink: "component/{{ component.tag | slugify }}/"
layout: component_detail.liquid
---
# {{ component.title }}

Type: {{ component.type }}

Description: {{ component.description }}

Github Link: {{ component.github }}
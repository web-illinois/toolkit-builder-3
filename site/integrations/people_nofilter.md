---
pagination:
  data: environments
  size: 1
  alias: environment
permalink: "integration/{{ environment.tag | slugify }}/people_nofilter.html"
title: Integration - People
layout: environment.liquid
---
<script src="/scripts/people_nofilter.js"></script>
<link rel="stylesheet" href="/stylesheets/people_nofilter.css"></link>
<div class="example">
<h2>People List example</h2>
<p><label for="code">Type in your resource code</label><input id="code" type="text"></p>
<p><button class="ilw-button" id="code-submit">Reload with People List</button></p>
</div>
<ilw-content id="ilw-people" aria-label="People"></ilw-content>
<ul>
    <li><a href="/scripts/people_nofilter.js">Script file used to build people list</a></li>
    <li><a href="/stylesheets/people_nofilter.css">Stylesheet file used to build people list</a></li>
</ul>


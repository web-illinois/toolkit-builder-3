---
pagination:
  data: environments
  size: 1
  alias: environment
permalink: "integration/{{ environment.tag | slugify }}/people_simple.html"
title: Integration - People
layout: environment.liquid
---
<script src="/scripts/people.js"></script>
<link rel="stylesheet" href="/stylesheets/people.css"></link>
<div class="example">
<h2>People List example</h2>
<p><label for="code">Type in your resource code</label><input id="code" type="text"></p>
<p><button class="ilw-button" id="code-submit">Reload with People List</button></p>
</div>
<div class="ilw-resource-grid">
    <ilw-filter toggle id="ilw-filter-parent">
        <h2 slot="heading">Filter by</h2>
        <ilw-filter-search hideLabel="true" label="Search" placeholder="Search by keyword" name="searchquery" query></ilw-filter-search>
    </ilw-filter>
    <div class="ilw-resource-summary">
        <ilw-content><h2 id="ilw-resource-header"></h2></ilw-content>
    </div>
    <ilw-content id="ilw-resource-results" aria-label="Resource Results"></ilw-content>
</div>
<ul>
    <li><a href="/scripts/people.js">Script file used to build resource list</a></li>
    <li><a href="/stylesheets/people.css">Stylesheet file used to build resource list</a></li>
</ul>


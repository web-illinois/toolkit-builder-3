---
pagination:
  data: environments
  size: 1
  alias: environment
permalink: "integration/{{ environment.tag | slugify }}/program_finder_simple.html"
title: Integration - Program Finder
layout: environment.liquid
---
<script src="/scripts/program_finder_simple.js"></script>
<link rel="stylesheet" href="/stylesheets/program_finder.css"></link>
<div class="example">
<h2>Program Finder example</h2>
<p><label for="code">Type in your program code</label><input id="code" type="text"></p>
<p><button class="ilw-button" id="code-submit">Reload with Program Finder</button></p>
</div>
<div class="ilw-programfinder-grid">
    <ilw-filter toggle register='["displaytype"]'>
    <h2 slot="heading">Filter by</h2>
        <ilw-filter-search hideLabel="true" label="Search" placeholder="Search by keyword" name="searchquery" query></ilw-filter-search>
        <ilw-filter-checkboxessimple id="ilw-filter-degree" label="Specific Degree" name="degree" allValues="Bachelor of Science[-]Undergraduate Minor[-]Master of Arts[-]Master of Science[-]Master of Education[-]Doctor of Philosophy[-]Doctor of Education[-]Graduate Certificate[-]Endorsement[-]Graduate Minor[-]Non-Degree Option" query compact></ilw-filter-checkboxessimple>
        <ilw-filter-checkboxessimple id="ilw-filter-format" label="Format" name="format" allValues="Online[-]On-Campus[-]Off-Campus[-]Hybrid" query compact></ilw-filter-checkboxessimple>
        <ilw-filter-checkboxessimple id="ilw-filter-interest" label="Interest Area" name="interest" query compact></ilw-filter-checkboxessimple>
        <ilw-filter-checkboxessimple id="ilw-filter-department" label="Department" name="department" query compact></ilw-filter-checkboxessimple>
    </ilw-filter>
    <div class="ilw-program-summary">
        <ilw-content><h2 id="ilw-program-header"></h2></ilw-content>
        <ilw-filter-dropdownsimple hideLabel="true" id="displaytype" label="Display Type" name="displaytype" allValues="Card View[-]Compact View" query></ilw-filter-dropdownsimple>
    </div>
    <ilw-content id="ilw-program-results" aria-label="Program Results"></ilw-content>
</div>



<ul>
    <li><a href="/scripts/program_finder.js">Script file used to build program finder</a></li>
    <li><a href="/stylesheets/program_finder.css">Stylesheet file used to build program finder</a></li>
</ul>


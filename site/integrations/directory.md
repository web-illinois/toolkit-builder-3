---
pagination:
  data: environments
  size: 1
  alias: environment
permalink: "integration/{{ environment.tag | slugify }}/directory.html"
title: Integration - Directory
layout: environment.liquid
---
<script src="/scripts/directory.js"></script>
<link rel="stylesheet" href="/stylesheets/directory.css"></link>
<div class="example">
<h2>Directory example</h2>
<p><label for="code">Type in your directory code</label><input id="code" type="text"></p>
<p><button class="ilw-button" id="code-submit">Reload with Directory Code</button></p>
</div>
<div class="ilw-directory-grid">
    <ilw-filter-search hideLabel="true" id="searchquery" label="Search" placeholder="Search by name or keyword" name="searchquery" query></ilw-filter-search>
    <div class="ilw-directory-gridoptions">
        <ilw-filter-dropdownsimple hideLabel="true" id="displaytype" label="Display Type" name="displaytype" allValues="View by Office[-]Profile View[-]List View" query></ilw-filter-dropdownsimple>
        <ilw-filter-dropdownsimple hideLabel="true" id="viewperpage" label="View Per Page" name="viewperpage" allValues="20 per page[-]50 per page[-]All people" query></ilw-filter-dropdownsimple>
    </div>
    <ilw-filter toggle register='["searchquery", "displaytype", "viewperpage"]'>
       <h2 slot="heading">Filter by</h2>
        <ilw-filter-checkboxessimple label="Academic Category" name="jobtypes" allValues="Faculty[-]Affiliate[-]Staff[-]Graduate Student[-]Emeritus" query compact></ilw-filter-checkboxessimple>
        <ilw-filter-checkboxessimple id="ilw-filter-academic" label="Departments" name="offices" query compact></ilw-filter-checkboxessimple>
        <ilw-filter-checkboxessimple id="ilw-filter-research" label="Research and Outreach Units" name="offices2" query compact></ilw-filter-checkboxessimple>
        <ilw-filter-checkboxessimple id="ilw-filter-admin" label="Administrative Units" name="offices3" query compact></ilw-filter-checkboxessimple>
    </ilw-filter>
    <section id="ilw-directory-results" aria-label="Directory Results"></section>
</div>

<ul>
    <li><a href="/scripts/directory.js">Script file used to build directory</a></li>
    <li><a href="/stylesheets/directory.css">Stylesheet file used to build directory</a></li>
</ul>


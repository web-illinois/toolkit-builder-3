---
pagination:
  data: environments
  size: 1
  alias: environment
permalink: "integration/{{ environment.tag | slugify }}/profile.html"
title: Integration - Profile
layout: environment.liquid
---
<script src="/scripts/profile.js"></script>
<link rel="stylesheet" href="/stylesheets/profile.css"></link>
<div class="example">
<h2>Profile example</h2>
<p><label for="code">Type in your directory code</label><input id="code" type="text"></p>
<p><label for="netid">Type in your Net ID</label><input id="netid" type="text"></p>
<p><button class="ilw-button" id="code-submit">Reload with Profile</button></p>
</div>
<div class="ilw-profile">
    <ilw-profile id="ilw-profile-parent">
        <h1 slot="name" id="ilw-profile-name"></h1> 
        <ilw-content slot="title" id="ilw-profile-title"></ilw-content>
        <img slot="image" src="" id="ilw-profile-image"> 
        <ilw-content slot="contact" id="ilw-profile-contact"> 
        </ilw-content> 
        <ilw-content slot="left" id="ilw-profile-left">
        </ilw-content> 
        <ilw-content id="ilw-profile-right"> 
        </ilw-content>
    </ilw-profile>
</div>

<ul>
    <li><a href="/scripts/profile.js">Script file used to build profile</a></li>
    <li><a href="/stylesheets/profile.css">Stylesheet file used to build profile</a></li>
</ul>


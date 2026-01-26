---
pagination:
  data: environments
  size: 1
  alias: environment
permalink: "integration/{{ environment.tag | slugify }}/index.html"
title: Integration
layout: environment.liquid
---

We are building a few integration pages to show how to build components that interact with each other or interact with various campus APIs. We encourage you to use your browser *Inspect Tools* or *View Source* to see how we have built these pages if you want to see how we did this. 

## Directory

* <a href="/integration/{{ environment.tag }}/directory_simple.html">Sample Simple Directory page</a>: This allows you to enter in your directory code from the <a href="https://directory.wigg.illinois.edu">IT Partners Directory Application</a> and see how your information would appear. To use this, you need to add your directory information into the back-end application.

* <a href="/integration/{{ environment.tag }}/directory.html">Sample Directory page</a>: This is like the simple directory, but shows how you can split out your offices into different filters.

* <a href="/integration/{{ environment.tag }}/profile.html">Sample Profile</a>: This allows you to enter in your directory code and NetID from the <a href="https://directory.wigg.illinois.edu">IT Partners Directory Application</a> and generates a profile page.


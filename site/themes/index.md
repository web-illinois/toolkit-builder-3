---
pagination:
  data: environments
  size: 1
  alias: environment
permalink: "themes/{{ environment.tag | slugify }}/index.html"
title: Theme Information
layout: themes.liquid
---
As of 2025, we have promoted the theme information as a first-class attribute no longer associated with a specific component. This will allow us to have a stnadardized list of themes and the colors will be specific to the theme, not the component. 

This screen grabs all the components associated with the theme class and changes them all to a specific theme color. 

<div>
    <label for="theme-changer">Selected theme</label>
    <select id="theme-changer" onchange="changeTheme()">
        <option value="">Default</option>
        <option value="white">White</option>
        <option value="blue">Blue</option>
        <option value="blue-gradient">Blue Gradient</option>
        <option value="orange">Orange</option>
        <option value="orange-gradient">Orange Gradient</option>
    </select>
</div>

<div>
    <label for="theme-class-changer">Selected class theme</label>
    <select id="theme-class-changer" onchange="changeClassTheme()">
        <option value="">Default</option>
        <option value="ilw-theme-white">White</option>
        <option value="ilw-theme-blue-outline">Blue</option>
        <option value="ilw-theme-blue-solid">Blue Solid</option>
        <option value="ilw-theme-blue-inverse">Blue Inverse</option>
        <option value="ilw-theme-orange-outline">Orange</option>
        <option value="ilw-theme-orange-solid">Orange Solid</option>
        <option value="ilw-theme-orange-inverse">Orange Inverse</option>
    </select>
</div>

<style>
ilw-content label {
    font: 400 1.125rem / 1.667rem var(--il-font-sans);
    margin: 1.2rem 1rem 1.2rem 0;
    display: inline-block;
}
ilw-content select {
  margin: 0;
  border-radius: 5px;
  padding: 10px;
  font: 1rem/1.125rem var(--il-font-sans);
  background-color: #fff;
  border: thin var(--il-blue) solid;
  width: 200px;
}
ilw-content select:focus, ilw-content select:focus-visible {
    background-color: var(--il-storm-lighter-4);
    outline: 3px solid var(--il-altgeld);
  }
ilw-content select:hover {
    background-color: var(--il-storm-lighter-4);
}
</style>

<script>
    function changeTheme() {
        let val = document.getElementById('theme-changer').value;
        document.querySelectorAll('.update').forEach(element => {
          element.setAttribute('theme', val);
        });
    }

    function changeClassTheme() {
        let val = document.getElementById('theme-class-changer').value;
        document.querySelectorAll('.update-class').forEach(element => {
          element.classList.forEach(c => { 
            if (c.startsWith('ilw-theme')) {
                element.classList.remove(c); 
            }
            if (val != '') {
                element.classList.add(val);
            }
        })});
    }
</script>
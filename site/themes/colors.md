---
permalink: "colors/production/index.html"
title: Color Information
layout: colors.liquid
---
As of 2025, we have promoted the theme information as a first-class attribute no longer associated with a specific component. This will allow us to have a stnadardized list of themes and the colors will be specific to the theme, not the component. This is a list of colors set for the Illinois Theme and the generic content theme class. 

<ul class="palette-list">
</ul>

<h2>Theme changer</h2>

The theme information is in the colors.css file in https://github.com/web-illinois/toolkit-management/blob/main/global-css/src/colors.css. Below is a quick way to see how themes work in small case. We also have a <a href="/themes/production/index.html">theme page</a> that lists all the themed components and allows you to view them all at once. 

<div style="margin-top: 1.5rem; margin-bottom: 1rem;">
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

.palette-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 0.5rem;
    align-items: center;
}

.palette-sample-row {
    background: #fff;
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
}

.palette-swatch {
    width: 120px;
    height: 48px;
    border-radius: 0.4rem;
    border: 2px solid #eee;
    box-shadow: 0 1px 4px #0001;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.1rem;
    font-weight: 600;
    color: #fff;
}
.palette-name {
    color: var(--il-storm-30);
    margin-top: 0.1rem;
    text-align: left;
}
</style>

<script>
    function changeTheme() {
        let val = document.getElementById('theme-changer').value;
        document.querySelectorAll('.update').forEach(element => {
          element.setAttribute('theme', val);
        });
    }

    document.addEventListener("DOMContentLoaded", (event) => {
        const illinoisPalette = [
            {name: '--il-orange', text: '#000'},
            {name: '--il-altgeld', text: '#fff'},
            {name: '--il-orange-40', text: '#fff'},
            {name: '--il-blue', text: '#fff'},
            {name: '--il-blue-30', text: '#fff'},
            {name: '--il-blue-50', text: '#fff'},
            {name: '--il-blue-70', text: '#000'},
            {name: '--il-blue-90', text: '#11181d'},
            {name: '--il-blue-15', text: '#fff'},
            {name: '--il-blue-10', text: '#fff'},
            {name: '--il-storm', text: '#fff'},
            {name: '--il-storm-60', text: '#000'},
            {name: '--il-storm-70', text: '#000'},
            {name: '--il-storm-80', text: '#11181d'},
            {name: '--il-storm-95', text: '#11181d'},
            {name: '--il-storm-30', text: '#fff'},
            {name: '--il-storm-10', text: '#fff'},
            {name: '--il-industrial',text: '#fff'},
            {name: '--il-arches', text: '#000'},
            {name: '--il-arches-70', text: '#000'},
            {name: '--il-arches-80', text: '#11181d'},
            {name: '--il-arches-90', text: '#11181d'},
            {name: '--il-arches-95', text: '#11181d'},
            {name: '--il-arches-50', text: '#fff'},
            {name: '--il-arches-60', text: '#fff'},
            {name: '--il-harvest', text: '#11181d'},
            {name: '--il-prairie', text: '#fff'},
            {name: '--il-patina', text: '#fff'},
            {name: '--il-berry', text: '#fff'},
            {name: '--il-earth', text: '#fff'}
        ];
    
        // Render Illinois Color Palette
        const paletteList = document.querySelector('.palette-list');
        paletteList.innerHTML = '';
        for (let color of illinoisPalette) {
            const row = document.createElement('li');
            row.className = 'palette-sample-row';
            row.innerHTML = `<div class="palette-swatch" style="background: var(${color.name}); color: ${color.text};">${color.name}</div>
            <div class="palette-name">${window.getComputedStyle(paletteList).getPropertyValue(color.name)}</div>
            `;
            paletteList.appendChild(row);
        }
    });

</script>
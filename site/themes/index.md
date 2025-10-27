---
title: Theme Information
layout: page_dev.liquid
---
As of 2025, we have promoted the theme information as a first-class attribute no longer associated with a specific component. This will allow us to have a stnadardized list of themes and the colors will be specific to the theme, not the component. 

This is using the development version of the toolkit, and will be promoted to production once the toolkit is deployed. 

<ilw-content padding="20px" class="update">
    <h2>Sample Heading For Color Groups</h2>
    <h3>
        <a href="#">Sample Link Heading</a>
    </h3>
    <p>This is some paragraph text. <a href="#">Sample link for link text</a>.</p>
    <button class="ilw-button" id="theme-demo-btn">Control Button</button>
</ilw-content>
<ilw-spacer></ilw-spacer>
<div style="max-width: 400px; margin: auto;">
<ilw-card class="update">
    <img src="https://picsum.photos/570/300" alt="" slot="image">
<h3>Student Life</h3>
<p>Animal sciences students extend their learning and career networks beyond the classroom through internships, judging teams, student organizations, undergraduate research projects with our faculty, as well as short- and long-term study abroad opportunities all over the world.</p>
<div slot="footer"><a href="#" class="ilw-button">Learn More <span class="ilw-sr-only">About Student Life</span></a></div>
</ilw-card>
</div>
<ilw-spacer></ilw-spacer>
<ilw-call-to-action class="update"><ilw-icon slot="icon" icon="faq-line"></ilw-icon>
<h2>Get started today</h2>
<p>Enroll in a class after you are admitted as a non-degree student. Enroll in a class after you are admitted as
a
non-degree student. Enroll in a class after you are admitted as a non-degree student.</p>
<ul class="ilw-buttons">
<li><a href="#">Register <span class="ilw-sr-only">for classes</span></a></li>
<li><a href="#">Contact us</a></li>
</ul>
</ilw-call-to-action>
<ilw-spacer></ilw-spacer>


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

<style>
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
</script>
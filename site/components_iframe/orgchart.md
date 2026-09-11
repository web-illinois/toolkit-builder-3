---
title: Org Chart Information
layout: components/base.liquid
permalink: "component/ilw-org-chart/custom/index.html"
scripturl: "//cdn.toolkit.illinois.edu/ilw-org-chart/1/ilw-org-chart.js"
stylesheeturl: "//cdn.toolkit.illinois.edu/ilw-org-chart/1/ilw-org-chart.css"
---
<script type="module">
    const urlParams = new URLSearchParams(window.location.search);

    const json = urlParams.get('json');
    const width = urlParams.get('width');
    const theme = urlParams.get('theme');
    const responsive = urlParams.get('responsive');
    const hidelines = urlParams.get('hidelines');

    let chart = document.getElementById("org-chart");
    if (json == '' || json == null) {
        chart.org = {
            title: "Vice Chancellor for Student Affairs",
            subtitle: "Interim",
            large: true,
            children: [
                {
                    title: "Administrative Assistant",
                    weight: -1,
                },
                {
                    title: "Director, Advancement",
                },
                {
                    title: "Director, Marketing and Communications",
                },
                {
                    title: "Associate Vice Chancellor for Student Success and Engagement",
                    weight: 1,
                    large: true,
                    children: [
                        {
                            title: "Sr. Assistant Dean, Fraternity and Sorority Affairs",
                        },
                        { title: "Director, Illinois Leadership Center" },
                        { title: "Director, Minority Student Affairs" },
                        {
                            title: "Sr. Assistant Dean, New/Transfer Student Programs",
                        },
                        { title: "Director, Testing Center" },
                        { title: "Director, The Career Center" },
                    ],
                },
                {
                    title: "Associate Vice Chancellor for Auxiliary, Health and Wellbeing",
                    weight: 1,
                    large: true,
                    children: [
                        { title: "Director, Counseling Center" },
                        { title: "Director, McKinley Health Center" },
                        { title: "Director, Parking*" },
                        {
                            title: "Director, Auxiliary Shared Technology Services",
                        },
                        { title: "Director, State Farm Center**" },
                        { title: "Director, University Housing" },
                        { title: "Director, Campus Recreation" },
                        { title: "Director, Illini Union" },
                    ],
                },
                {
                    title: "Associate Vice Chancellor/Dean of Students",
                    weight: 1,
                    large: true,
                    children: [
                        { title: "Director, Student Conflict Resolution" },
                        { title: "Director, Student Legal Services" },
                        {
                            title: "Director, Tenant Union and Campus and Community Student Services",
                        },
                    ],
                },
                {
                    title: "Associate Vice Chancellor for the Office of Inclusion and Intercultural Relations",
                    weight: 1,
                    large: true,
                    children: [
                        {
                            title: "Director, Asian American Cultural Center",
                        },
                        {
                            title: "Director, Bruce D. Nesbitt African American Cultural Center",
                        },
                        { title: "Director, La Casa Cultural Latina" },
                        {
                            title: "Director, Diversity and Social Justice Education",
                        },
                        { title: "Director, International Education" },
                        { title: "Director, LGBT Resource Center" },
                        { title: "Director, Native American House" },
                        { title: "Director, Women’s Resources Center" },
                    ],
                },
                {
                    title: "Senior Executive Director for Administrative Services",
                    weight: 1,
                    large: true,
                    children: [
                        { title: "Director, Assessment and Planning" },
                        { title: "Director, Budget and Finance" },
                        { title: "Director, Human Resources" },
                    ],
                },
            ],
        };
    } else {
        chart.org = JSON.parse(json);
        if (responsive) {
            chart.setAttribute('responsive', true);
            document.getElementById("responsive").value = 'true';
        } else if (width != null && width != '') {
            chart.setAttribute('width', width);
            document.getElementById("width").value = width;
        }
        if (hidelines) {
           chart.setAttribute('hidelines', true);
           document.getElementById("hidelines").value = 'true';
        }
        if (theme != null && theme != '') {
           chart.setAttribute('theme', theme);
           document.getElementById("theme").value = theme;
        }
    }
    document.getElementById("json").value = JSON.stringify(document.getElementById("org-chart").org, null, 2);

</script>
<script>
    function build() {
        const url = new URL(window.location.href);
        url.searchParams.set('json', document.getElementById("json").value);
        if (document.getElementById("responsive").value != '') {
            url.searchParams.set('responsive', document.getElementById("responsive").value);
        } else {
            url.searchParams.delete('responsive');
        }
        if (document.getElementById("width").value != '') {
            url.searchParams.set('width', document.getElementById("width").value);
        } else {
            url.searchParams.delete('width');
        }
        if (document.getElementById("hidelines").value != '') {
            url.searchParams.set('hidelines', document.getElementById("hidelines").value);
        } else {
            url.searchParams.delete('hidelines');
        }
        if (document.getElementById("theme").value != '') {
            url.searchParams.set('theme', document.getElementById("theme").value);
        } else {
            url.searchParams.delete('theme');
        }
        window.location.href = url.href;
    }
</script>
<p>The Organization Chart has a different structure than the typical component. This is because the org-chart has a JSON import function that allows you to generate the organization chart. </p><p>This is using the <strong>production</strong> version of the org chart.</p>
<div id="original" style="margin: 10px;" >
<ilw-org-chart id="org-chart"></ilw-org-chart>
</div>
<h2>JSON for Org Chart</h2>
<p><button id="loadJson" class="ilw-button" onclick="build();">Generate New Chart based on JSON below</button> </p>
<p>If you run into issues with the chart not generating, chances are the JSON is not formatted correctly. Go to a <a href="https://jsonlint.com/" target="_blank">JSON Validator (opens in a new window)</a> to see if the JSON is valid.</p>
<p>Issues should be logged at <a href="https://github.com/web-illinois/ilw-org-chart/issues">the WIGG Web Component GitHub repository</a> and these will automatically be added to the Toolkit 3.0 project.</p>
<div style="width: 400px;">
<p><label for="width">Width</label></p>
<input id="width" name="width"></input>
<p><label for="responsive">Use Responsive version?</label></p>
<select id="responsive" name="responsive">
    <option value=""></option> 
    <option value="true">True</option>
</select>
<p><label for="hidelines">Hide Lines?</label></p>
<select id="hidelines" name="hidelines">
    <option value=""></option> 
    <option value="true">True</option>
</select>
<p><label for="theme">Theme?</label></p>
<select id="theme" name="theme">
    <option value=""></option> 
    <option value="blue">Blue</option>
    <option value="gray">Gray</option>
    <option value="orange">Orange -- why are you choosing this?</option>
</select>
</div>
<p><label for="json">JSON Input Value</label></p>
<textarea style="width: 100%; height: 800px; font-family: monospace; font-size: 16px;" id="json">
</textarea>
<button class="ilw-button" onclick="build();">Build New Org Chart</button>

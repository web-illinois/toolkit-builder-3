---
pagination:
  data: environments
  size: 1
  alias: environment
permalink: "demo/{{ environment.tag | slugify }}/landing-page-pure.html"
title: Sample Landing Page
layout: demo/sample.liquid
classOptions: 'ilw-font'
localFiles: false
---

<ilw-hero width="page" theme="orange" align="bottom-left">
  <img src="/img/demo-landing/hero.jpg" alt="" slot="background">
  <h1>Whispering Pines College</h1>
</ilw-hero>
<ilw-call-to-action theme="blue" width="page">
<ilw-icon slot="icon" icon="gift"></ilw-icon>
<ilw-content mode="inset" style="--ilw-content--inset-padding: 0;">
<h2>Keep the Lanterns Burning</h2>
<p>Your gift sustains the singular life of Whispering Pines College—from midnight research in Moonroot Library to fieldwork beneath the ancient evergreens. With the generosity of alumni and friends, every student can follow curiosity beyond the familiar and discover where it may lead.</p>
</ilw-content>
<ul class="ilw-buttons">
<li><a href="#">Make a Gift</a></li>
</ul>
</ilw-call-to-action>
<ilw-spacer></ilw-spacer>
<ilw-content padding="20px" width="page">
<h2>
    At Whispering Pines College, rigorous scholarship meets the quiet wonder of the wild. Together, our community preserves a place where uncommon questions take root and remarkable futures begin.
</h2>
<p>
    We nurture lifelong bonds among students, graduates, faculty, and friends—relationships shaped by shared inquiry, rain-bright pathways, and traditions passed from one class to the next.
</p>
<p>
    We bring generations together, joining the college's living history with new ideas and new voices. Through mentorship, service, and discovery, our community carries the wisdom of the past into a future still waiting to be imagined.
</p>
<p>
    In partnership with the College Council, campus colleagues, and devoted supporters, we create opportunities to strengthen the programs, places, and experiences that make Whispering Pines unlike anywhere else.
</p>
<p>
    <strong>If you would like to help a student weather an unexpected hardship, please explore our </strong><a href="#" data-entity-type="node" data-entity-uuid="1240709d-0ee4-4a11-99c2-065091f6b653" data-entity-substitution="canonical"><strong>giving opportunities</strong></a><strong>.</strong>
</p>
</ilw-content>
<ilw-spacer height="40px"></ilw-spacer>
<ilw-columns theme="blue" padding="0">
    <div class="ilw-image-cover"><img src="/img/demo-landing/image-1.jpg" alt=""></div>
    <ilw-content theme="blue" mode="inset">
        <h2>Find Your Way Beyond the Familiar</h2>
        <p>Students at Whispering Pines College learn within a close-knit community that values many perspectives, tends to the whole person, and makes room for bold ambition. Generations of graduates have left these wooded hills changed by what they found here: enduring friendships, demanding questions, and the courage to choose an unexpected path. With your help, that tradition will keep growing.</p>
    </ilw-content>
</ilw-columns>
<ilw-spacer height="40px"></ilw-spacer>

<ilw-columns mode="1x2" width="page">
    <div><img src="/img/demo-landing/image-2.jpg" alt="Student in front of a block I"></div>

<ilw-content>
<h2>
    An Education Rooted in Wonder
</h2>
<p>
    Through <strong>transformative courses</strong>, <strong>attentive mentorship</strong>, <strong>storied spaces</strong>, and <strong>immersive living and learning</strong>, Whispering Pines turns curiosity into purpose. We honor the traditions that have long guided our college while continually finding new ways for every student to explore, create, and flourish.
</p>

</ilw-content>


</ilw-columns>

<ilw-columns mode="1x2" theme="gray" width="page">
    <div><img src="/img/demo-landing/image-3.jpg" alt="Student sitting at a desk in the library"></div>

<ilw-content theme="gray">
<h2>
    Preparing Stewards of What Comes Next
</h2>
<p>
    The world beyond the pines is changing. Our students are preparing to meet it with imagination, wisdom, and resolve. Together, we seek to:
</p>
<ul>
    <li>
        invite more voices and traditions into our community
    </li>
    <li>
        create inspiring spaces for study, gathering, and discovery
    </li>
    <li>
        serve our neighbors with generosity and purpose, and
    </li>
    <li>
        answer the emerging needs of students today and for generations to come.
    </li>
</ul>
<p>
    <strong>At Whispering Pines, students learn not merely to enter the future, but to illuminate it.</strong>
</p>
</ilw-content>


</ilw-columns>

<ilw-image-gallery>
<ilw-grid width="page" gap="25px" padding="0">
  <a data-gallery-item="" href="/img/demo-landing/whispering-pines-aerial-campus.png" data-gallery-alt="Aerial view of Whispering Pines College glowing at blue hour above a mist-filled evergreen valley beneath the northern lights.">
    <ilw-card aspectratio="16/10">
      <img src="/img/demo-landing/whispering-pines-aerial-campus.png" alt="" slot="image">
      <p>Aurora Crown — the college rises above the pines as evening settles over the valley.</p>
    </ilw-card>
  </a>

  <a data-gallery-item="" href="/img/demo-landing/whispering-gate.png" data-gallery-alt="An open Gothic stone gate framed by enormous moss-covered pine trees, leading toward the illuminated halls of Whispering Pines College.">
    <ilw-card aspectratio="16/10">
      <img src="/img/demo-landing/whispering-gate.png" alt="" slot="image">
      <p>The Whispering Gate — every journey into the college begins beneath its ancient arch.</p>
    </ilw-card>
  </a>

  <a data-gallery-item="" href="/img/demo-landing/moonroot-library.png" data-gallery-alt="The Gothic Moonroot Library at night, its amber windows shining beside ancient roots, moss, and rain-darkened flagstones.">
    <ilw-card aspectratio="16/10">
      <img src="/img/demo-landing/moonroot-library.png" alt="" slot="image">
      <p>Moonroot Library — old roots guard the college's most luminous collection.</p>
    </ilw-card>
  </a>

  <a data-gallery-item="" href="/img/demo-landing/starfall-observatory.png" data-gallery-alt="A copper-domed observatory on a rocky hill beneath a star-filled sky, with a magical constellation hovering over the distant campus.">
    <ilw-card aspectratio="16/10">
      <img src="/img/demo-landing/starfall-observatory.png" alt="" slot="image">
      <p>Starfall Observatory — scholars map constellations that appear nowhere else.</p>
    </ilw-card>
  </a>

  <a data-gallery-item="" href="/img/demo-landing/everglass-conservatory.png" data-gallery-alt="A grand Victorian glasshouse filled with luminous plants, surrounded by ferns, waterfalls, and misty pines at sunrise.">
    <ilw-card aspectratio="16/10">
      <img src="/img/demo-landing/everglass-conservatory.png" alt="" slot="image">
      <p>Everglass Conservatory — rare flora flourishes beneath its weathered copper ribs.</p>
    </ilw-card>
  </a>

  <a data-gallery-item="" href="/img/demo-landing/lantern-quad.png" data-gallery-alt="Students with umbrellas cross a rain-polished Gothic courtyard filled with glowing lanterns and vivid autumn trees.">
    <ilw-card aspectratio="16/10">
      <img src="/img/demo-landing/lantern-quad.png" alt="" slot="image">
      <p>Lantern Quad — autumn rain turns the heart of campus to gold.</p>
    </ilw-card>
  </a>

  <a data-gallery-item="" href="/img/demo-landing/pinewater-bridge.png" data-gallery-alt="A stone bridge spans a mirror-like mountain lake at sunrise while a lone rowboat crosses beneath the towers of Whispering Pines College.">
    <ilw-card aspectratio="16/10">
      <img src="/img/demo-landing/pinewater-bridge.png" alt="" slot="image">
      <p>Pinewater Bridge — morning mist reveals the quiet way across Blackglass Lake.</p>
    </ilw-card>
  </a>
</ilw-grid>
</ilw-image-gallery>
<ilw-spacer height="50px">
<ilw-call-to-action theme="blue-gradient" width="page" align="center">
<h2>Contact Whispering Pines College</h2>
<p>
    Office of College Advancement<br>
    1 Lantern Way<br>
    Moonroot Hall<br>
    Whispering Pines, IL 61820
</p>
<ul class="ilw-buttons">
<li><a href="mailto:no-reply@illinois.edu">Email us</a></li>
</ul>
</ilw-call-to-action>

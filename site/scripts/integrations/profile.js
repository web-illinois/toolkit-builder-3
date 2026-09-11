// start section where we are choosing the code

function save() {
    let url = new URL(window.location.href);
    const codeInput = document.getElementById('code');
    const netidInput = document.getElementById('netid');
    url.searchParams.set('code', codeInput.value);
    url.searchParams.set('netid', netidInput.value);
    window.location.href = url;
}

function getCode() {
    let searchParams = new URLSearchParams(window.location.search);
    let code = searchParams.get('code') || '';
    let netid = searchParams.get('netid') || '';
    if (code != '' && netid != '') {
        document.getElementsByClassName('ilw-profile')[0].style.display = 'grid';
        document.getElementsByClassName('example')[0].style.display = 'none';
    }
    return code + ';' + netid;
}

// end section where we are choosing the code and netid
// see note below about keyword search and topics

document.addEventListener('DOMContentLoaded', function() {
    const codeButton = document.getElementById('code-submit');
    codeButton.addEventListener('click', function() { save(); });
    let codes = getCode().split(';');
    if (codes.length != 2) { document.getElementsByClassName('ilw-profile')[0].style.display = 'none'; return; }
    fetch(`https://directoryapi.wigg.illinois.edu/api/Directory/GetProfile/${codes[0]}/${codes[1]}`, {
        method: 'GET',
        headers: {
            "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
        }
    }).then(res => res.json()).then(data => {
        let metaTag = document.createElement('link');
        metaTag.setAttribute('rel', 'canonical');
        metaTag.setAttribute('href', data.profileUrl);
        document.head.appendChild(metaTag);
        document.title = data.fullName + ' | Illinois';
        document.getElementById('ilw-profile-name').innerHTML = data.fullName;
        let pronouns = data.preferredPronouns == '' ? "" : " (" + data.preferredPronouns + ")";
        document.getElementById('ilw-profile-title').innerHTML = `<p><em><strong>${data.primaryTitle}</strong>, ${data.primaryOffice}</em>${pronouns}</p>`;
        document.getElementById('ilw-profile-image').src = data.imageUrl;
        document.getElementById('ilw-profile-image').alt = data.imageAltText;

        let left = document.getElementById('ilw-profile-left');
        appendLeft(left, 'email', data.email, `<a href="mailto:${data.email}">${data.email}</a>`);
        appendLeft(left, 'phone', data.phone, `<a href="tel:${data.phone}">${data.phoneFormatted}</a>`);

        let address = '';
        if (data.building != '' && data.roomNumber != '') {
            address = data.roomNumber + ' '  + data.building; 
        }
        if (data.addressLine1 != '') {
            address += address == '' ? data.addressLine1.trim() : '<br>' + data.addressLine1.trim();
            if (data.addressLine2 != '') {
                address += '<br>' + data.addressLine2;
            }
            address += `<br>${data.city}, ${data.state} ${data.zip}`;
        }
        appendLeft(left, 'location', address, address);
        appendLeft(left, 'hours', data.hours, data.hours);
        appendLeft(left, 'document', data.cvUrl, `<a href="${data.cvUrl}">Download CV</a>`);
        appendLeft(left, 'research', data.expertsUrl, `<a href="${data.expertsUrl}">Illinois Experts Link</a>`);
        appendLeft(left, 'linkedin', data.linkedInUrl, `<a href="${data.linkedInUrl}">LinkedIn Link</a>`);

        let alternateContactHtml = data.alternateContact;
        if (data.alternateEmail != '') {
            alternateContactHtml += `<br /><a href="mailto:${data.alternateEmail}">${data.alternateEmail}</a>`;
        }
        if (data.alternatePhone != '') {
            alternateContactHtml += `<br /><a href="tel:${data.alternatePhone}">${data.alternatePhoneFormatted}</a>`;
        }
        appendLeftWithHeader(left, 'Office Contact', data.alternateContact, alternateContactHtml);

        let knowsAboutMetatag = '';
        if (data.keywords.length > 0) {
            let containerTopics = '<div class="profile-topics">';
            knowsAboutMetatag = `"knowsAbout": [ 
            `;
            for (var i = 0; i < data.keywords.length; i++) {
            // *** NOTE -- point this to your directory with the proper keyword search ***
                containerTopics += `<a href='/directory?q=${data.keywords[i]}'>${data.keywords[i]}</a> `;
                knowsAboutMetatag += (i == 0 ? `"${data.keywords[i]}"` : `, "${data.keywords[i]}"`);
            }
            containerTopics += '</div>';
            knowsAboutMetatag += `
            ],`; 
            appendLeftWithHeader(left, 'Topics', containerTopics, containerTopics);
        }

        let right = document.getElementById('ilw-profile-right');
        let anyUsed = false;

        anyUsed = appendRight(right, data.biography, 'Biography', anyUsed);

        if (data.organizations.length > 0) {
            let heading = document.createElement('h2');
            heading.innerText = 'Key Professional Appointments';
            right.appendChild(heading);
            let container = document.createElement('ul');
            for (var i = 0; i < data.organizations.length; i++) {
                container.innerHTML += `<li>${data.organizations[i].title} ${data.organizations[i].institution == null || data.organizations[i].institution == '' ? '' : ', ' + data.organizations[i].institution}</li> `;
            }
            right.appendChild(container);
            anyUsed = true;
        }

        var educationHistoryArray = Array.from(data.educationHistory, (x) => `${x.title}, ${x.institution}`);
        anyUsed = appendRightAccordion(right, educationHistoryArray, 'Educational History', anyUsed);

        var awardsArray = Array.from(data.awards, (x) => `${x.title} ${x.year == '' ? '' : ','} ${x.year}`);
        anyUsed = appendRightAccordion(right, awardsArray, 'Awards', anyUsed);

        var linksArray = Array.from(data.links, (x) => `<a href="${x.url}">${x.title}</a>`);
        anyUsed = appendRightAccordion(right, linksArray, 'Links', anyUsed);

        anyUsed = appendRight(right, data.researchStatement, 'Resarch Statement', anyUsed);

        var grantsArray = Array.from(data.grants, (x) => x.url == '' ? x.title : `<a href="${x.url}">${x.title}</a>`);
        anyUsed = appendRightAccordion(right, grantsArray, 'Grants', anyUsed);

        var servicesArray = Array.from(data.services, (x) => x.url == '' ? x.title : `<a href="${x.url}">${x.title}</a>`);
        anyUsed = appendRightAccordion(right, servicesArray, 'Services', anyUsed);

        var publicationsArray = Array.from(data.publications, (x) => x.url == '' ? x.title : `<a href="${x.url}">${x.title}</a>`);
        anyUsed = appendRightAccordion(right, publicationsArray, 'Publications', anyUsed);

        var presentationsArray = Array.from(data.presentations, (x) => x.url == '' ? x.title : `<a href="${x.url}">${x.title}</a>`);
        anyUsed = appendRightAccordion(right, presentationsArray, 'Presentations', anyUsed);

        anyUsed = appendRight(right, data.teachingStatement, 'Teaching Statement', anyUsed);

        var coursesArray = Array.from(data.courses, (x) => x.url == '' ? `${x.title}: ${x.description}` : `<a href="${x.url}">${x.title}</a>: ${x.description}`);
        anyUsed = appendRightAccordion(right, coursesArray, 'Courses', anyUsed);

        if (!anyUsed) {
            var parent = document.getElementById('ilw-profile-parent');
            parent.setAttribute('right', true);
        }

        let profileMetaTag = document.createElement('script');
        profileMetaTag.setAttribute('type', 'application/ld+json');
        profileMetaTag.innerHTML = `{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "${data.profileUrl}",
      "name": "${data.fullName}",
      "jobTitle": "${data.primaryTitle}",
      "worksFor": { "@id": "https://illinois.edu/#org" },
      "email": "${data.email}",
      "telephone": "${data.phoneFormatted}",
      "url": "${data.profileUrl}",
      ${knowsAboutMetatag}
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "${data.profileUrl}"
      }
    },
    {
      "@type": "CollegeOrUniversity",
      "@id": "https://illinois.edu/#org",
      "name": "University of Illinois Urbana-Champaign",
      "url": "https://illinois.edu/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://cdn.brand.illinois.edu/icon.svg"
      }
    }
  ]
}`;
        document.head.appendChild(profileMetaTag);
    });
});

function appendLeft(left, iconName, text, html) {
    if (text != ''  && html != '') {
        let div = document.createElement('div');
        div.className = 'ilw-profile--icon';
        if (iconName != '') {
            let icon = document.createElement('ilw-icon');
            icon.setAttribute('icon', iconName);
            div.appendChild(icon);
        } else {
            div.appendChild(document.createElement('div'));
        }
        let p = document.createElement('p');
        p.innerHTML = html;
        div.appendChild(p);
        left.appendChild(div);
    }
}

function appendLeftWithHeader(left, heading, text, html) {
    if (text != ''  && html != '') {
        let h2 = document.createElement('h2');
        h2.innerHTML = heading; 
        let p = document.createElement('p');
        p.innerHTML = html;
        left.appendChild(h2);
        left.appendChild(p);
    }
}

function appendRight(right, text, heading, anyUsed) {
    if (text != '') {
        let h2 = document.createElement('h2');
        h2.innerHTML = heading; 
        let p = document.createElement('p');
        p.innerHTML = text;
        right.appendChild(h2);
        right.appendChild(p);
        return true;
    } else {
        return anyUsed;
    }
}

function appendRightAccordion(right, textArray, heading, anyUsed) {
    if (textArray.length != 0) {
        let accordion = document.createElement('ilw-accordion');
        let accordionpanel = document.createElement('ilw-accordion-panel');
        let h2 = document.createElement('h2');
        h2.innerHTML = heading; 
        h2.setAttribute('slot', 'summary');
        accordionpanel.appendChild(h2);
        let ul = document.createElement('ul');
        textArray.forEach(item => {
            let li = document.createElement('li');
            li.innerHTML = item;
            ul.appendChild(li);
        });
        accordionpanel.appendChild(ul);
        accordion.appendChild(accordionpanel);
        right.appendChild(accordion);
        return true;
    } else {
        return anyUsed;
    }
}
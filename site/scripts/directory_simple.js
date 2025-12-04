// start section where we are choosing the code

    function save() {
        let url = new URL(window.location.href);
        const codeInput = document.getElementById('code');
        url.searchParams.set('code', codeInput.value);
        window.location.href = url;
    }

    function getCode() {
        let searchParams = new URLSearchParams(window.location.search);
        let code = searchParams.get('code') || '';
        if (code != '') {
            document.getElementsByClassName('ilw-directory-grid')[0].style.display = 'grid';
            document.getElementsByClassName('example')[0].style.display = 'none';
        }
        return code;
    }

// end section where we are choosing the code

     document.addEventListener('DOMContentLoaded', function() {
        const codeButton = document.getElementById('code-submit');
        codeButton.addEventListener('click', function() { save(); });
        let code = getCode();
        if (code == '') { document.getElementsByClassName('ilw-directory-grid')[0].style.display = 'none'; return; }
        const filter = document.querySelector('ilw-filter');
        filter.addEventListener('autosubmit', function(e) { search(e); });
        fetch(`https://directoryapi.wigg.illinois.edu/Api/Area/Code/${code}`, {
            method: 'GET',
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
            }
        }).then(res => res.json()).then(data => {
            var filterAcademic = [];
            var filterAdmin = [];
            var filterAcademicHigh = [];
            var filterAdminHigh = [];
            for (var i = 0; i < data.offices.length; i++) {
                if (data.offices[i].officeType == 'Academic') {
                    if (data.offices[i].priority == 1) {
                        filterAcademicHigh.push(data.offices[i].title);
                    } else {
                        filterAcademic.push(data.offices[i].title);
                    }
                } else if (data.offices[i].officeType != 'Other' &&  !data.offices[i].officeType.startsWith("Custom")) {
                    if (data.offices[i].priority == 1) {
                        filterAdminHigh.push(data.offices[i].title);
                    } else {
                        filterAdmin.push(data.offices[i].title);
                    }
                }
            }
            document.getElementById('ilw-filter-academic').setAttribute('allvalues', filterAcademicHigh.concat(filterAcademic.sort()).join('[-]'));
            document.getElementById('ilw-filter-admin').setAttribute('allvalues', filterAdminHigh.concat(filterAdmin.sort()).join('[-]'));
        });
        filter.autosubmitListener();
    });

    function remove(category, item) {
        if (category == 'searchquery') {
            let filter = document.querySelector('ilw-filter');
            let filterJson = JSON.parse(filter.getAttribute('filters'));
            filterJson.searchquery = '';
            filter.setAttribute('filters', JSON.stringify(filterJson));
            document.getElementById('searchquery').value = '';
            search(filter); 
        } else {
            let filter = document.querySelector('ilw-filter');
            let filterJson = JSON.parse(filter.getAttribute('filters'));
            if (category == 'jobtypes') {
                filterJson.jobtypes = filterJson.jobtypes.split('[-]').filter((i) => i != item).join('[-]')
            }
            if (category == 'offices') {
                filterJson.offices = filterJson.offices.split('[-]').filter((i) => i != item).join('[-]')
            }
            if (category == 'offices3') {
                filterJson.offices3 = filterJson.offices3.split('[-]').filter((i) => i != item).join('[-]')
            }
            filter.setAttribute('filters', JSON.stringify(filterJson));
            search(filter); 
        }
    }

    function search(e) {
        let code = getCode();
        if (code == '') { return; }
        let displaytype = '';
        let searchquery = '';
        if (e != null && e.detail != null) {
            displaytype = e.detail.values.displaytype;
            searchquery = e.detail.values.searchquery ?? '';
        } else if (e != null) {
            filterJson = JSON.parse(e.getAttribute('filters'));
            displaytype = filterJson.displaytype;
            searchquery = filterJson.searchquery;
        }
        var displaytypeDropdown = document.getElementById('displaytype');
        var viewperpageDropdown = document.getElementById('viewperpage');
        if (searchquery != '') {
            displaytypeDropdown.style.visibility = 'hidden';
            viewperpageDropdown.style.visibility = 'hidden';
            document.getElementById('displaytype').value = 'Profile View';
        } else if (!(displaytype == 'Profile View' || displaytype == 'List View')) {
            displaytypeDropdown.style.visibility = '';
            viewperpageDropdown.style.visibility = 'hidden';
        } else {
            displaytypeDropdown.style.visibility = '';
            viewperpageDropdown.style.visibility = '';
        }
        if (searchquery != '' || displaytype == 'Profile View' || displaytype == 'List View') {
            var searchParams = new URLSearchParams(window.location.search);
            searchByName(e, displaytype, code, searchParams.get('offices4'));
        } else {
            searchByOffice(e, code);
        }
    }

    function searchByName(e, displaytype, code, offices4) {
        let jobTypes = '';
        let offices = '';
        let searchQuery = '';
        let take = 18;
        let skip = 0;
        let pageNumber = 1;
        let jsonFilters = e != null && e.detail != null ? e.detail.values : e != null ? JSON.parse(e.getAttribute('filters')) : null;
        if (jsonFilters != null) {
            jobTypes = encodeURIComponent(jsonFilters.jobtypes ?? '');
            offices = encodeURIComponent(offices4 ?? '');
            searchQuery = encodeURIComponent(jsonFilters.searchquery ?? '');
            if (jsonFilters.offices != '') {
                offices = offices != '' ? offices + encodeURIComponent('[-]') + encodeURIComponent(jsonFilters.offices ?? '') : encodeURIComponent(jsonFilters.offices ?? '');
            }
            if (jsonFilters.offices3 != '') {
                offices = offices != '' ? offices + encodeURIComponent('[-]') + encodeURIComponent(jsonFilters.offices3 ?? '') : encodeURIComponent(jsonFilters.offices3 ?? '');
            }
            take = (jsonFilters.viewperpage == 'All people' || searchQuery != '') ? 9999 : jsonFilters.viewperpage == '50 per page' ? 50 : 20; 
            const searchParams = new URLSearchParams(window.location.search);
            pageNumber = parseInt(searchParams.get("page")); 
            if (isNaN(pageNumber) || take == 9999) {
                pageNumber = 1;
            } else {
                skip = (pageNumber - 1) * take;
            }
        }
        if (jobTypes == 'Graduate%20Student') {
            offices = offices.replace('Educational%20Psychology', 'Educational Psychology[-]Quantitative and Qualitative Methodology, Measurement, and Evaluation (Queries)[-]Counseling Psychology[-]Cognitive Science of Teaching and Learning (CSTL)[-]Developmental Sciences[-]Mental Health Counseling');
        }
        jobTypes = jobTypes.replace('Graduate%20Student', 'graduate_student').replace('Affiliate', 'affiliate_faculty');
        var url = `https://directoryapi.wigg.illinois.edu/api/Directory/Search/${code}?q=${searchQuery}&offices=${offices}&jobtypes=${jobTypes}&skip=${skip}&take=${take}`;
        fetch(url, {
            method: 'GET',
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
            }
        }).then(res => res.json()).then(data => {
            var profileResults = document.getElementById('ilw-directory-results');
            clearAndAddFilters(profileResults, jsonFilters, offices4);
            if (displaytype == 'List View' && searchQuery == '') 
                createList(profileResults, data.people, data.count, take, pageNumber);
            else
                createGrid(profileResults, data.people, data.count, take, pageNumber);
        });
    }

    function createList(profileResults, people, count, take, pageNumber) {
        var content = document.createElement('ilw-content');
        var table = document.createElement('table');
        let caption = document.createElement('caption');
        caption.innerText = take < count ? `Directory: Showing ${people.length} of ${count} people` : `Directory: Showing ${count} people`;
        table.appendChild(caption);
        let trHead = document.createElement('tr');
        trHead.innerHTML = `<th>Name</th><th>Title</th><th>Email</th><th>Phone Number</tH>`;
        table.appendChild(trHead);

        for (var i = 0; i < people.length; i++) {
            let tr = document.createElement('tr');
            tr.innerHTML = `<td>${people[i].fullNameReversed}</td><td>${people[i].primaryTitle}</td>`;
            tr.innerHTML += people[i].email == '' ? `<td>&nbsp;</td>` : `<td><a href="mailto:${people[i].email}">${people[i].email}</a></td>`;
            tr.innerHTML += people[i].phone == '' ? `<td>&nbsp;</td>` : `<td><a href="tel:${people[i].phone}">${people[i].phoneFormatted}</a></td>`;
            table.appendChild(tr);
        }
        content.appendChild(table);
        profileResults.appendChild(content);
        addPagination(profileResults, count, take, pageNumber);
    }

    function createGrid(profileResults, people, count, take, pageNumber) {
        let peopleTitle = document.createElement('ilw-content');
        peopleTitle.innerHTML = take < count ? `<h2>Showing ${people.length} of ${count} people</h2>` : `<h2>Showing ${count} people</h2>`;
        profileResults.appendChild(peopleTitle);

        var ul = document.createElement('ul');
        for (var i = 0; i < people.length; i++) {
            let li = document.createElement('li');
            li.innerHTML = `<ilw-profile-list circle="circle"><img slot="image" src="${people[i].imageUrl}" alt=""><a href="${people[i].profileUrl}" slot="name">${people[i].fullNameReversed}</a><div slot="subtitle">${people[i].primaryTitle}<br />${people[i].primaryOffice}</div><div><a href="mailto:${people[i].email}">${people[i].email}</a> ${people[i].phone == '' ? '' : `| <a href="tel:${people[i].phone}">${people[i].phoneFormatted}</a>`}</div>
</ilw-profile-list>`;
            ul.appendChild(li);
        }
        profileResults.appendChild(ul);
        addPagination(profileResults, count, take, pageNumber);
    }

    function addPagination(profileResults, count, take, pageNumber) {
        if (take < count) {
            var pagination = document.createElement('ilw-pagination');
            pagination.setAttribute('pages', Math.ceil(count/take));
            pagination.setAttribute('page', pageNumber);
            profileResults.appendChild(pagination);
        }
    }

    function searchByOffice(e, code) {
        let jobTypes = '';
        let offices = '';
        let jsonFilters = e != null && e.detail != null ? e.detail.values : e != null ? JSON.parse(e.getAttribute('filters')) : null;
        if (jsonFilters != null) {
            jobTypes = encodeURIComponent(jsonFilters.jobtypes ?? '');
            offices = encodeURIComponent(jsonFilters.offices ?? '');
            offices = offices != '' ? offices + '[-]' + encodeURIComponent(jsonFilters.offices3 ?? '') : encodeURIComponent(jsonFilters.offices3 ?? '');
        }
        jobTypes = jobTypes.replace('Graduate%20Student', 'graduate_student').replace('Affiliate', 'affiliate_faculty');
        var url = `https://directoryapi.wigg.illinois.edu/api/Directory/GetFull/${code}?offices=${offices}&jobtypes=${jobTypes}`;
        fetch(url, {
            method: 'GET',
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
            }
        }).then(res => res.json()).then(data => {
            var profileResults = document.getElementById('ilw-directory-results');
            clearAndAddFilters(profileResults, jsonFilters, '');
            createDirectory(data.office, profileResults);
        });
    }

    function clearAndAddFilters(profileResults, jsonFilters, offices4) {
        profileResults.innerHTML = '';
        if (jsonFilters != null) {
            let filterDiv = document.createElement('div');
            filterDiv.className = 'ilw-filters';
            if (jsonFilters.searchquery && jsonFilters.searchquery != '') {
                let filterSpan = document.createElement('button');
                filterSpan.innerText = 'search "' + jsonFilters.searchquery + '"';
                filterSpan.setAttribute('onclick', `remove("searchquery", "searchquery")`);
                filterDiv.appendChild(filterSpan);
				
            }
            addFilter(filterDiv, 'jobtypes', jsonFilters.jobtypes);
            addFilter(filterDiv, 'offices', jsonFilters.offices);
            addFilter(filterDiv, 'offices3', jsonFilters.offices3);
            addFilter(filterDiv, 'offices4', offices4);
            profileResults.appendChild(filterDiv);
        }
    }

    function addFilter(filterDiv, category, filterString) {
        if (filterString) {
            if (category == 'offices4') {
                let filterSpan = document.createElement('button');
                filterSpan.innerText = filterString;
                filterSpan.setAttribute('onclick', `remove("${category}", "${filterString}")`);
                filterDiv.appendChild(filterSpan);
            } else {
                let filterArray = filterString.split('[-]');
                let filterInformation = document.querySelector('ilw-filter-checkboxessimple[name="' + category + '"]');
                let allValues = filterInformation.getAttribute('allvalues');
                for (var i = 0; i < filterArray.length; i++) {
                    if (filterArray[i] != '' && allValues.indexOf(filterArray[i]) >= 0) {
                        let filterSpan = document.createElement('button');
                        filterSpan.innerText = filterArray[i];
                        filterSpan.setAttribute('onclick', `remove("${category}", "${filterArray[i]}")`);
                        filterDiv.appendChild(filterSpan);
                    }
                }
            }
        }
    }

    function createDirectory(offices, profileResults) {
        let accordion = document.createElement('ilw-accordion');
        accordion.setAttribute('buttons', 'true');
        accordion.setAttribute('accent', 'orange');

        let academic = document.createElement('div');
        let academicTitle = document.createElement('ilw-content');
        academicTitle.innerHTML = '<h2>Academic Departments</h2>';
        academic.appendChild(academicTitle);

        let administration = document.createElement('div');
        let administrationTitle = document.createElement('ilw-content');
        administrationTitle.innerHTML = '<h2>Administration</h2>';
        administration.appendChild(administrationTitle);

        for (var i = 0; i < offices.length; i++) {
            var panel = document.createElement('ilw-accordion-panel');
            if (offices.length == 1) 
                panel.setAttribute('open', true);
            let h3Office = document.createElement('h3');
            h3Office.innerHTML = offices[i].title;
            h3Office.setAttribute('slot', 'summary');
            panel.appendChild(h3Office);

            let div = document.createElement('ilw-content');
            let divDescription = document.createElement('p');
            let divTitle = document.createElement('p');
            let divOffice = document.createElement('p');
            let divAddress = document.createElement('p');
            let divHours = document.createElement('p');
            let divEmail = document.createElement('p');
            let divPhone = document.createElement('p');

            if (offices[i].description != null && offices[i].description != '')
                divDescription.innerHTML = `${offices[i].description}`;
            divDescription.className = 'ilw-directory-office-description';

            divTitle.innerHTML = offices[i].title;
            divTitle.className = 'ilw-directory-office-title';
            if (offices[i].map != null && offices[i].map != '')
                divOffice.innerHTML = `<a href='${offices[i].map}'>${offices[i].room} ${offices[i].building}</a>`;
            else if (offices[i].room != null && offices[i].room != '' && offices[i].building != null && offices[i].building != '')
                divOffice.innerHTML = `${offices[i].room} ${offices[i].building}`;
            divAddress.innerHTML = offices[i].address;
            divHours.innerHTML = offices[i].hoursText;
            if (offices[i].email != null && offices[i].email != '') {
                divEmail.innerHTML = `<a href='mailto:${offices[i].email}'>${offices[i].email}</a> `;
            }
            if (offices[i].phone != null && offices[i].phone != '') {
                divPhone.innerHTML = ` <a href='tel:${offices[i].phone}'>${offices[i].phone}</a>`;
            }
            if (divDescription.innerHTML != '')
                div.appendChild(divDescription);
            div.appendChild(divTitle);
            if (divOffice.innerHTML != '')
                div.appendChild(divOffice);
            if (divAddress.innerHTML != '')
                div.appendChild(divAddress);
            if (divHours.innerHTML != '')
                div.appendChild(divHours);
            if (divEmail.innerHTML != '')
                div.appendChild(divEmail);
            if (divPhone.innerHTML != '')
                div.appendChild(divPhone);
            panel.appendChild(div);

            var ul = document.createElement('ul');
            for (var j = 0; j < offices[i].people.length; j++) {
                let li = document.createElement('li');
                li.innerHTML = `<ilw-profile-list circle="circle"><img slot="image" src="${offices[i].people[j].imageUrl}" alt=""><a href="${offices[i].people[j].profileUrl}" slot="name">${offices[i].people[j].fullNameReversed}</a><div slot="subtitle">${offices[i].people[j].primaryTitle}</div><div><a href="mailto:${offices[i].people[j].email}">${offices[i].people[j].email}</a> ${offices[i].people[j].phone == '' ? '' : `| <a href="tel:${offices[i].people[j].phone}">${offices[i].people[j].phoneFormatted}</a>`}</div>
</ilw-profile-list>`;
                ul.appendChild(li);
            }
            panel.appendChild(ul);

            if (offices[i].officeType == 'Academic' && offices[i].internalOrder <= 3) 
                academic.appendChild(panel);
            else if (!(offices[i].officeType == 'Other' || offices[i].officeType.startsWith("Custom")))
                administration.appendChild(panel);
        }
        if (academic.children.length > 1) {
            accordion.appendChild(academic);
        }
        if (administration.children.length > 1) {
            accordion.appendChild(administration);
        }
        profileResults.appendChild(accordion);
    }

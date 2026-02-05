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
            document.getElementsByClassName('ilw-programfinder-grid')[0].style.display = 'grid';
            document.getElementsByClassName('example')[0].style.display = 'none';
        }
        return code;
    }

// end section where we are choosing the code

document.addEventListener('DOMContentLoaded', function() {
    const codeButton = document.getElementById('code-submit');
    codeButton.addEventListener('click', function() { save(); });
    let code = getCode();
    if (code == '') { document.getElementsByClassName('ilw-programfinder-grid')[0].style.display = 'none'; return; }
    const filter = document.querySelector('ilw-filter');
    filter.addEventListener('autosubmit', function(e) { search(e); });
    fetch(`https://courseapi.wigg.illinois.edu/api/Tags?source=${code}`, {
        method: 'GET',
        headers: {
            "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
        }
    }).then(res => res.json()).then(data => {
        data.forEach(i => {
            if (i.Title == "Skill") {
                const grades = i.List.filter((item) => item.indexOf('Grade') > -1);
                const interests = i.List.filter((item) => item.indexOf('Grade') == -1);
                document.getElementById('ilw-filter-gradeband').setAttribute('allvalues', grades.join('[-]'));
                document.getElementById('ilw-filter-interest').setAttribute('allvalues', interests.join('[-]'));
            }
            else if (i.Title == "Department") {
                document.getElementById('ilw-filter-department').setAttribute('allvalues', i.List.join('[-]'));
            }
        });
    });
    filter.autosubmitListener();
});

function remove(category, item) {
    let filter = document.querySelector('ilw-filter');
    let filterJson = JSON.parse(filter.getAttribute('filters'));

    if (category == 'searchquery') {
        filterJson.searchquery = '';
    } 
    if (category == 'credential') {
        filterJson.credential = filterJson.credential.split('[-]').filter((i) => i != item).join('[-]')
    }
    if (category == 'degree') {
        filterJson.degree = filterJson.degree.split('[-]').filter((i) => i != item).join('[-]');
    }
    if (category == 'gradeband') {
        filterJson.gradeband = filterJson.gradeband.split('[-]').filter((i) => i != item).join('[-]');
    }
    if (category == 'department') {
        filterJson.department = filterJson.department.split('[-]').filter((i) => i != item).join('[-]')
    }
    if (category == 'format') {
        filterJson.format = filterJson.format.split('[-]').filter((i) => i != item).join('[-]')
    }
    if (category == 'interest') {
        filterJson.interest = filterJson.interest.split('[-]').filter((i) => i != item).join('[-]')
    }
    filter.setAttribute('filters', JSON.stringify(filterJson));
    search(filter); 
}

function addQuerystring(querystring, text) {
    return querystring != '' ? querystring + encodeURIComponent('[-]') + encodeURIComponent(text) : encodeURIComponent(text);
}

function search(e) {
    let code = getCode();
    if (code == '') { return; }
    let searchQuery = '';
    let displayType = '';
    let credentials = '';
    let department = '';
    let format = '';
    let skills = '';
    let jsonFilters = e != null && e.detail != null ? e.detail.values : e != null ? JSON.parse(e.getAttribute('filters')) : null;
    if (jsonFilters != null) {
        searchQuery = encodeURIComponent(jsonFilters.searchquery ?? '');
        displayType = jsonFilters.displaytype ?? '';
        if (jsonFilters.degree && jsonFilters.degree != '') {
            if (jsonFilters.credential && jsonFilters.credential != '') {
                credentials = addQuerystring(credentials, 'xxxxx');
            } else {
                if (jsonFilters.degree.includes('Bachelor of Science')) {
                    credentials = addQuerystring(credentials, 'BS');
                }
                if (jsonFilters.degree.includes('Undergraduate Minor')) {
                    credentials = addQuerystring(credentials, 'Undergrad Minor');
                }
                if (jsonFilters.degree.includes('Master of Arts')) {
                    credentials = addQuerystring(credentials, 'MA');
                }
                if (jsonFilters.degree.includes('Master of Science')) {
                    credentials = addQuerystring(credentials, 'MS');
                }
                if (jsonFilters.degree.includes('Master of Education')) {
                    credentials = addQuerystring(credentials, 'EdM');
                }
                if (jsonFilters.degree.includes('Doctor of Philosophy')) {
                    credentials = addQuerystring(credentials, 'PhD');
                }
                if (jsonFilters.degree.includes('Doctor of Education')) {
                    credentials = addQuerystring(credentials, 'EdD');
                }
                if (jsonFilters.degree.includes('Graduate Certificate')) {
                    credentials = addQuerystring(credentials, 'Graduate Certificate');
                }
                if (jsonFilters.degree.includes('Endorsement')) {
                    credentials = addQuerystring(credentials, 'Endorsement');
                }
                if (jsonFilters.degree.includes('Graduate Minor')) {
                    credentials = addQuerystring(credentials, 'Graduate Minor');
                }
                if (jsonFilters.degree.includes('Non-Degree Option')) {
                    credentials = addQuerystring(credentials, 'Specialty[-]MOOC Specialization Certificate');
                }
            }
        }
        else if (jsonFilters.credential && jsonFilters.credential != '') {
            if (jsonFilters.credential.includes('(and Minor)')) {
                credentials = addQuerystring(credentials, 'BS[-]Undergrad Minor');
            }
            if (jsonFilters.credential.includes('Undergrad Certificate')) {
                credentials = addQuerystring(credentials, 'Undergrad Certificate');
            }
            if (jsonFilters.credential.includes('Master')) {
                credentials = addQuerystring(credentials, 'EdM[-]MS[-]MA[-]Graduate Minor');
            }
            if (jsonFilters.credential.includes('Doctorate')) {
                credentials = addQuerystring(credentials, 'EdD[-]PhD[-]Graduate Minor');
            }
            if (jsonFilters.credential.includes('Graduate Certificate')) {
                credentials = addQuerystring(credentials, 'Certificate of Specialization[-]Illinois Graduate Certificate[-]Graduate Certificate');
            }
            if (jsonFilters.credential.includes('Non-Degree Option')) {
                credentials = addQuerystring(credentials, 'Specialty[-]Endorsement[-]MOOC Specialization Certificate');
            }
        }
        if (jsonFilters.department && jsonFilters.department != '') {
            department = encodeURIComponent(jsonFilters.department);
        }
        if (jsonFilters.format && jsonFilters.format != '') {
            format = encodeURIComponent(jsonFilters.format);
        }
        if (jsonFilters.interest && jsonFilters.interest != '') {
            skills = encodeURIComponent(jsonFilters.interest);
        }
        if (jsonFilters.gradeband && jsonFilters.gradeband != '') {
            skills = skills == '' ? encodeURIComponent(jsonFilters.gradeband) : skills + encodeURIComponent('[-]') + encodeURIComponent(jsonFilters.gradeband);
        }
    }

    var url = `https://courseapi.wigg.illinois.edu/api/ProgramSearch?source=${code}&q=${searchQuery}&credentials=${credentials}&departments=${department}&formats=${format}&skills=${skills}&skip=0&take=999`;
    fetch(url, {
        method: 'GET',
        headers: {
            "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
        }
    }).then(res => res.json()).then(data => {
        var parentNode = document.getElementById('ilw-program-results');
        if (parentNode != '') {
            clearAndAddFilters(parentNode, jsonFilters);
            console.log(displayType);
            if (displayType == 'Compact View') {
                createCompactView(parentNode, data.Items, data.Total);
            } else {
                createCardView(parentNode, data.Items, data.Total);
            }
        }
    });
}

function clearAndAddFilters(profileResults, jsonFilters) {
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
        addFilter(filterDiv, 'credential', jsonFilters.credential, 'checkboxessimple');
        addFilter(filterDiv, 'degree', jsonFilters.degree, 'checkboxessimple');
        addFilter(filterDiv, 'department', jsonFilters.department, 'checkboxessimple');
        addFilter(filterDiv, 'format', jsonFilters.format, 'checkboxessimple');
        addFilter(filterDiv, 'interest', jsonFilters.interest, 'checkboxessimple');
        addFilter(filterDiv, 'licensure', jsonFilters.licensure, 'checkboxessimple');
        profileResults.appendChild(filterDiv);
    }
}

function addFilter(filterDiv, category, filterString, queryType) {
    if (filterString) {
        let filterArray = filterString.split('[-]');
        let filterInformation = document.querySelector('ilw-filter-' + queryType + '[name="' + category + '"]');
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

function createDepartment(departmentList) {
    return departmentList.join(", ");
}

function appendCredentialList(text, degree, degreeMatch, description) {
    return degree != degreeMatch || text.includes(description) ? text :
    (text == '' ? description : text + '/' + description);
}

function createCredentialList(onlineList, onCampusList, hybridList) {
    let undergrad = '';
    let masters = '';
    let doctorate = '';
    let certificate = '';
    let nondegree = '';
    let returnValue = '';
    onlineList.forEach(element => {
        undergrad = appendCredentialList(undergrad, element, 'BS', 'Online');
        undergrad = appendCredentialList(undergrad, element, 'Undergrad Minor', 'Online');
        undergrad = appendCredentialList(undergrad, element, 'Undergrad Certificate', 'Online');
        masters = appendCredentialList(masters, element, 'EdM', 'Online');
        masters = appendCredentialList(masters, element, 'MS', 'Online');
        masters = appendCredentialList(masters, element, 'MA', 'Online');
        masters = appendCredentialList(masters, element, 'Graduate Minor', 'Online');
        doctorate = appendCredentialList(doctorate, element, 'EdD', 'Online');
        doctorate = appendCredentialList(doctorate, element, 'PhD', 'Online');
        doctorate = appendCredentialList(doctorate, element, 'Graduate Minor', 'Online');
        certificate = appendCredentialList(certificate, element, 'Certificate of Specialization', 'Online');
        certificate = appendCredentialList(certificate, element, 'Certificate', 'Online');
        certificate = appendCredentialList(certificate, element, 'Illinois Graduate Certificate', 'Online');
        certificate = appendCredentialList(certificate, element, 'Graduate Certificate', 'Online');
        nondegree = appendCredentialList(nondegree, element, 'Specialty', 'Online');
        nondegree = appendCredentialList(nondegree, element, 'Endorsement', 'Online');
        nondegree = appendCredentialList(nondegree, element, 'MOOC Specialization Certificate', 'Online');
    });
    onCampusList.forEach(element => {
        undergrad = appendCredentialList(undergrad, element, 'BS', 'On-Campus');
        undergrad = appendCredentialList(undergrad, element, 'Undergrad Minor', 'On-Campus');
        undergrad = appendCredentialList(undergrad, element, 'Undergrad Certificate', 'On-Campus');
        masters = appendCredentialList(masters, element, 'EdM', 'On-Campus');
        masters = appendCredentialList(masters, element, 'MS', 'On-Campus');
        masters = appendCredentialList(masters, element, 'MA', 'On-Campus');
        masters = appendCredentialList(masters, element, 'Graduate Minor', 'On-Campus');
        doctorate = appendCredentialList(doctorate, element, 'EdD', 'On-Campus');
        doctorate = appendCredentialList(doctorate, element, 'PhD', 'On-Campus');
        doctorate = appendCredentialList(doctorate, element, 'Graduate Minor', 'On-Campus');
        certificate = appendCredentialList(certificate, element, 'Certificate of Specialization', 'On-Campus');
        certificate = appendCredentialList(certificate, element, 'Certificate', 'On-Campus');
        certificate = appendCredentialList(certificate, element, 'Illinois Graduate Certificate', 'On-Campus');
        certificate = appendCredentialList(certificate, element, 'Graduate Certificate', 'On-Campus');
        nondegree = appendCredentialList(nondegree, element, 'Specialty', 'On-Campus');
        nondegree = appendCredentialList(nondegree, element, 'Endorsement', 'On-Campus');
        nondegree = appendCredentialList(nondegree, element, 'MOOC Specialization Certificate', 'On-Campus');
    });
    hybridList.forEach(element => {
        undergrad = appendCredentialList(undergrad, element, 'BS', 'Hybrid');
        undergrad = appendCredentialList(undergrad, element, 'Undergrad Minor', 'Hybrid');
        undergrad = appendCredentialList(undergrad, element, 'Undergrad Certificate', 'Hybrid');
        masters = appendCredentialList(masters, element, 'EdM', 'Hybrid');
        masters = appendCredentialList(masters, element, 'MS', 'Hybrid');
        masters = appendCredentialList(masters, element, 'MA', 'Hybrid');
        masters = appendCredentialList(masters, element, 'Graduate Minor', 'Hybrid');
        doctorate = appendCredentialList(doctorate, element, 'EdD', 'Hybrid');
        doctorate = appendCredentialList(doctorate, element, 'PhD', 'Hybrid');
        doctorate = appendCredentialList(doctorate, element, 'Graduate Minor', 'Hybrid');
        certificate = appendCredentialList(certificate, element, 'Certificate of Specialization', 'Hybrid');
        certificate = appendCredentialList(certificate, element, 'Certificate', 'Hybrid');
        certificate = appendCredentialList(certificate, element, 'Illinois Graduate Certificate', 'Hybrid');
        certificate = appendCredentialList(certificate, element, 'Graduate Certificate', 'Hybrid');
        nondegree = appendCredentialList(nondegree, element, 'Specialty', 'Hybrid');
        nondegree = appendCredentialList(nondegree, element, 'Endorsement', 'Hybrid');
        nondegree = appendCredentialList(nondegree, element, 'MOOC Specialization Certificate', 'Hybrid');
    });
    if (undergrad != '') {
        returnValue += `<li>Undergraduate <span class="credtype">(${undergrad})</span></li>`;
    }
    if (masters != '') {
        returnValue += `<li>Master's <span class="credtype">(${masters})</span></li>`;
    }
    if (doctorate != '') {
        returnValue += `<li>Doctorate <span class="credtype">(${doctorate})</span></li>`;
    }
    if (certificate != '') {
        returnValue += `<li>Graduate Certificate <span class="credtype">(${certificate})</span></li>`;
    }
    if (nondegree != '') {
        returnValue += `<li>Non-Degree Option <span class="credtype">(${nondegree})</span></li>`;
    }
    return returnValue;
}

function createCardView(parentNode, programs, count) {
    let summaryHeader = document.getElementById('ilw-program-header');
    summaryHeader.innerHTML = `Showing ${count} programs`;
    let ul = document.createElement('ul');
    ul.classList = 'card';
    for (let i = 0; i < programs.length; i++) {
        let li = document.createElement('li');
        let title = document.createElement('p');
        title.innerHTML = `<a href="${programs[i].Url}">${programs[i].Title}</a>`;
        title.classList = 'title';
        li.appendChild(title);
        let summary = document.createElement('p');
        summary.innerHTML = programs[i].SummaryText;
        summary.classList = 'summary';
        li.appendChild(summary);
        let details = document.createElement('div');
        details.classList = 'credential-list';
        let credentialTitle = document.createElement('p');
        credentialTitle.innerText = 'Credentials:';
        credentialTitle.classList = 'credential-title';
        details.appendChild(credentialTitle);
        let credentialDetailsUl = document.createElement('ul');
        credentialDetailsUl.classList = 'credential-list';
        credentialDetailsUl.innerHTML = createCredentialList(programs[i].CredentialsOnlineList, programs[i].CredentialsOnCampusList, programs[i].CredentialsHybridList);
        details.appendChild(credentialDetailsUl);
        let departmentTitle = document.createElement('p');
        departmentTitle.innerText = 'Department:';
        departmentTitle.classList = 'department-title';
        details.appendChild(departmentTitle);
        let departmentDetail = document.createElement('p');
        departmentDetail.innerHTML = createDepartment(programs[i].DepartmentList);
        details.appendChild(departmentDetail);
        li.appendChild(details);
        ul.appendChild(li);
    }
    parentNode.appendChild(ul);
}

function createCompactView(parentNode, programs, count) {
    let summaryHeader = document.getElementById('ilw-program-header');
    summaryHeader.innerHTML = `Showing ${count} programs`;
    let ul = document.createElement('ul');
    ul.classList = 'card';
    for (let i = 0; i < programs.length; i++) {
        let li = document.createElement('li');
        li.classList = 'compact';
        let title = document.createElement('p');
        title.innerHTML = `<a href="${programs[i].Url}">${programs[i].Title}</a>`;
        title.classList = 'title';
        li.appendChild(title);
        let credentialTitle = document.createElement('p');
        credentialTitle.innerText = 'Credentials:';
        credentialTitle.classList = 'credential-title';
        li.appendChild(credentialTitle);
        let credentialDetailsUl = document.createElement('ul');
        credentialDetailsUl.classList = 'credential-list';
        credentialDetailsUl.innerHTML = createCredentialList(programs[i].CredentialsOnlineList, programs[i].CredentialsOnCampusList, programs[i].CredentialsHybridList);
        li.appendChild(credentialDetailsUl);
        let departmentTitle = document.createElement('p');
        departmentTitle.innerText = 'Department:';
        departmentTitle.classList = 'department-title';
        li.appendChild(departmentTitle);
        let departmentDetail = document.createElement('p');
        departmentDetail.innerHTML = createDepartment(programs[i].DepartmentList);
        li.appendChild(departmentDetail);
        ul.appendChild(li);
    }
    parentNode.appendChild(ul);
}
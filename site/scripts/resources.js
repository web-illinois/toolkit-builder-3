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
            document.getElementsByClassName('ilw-resource-grid')[0].style.display = 'grid';
            document.getElementsByClassName('example')[0].style.display = 'none';
        }
        return code;
    }

// end section where we are choosing the code

addEventListener("DOMContentLoaded", () => {
    const codeButton = document.getElementById('code-submit');
    codeButton.addEventListener('click', function() { save(); });
    let code = getCode();
    if (code == '') { document.getElementsByClassName('ilw-resource-grid')[0].style.display = 'none'; return; }

    const filter = document.querySelector('ilw-filter');
    filter.addEventListener('autosubmit', function(e) { search(e); });
    fetch(`https://resourceapi.wigg.illinois.edu/api/GetTags?source=${getCode()}`, {
        method: 'GET',
        headers: {
            "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
        }
    }).then(res => res.json()).then(data => {
        data.forEach(i => {
            setFilterItem(i);
        });
    });
    filter.autosubmitListener();
    search(null); 
});

function setFilterItem(i) {
    let filter = document.getElementById('ilw-filter-parent');
    if (i.codes.length > 0) {
        if (i.codes.length < 10) {
            let filterItem = document.createElement('ilw-filter-checkboxessimple');
            filterItem.setAttribute('id', 'ilw-filter-' + i.codestring);
            filterItem.setAttribute('name', i.codestring);
            filterItem.setAttribute('query', true);
            filterItem.setAttribute('compact', true);
            filterItem.setAttribute('allvalues', i.codes.join('[-]'));
            filterItem.setAttribute('label', i.title);
            filter.appendChild(filterItem);
        } else {
            let filterItem = document.createElement('ilw-filter-dropdownsimple');
            filterItem.setAttribute('id', 'ilw-filter-' + i.codestring);
            filterItem.setAttribute('name', i.codestring);
            filterItem.setAttribute('placeholder', 'All Items');
            filterItem.setAttribute('query', true);
            filterItem.setAttribute('compact', true);
            filterItem.setAttribute('allvalues', i.codes.join('[-]'));
            filterItem.setAttribute('label', i.title);
            filter.appendChild(filterItem);
        }
    }
}

function search(e) {
    let code = getCode();
    if (code == '') { return; }
    let searchQuery = '';
    let tag1 = '';
    let tag2 = '';
    let tag3 = '';
    let tag4 = '';
    let department = '';
    let audience = '';
    let topic = '';
    let jsonFilters = e != null && e.detail != null ? e.detail.values : e != null ? JSON.parse(e.getAttribute('filters')) : null;
    if (jsonFilters != null) {
        searchQuery = encodeURIComponent(jsonFilters.searchquery ?? '');
        if (jsonFilters.tag1 && jsonFilters.tag1 != '') {
            tag1 = encodeURIComponent(jsonFilters.tag1);
        }
        if (jsonFilters.tag2 && jsonFilters.tag2 != '') {
            tag2 = encodeURIComponent(jsonFilters.tag2);
        }
        if (jsonFilters.tag3 && jsonFilters.tag3 != '') {
            tag3 = encodeURIComponent(jsonFilters.tag3);
        }
        if (jsonFilters.tag4 && jsonFilters.tag4 != '') {
            tag4 = encodeURIComponent(jsonFilters.tag4);
        }
        if (jsonFilters.department && jsonFilters.department != '') {
            department = encodeURIComponent(jsonFilters.department);
        }
        if (jsonFilters.audience && jsonFilters.audience != '') {
            audience = encodeURIComponent(jsonFilters.audience);
        }
        if (jsonFilters.topic && jsonFilters.topic != '') {
            topic = encodeURIComponent(jsonFilters.topic);
        }
    }
    let url = `https://resourceapi.wigg.illinois.edu/api/SearchResources?take=1000&source=${code}&q=${searchQuery}&tag1=${tag1}&tag2=${tag2}&tag3=${tag3}&tag4=${tag4}&topic=${topic}&audience=${audience}&department=${department}`;
    fetch(url, {
        method: 'GET',
        headers: {
            "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
        }
    }).then(res => res.json()).then(data => {
        var parentNode = document.getElementById('ilw-resource-results');
        if (parentNode != '') {
            clearAndAddFilters(parentNode, jsonFilters);
            createCardView(parentNode, data.items, data.total);
        }
    });
}

function createCardView(parentNode, resources, count) {
    let summaryHeader = document.getElementById('ilw-resource-header');
    summaryHeader.innerHTML = `Showing ${count} resources`;
    let ul = document.createElement('ul');
    ul.classList = 'card';
    for (let i = 0; i < resources.length; i++) {
        let li = document.createElement('li');
        let title = document.createElement('p');
        title.innerHTML = `<a href="${resources[i].url}">${resources[i].title}</a>`;
        title.classList = 'title';
        li.appendChild(title);
        let summary = document.createElement('p');
        summary.innerHTML = resources[i].description;
        summary.classList = 'summary';
        li.appendChild(summary);
        let tagParent = document.createElement('div');

        addTagItem(tagParent, 'tag1', resources[i]);
        addTagItem(tagParent, 'tag2', resources[i]);
        addTagItem(tagParent, 'tag3', resources[i]);
        addTagItem(tagParent, 'tag4', resources[i]);
        addTagItem(tagParent, 'topic', resources[i]);
        addTagItem(tagParent, 'audience', resources[i]);
        addTagItem(tagParent, 'department', resources[i]);

        if (tagParent.childNodes.length > 0) {
            li.appendChild(tagParent);
        }
        ul.appendChild(li);
    }
    parentNode.appendChild(ul);
}

function addTagItem(tagParent, id, resource) {
    let tagInformation = getTagInformation(resource, id);
    if (tagInformation != '') {
        let filterItem = document.getElementById('ilw-filter-' + id);
        let tagList = document.createElement('p');
        tagList.innerHTML = `<strong>${filterItem.getAttribute('label')}</strong>: ${tagInformation}`;
        tagList.classList = 'tags';
        tagParent.appendChild(tagList);
    }
}

function addFilter(filterDiv, category, filterString) {
    if (filterString) {
        let filterArray = filterString.split('[-]');
        let filterInformation = document.getElementById('ilw-filter-' + category);
        if (filterInformation.tagName.toLowerCase() == 'ilw-filter-checkboxessimple') {
            let allValues = filterInformation.getAttribute('allvalues');
            for (var i = 0; i < filterArray.length; i++) {
                if (filterArray[i] != '' && allValues.indexOf(filterArray[i]) >= 0) {
                    let filterSpan = document.createElement('button');
                    filterSpan.innerText = filterArray[i];
                    filterSpan.setAttribute('onclick', `remove("${category}", "${filterArray[i]}")`);
                    filterDiv.appendChild(filterSpan);
                }
            }
        } else {
            let filterSpan = document.createElement('button');
            filterSpan.innerText = filterString;
            filterSpan.setAttribute('onclick', `remove("${category}", "")`);
            filterDiv.appendChild(filterSpan);
        }
    }
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
        addFilter(filterDiv, 'tag1', jsonFilters.tag1);
        addFilter(filterDiv, 'tag2', jsonFilters.tag2);
        addFilter(filterDiv, 'tag3', jsonFilters.tag3);
        addFilter(filterDiv, 'tag4', jsonFilters.tag4);
        addFilter(filterDiv, 'department', jsonFilters.department);
        addFilter(filterDiv, 'audience', jsonFilters.audience);
        addFilter(filterDiv, 'topic', jsonFilters.topic);
        profileResults.appendChild(filterDiv);
    }
}

function remove(category, item) {
    let filter = document.querySelector('ilw-filter');
    let filterJson = JSON.parse(filter.getAttribute('filters'));

    if (category == 'searchquery') {
        filterJson.searchquery = '';
    } 
    if (category == 'tag1') {
        filterJson.tag1 = item == '' ? '' : filterJson.tag1.split('[-]').filter((i) => i != item).join('[-]');
    }
    if (category == 'tag2') {
        filterJson.tag2 = item == '' ? '' : filterJson.tag2.split('[-]').filter((i) => i != item).join('[-]');
    }
    if (category == 'tag3') {
        filterJson.tag3 = item == '' ? '' : filterJson.tag3.split('[-]').filter((i) => i != item).join('[-]');
    }
    if (category == 'tag4') {
        filterJson.tag4 = item == '' ? '' : filterJson.tag4.split('[-]').filter((i) => i != item).join('[-]');
    }
    if (category == 'audience') {
        filterJson.audience = item == '' ? '' : filterJson.audience.split('[-]').filter((i) => i != item).join('[-]');
    }
    if (category == 'department') {
        filterJson.department = item == '' ? '' : filterJson.department.split('[-]').filter((i) => i != item).join('[-]');
    }
    if (category == 'topic') {
        filterJson.topic = item == '' ? '' : filterJson.topic.split('[-]').filter((i) => i != item).join('[-]');
    }
    filter.setAttribute('filters', JSON.stringify(filterJson));
    search(filter); 
}

function getTagInformation(item, tag) {
    let array = new Array()
    if (tag == 'tag1')
        array.push(...item.taglist); 
    if (tag == 'tag2')
        array.push(...item.tag2list); 
    if (tag == 'tag3')
        array.push(...item.tag3list); 
    if (tag == 'tag4')
        array.push(...item.tag4list); 
    if (tag == 'audience')
        array.push(...item.audiencelist); 
    if (tag == 'department')
        array.push(...item.departmentlist); 
    if (tag == 'topic')
        array.push(...item.topiclist); 
    return array.join(', ');
}


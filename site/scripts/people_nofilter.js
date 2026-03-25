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
            document.getElementById('ilw-people').style.display = 'block';
            document.getElementsByClassName('example')[0].style.display = 'none';
        }
        return code;
    }
// end section where we are choosing the code - swap with below to hardocde the source code

//    function getCode() {
//        return '';
//    }

addEventListener("DOMContentLoaded", () => {
    // remove this if code is hardcoded
    const codeButton = document.getElementById('code-submit');
    codeButton.addEventListener('click', function() { save(); });
    // end remove section
    let code = getCode();
    if (code == '') { document.getElementById('ilw-people')[0].style.display = 'none'; return; }

    search(null); 
});

function search(e) {
    let code = getCode();
    if (code == '') { return; }
    let url = `https://resourceapi.wigg.illinois.edu/api/PersonSearch?take=1000&source=${code}`;
    fetch(url, {
        method: 'GET',
        headers: {
            "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
        }
    }).then(res => res.json()).then(data => {
        var parentNode = document.getElementById('ilw-people');
        if (parentNode != '') {
            createCardView(parentNode, data.items);
        }
    });
}

function createCardView(parentNode, resources) {
    let grid = document.createElement('ilw-grid');
    grid.setAttribute('innerwidth', '350px');
    for (let i = 0; i < resources.length; i++) {
        let card = document.createElement('ilw-card');
        let title = document.createElement('p');
        title.innerHTML = resources[i].url == '' ? `<span class='bold'>${resources[i].namereversed}</span>` : `<a href="${resources[i].url}">${resources[i].namereversed}</a>`;
        title.classList = 'title';
        if (resources[i].joblocation != '' || resources[i].jobtitle != '') {
            title.innerHTML += '<br>' + (resources[i].joblocation != '' && resources[i].jobtitle != '' ? `${resources[i].jobtitle}, ${resources[i].joblocation}` : `${resources[i].jobtitle}${resources[i].joblocation}`);
        }
        card.appendChild(title);
        let summary = document.createElement('p');
        summary.innerHTML = resources[i].description;
        summary.classList = 'summary';
        card.appendChild(summary);

/*
        let tagParent = document.createElement('div');
        addTagItem(tagParent, 'tag1', resources[i]);
        addTagItem(tagParent, 'tag2', resources[i]);
        addTagItem(tagParent, 'tag3', resources[i]);
        addTagItem(tagParent, 'tag4', resources[i]);
        addTagItem(tagParent, 'topic', resources[i]);
        addTagItem(tagParent, 'audience', resources[i]);
        addTagItem(tagParent, 'department', resources[i]);

        if (tagParent.childNodes.length > 0) {
            card.appendChild(tagParent);
        }
*/
        grid.appendChild(card);
    }
    parentNode.appendChild(grid);
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


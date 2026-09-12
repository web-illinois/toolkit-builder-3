document.addEventListener("DOMContentLoaded", function(event) {
    let samples = document.getElementsByClassName('sample');
    if (samples.length > 0) {
        document.getElementById('inner').value = unescapeHTML(samples[0].innerHTML.trimStart());
    } else {
        document.getElementById('inner').value = '';
        document.getElementById('builder-textarea-section').style.display = 'none';
        document.getElementById('inner').disabled = true;
        document.getElementById('samples-list').disabled = true;
    }
    let addon = document.getElementById('addon');
    if (addon != null) {
        document.getElementById('results-addon').innerText = addon.outerHTML;
    }
});

function unescapeHTML(htmlString) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, 'text/html');
    return doc.documentElement.textContent;
}

function changeSamples() {
    var currentSample = document.getElementById('samples-list').value;
    let sample = document.querySelector('.sample[data-name="' + currentSample + '"]');
    if (sample != null) {
        document.getElementById('inner').value = unescapeHTML(sample.innerHTML.trimStart());
    }
    build();
}

function build(scrollIntoView) {
    let componentBase = document.getElementById('component');
    componentBase.innerHTML = '';
    let component = document.createElement(componentBase.getAttribute('data-name'));
    document.querySelectorAll('.attribute').forEach(attribute => {
        if (attribute.value !== '') {
            component.setAttribute(attribute.name, attribute.value); 
        }
    });
    document.querySelectorAll('.class').forEach(classItem => {
        if (classItem.value !== '') {
            component.classList.add(classItem.value); 
        }
    });
    let customStyleComponent = '';
    document.querySelectorAll('.cssVariable').forEach(cssVariable => {
        if (cssVariable.value !== '') {
            customStyleComponent += cssVariable.getAttribute('data-name') + ': ' + cssVariable.value + '; '; 
        }
    });
    if (customStyleComponent !== '') {
        let componentStyle = document.createElement('style');
        componentStyle.innerHTML = `#component ${componentBase.getAttribute('data-name')} { ${customStyleComponent} }`;
        componentBase.appendChild(componentStyle);
    }
    component.innerHTML = document.getElementById('inner').value;

    if (componentBase.getAttribute('data-wrapper') && componentBase.getAttribute('data-wrapper') != '') {
        let componentWrapper = document.createElement(componentBase.getAttribute('data-wrapper'));
        let componentWrapperClass = componentBase.getAttribute('data-wrapperclass');
        if (componentWrapperClass && componentWrapperClass != '') {
            componentWrapper.className = componentWrapperClass;
        }
        componentWrapper.appendChild(component);
        componentBase.appendChild(componentWrapper);
    } else {
        componentBase.appendChild(component);
    }

    let results = document.getElementById('results');
    let componentText = component.cloneNode(false);
    componentText.innerHTML = document.getElementById('inner').value;
    results.innerText = componentText.outerHTML;

    let outerStyle = document.getElementById('outer-style');
    let outerStyleDefinition = document.getElementById('outer-style-definition');
    let outerStyleDefinitionNote = document.getElementById('outer-style-definition-note');
    componentBase.style = outerStyle.value;
    if (outerStyle.value !== '') {
        outerStyleDefinition.innerHTML = outerStyle.value;
        outerStyleDefinitionNote.style.display = 'block';
    } else {
        outerStyleDefinition.innerHTML = 'N/A';
        outerStyleDefinitionNote.style.display = 'none';
    }

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (scrollIntoView !== false) {
        scrollIntoView = true;
    }
    if (!mediaQuery.matches && scrollIntoView) {
        componentBase.scrollIntoView({ behavior: 'smooth' }); 
    }
}

// From https://stackoverflow.com/a/33928558/237042 and https://jsfiddle.net/fx6a6n6x/
// Copies a string to the clipboard. Must be called from within an event handler such as click.
// May return false if it failed, but this is not always possible. Browser support for Chrome 43+, Firefox 42+, Edge and IE 10+.
// No Safari support, as of (Nov. 2015). Returns false.
// IE: The clipboard feature may be disabled by an adminstrator. By default a prompt is shown the first time the clipboard is used (per session).
function copyToClipboard(text) {
    if (window.clipboardData && window.clipboardData.setData) {
        // IE specific code path to prevent textarea being shown while dialog is visible.
        return clipboardData.setData("Text", text); 

    } else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
        var textarea = document.createElement("textarea");
        textarea.textContent = text;
        textarea.style.position = "fixed";  // Prevent scrolling to bottom of page in MS Edge.
        document.body.appendChild(textarea);
        textarea.select();
        try {
            return document.execCommand("copy");  // Security exception may be thrown by some browsers.
        } catch (ex) {
            console.warn("Copy to clipboard failed.", ex);
            return false;
        } finally {
            document.body.removeChild(textarea);
        }
    }
}

function copyCode() {
    let buildingCode = document.getElementById('results');
    let buildingCodeCopied = document.getElementById('buildingCodeCopied');
    var result = copyToClipboard(buildingCode.innerText); 
    buildingCodeCopied.classList.remove('hide');
    buildingCodeCopied.classList.add('show');
    setTimeout(function() { 
        buildingCodeCopied.classList.add('hide');
        buildingCodeCopied.classList.remove('show');
    }, 2500)
    console.log('copied?', result);
};

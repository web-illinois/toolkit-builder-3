document.addEventListener("DOMContentLoaded", function(event) {
    let samples = document.getElementsByClassName('sample');
    if (samples.length > 0) {
        document.getElementById('inner').value = samples[0].innerHTML.trimStart();
    } else {
        document.getElementById('inner').value = '';
        document.getElementById('builder-textarea-section').style.display = 'none';
        document.getElementById('inner').disabled = true;
        document.getElementById('samples-list').disabled = true;
    }
    build(false);
});

function changeSamples() {
    var currentSample = document.getElementById('samples-list').value;
    let sample = document.querySelector('.sample[data-name="' + currentSample + '"]');
    if (sample != null) {
        document.getElementById('inner').value = sample.innerHTML.trimStart();
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
    componentBase.appendChild(component);

    let results = document.getElementById('results');
    let componentText = component.cloneNode(false);
    componentText.innerHTML = document.getElementById('inner').value;
    results.innerText = componentText.outerHTML;

    let outerStyle = document.getElementById('outer-style');
    let outerStyleDefinition = document.getElementById('outer-style-definition');
    let outerStyleDefinitionNote = document.getElementById('outer-style-definition-note');
    componentBase.style = outerStyle.value;
    console.log(outerStyle.value);
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
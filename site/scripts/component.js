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
    debugger;
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
    component.innerHTML = document.getElementById('inner').value;

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

    componentBase.appendChild(component);

    let results = document.getElementById('results');
    results.innerText = componentBase.innerHTML;
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (scrollIntoView !== false) {
        scrollIntoView = true;
    }
    if (!mediaQuery.matches && scrollIntoView) {
        componentBase.scrollIntoView({ behavior: 'smooth' }); 
    }
}
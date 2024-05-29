function generateCodepen() {
        let data = {
            title              : "",
            html               : "",
            html_pre_processor : "none",
            css                : "",
            css_pre_processor  : "none",
            css_starter        : "neither",
            css_prefix_free    : false,
            js                 : "",
            js_pre_processor   : "none",
            js_modernizr       : false,
            js_library         : "",
            html_classes       : "",
            css_external       : "",
            js_external        : "",
            template           : true
        };
    
        let h1 = document.getElementsByTagName('h1')[0];
        data.title = 'Builder: ' + h1.innerText;
        let buildingCode = document.getElementById('results');
        data.html = buildingCode.innerText;
        let scripts = Array.from(document.querySelectorAll('script'));
        let scriptArray = [];
        scripts.forEach(s => {
            if (s.getAttribute('src') && s.getAttribute('src').startsWith('http')) {
                scriptArray.push(s.getAttribute('src'));
            }
        });
        data.js_external = scriptArray.join(';');
    
        let links = Array.from(document.querySelectorAll('link[rel=stylesheet]'));
        let linkArray = [];
        links.forEach(l => {
            if (l.getAttribute('href') && l.getAttribute('href').startsWith('http')) {
                linkArray.push(l.getAttribute('href'));
            }
        });
        data.css_external = linkArray.join(';');
    
        let codepenOutput = document.getElementById('codepen');
        codepenOutput.value = JSON.stringify(data).replace(/"/g, "&quot;").replace(/'/g, "&apos;");
        console.log(codepenOutput.value);
        document.getElementById('codepen-form').submit();
}
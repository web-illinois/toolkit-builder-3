// From https://stackoverflow.com/a/33928558/237042 and https://jsfiddle.net/fx6a6n6x/
// Copies a string to the clipboard. Must be called from within an event handler such as click.
// May return false if it failed, but this is not always
// possible. Browser support for Chrome 43+, Firefox 42+, Edge and IE 10+.
// No Safari support, as of (Nov. 2015). Returns false.
// IE: The clipboard feature may be disabled by an adminstrator. By default a prompt is
// shown the first time the clipboard is used (per session).
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

var isDark = false;

function darknessRises() {
    if (isDark == true){
        document.getElementById('darkButton').textContent = "Dark Mode";
        document.getElementById('darkButton').style.cssText = 'color: #1e7e34;\n' +
            '    background-color: #1d2124;\n' +
            '    border-color: #1d2124;';
        document.getElementById('sidebar').style.cssText = 'background-color: #fff';
        var pElements = document.getElementsByTagName('p');
        var i;
        if (pElements.length > 0) {
            for (i = 0; i < pElements.length; i++) {
                pElements[i].style.cssText = ''
            }
        }
        var navbarElements = document.getElementsByClassName('navbarElement');
        if (navbarElements.length > 0) {
            for (i = 0; i < navbarElements.length; i++) {
                navbarElements[i].style.cssText = '';
            }
        }
        var socialElements = document.getElementsByTagName('i');
        if (socialElements.length > 0) {
            for (i = 0; i < socialElements.length; i++) {
                socialElements[i].style.cssText = '';
            }
        }
        document.getElementById('sidebarHeader').style.cssText = '';
        var mainElements = document.getElementsByTagName('main');
        if (mainElements.length > 0) {
            for (i = 0; i < mainElements.length; i++) {
                mainElements[i].style.cssText = '';
            }
        }
        var imageElements = document.getElementsByTagName('img');
        if (imageElements.length > 0) {
            for (i = 0; i < imageElements.length; i++) {
                imageElements[i].style.cssText = '';
            }
        }
        isDark = false;
    }
    else {
        document.getElementById('darkButton').textContent = "Light Mode";
        document.getElementById('darkButton').style.cssText = 'color: #1e7e34;\n' +
            '    background-color: #fff;\n' +
            '    border-color: #fff;';
        document.getElementById('sidebar').style.cssText = 'background-color: #000000';
        var pElements = document.getElementsByTagName('p');
        var i;
        if (pElements.length > 0) {
            for (i = 0; i < pElements.length; i++) {
                pElements[i].style.cssText = 'color: #fff'
            }
        }
        var navbarElements = document.getElementsByClassName('navbarElement');
        if (navbarElements.length > 0) {
            for (i = 0; i < navbarElements.length; i++) {
                navbarElements[i].style.cssText = 'color: #fff';
            }
        }
        var socialElements = document.getElementsByTagName('i');
        if (socialElements.length > 0) {
            for (i = 0; i < socialElements.length; i++) {
                socialElements[i].style.cssText = 'color: #fff';
            }
        }
        document.getElementById('sidebarHeader').style.cssText = 'color: #fff'
        var mainElements = document.getElementsByTagName('main');
        if (mainElements.length > 0) {
            for (i = 0; i < mainElements.length; i++) {
                mainElements[i].style.cssText = 'background-color: #000';
            }
        }
        var imageElements = document.getElementsByTagName('img');
        if (imageElements.length > 0) {
            for (i = 0; i < imageElements.length; i++) {
                imageElements[i].style.cssText = 'opacity: 0.5;';
            }
        }
        isDark = true;
    }
}

//document.getElementsByClassName('navbarElement').style.cssText = 'color: #000000'
function showHide() {
    let elements = document.getElementsByClassName("link");

    let toggle = false

    for (let i = 0; i < elements.length; i++) {

        if (elements[i].style.display !== 'none') {
            elements[i].style.display = 'none'
            toggle = false
        }
        else if (elements[i].style.display !== 'block') {
            elements[i].style.display = 'block'
            toggle = true
        }

    }

    if (toggle) {
        document.getElementById('navbarHMB').src = 'images/x.png'
    }
    else {
        document.getElementById('navbarHMB').src = 'images/hamburger.png'
    }
}
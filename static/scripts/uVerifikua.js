
window.addEventListener('load', (event) => {
    let seconds = document.getElementById('seconds').innerHTML
    seconds = parseInt(seconds)


    setInterval(() => {
        seconds = seconds - 1
        document.getElementById('seconds').innerHTML = seconds
        if (seconds <= 0) {
            window.location.href = document.location.href = "/";
        }
    }, 1000)


});


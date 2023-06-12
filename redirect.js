var redirectTimeout;

function redirect() {
    window.location.href = "https://novmk.github.io/csm_show/";
}

function resetTimer() {
    clearTimeout(redirectTimeout);
    redirectTimeout = setTimeout(redirect, 180000); 
}

document.addEventListener("mousemove", resetTimer);

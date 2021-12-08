document.addEventListener('scroll', hideText);

function hideText() {
    document.getElementsByTagName("body")[0].style.fontSize = "50px"
}
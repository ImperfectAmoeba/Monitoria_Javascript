//site: www.newgrounds.com

function posicao(){
    let headers = document.querySelectorAll('.skin-general-desktop'); 
    headers.forEach(header => {
    header.style.position = "relative";
    header.style.top = "100px";
});
}

posicao();
let containerHeader = document.getElementById("containerHeader");
//console.log(positionElement)



document.addEventListener("scroll", () =>{  
    let positionScrolling = document.documentElement.scrollTop;
    let posicionElemento = containerHeader.offsetTop;

    if(positionScrolling >=  posicionElemento + 500){
        containerHeader.classList.add("containerHeader_JS");
    }else{
        containerHeader.classList.remove("containerHeader_JS")
    }
})
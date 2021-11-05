
let btnCarrito = document.querySelector("#imgCarrito");
let contBasePedido = document.querySelector("#contBasePedido");


btnCarrito.addEventListener("click" , () =>{
    contBasePedido.classList.toggle("contBasePedidoJS");
});


window.addEventListener("scroll", ()=>{
    let positionBtnCarrito = btnCarrito.offsetTop;  //position 120
    let positionScroll = document.documentElement.scrollTop;
    //console.log(positionScroll)
    if( positionScroll >= positionBtnCarrito){
        btnCarrito.classList.add("btnCarrito_JS")
    }else{
        btnCarrito.classList.remove("btnCarrito_JS")
    }
})














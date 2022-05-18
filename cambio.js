let contenedorprincipal=document.getElementById("container")

contenedorprincipal.addEventListener("mouseover",function(evento){

    if(evento.target.classList.contains("img-fluid")){
        console.log("estoy pasando sobre la foto")
        console.log(evento.target)
        evento.target.classList.add("cortina")
    }

    
})

contenedorprincipal.addEventListener("mouseout", function(evento){

    if(evento.target.classList.contains("cortina")){
        console.log("vuelve")
        console.log(evento.target)
        evento.target.classList.remove("cortina")
    }

})

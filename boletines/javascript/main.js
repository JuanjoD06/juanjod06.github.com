//DOM 
/*let links = document.querySelectorAll("a");

links.forEach(function(link){
    console.log(link)
})*/

/*let celdas = document.querySelectorAll("td");

celdas.forEach(function(td){
    td.addEventListener('click',function(){
        console.log(this);
    })
});*/

//obtener los elementos de la clase .close

let links = document.querySelectorAll(".close");
//Recorrerlos

links.forEach(function(link){

    
    //Agregar un evento click a cada uno de ellos
    link.addEventListener("click",function(ev){
        ev.preventDefault();
        let content = document.querySelector(".content");

        //quitar clases de animación
        content.classList.remove("fadeInDown");
        content.classList.remove("animated");

        content.classList.add("fade0utput");
        content.classList.add("animated");

        setTimeout(function(){
            location.href = "../index.html";
        },600);

        location.href ="../index.html";
        return false;
    });
});


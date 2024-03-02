//Funcion que aplica las animaciones de las habilidades
let proyectos = 0;
let clientes = 0;
let cursos =0;
let intervalProyectos = null;
let intervalclientes = null;
let intervalCursos = null;
function animacionNumeros(){
    var numeros = document.getElementById("numeros");
    var distancia_numeros = window.innerHeight - numeros.getBoundingClientRect().top;
    if(distancia_numeros >= 200 && proyectos ==0){
        intervalo = setInterval(actualizarContador, 60);
    }
}


function actualizarContador() {
    
    if (proyectos <= 10) {
        
        document.getElementById("contProyectos").textContent = proyectos;
       
        proyectos++;
    } else {
       
        clearInterval(intervalProyectos);
    }
    
    if (clientes <= 0) {
        
        document.getElementById("contClientes").textContent = clientes;
        
        clientes++;
    } else {
        clearInterval(intervalclientes);
    }
    
    if (cursos <= 3) {
        
        document.getElementById("contCursos").textContent = cursos;
       
        cursos++;
    } else {
       
        clearInterval(intervalCursos);
    }
}

window.onscroll = function(){
    animacionNumeros();
    animacionesSkills();
}
let visible=false;

function abrirCerrarMenu(){    
    if(visible==false){
        document.getElementById("nav").className = "responsive";
        visible = true;
    }else{
        document.getElementById("nav").className = "";
        visible = false;
    }
}

function animacionesSkills(){
    var skills = document.getElementById("sobremi");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 400){
        document.getElementById("dw").className = " progreso dw";
        document.getElementById("dg").className = " progreso dg";
        document.getElementById("bd").className = " progreso bd";
        document.getElementById("md").className = " progreso md";
    }
}
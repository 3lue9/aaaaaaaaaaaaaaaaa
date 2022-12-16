var x1; 
x1=180;
var x2;
x2=x1+300;
var x3;
x3=x2+200;
var x4;
x4=x3+430;
var x5;
x5=x4+200;
var ytutti;
ytutti=200

//const testo = document.getElementById('testo');
//testo.style.position = 'absolute';
//testo.style.top = "500px";
//testo.style.left ="500px";

//const nikocado = document.getElementById('nikocado');
//nikocado.style.position = 'absolute';
//nikocado.style.top = "500px";
//nikocado.style.left ="645px";

// posiziono le immagini

const myniko1 = document.getElementById('my niko1');//sposta la prima foto di niko
myniko1.style.position = 'absolute';
myniko1.style.left =x1+"px";
myniko1.style.top =ytutti+"px";

const freccia1 = document.getElementById('freccia1');
freccia1.style.position = 'absolute';
freccia1.style.left =x2+"px";
freccia1.style.top = ytutti+40+"px";
freccia1.style.display ="none"

const myniko2 = document.getElementById('my niko2');
myniko2.style.position = 'absolute';
myniko2.style.left =x3+"px";
myniko2.style.top =ytutti+"px";
myniko2.style.display ="none"

const freccia2 = document.getElementById('freccia2');
freccia2.style.position = 'absolute';
freccia2.style.left =x4+"px";
freccia2.style.top = ytutti+40+"px";
freccia2.style.display ="none"

const myniko3 = document.getElementById('my niko3');
myniko3.style.position = 'absolute';
myniko3.style.left =x5+"px";
myniko3.style.top =ytutti+"px";
myniko3.style.display ="none"

const feed = document.getElementById('feed');//sposta il bottone
feed.style.position = 'absolute';
feed.style.left ="810px"
feed.style.top ="500px"

feed.style.width="200px"
feed.style.height="200px"


//modifico il peso

let peso; // definisco la variabile peso
peso=1;
document.getElementById("nikocado").innerHTML=peso+" kg";


// *********************************************************************************
// *********************    spazio dedicato alle funzioni **************************
//69


function muckbang () {

    
    peso=peso+10 // modifico una variabile globale
document.getElementById("nikocado").innerHTML=peso +" kg";
//alert(" peso = " + w) 
if (peso==51) {
    alert(" You have diabetes ") 
    document.getElementById("my niko2").style.display = "block";
    document.getElementById("freccia1").style.display = "block";
} else {
    if(peso==101) {alert(" You have a problem ")
    document.getElementById("my niko3").style.display = "block";
    document.getElementById("freccia2").style.display = "block"; }
    
    
}
}




document.getElementById("nikocado").innerHTML=w+" kg";
//for(let n=0;n<10;n++){peso=peso+19;document.getElementById("nikocado").innerHTML=peso+" kg";}

//function mistery_button () {
    
 //   let rng_food     
//104
rng_food = Math.floor(Math.random() * 2);
if (rng ==1) {
    console.log(1+1)
}


//<button id = mistery_food type="button" onclick="mystery_button ()"></button>}




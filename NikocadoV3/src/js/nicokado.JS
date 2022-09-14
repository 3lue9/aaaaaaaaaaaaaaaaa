var x_axis1; 
x_axis1=180;

var x_axis2;
x_axis2=x_axis1+300;

var x_axis3;
x_axis3=x_axis2+200;

var x_axis4;
x_axis4=x_axis3+430;

var x5;
x5=x_axis4+200;

var ytutti;
ytutti=200


const myniko1 = document.getElementById('my niko1');//sposta la prima foto di niko
myniko1.style.position = 'absolute';
myniko1.style.left =x_axis1+"px";
myniko1.style.top =ytutti+"px";

const freccia1 = document.getElementById('freccia1');
freccia1.style.position = 'absolute';
freccia1.style.left =x_axis2+"px";
freccia1.style.top = ytutti+40+"px";
freccia1.style.display ="none"

const myniko2 = document.getElementById('my niko2');
myniko2.style.position = 'absolute';
myniko2.style.left =x_axis3+"px";
myniko2.style.top =ytutti+"px";
myniko2.style.display ="none"

const freccia2 = document.getElementById('freccia2');
freccia2.style.position = 'absolute';
freccia2.style.left =x_axis4+"px";
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



let peso; // definisco la variabile peso
peso=1;
document.getElementById("nikocado").innerHTML=peso+" kg";




function muckbang () {

    
    //peso=peso+Math.floor(Math.random() * 11); // modifico una variabile globale
    peso=peso+10
    document.getElementById("nikocado").innerHTML=peso +" kg";

    if (peso==51) 
    {
        alert(" You have diabetes ") 
        document.getElementById("my niko2").style.display = "block";
        document.getElementById("freccia1").style.display = "block";
    } 

    else
    {
        if(peso==101) {alert(" You have a problem ")
        document.getElementById("my niko3").style.display = "block";
        document.getElementById("freccia2").style.display = "block"; }
        
        
    }

    if (peso==6969696969) 
    {
        document.write("UwU")
    }
}
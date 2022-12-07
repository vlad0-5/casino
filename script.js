
function clc(){
    for(var i=0; i<16; i++){
        document.getElementsByTagName("input")[i].value = "";
        document.getElementsByTagName("input")[i].style.color = 'green';
    }
    document.body.style.backgroundImage = "url(mountain.jpg)";
}


 function verificar(){
    var a= parseInt(document.getElementById("1").value);
    var b= parseInt(document.getElementById("2").value);
    var c= parseInt(document.getElementById("3").value);
    var d= parseInt(document.getElementById("4").value);

    var a1= parseInt(document.getElementById("10").value) ;
    var a2= parseInt(document.getElementById("11").value) ;
    var a3= parseInt(document.getElementById("12").value);
    var a4= parseInt(document.getElementById("13").value);
    
    var b1= parseInt(document.getElementById("19").value) ;
    var b2= parseInt(document.getElementById("20").value) ;
    var b3= parseInt(document.getElementById("21").value);
    var b4= parseInt(document.getElementById("22").value);

        
    var c1= parseInt(document.getElementById("31").value) ;
    var c2= parseInt(document.getElementById("32").value) ;
    var c3= parseInt(document.getElementById("33").value);
    var c4= parseInt(document.getElementById("34").value);


    var s=a+b+c+d;
    var s1=a1+a2+a3+a4;
    var s2=b1+b2+b3+b4;
    var s3=c1+c2+c3+c4;

    if((s==34) && (s1==34) && (s2==34) && (s3==34)){
        document.getElementById("respuesta").innerHTML = "la caja magica esta correcta <br>las sumas dan 34 a todos lados"; 
    }else{
        document.getElementById("respuesta").innerHTML = "la caja magica esta incorrecto <br> recuerda que tiene que dar 34 en todos los sentidos"; 
    }

 }
function cabalistico(){
     var b=142857;
     var a = parseInt( document.getElementById("a").value)
     var d= b * a ;
  
    document.getElementById('resp').innerHTML = b+"="+d;
  

}

function comparar(){
    var a = parseInt( document.getElementById("hijas").value);
    
    var a1=6;


    if( a==a1 ){
        document.getElementById('respon').innerHTML = "es correcto todas las hijas son 6<br> por lo tanto hay 36 perlas";
    }else{
        document.getElementById('respon').innerHTML = "incorrecto lea bien el acertijo ";
    }
}

function corrector(){
    var a=36;
    var b=1;
    var con=0;
    while(a>0){
        var c= a - b;
        var d=c / 7;
        var e=b + d;
        var a=a-e;
        var b=b+1;
        var con=con+1;

    }
    document.getElementById('respon').innerHTML = "la respuesta del ejercicio es que son "+con+" hermanas" +" y son 36 perlas";

}


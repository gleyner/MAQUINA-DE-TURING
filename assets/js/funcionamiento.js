String.prototype.replaceAt = function (index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

var velocidad = document.querySelector('#vel');
var speed;


function funcionamiento() {
    var expresion = document.getElementById("entrada").value;
    document.getElementById('Contador').innerHTML = 1;

    let caracter = 1;
    let estado = 1;
    auxestado = estado;
    con = 2;
    sw = 1;
    inicioescriturac = 7;

    if (expresion.length != 0) {
        expresion = 'z' + expresion + 'z';
        while (estado != 3) {
            while (estado == 1) {
                if (expresion.charAt(caracter) == "a") {
                    $("#cuadro" + inicioescriturac).fadeIn(function () {
                        $(this).html("<h1>a</h1>").fadeIn();
                    });
                    expresion = expresion.replaceAt(caracter, "a");
                    moverDerecha(con, auxestado, "a");
                    inicioescriturac++;
                    con++;
                } else if (expresion.charAt(caracter) == "b") {
                    $("#cuadro" + inicioescriturac).fadeIn(function () {
                        $(this).html("<h1>a</h1>").fadeIn();
                    });
                    expresion = expresion.replaceAt(caracter, "a");
                    moverDerecha(con, auxestado, "b");
                    inicioescriturac++;
                    con++;
                } else if (expresion.charAt(caracter) == "z") {
                    expresion = expresion.replaceAt(caracter, "a");
                    estado = 2;
                    auxestado = estado;
                    caracter--;
                    sw = 0;
                    moverIzquierda(con, auxestado, "z");
                    con++;
                }

                if (sw == 1) {
                    caracter++;
                }
            }

            sw = 1;

            while (estado == 2) {
                if (expresion.charAt(caracter) == "a") {
                    expresion = expresion.replaceAt(caracter, "a");
                    moverIzquierda(con, auxestado, "a");

                    con++;
                } else {
                    if (expresion.charAt(caracter) == "z") {
                        expresion = expresion.replaceAt(caracter, "a");
                        estado = 3;
                        auxestado = estado;
                        caracter++;
                        sw = 0;
                        moverDerecha(con, auxestado, "z");

                        con++;
                    }
                }
                if (sw == 1) {
                    caracter--;
                }
            }
        }
    }else{
        console.log("Cadena vacia");
    }
}


velocidad.oninput = () => {
    speed = velocidad.value;
};

function moverIzquierda(contador, valorestado, caracter) {
    if (speed == 0) {
        $(".cuadrado").animate({"left": "+=45px"}, 5000).fadeIn(function () {
            
            $("#Contador").html(contador);
            $("#Estado").html("Q" + valorestado);
            $("#aceptado").html("verificando");

            AnimacionGrafos(valorestado,caracter);
            
        });
    }else{
        if(speed == 1) {
            $(".cuadrado").animate({"left": "+=45px"}, 4000).fadeIn(function () 
                {
                    $("#Contador").html(contador);
                    $("#Estado").html("Q" + valorestado);
                    $("#aceptado").html("verificando");

                    AnimacionGrafos(valorestado,caracter);
                });
        }else{
            if(speed == 2) {
                $(".cuadrado").animate({"left": "+=45px"}, "slow").fadeIn(function () 
                {
                    $("#Contador").html(contador);
                    $("#Estado").html("Q" + valorestado);
                    $("#aceptado").html("verificando");  

                    AnimacionGrafos(valorestado,caracter);
                });
            }else{
                if(speed == 3){
                    $(".cuadrado").animate({"left": "+=45px"}, "medium").fadeIn(function () 
                    {
                        $("#Contador").html(contador);
                        $("#Estado").html("Q" + valorestado);
                        $("#aceptado").html("verificando");

                        AnimacionGrafos(valorestado,caracter);
                    });
                }else{
                    $(".cuadrado").animate({"left": "+=45px"}, "fast").fadeIn(function () 
                    {
                        $("#Contador").html(contador);
                        $("#Estado").html("Q" + valorestado);
                        $("#aceptado").html("verificando"); 

                        AnimacionGrafos(valorestado,caracter);
                    });
                }
            }
        }
    }
}

function moverDerecha(contador, valorestado, caracter) {
   if (speed == 0) {
    $(".cuadrado").animate({"left": "-=45px"}, 3000).fadeIn(function () 
        {
            $("#Contador").html(contador);
            $("#Estado").html("Q" + valorestado);
            $("#aceptado").html("verificando");
            if(valorestado == 3){
                $("#aceptado").html("Aceptado").css({"color":"#fff", "background-color": "#FF0000", "padding": "3px"});;
            }

            AnimacionGrafos(valorestado,caracter);
        });
    }else {
        if (speed == 1) {   
           $(".cuadrado").animate({"left": "-=45px"}, 2000).fadeIn(function () 
            {
                $("#Contador").html(contador);
                $("#Estado").html("Q" + valorestado);
                $("#aceptado").html("verificando");
                if(valorestado == 3){
                    $("#aceptado").html("Aceptado").css({"color":"#fff", "background-color": "#FF0000", "padding": "3px"});;
                }

                AnimacionGrafos(valorestado,caracter);
            }); 
       }else {
            if (speed == 2) {
                $(".cuadrado").animate({"left": "-=45px"}, "slow").fadeIn(function () 
                {
                    $("#Contador").html(contador);
                    $("#Estado").html("Q" + valorestado);
                    $("#aceptado").html("verificando");
                    if(valorestado == 3){
                        $("#aceptado").html("Aceptado").css({"color":"#fff", "background-color": "#FF0000", "padding": "3px"});;
                    }

                    AnimacionGrafos(valorestado,caracter);
                });
            }else{
                if(speed == 3){
                    $(".cuadrado").animate({"left": "-=45px"}, "medium").fadeIn(function () 
                    {
                        $("#Contador").html(contador);
                        $("#Estado").html("Q" + valorestado);
                        $("#aceptado").html("verificando");
                        if(valorestado == 3){
                            $("#aceptado").html("Aceptado").css({"color":"#fff", "background-color": "#FF0000", "padding": "3px"});;
                        }

                        AnimacionGrafos(valorestado,caracter);
                    });
                }else{
                    $(".cuadrado").animate({"left": "-=45px"}, "fast").fadeIn(function () 
                    {
                        $("#Contador").html(contador);
                        $("#Estado").html("Q" + valorestado);
                        $("#aceptado").html("verificando");
                        if(valorestado == 3){
                            $("#aceptado").html("Aceptado").css({"color":"#fff", "background-color": "#FF0000", "padding": "3px"});
                        }

                        AnimacionGrafos(valorestado,caracter);
                    });
                }
            }
        }
    }

}

function AnimacionGrafos(estado,char){
    console.log(char);
    NodoQ1 = document.getElementById("nodeQ1");
    NodoQ2 = document.getElementById("nodeQ2");
    NodoQ3 = document.getElementById("nodeQ3");
    Edgepath0 = document.getElementById("edgepath0");
    Edgepath1 = document.getElementById("edgepath1");
    Edgepath2 = document.getElementById("edgepath2");
    Edgepath3 = document.getElementById("edgepath3");
    Edgepath5 = document.getElementById("edgepath5");

    if(estado == 1){
        NodoQ1.setAttribute("style", "stroke: yellow;");


        if(char == "a"){
            Edgepath5.setAttribute("style", "stroke: red;");
            Edgepath0.setAttribute("style", "stroke: #E2E2E2;");
        }

        if(char == "b"){
            Edgepath0.setAttribute("style", "stroke: red;");
            Edgepath5.setAttribute("style", "stroke: #E2E2E2;");
        }

    }else if(estado == 2){
        NodoQ1.setAttribute("style", "stroke: #4FF00F;");
        NodoQ2.setAttribute("style", "stroke: yellow;");
        Edgepath2.setAttribute("style", "stroke: red");
        Edgepath0.setAttribute("style", "stroke: #E2E2E2;");
        Edgepath5.setAttribute("style", "stroke: #E2E2E2;");
    }else{
        NodoQ1.setAttribute("style", "stroke: #4FF00F;");
        NodoQ2.setAttribute("style", "stroke: #0C48EE;");
        NodoQ3.setAttribute("style", "stroke: yellow;");
        Edgepath2.setAttribute("style", "stroke: #E2E2E2");
        Edgepath0.setAttribute("style", "stroke: #E2E2E2;");
        Edgepath5.setAttribute("style", "stroke: #E2E2E2;");
    }
}


function detener(){
    location.reload();
}

function Cargar() {
    expresion = document.getElementById("entrada").value;
    var LongitudEx = expresion.length;

    if(expresion.length != 0 && LongitudEx <= 25){

        limpiarcinta();

        
        caracter = 0;
        inicioescriturac = 7;


        document.getElementById("Biniciar").removeAttribute("disabled");
        document.getElementById("Bpausar").removeAttribute("disabled");
        document.getElementById("vel").removeAttribute("disabled");

        while(caracter < LongitudEx){

            if(expresion.charAt(caracter) == "a" || expresion.charAt(caracter) == "b") {
                document.getElementById('cuadro' + inicioescriturac).innerHTML = '<h1>' + expresion.charAt(caracter) + '</h1>';
                caracter += 1;
                inicioescriturac += 1;
            }else{
                for (i = 0; i <= 20; i++) {
                    document.getElementById('cuadro' + i).innerHTML = "<h1></h1>";
                }

                alert("Expresion incorrecta");
                break;
            }
        }

    }else{
        alert("Cadena vacia o cadena muy larga :)");
    }
}


function limpiarcinta() {
    for (i = 0; i <= 20; i++) {
        document.getElementById('cuadro' + i).innerHTML = "";
    }
}
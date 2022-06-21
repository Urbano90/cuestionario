function verificarRespuestas() {
    var total = 6;
    var puntos = 0;

    var myForm = document.forms["quizForm"]; // referencia de las preguntas
    var respuestas = ["a", "b","c", "a", "b", "c"]; //aqui valido las respuestas de las preguntas correctas.

    for (var i = 1; i <= total; i++) {
        if(myForm["p" + i].value === null || myForm["p" + i].value === "") {  // Si dejamos alguna pregunta sin responder
            
          document.getElementById("resultado").innerHTML = `<p class="aviso" >Por favor responde la pregunta   ${i}</p>; ` // Nos muestra este alert del aviso que nos falta pregunta que responder.
            return false;
        } else{
            if(myForm["p" + i].value === respuestas[i - 1]) { // ponemos i - 0 porque queremos conocer la posicion del array de cada pregunta
                puntos++;
            }
        }
    }

     document.getElementById('resultado').innerHTML = `<p class="result"> Obtuviste ${puntos} de ${total}  </p> `;
    return false
}

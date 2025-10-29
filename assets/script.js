
/*let numeroanterior = -1;

function mostrarCitas(){

    let citas = ["“Los paradigmas son tan penetrantes e invisibles que se confunden fácilmente con la verdad” (Leonard, 2011, p. 33).",
                "“los indicadores bibliométricos tienen relación directa con los resultados científicos y no con la actividad científica” (Maltrás Barba, 2003, p. 69). ",
                "“algunos mercados son lugares físicos donde se reúnen compradores y vendedores, y donde un subastador o un corredor ayudan a determinar los precios” (Parkin, 2018, p. 56). ",
                "“El cine es la invención del montaje. Y el montaje no existía en las otras artes” (Godard, 2000, p. 26)."]

    let texto = document.getElementById("texto");
    let cantidad = citas.length;

    let numerorandom;

    do {
        numerorandom = (Math.floor(Math.random() * cantidad));
        
        //console.log("Anterior: " + numeroanterior, "Nuevo: " + numerorandom);
        
    } while (numeroanterior == numerorandom);

    numeroanterior = numerorandom;
    
    texto.innerHTML = `<p> ${citas[numerorandom]} </p>`

}
*/

let i = 0;

function mostrarCitas(){

    let citas = ["“Los paradigmas son tan penetrantes e invisibles que se confunden fácilmente con la verdad” (Leonard, 2011, p. 33).",
    "“Los indicadores bibliométricos tienen relación directa con los resultados científicos y no con la actividad científica” (Maltrás Barba, 2003, p. 69). ",
    "“Algunos mercados son lugares físicos donde se reúnen compradores y vendedores, y donde un subastador o un corredor ayudan a determinar los precios” (Parkin, 2018, p. 56). ",
    "“El cine es la invención del montaje. Y el montaje no existía en las otras artes” (Godard, 2000, p. 26)."]

    let texto = document.getElementById("texto");

    if (i >= citas.length){
        i = 0
    }

    //Log de citas con su indice actual incremental
    //console.log(citas[i]);

    texto.innerHTML = `<p> ${citas[i ++]} </p>`
    

}
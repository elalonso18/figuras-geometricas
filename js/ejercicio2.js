/* 
2 - Escribe un programa que pueda calcular el área de 3 figuras geométricas, triángulo, rectángulo y círculo. En primer lugar pregunta de qué figura se quiere calcular el área, después solicita los datos que necesites para calcularlo.
    triángulo = b * h/2
    rectángulo = b * h
    círculo = π * r2 (pi * radio al cuadrado)
*/
let figura = prompt("Escribe que figura deseas utilizar: triangulo, rectangulo, circulo, cuadrado, rombo , cometa, trapecio y paralelogramo ")

//2) creamos las variable
let base;
let altura;
let radio;

//3) Las condiciones en base a la pregunta

switch(figura){
    case "triangulo":
        //le preguntaremos en base a la formula
        base = prompt("¿Cuanto tienes de base?: ")
        altura = prompt("¿Cuanto tienes de altura? ")
        
        // Prueba en la consola
        document.write(`El area del triangulo es ${base*altura/2} `)
        break

    case "rectangulo":
        base = prompt("¿Cuanto tienes de base?: ")
        altura = prompt("¿Cuanto tienes de altura? ")
        document.write(`el area del rectangulo es ${base*altura/2}`)
        break

    case "circulo":
        radio = prompt("¿Cuanto de radio tienes?")
        //math.pow() --> Crear la potencia y el Pi
        document.write(`El area del circulo es ${Math.PI * Math.pow(radio,2)}`)
        break

    case "cuadrado":
        lado = prompt("¿Cuanto tienes de lado?: ")
        lado = prompt("¿Cuanto tienes de lado? ")
        
        
    document.write(`El area del cuadrado es ${lado*lado} `)
    break

    case "paralelogramo":
    base = prompt("¿Cuanto tienes de base?: ")
    altura = prompt("¿Cuanto tienes de altura? ")
            
            
    document.write(`El area del paralelogramo es ${base*altura} `)
    break

    case "cometa":
    diagonalmayor= prompt("¿Cuanto tienes de diagonal mayor?: ")
    diagonalmenor= prompt("¿Cuanto tienes de diagonal menor? ")
        
        
    document.write(`El area del cometa es ${diagonalmayor*diagonalmenor/2} `)
    break

    case "trapecio":
    basemayor= prompt("¿Cuanto tienes de base mayor?: ")
    basemenor = prompt("¿Cuanto tienes de base menor? ")
    altura = prompt("¿Cuanto tienes de altura? ")
        
    document.write(`El area del trapecio es ${(basemayor*basemenor)*altura/2} `)
    break

    case "rombo":
    diagonalmayor= prompt("¿Cuanto tienes de diagonal mayor?: ")
    diagonalmenor= prompt("¿Cuanto tienes de diagonal menor? ")
            
            
    document.write(`El area del cometa es ${diagonalmayor*diagonalmenor/2} `)
    break

}

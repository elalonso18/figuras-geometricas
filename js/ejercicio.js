//Aparezca una ventana inicial
//alert("¿Deseas iniciar este programa?")

//Aparezca en la pagina web
//document.write("¿Deseas inicar este programa?")

//Aparezca como un version de prueba 
//console.log("¿Deseas iniciar este programa?")

/* 
1 - Solicita un nombre, la edad y muestra por consola el mensaje "Hola ____, tienes ____ años y el año que viene tendrás ____ años"
Realiza el ejercicio con prompt(mensaje) y haz uso de los template strings (plantillas de cadena)
*/

var nommbre = prompt("Escriba su nombre: ")
var edad = parseInt(prompt("Escriba su edad: "))

document.write(`Hola ${nombre}, tienes ${edad} años el año que viene tendras ${edad + 1} años`)




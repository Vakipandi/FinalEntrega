
function calculaPromedio(user,not1,not2,not3){
    let suma = not1 + not2 + not3;
    let promedio = parseInt(suma / 3);

    if(promedio >= 15 && promedio <= 20){
        alert (`El estudiante ${user}, ha aprobado la materia.`)
    }
    else if(promedio > 10 && promedio < 15){
        alert (`El estudiante ${user}, ha aprobado la materia, pero debera esforzarse más.`)
    }else{
        alert (`El estudiante ${user}, reprobó la materia`)
    }
}

function validaDato (dato){
    while (isNaN(dato)){
        alert("Ingrese un valor numérico, por favor corrija")
        dato = parseInt(prompt("Vuelve a escribir la nota"))
    }
    return dato
}

let cantParticipantes = parseInt(prompt("Ingrese la cantidad de alumnos"))

for ( let i = 0; i < cantParticipantes; i++){
    let person=prompt("Ingrese su nombre:")
    let nota1 = parseInt(prompt(`Ingrese la primera nota de ${person}:`))
    nota1 = validaDato(nota1)
    let nota2 = parseInt(prompt(`Ingrese la segunda nota de ${person}:`))
    nota2 = validaDato(nota2)
    let nota3 = parseInt(prompt(`Ingrese la tercera nota de ${person}:`))
    nota3 = validaDato(nota3)

    calculaPromedio(person,nota1,nota2,nota3)

}




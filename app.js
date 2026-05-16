const selecDimension = document.getElementById("id-select-dimension")
const btnCargar = document.getElementById("id-btn-cargar")
const btnPresentar = document.getElementById("id-btn-presentar")
const textPresentar = document.getElementById("id-txt-presentar")

const btnPromedio = document.getElementById("id-btn-promedio")
const textPromedio = document.getElementById("id-txt-promedio")

const btnSuperior = document.getElementById("id-btn-superior")
const textSuperior = document.getElementById("id-txt-superior")

const btnTotal = document.getElementById("id-btn-total")
const textTotal = document.getElementById("id-txt-total")

const btnMayor = document.getElementById("id-btn-mayor")
const textMayor = document.getElementById("id-txt-mayor")

const btnMenor = document.getElementById("id-btn-menor")
const textMenor = document.getElementById("id-txt-menor")

const btnCritico = document.getElementById("id-btn-critico")
const textCritico = document.getElementById("id-txt-critico")

const btnRepetidos = document.getElementById("id-btn-repetidos")
const textRepetidos = document.getElementById("id-txt-repetidos")

let vectorTemperaturas = []

const diasSemana = [
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
    "Domingo"
]

btnCargar.addEventListener("click", function () {
    const dimension = parseInt(selecDimension.value)
    CargarTemperaturas(dimension)
})

btnPresentar.addEventListener("click", function () {
    textPresentar.value = vectorTemperaturas.join(" , ")
})

btnPromedio.addEventListener("click", function () {
    textPromedio.value = CalcularPromedio()
})

btnSuperior.addEventListener("click", function () {
    textSuperior.value = DiasSuperiores()
})

btnTotal.addEventListener("click", function () {
    textTotal.value = CalcularTotal()
})

btnMayor.addEventListener("click", function () {
    textMayor.value = MayorProduccion()
})

btnMenor.addEventListener("click", function () {
    textMenor.value = MenorProduccion()
})

btnCritico.addEventListener("click", function () {
    textCritico.value = ProduccionCritica()
})

btnRepetidos.addEventListener("click", function () {
    textRepetidos.value = VerificarRepetidos()
})

function CargarTemperaturas(dimension) {

    vectorTemperaturas = []

    for (let i = 0; i < dimension; i++) {

        vectorTemperaturas[i] = parseInt(
            Math.random() * 200 + 50
        )
    }
}

function CalcularTotal() {

    let suma = 0

    for (let i = 0; i < vectorTemperaturas.length; i++) {
        suma = suma + vectorTemperaturas[i]
    }

    return suma
}

function CalcularPromedio() {

    let suma = 0

    for (let i = 0; i < vectorTemperaturas.length; i++) {
        suma = suma + vectorTemperaturas[i]
    }

    let promedio = suma / vectorTemperaturas.length

    return promedio.toFixed(2)
}

function MayorProduccion() {

    let mayor = vectorTemperaturas[0]
    let posicion = 0

    for (let i = 1; i < vectorTemperaturas.length; i++) {

        if (vectorTemperaturas[i] > mayor) {

            mayor = vectorTemperaturas[i]
            posicion = i
        }
    }

    return "Mayor: " + mayor +
        " - Día: " + diasSemana[posicion]
}

function MenorProduccion() {

    let menor = vectorTemperaturas[0]
    let posicion = 0

    for (let i = 1; i < vectorTemperaturas.length; i++) {

        if (vectorTemperaturas[i] < menor) {

            menor = vectorTemperaturas[i]
            posicion = i
        }
    }

    return "Menor: " + menor +
        " - Día: " + diasSemana[posicion]
}

function DiasSuperiores() {

    let promedio = parseFloat(CalcularPromedio())

    let contador = 0

    for (let i = 0; i < vectorTemperaturas.length; i++) {

        if (vectorTemperaturas[i] > promedio) {
            contador++
        }
    }

    return contador
}

function ProduccionCritica() {

    let contador = 0

    for (let i = 0; i < vectorTemperaturas.length; i++) {

        if (vectorTemperaturas[i] < 100) {
            contador++
        }
    }

    return contador
}

function VerificarRepetidos() {

    let repetido = false

    for (let i = 0; i < vectorTemperaturas.length; i++) {

        for (let j = i + 1; j < vectorTemperaturas.length; j++) {

            if (vectorTemperaturas[i] == vectorTemperaturas[j]) {
                repetido = true
            }
        }
    }

    if (repetido) {
        return "Existen producciones repetidas"
    } else {
        return "No existen producciones repetidas"
    }
}
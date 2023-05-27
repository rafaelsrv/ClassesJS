class Spaceship {
    constructor(name, crewQuantity) {
        this.name = name
        this.crewQuantity = crewQuantity
        this.isHitched = false
        this.entraceDoorsOpen = false
    }
    hitch() {       //Método para engatar a nave, o mesmo faz com que o bool seja comutado.
        this.isHitched = true
        this.entraceDoorsOpen = true
    }
}

function showMenu() {
    let chosenOption
    while(chosenOption != "1" && chosenOption != "2" && chosenOption != "3") {
        chosenOption = prompt(  "O que deseja fazer?\n" +
                                "1- Engatar nave\n" +
                                "2- Imprimir naves\n" +
                                "3- Sair do programa")
    }
    return chosenOption //Retorna o valor recebido.

}

function createSpaceship() {
    let spaceshipName = prompt("Informe o nome da nave") //Passando nome por prompt
    let crewQuantity = prompt("Informe a quantidade de tripulantes") // Passando tripulantes por prompt
    let spaceship = new Spaceship(spaceshipName, crewQuantity) //Nova nave recebendo dados.
    return spaceship
}

function printSpaceshipList(spaceships) {
    let spaceshipList = ""
    spaceships.forEach((spaceship, index) => {  //listando naves
        spaceshipList +=    (index + 1) + "- " + spaceship.name + 
                            " (" + spaceship.crewQuantity + " tripulantes)\n"
    })
    alert(spaceshipList) //Mostrando naves pelo alerta
}

let hitchedSpaceships = []
let chosenOption

while(chosenOption != "3") {
    chosenOption = showMenu()
    switch(chosenOption) {
        case "1":
            let spaceshipToAdd = createSpaceship()
            spaceshipToAdd.hitch()
            hitchedSpaceships.push(spaceshipToAdd)
            break
        case "2":
            printSpaceshipList(hitchedSpaceships)
            break
    }
}
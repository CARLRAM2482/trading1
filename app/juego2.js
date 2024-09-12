function iniciarJuego() {
    // Primera elección: Front-End o Back-End
    const area = prompt("¿Quieres seguir hacia el área de Front-End o seguir hacia el área de Back-End?");

    let tecnologia = "";
    if (area.toLowerCase() === "front-end") {
        // Elección en Front-End
        tecnologia = prompt("¿Quieres aprender React o aprender Vue?");
    } else if (area.toLowerCase() === "back-end") {
        // Elección en Back-End
        tecnologia = prompt("¿Quieres aprender C# o aprender Java?");
    } else {
        alert("Por favor, selecciona una opción válida.");
        return;
    }

    // Segunda elección: Especializarse o convertirse en Fullstack
    const especializacion = prompt("¿Quieres seguir especializándote en el área elegida o desarrollarte para convertirte en Fullstack?");

    if (especializacion.toLowerCase() === "especializarse") {
        alert(`¡Genial! Te estás especializando en ${tecnologia} en el área de ${area}.`);
    } else if (especializacion.toLowerCase() === "fullstack") {
        alert(`¡Excelente elección! Vas a convertirte en un desarrollador Fullstack dominando ${tecnologia} y más.`);
    } else {
        alert("Por favor, selecciona una opción válida.");
        return;
    }

    // Pregunta sobre otras tecnologías
    let continuar = true;
    while (continuar) {
        const nuevaTecnologia = prompt("¿Hay alguna otra tecnología que te gustaría aprender?");
        alert(`¡Interesante! Aprender sobre ${nuevaTecnologia} sin duda te será útil.`);

        continuar = prompt("¿Hay alguna otra tecnología que te gustaría aprender? (Escribe 'ok' para continuar, o cualquier otra cosa para terminar)") === "ok";
    }

    alert("¡Gracias por jugar! ¡Sigue aprendiendo y creciendo en tu carrera de programación!");
}

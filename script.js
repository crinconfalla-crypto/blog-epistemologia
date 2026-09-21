// ======================================================
// BLOG INTERACTIVO DE EPISTEMOLOGÍA
// Actividad académica - Ciencias Humanas y Sociales
// ======================================================

document.addEventListener("DOMContentLoaded", () => {

    // --------------------------------------------------
    // BOTÓN DE INICIO
    // --------------------------------------------------

    const btnExplorar = document.getElementById("btnExplorar");

    if (btnExplorar) {
        btnExplorar.addEventListener("click", () => {
            const seccion = document.getElementById("sentidos");

            if (seccion) {
                seccion.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    }


    // --------------------------------------------------
    // TARJETAS INTERACTIVAS
    // --------------------------------------------------

    const tarjetas = document.querySelectorAll(".tarjeta");

    tarjetas.forEach((tarjeta) => {

        tarjeta.addEventListener("click", () => {

            tarjeta.classList.toggle("activa");

        });

    });


    // --------------------------------------------------
    // BOTONES DE SECCIONES
    // --------------------------------------------------

    const botones = document.querySelectorAll("[data-seccion]");

    botones.forEach((boton) => {

        boton.addEventListener("click", () => {

            const destino = boton.getAttribute("data-seccion");

            const elemento = document.getElementById(destino);

            if (elemento) {

                elemento.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });


    // --------------------------------------------------
    // ACORDEÓN DE PREGUNTAS
    // --------------------------------------------------

    const preguntas = document.querySelectorAll(".pregunta");

    preguntas.forEach((pregunta) => {

        pregunta.addEventListener("click", () => {

            const respuesta = pregunta.nextElementSibling;

            if (!respuesta) return;

            respuesta.classList.toggle("visible");

        });

    });


    // --------------------------------------------------
    // BOTÓN "VOLVER ARRIBA"
    // --------------------------------------------------

    const btnArriba = document.getElementById("btnArriba");

    if (btnArriba) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 500) {

                btnArriba.classList.add("mostrar");

            } else {

                btnArriba.classList.remove("mostrar");

            }

        });


        btnArriba.addEventListener("click", () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }


    // --------------------------------------------------
    // MENSAJE INTERACTIVO
    // --------------------------------------------------

    const btnReflexion = document.getElementById("btnReflexion");

    if (btnReflexion) {

        btnReflexion.addEventListener("click", () => {

            const mensaje = document.getElementById("mensajeReflexion");

            if (!mensaje) return;

            mensaje.innerHTML = `
                <strong>Reflexión epistemológica:</strong><br><br>
                La epistemología no se limita a preguntar qué sabemos,
                sino que también cuestiona cómo construimos, justificamos
                y validamos aquello que consideramos conocimiento.
                <br><br>
                En las ciencias humanas y sociales esta reflexión adquiere
                especial importancia porque el conocimiento se relaciona
                con sujetos, contextos históricos, culturales y sociales.
            `;

            mensaje.classList.add("visible");

        });

    }


    // --------------------------------------------------
    // AÑO AUTOMÁTICO
    // --------------------------------------------------

    const anio = document.getElementById("anio");

    if (anio) {

        anio.textContent = new Date().getFullYear();

    }

});

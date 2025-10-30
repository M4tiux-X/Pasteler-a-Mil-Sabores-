// ==============================
// GESTIÓN DE BOLETAS 
// ==============================

document.addEventListener("DOMContentLoaded", () => {
    const contenedor = document.querySelector("#boletas-container");
    const botonBorrarTodas = document.querySelector("#borrar-todas");


    /**
     * Carga y renderiza todas las boletas almacenadas en localStorage
     */
    function cargarBoletas() {
        contenedor.innerHTML = "";
        const boletas = JSON.parse(localStorage.getItem("boletasGuardadas")) || [];

        if (boletas.length === 0) {
            contenedor.innerHTML = "<p>No hay boletas registradas.</p>";
            botonBorrarTodas.style.display = "none";
            return;
        }

        botonBorrarTodas.style.display = "inline-block";

        boletas.forEach((b, index) => {
            const div = document.createElement("div");
            div.classList.add("boleta-container");


            div.innerHTML = `
        <div class="boleta-header">
            <h3>Boleta #${b.id}</h3>
            <button class="boleta-acciones-borrar" data-index="${index}">Eliminar</button>
        </div>
        <p><strong>Fecha:</strong> ${b.fecha}</p>

        <table class="boleta-tabla">
            <thead>
                <tr>
                    <th>Producto</th>
                    <th>Cantidad</th>
                    <th>Precio</th>
                    <th>Subtotal</th>
                </tr>
            </thead>
            <body class="body-boleta">
                ${b.productos
                        .map(
                            (p) => `
                <tr>
                    <td>${p.titulo}</td>
                    <td>${p.cantidad}</td>
                    <td>$${p.precio.toLocaleString()}</td>
                    <td>$${(p.precio * p.cantidad).toLocaleString()}</td>
                </tr>
                `
                        )
                        .join("")}
            </body>
        </table>
        <p class="boleta-total"><strong>Total:</strong> $${b.total.toLocaleString()}</p>
        `;

            contenedor.append(div);
        });

        // Agregar eventos a los botones de eliminación individual
        document.querySelectorAll(".boleta-acciones-eliminar").forEach((boton) => {
            boton.addEventListener("click", eliminarBoleta);
        });
    }

    /**
     * Elimina una boleta específica según su índice
     */
    function eliminarBoleta(e) {
        const index = e.target.dataset.index;
        const boletas = JSON.parse(localStorage.getItem("boletasGuardadas")) || [];
        const confirmar = confirm(`¿Eliminar la Boleta #${boletas[index].id}?`);

        if (confirmar) {
            boletas.splice(index, 1);
            localStorage.setItem("boletasGuardadas", JSON.stringify(boletas));
            cargarBoletas();
        }
    }

    /**
     * Borra todas las boletas del almacenamiento
     */
    botonBorrarTodas.addEventListener("click", () => {
        const confirmar = confirm("¿Seguro que deseas borrar todas las boletas?");
        if (confirmar) {
            localStorage.removeItem("boletasGuardadas");
            cargarBoletas();
        }
    });

    // Inicializar
    cargarBoletas();
});

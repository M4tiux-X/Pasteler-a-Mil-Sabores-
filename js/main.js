// =======================================
// CONFIGURACIÓN Y DATOS DE LA APLICACIÓN
// =======================================

// Catálogo de productos de la pastelería
const productos = [
    // Tortas cuadradas
    {
        id: "TC001",
        titulo: "Torta Cuadrada de Chocolate",
        imagen: "./img/Tortas_Cuadradas/Torta_cuadrada_chocolate.jpg",
        categoria: {
            nombre: "Tortas Cuadradas",
            id: "Tortas cuadradas"
        },
        menu: {
            we: "torta",
            nom: "Torta"
        },
        precio: 45000
    },
    {
        id: "TC002",
        titulo: "Torta Cuadrada de Frutas",
        imagen: "./img/Tortas_Cuadradas/Torta_cuadrada_frutas.jpg",
        categoria: {
            nombre: "Tortas Cuadradas",
            id: "Tortas Cuadradas"
        },
        menu: {
            we: "torta",
            nom: "Torta"
        },
        precio: 50000
    },
    // Tortas circulares
    {
        id: "TT001",
        titulo: "Torta Circular de Vainilla",
        imagen: "./img/Tortas_circulares/Torta_circular_vainilla.jpg",
        categoria: {
            nombre: "Tortas Circulares",
            id: "Tortas Circulares"
        },
        menu: {
            we: "torta",
            nom: "Torta"
        },
        precio: 40000
    },
    {
        id: "TT002",
        titulo: "Torta Circular de Manjar",
        imagen: "./img/Tortas_circulares/Torta_circular_manjar.png",
        categoria: {
            nombre: "Tortas Circulares",
            id: "Tortas Circulares"
        },
        menu: {
            we: "torta",
            nom: "Torta"
        },
        precio: 42000
    },
    // Postres individuales
    {
        id: "PI001",
        titulo: "Mousse de Chocolate",
        imagen: "./img/Postres_individuales/Mousse_de_chocolate_individual.jpg",
        categoria: {
            nombre: "Postres Individuales",
            id: "Postres Individuales"
        },
        menu: {
            we: "individuales",
            nom: "Individuales"
        },
        precio: 5000
    },
    {
        id: "PI002",
        titulo: "Tiramisú Clásico",
        imagen: "./img/Postres_individuales/Tiramisu_de_chocolate_individual.jpg",
        categoria: {
            nombre: "Postres Individuales",
            id: "Postres Individuales"
        },
        menu: {
            we: "individuales",
            nom: "Individuales"
        },
        precio: 5000
    },
    // Productos sin azúcar
    {
        id: "PSA001",
        titulo: "Torta Sin Azúcar de Naranja",
        imagen: "./img/Sin_azucar/Torta_naranza_sin_azucar.jpg",
        categoria: {
            nombre: "Productos Sin Azúcar",
            id: "Productos Sin Azúcar"
        },
        menu: {
            we: "alternativos",
            nom: "Alternativos"
        },
        precio: 48000
    },
    {
        id: "PSA002",
        titulo: "Cheesecake Sin Azúcar",
        imagen: "./img/Sin_azucar/Cheesecake_sin_azucar.jpg",
        categoria: {
            nombre: "Productos Sin Azúcar",
            id: "Productos Sin Azúcar"
        },
        menu: {
            we: "alternativos",
            nom: "Alternativos"
        },
        precio: 47000
    },
    // Pastelería tradicional
    {
        id: "PT001",
        titulo: "Empanada de Manzana",
        imagen: "./img/Pasteleria_tradicional/Empanada_de_manzana.jpg",
        categoria: {
            nombre: "Pastelería Tradicional",
            id: "Pastelería Tradicional"
        },
        menu: {
            we: "especiales",
            nom: "Especiales"
        },
        precio: 3000
    },
    {
        id: "PT002",
        titulo: "Tarta de Santiago",
        imagen: "./img/Pasteleria_tradicional/Tarta_de_Santiago.jpg",
        categoria: {
            nombre: "Pastelería Tradicional",
            id: "Pastelería Tradicional"
        },
        menu: {
            we: "especiales",
            nom: "Especiales"
        },
        precio: 6000
    },
    // Productos sin gluten
    {
        id: "PG001",
        titulo: "Brownie Sin Gluten",
        imagen: "./img/Sin_gluten/Brownie_sin_gluten.jpg",
        categoria: {
            nombre: "Productos Sin Gluten",
            id: "Productos Sin Gluten"
        },
        menu: {
            we: "alternativos",
            nom: "Alternativos"
        },
        precio: 4000
    },
    {
        id: "PG002",
        titulo: "Pan Sin Gluten",
        imagen: "./img/Sin_gluten/Pan_sin_gluten.jpg",
        categoria: {
            nombre: "Productos Sin Gluten",
            id: "Productos Sin Gluten"
        },
        menu: {
            we: "alternativos",
            nom: "Alternativos"
        },
        precio: 3500
    },
    // Productos veganos
    {
        id: "PV001",
        titulo: "Torta Vegana de Chocolate",
        imagen: "./img/Tortas_veganas/Torta_chocolate_vegano1.jpg",
        categoria: {
            nombre: "Productos Veganos",
            id: "Productos Veganos"
        },
        menu: {
            we: "alternativos",
            nom: "Alternativos"
        },
        precio: 50000
    },
    {
        id: "PV002",
        titulo: "Galletas Veganas de Avena",
        imagen: "./img/Tortas_veganas/galletas_avena_veganas.jpg",
        categoria: {
            nombre: "Productos Veganos",
            id: "Productos Veganos"
        },
        menu: {
            we: "alternativos",
            nom: "Alternativos"
        },
        precio: 4500
    },
    // Tortas especiales
    {
        id: "TE001",
        titulo: "Torta Especial de Cumpleaños",
        imagen: "./img/Tortas_especiales/Torta_cumpleaños.jpg",
        categoria: {
            nombre: "Tortas Especiales",
            id: "Tortas Especiales"
        },
        menu: {
            we: "especiales",
            nom: "Especiales"
        },
        precio: 55000
    },
    {
        id: "TE002",
        titulo: "Torta Especial de Boda",
        imagen: "./img/Tortas_especiales/Torta_boda.jpg",
        categoria: {
            nombre: "Tortas Especiales",
            id: "Tortas Especiales"
        },
        menu: {
            we: "especiales",
            nom: "Especiales"
        },
        precio: 60000
    }
];

// Referencias a elementos del DOM
const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesMenu = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
const numerito = document.querySelector("#numerito");
let botonesAgregar = document.querySelectorAll(".producto-agregar");

// =======================================
// FUNCIONES DE UTILIDAD Y RENDERIZADO
// =======================================

function cargarProductos(productosElegidos) {
    // Limpiar el contenedor antes de cargar nuevos productos
    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalle">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;
        contenedorProductos.append(div);
    });

    actualizarBotonesAgregar();
}

/**
 * Actualiza los event listeners de los botones "Agregar"
 */
function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");
    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

/**
 * Actualiza el número mostrado en el icono del carrito
 */
function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}

// =======================================
// GESTIÓN DEL CARRITO DE COMPRAS
// =======================================

// Variables globales del carrito
let productosEnCarrito;

/**
 * Inicializa el carrito desde localStorage o crea uno vacío
 */
function inicializarCarrito() {
    let productosEnCarritoLocalStorage = localStorage.getItem("productos-en-carrito");
    
    if (productosEnCarritoLocalStorage) {
        productosEnCarrito = JSON.parse(productosEnCarritoLocalStorage);
        actualizarNumerito();
    } else {
        productosEnCarrito = [];
    }
    
}

function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if (productosEnCarrito.some(producto => producto.id === idBoton)) {
        // Si el producto ya está en el carrito, incrementar cantidad
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        // Si es un producto nuevo, agregarlo con cantidad 1
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }
    
    actualizarNumerito();
    
    // Guardar en localStorage
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

// =======================================
// CONFIGURACIÓN DE EVENTOS Y INICIALIZACIÓN
// =======================================

/**
 * Configura los event listeners para los botones del menú
 */
function configurarEventListeners() {
    botonesMenu.forEach(boton => {
        boton.addEventListener("click", (e) => {
            // Remover clase active de todos los botones
            botonesMenu.forEach(boton => boton.classList.remove("active"));
            // Agregar clase active al botón clickeado
            e.currentTarget.classList.add("active");

            if (e.currentTarget.id !== "todos") {
                // Filtrar productos por categoría
                const productoMenu = productos.find(producto => producto.menu.we === e.currentTarget.id);
                tituloPrincipal.innerText = productoMenu.menu.nom;

                const productosBoton = productos.filter(producto => producto.menu.we === e.currentTarget.id);
                cargarProductos(productosBoton);
            } else {
                // Mostrar todos los productos
                tituloPrincipal.innerText = "Todos Los Productos";
                cargarProductos(productos);
            }
        });
    });
}

/**
 * Inicializa la aplicación
 */
function inicializarApp() {
    // Inicializar carrito desde localStorage
    inicializarCarrito();
    
    // Cargar todos los productos al inicio
    cargarProductos(productos);
    
    // Configurar event listeners
    configurarEventListeners();
}

// =======================================
// EJECUCIÓN INICIAL
// =======================================

// Inicializar la aplicación cuando se carga la página
inicializarApp();


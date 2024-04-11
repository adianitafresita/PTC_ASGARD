// Constantes para establecer el contenido de la tabla.
const TABLE_BODY = document.getElementById('tableBody'),
    ROWS_FOUND = document.getElementById('rowsFound');
// Constantes para establecer los elementos del componente Modal.
const SAVE_MODAL = new bootstrap.Modal('#saveModal'),
    MODAL_TITLE = document.getElementById('modalTitle');
// Constantes para establecer los elementos del formulario de guardar.
const SAVE_FORM = document.getElementById('saveForm'),
    NOMBRES = document.getElementById('nombre'),
    APELLIDOS = document.getElementById('descripcionProducto'),
    DUI = document.getElementById('precioProducto'),
    NIT = document.getElementById('existenciasProducto'),
    DEPARTAMENTO = document.getElementById('existenciasProducto'),
    MUNICIPIO = document.getElementById('existenciasProducto'),
    CORREO = document.getElementById('existenciasProducto'),
    TELEFÓNO = document.getElementById('estadoProducto');

// Se recorre el conjunto de registros (dataset) fila por fila a través del objeto row.
DATA.dataset.forEach(row => {
    // Se establece un icono para el estado del producto.
    (row.estado_producto) ? icon = 'bi bi-eye-fill' : icon = 'bi bi-eye-slash-fill';
    // Se crean y concatenan las filas de la tabla con los datos de cada registro.
    TABLE_BODY.innerHTML += `
        <tr>
            <td>${row.nombres}</td>
            <td>${row.apellidos}</td>
            <td>${row.dui}</td>
            <td>${row.nit}</td>
            <td>${row.departamento}</td>
            <td>${row.municipio}</td>
            <td>${row.correo}</td>
            <td>${row.telefóno}</td>
            <td><i class="${icon}"></i></td>
            <td>
                <button type="button" class="btn btn-info" onclick="openUpdate(${row.id_producto})">
                    <i class="bi bi-pencil-fill"></i>
                </button>
                <button type="button" class="btn btn-danger" onclick="openDelete(${row.id_producto})">
                    <i class="bi bi-trash-fill"></i>
                </button>
            </td>
        </tr>
    `;
});
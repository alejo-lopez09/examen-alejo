// ============================================
// ADMIN.JS - Lógica de Administración
// ============================================

const Admin = {
  addRoom(roomData) {
    return Storage.addRoom(roomData);
  },
  deleteRoom(roomId) {
    Storage.deleteRoom(roomId);
  },
  updateRoom(room) {
    Storage.updateRoom(room);
  },
  getRooms() {
    return Storage.getRooms();
  },
  getReservations() {
    return Storage.getReservations();
  },
  cancelReservation(reservationId) {
    Storage.cancelReservation(reservationId);
  }
};

function generarFactura(idReserva) {

    // Datos simulados
    const reserva = {
        cliente: "Alejandro Lopez",
        cedula: "123456789",
        habitacion: "Suite Deluxe",
        fechaEntrada: "2026-05-20",
        fechaSalida: "2026-05-25",
        precioNoche: 320000
    };

    // Calcular noches
    const entrada = new Date(reserva.fechaEntrada);
    const salida = new Date(reserva.fechaSalida);

    const noches = (salida - entrada) / (1000 * 60 * 60 * 24);

    // Total
    const total = noches * reserva.precioNoche;

    // Fecha factura
    const fechaFactura = new Date().toLocaleDateString();

    // Mostrar factura
    const facturaContainer = document.getElementById("facturaContainer");

    facturaContainer.innerHTML = `
        <div class="factura">

            <h2>Factura Hotel El Rincón del Carmen</h2>

            <hr>

            <p><strong>Fecha:</strong> ${fechaFactura}</p>

            <h3>Datos Cliente</h3>

            <p>Nombre: ${reserva.cliente}</p>
            <p>Cédula: ${reserva.cedula}</p>

            <h3>Datos Habitación</h3>

            <p>Habitación: ${reserva.habitacion}</p>
            <p>Precio por noche: $${reserva.precioNoche}</p>

            <h3>Datos Reserva</h3>

            <p>Entrada: ${reserva.fechaEntrada}</p>
            <p>Salida: ${reserva.fechaSalida}</p>
            <p>Noches: ${noches}</p>

            <hr>

            <h2>Total: $${total}</h2>

        </div>
    `;
}

function imprimirFactura() {
    window.print();
}
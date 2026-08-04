function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "#1f1f1f",
        color: "white",
        padding: "40px 20px",
        marginTop: "50px",
      }}
    >
      <div className="container">

        <div className="row text-center">

          <div className="col-md-4 mb-3">
            <h4>🛡️ Seguros Marcio</h4>
            <p>
              Protección y tranquilidad para ti,
              tu familia y tu patrimonio.
            </p>
          </div>

          <div className="col-md-4 mb-3">
            <h5>Contacto</h5>

            <p>📱 968 193 591</p>

            <p>
              📧
              {" "}
              marciocasafrancavalenzuela@gmail.com
            </p>

            <p>📍 Cusco - Perú</p>
          </div>

          <div className="col-md-4 mb-3">
            <h5>Productos</h5>

            <p>🚗 Seguro Vehicular</p>

            <p>❤️ Seguro de Vida</p>

            <p>🏥 Seguro de Salud</p>

            <p>✈️ Seguro de Viaje</p>
          </div>

        </div>

        <hr style={{ borderColor: "#555" }} />

        <div className="text-center">
          <p>
            © {year} Seguros Marcio - Todos los derechos reservados
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
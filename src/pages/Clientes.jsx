import "./Clientes.css";

function Clientes() {

  const servicios = [
    {
      titulo: "Consulta de pólizas",
      descripcion: "Revisa información y detalles de tus seguros contratados.",
      icono: "📄"
    },
    {
      titulo: "Atención personalizada",
      descripcion: "Recibe orientación directa para resolver tus consultas.",
      icono: "🤝"
    },
    {
      titulo: "Renovación de seguros",
      descripcion: "Mantén tus coberturas activas y protegidas.",
      icono: "🔄"
    },
    {
      titulo: "Solicitar asistencia",
      descripcion: "Te ayudamos ante cualquier emergencia o necesidad.",
      icono: "☎️"
    }
  ];

  return (

    <div className="container clientes-container mt-5">

      <h1 className="titulo-clientes">
        Atención para Clientes
      </h1>

      <p className="descripcion-clientes">
        Estamos contigo antes, durante y después de contratar tu seguro.
      </p>

      <div className="clientes-grid">

        {servicios.map((servicio, index) => (

          <div className="cliente-card" key={index}>

            <div className="icono-cliente">
              {servicio.icono}
            </div>

            <h4>
              {servicio.titulo}
            </h4>

            <p>
              {servicio.descripcion}
            </p>

            <a
              href={`https://wa.me/51968193591?text=Hola%20Marcio,%20necesito%20ayuda%20con:%20${encodeURIComponent(servicio.titulo)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-danger"
            >
              Contactar asesor
            </a>

          </div>

        ))}

      </div>

      {/* BENEFICIOS */}

      <div className="row mt-5">

        <div className="col-md-4 text-center">
          <h1>⭐</h1>
          <h5>Confianza</h5>
          <p>Atención cercana y orientación personalizada.</p>
        </div>

        <div className="col-md-4 text-center">
          <h1>⚡</h1>
          <h5>Respuesta rápida</h5>
          <p>Comunicación directa por WhatsApp.</p>
        </div>

        <div className="col-md-4 text-center">
          <h1>🛡️</h1>
          <h5>Protección</h5>
          <p>Soluciones adaptadas a tus necesidades.</p>
        </div>

      </div>

      {/* CONTACTO */}

      <div className="contacto-box">

        <h3>
          ¿Necesitas ayuda?
        </h3>

        <p>
          Comunícate directamente con tu asesor de seguros.
        </p>

        <h4>
          📱 Marcio Casafranca
        </h4>

        <a
          href="https://wa.me/51968193591?text=Hola%20Marcio,%20necesito%20información%20sobre%20seguros."
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-success"
        >
          WhatsApp
        </a>

      </div>

    </div>

  );

}

export default Clientes;
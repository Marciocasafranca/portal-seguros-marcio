function Inversion() {

  const opciones = [
    {
      titulo: "Fondos de Inversión",
      descripcion:
        "Alternativas para hacer crecer tu dinero con respaldo profesional.",
      icono: "📈"
    },
    {
      titulo: "Ahorro e Inversión",
      descripcion:
        "Planes diseñados para alcanzar tus objetivos financieros.",
      icono: "💰"
    },
    {
      titulo: "Protección Patrimonial",
      descripcion:
        "Cuida tu patrimonio mientras construyes tu futuro.",
      icono: "🏠"
    }
  ];


  return (

    <div className="container mt-5 mb-5">

      <div className="text-center">

        <h1 className="text-danger fw-bold">
          Inversión y Protección Financiera
        </h1>

        <p className="lead">
          Construye tu futuro con alternativas de ahorro,
          inversión y protección patrimonial.
        </p>

      </div>



      <div className="row mt-5">

        {
          opciones.map((opcion, index) => (

            <div
              className="col-md-4 mb-4"
              key={index}
            >

              <div
                className="card shadow border-0 h-100 text-center"
                style={{
                  borderRadius: "20px"
                }}
              >

                <div className="card-body p-4">

                  <h1>
                    {opcion.icono}
                  </h1>

                  <h4 className="text-danger fw-bold">

                    {opcion.titulo}

                  </h4>

                  <p className="mt-3">

                    {opcion.descripcion}

                  </p>

                  <a
                    href={`https://wa.me/51968193591?text=Hola%20Marcio,%20quiero%20información%20sobre%20${encodeURIComponent(opcion.titulo)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-danger mt-3"
                  >
                    Solicitar información
                  </a>

                </div>

              </div>

            </div>

          ))
        }

      </div>



      <div
        className="text-center mt-5 p-4"
        style={{
          background: "#dc3545",
          color: "white",
          borderRadius: "20px"
        }}
      >

        <h2>
          Empieza a planificar tu futuro hoy
        </h2>

        <p>
          Recibe asesoría personalizada para encontrar
          la alternativa que mejor se adapte a tus objetivos.
        </p>

        <a
          href="https://wa.me/51968193591?text=Hola%20Marcio,%20deseo%20asesoría%20sobre%20inversión."
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-light btn-lg"
        >
          Hablar con un asesor
        </a>

      </div>

    </div>

  );

}

export default Inversion;
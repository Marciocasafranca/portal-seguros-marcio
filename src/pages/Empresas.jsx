function Empresas() {

  const segurosEmpresa = [
    {
      nombre: "Seguro Empresarial",
      descripcion:
        "Protección integral para instalaciones, operaciones y activos de tu negocio.",
      icono: "🏢"
    },
    {
      nombre: "Seguro SCTR",
      descripcion:
        "Protección para trabajadores frente a riesgos laborales.",
      icono: "🦺"
    },
    {
      nombre: "Seguro Transporte",
      descripcion:
        "Protege mercancías y productos durante su traslado.",
      icono: "🚚"
    },
    {
      nombre: "Seguro Patrimonial",
      descripcion:
        "Respaldo para los bienes más importantes de tu empresa.",
      icono: "🏭"
    },
    {
      nombre: "Responsabilidad Civil",
      descripcion:
        "Protección ante daños ocasionados a terceros.",
      icono: "⚖️"
    },
    {
      nombre: "Seguro de Flotas",
      descripcion:
        "Cobertura para empresas con múltiples vehículos.",
      icono: "🚗"
    }
  ];


  return (

    <div className="container mt-5 mb-5">

      <div className="text-center">

        <h1 className="text-danger fw-bold">
          Seguros para Empresas
        </h1>

        <p className="lead">
          Protege tu empresa, colaboradores y patrimonio
          con soluciones diseñadas para cada necesidad.
        </p>

      </div>



      <div className="row mt-5">

        {
          segurosEmpresa.map((seguro, index) => (

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
                    {seguro.icono}
                  </h1>

                  <h4 className="text-danger fw-bold">

                    {seguro.nombre}

                  </h4>

                  <p className="mt-3">

                    {seguro.descripcion}

                  </p>

                  <a
                    href={`https://wa.me/51968193591?text=Hola%20Marcio,%20quiero%20información%20sobre%20${encodeURIComponent(seguro.nombre)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-danger mt-3"
                  >
                    Solicitar asesoría
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
          ¿Necesitas una solución personalizada?
        </h2>

        <p>
          Te ayudamos a encontrar la cobertura ideal
          para tu empresa.
        </p>

        <a
          href="https://wa.me/51968193591?text=Hola%20Marcio,%20necesito%20una%20asesoría%20para%20mi%20empresa."
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-light btn-lg"
        >
          Contactar por WhatsApp
        </a>

      </div>

    </div>

  );

}

export default Empresas;
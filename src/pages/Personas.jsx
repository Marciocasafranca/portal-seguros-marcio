import { Link } from "react-router-dom";

function Personas() {

  const seguros = [

    {
      nombre: "Seguro de Vida",
      descripcion:
        "Protege a tu familia y garantiza tranquilidad para el futuro.",
      ruta: "/vida"
    },

    {
      nombre: "Seguro Vehicular",
      descripcion:
        "Protección para tu vehículo ante accidentes y riesgos.",
      ruta: "/vehicular"
    },

    {
      nombre: "SOAT",
      descripcion:
        "Cumple con la protección obligatoria para tu vehículo.",
      ruta: "/soat"
    },

    {
      nombre: "Seguro de Salud",
      descripcion:
        "Cuida tu salud y la de tus seres queridos.",
      ruta: "/salud"
    },

    {
      nombre: "Seguro de Viaje",
      descripcion:
        "Viaja protegido ante cualquier imprevisto.",
      ruta: "/viaje"
    },

    {
      nombre: "Seguro de Hogar",
      descripcion:
        "Protege tu casa y tus bienes más importantes.",
      ruta: "/hogar"
    },

    {
      nombre: "Accidentes Personales",
      descripcion:
        "Cobertura para ti y tu familia ante accidentes.",
      ruta: "/accidentes"
    }

  ];

  return (

    <div className="container mt-5 mb-5">

      <h1 className="text-center text-danger fw-bold">
        Seguros para Personas
      </h1>

      <p className="text-center mt-3">
        Soluciones para proteger tu vida, familia y patrimonio.
      </p>

      <div className="row mt-5 justify-content-center">

        {seguros.map((seguro, index) => (

          <div
            className="col-md-4 mb-4 d-flex justify-content-center"
            key={index}
          >

            <div
              className="card shadow text-center h-100"
              style={{
                width: "18rem",
                borderRadius: "15px"
              }}
            >

              <div className="card-body">

                <h4 className="text-danger fw-bold">
                  🛡️ {seguro.nombre}
                </h4>

                <p className="mt-3">
                  {seguro.descripcion}
                </p>

                <Link
                  to={seguro.ruta}
                  className="btn btn-danger mt-3"
                >
                  Cotizar ahora
                </Link>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>

  );

}

export default Personas;
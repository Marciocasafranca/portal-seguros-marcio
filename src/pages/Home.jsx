import "./Home.css";

import marcio from "../assets/imagenes/marcio.jpg";

import vehicular from "../assets/seguros/vehicular.jpg";
import vida from "../assets/seguros/vida.jpg";
import salud from "../assets/seguros/salud.jpg";
import viaje from "../assets/seguros/viaje.jpg";

function Home() {

  const seguros = [

    {
      titulo: "Seguro Vehicular",
      imagen: vehicular,
      descripcion:
        "Protección para tu vehículo ante accidentes, robos y daños."
    },

    {
      titulo: "Seguro de Vida",
      imagen: vida,
      descripcion:
        "Protege el futuro y la tranquilidad de tu familia."
    },

    {
      titulo: "Seguro de Salud",
      imagen: salud,
      descripcion:
        "Atención y respaldo médico cuando más lo necesitas."
    },

    {
      titulo: "Seguro de Viaje",
      imagen: viaje,
      descripcion:
        "Viaja tranquilo contando con protección."
    }

  ];

  return (

    <>

      {/* PRESENTACIÓN */}

      <section className="hero-mapfre">

        <img
          src={marcio}
          alt="Marcio Casafranca"
          className="foto-marcio"
        />

        <h1 className="titulo-principal">
          Protege lo que más importa
        </h1>

        <h2 className="nombre">
          Marcio Casafranca
        </h2>

        <h3 className="cargo">
          Asesor de Seguros
        </h3>

        <p className="slogan">
          Tu tranquilidad es nuestra prioridad
        </p>

        <p className="descripcion">

          Te ayudo a encontrar soluciones de seguros
          para proteger tu vida, familia y patrimonio
          con una asesoría cercana y personalizada.

        </p>

        <a
          href="https://wa.me/51968193591?text=Hola%20Marcio,%20deseo%20información%20sobre%20sus%20seguros."
          target="_blank"
          rel="noopener noreferrer"
          className="btn-cotizar"
        >
          📱 Solicitar asesoría por WhatsApp
        </a>

      </section>


      {/* SEGUROS */}

      <section className="container py-5">

        <h2 className="text-center mb-5">
          Nuestros Seguros
        </h2>

        <div className="row g-4">

          {
            seguros.map((seguro, index) => (

              <div
                className="col-md-3"
                key={index}
              >

                <div className="card seguro-card h-100">

                  <img
                    src={seguro.imagen}
                    alt={seguro.titulo}
                    className="seguro-imagen"
                  />

                  <div className="card-body">

                    <h5>
                      {seguro.titulo}
                    </h5>

                    <p>
                      {seguro.descripcion}
                    </p>

                    <a
                      href={`https://wa.me/51968193591?text=Hola%20Marcio,%20quiero%20cotizar%20${seguro.titulo}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-danger"
                    >
                      Cotizar por WhatsApp
                    </a>

                  </div>

                </div>

              </div>

            ))
          }

        </div>

      </section>


      {/* VENTAJAS */}

      <section className="container py-5">

        <h2 className="text-center mb-5">
          ¿Por qué elegirnos?
        </h2>

        <div className="row g-4">

          <div className="col-md-4">

            <div className="ventaja-card text-center">

              <h1>🛡️</h1>

              <h5>
                Protección
              </h5>

              <p>
                Soluciones para cuidar lo que más valoras.
              </p>

            </div>

          </div>

          <div className="col-md-4">

            <div className="ventaja-card text-center">

              <h1>🤝</h1>

              <h5>
                Asesoría personalizada
              </h5>

              <p>
                Acompañamiento durante todo el proceso.
              </p>

            </div>

          </div>

          <div className="col-md-4">

            <div className="ventaja-card text-center">

              <h1>⭐</h1>

              <h5>
                Confianza
              </h5>

              <p>
                Atención profesional para nuestros clientes.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ESTADÍSTICAS */}

      <section className="container py-5">

        <h2 className="text-center mb-5">
          Nuestros Resultados
        </h2>

        <div className="row text-center">

          <div className="col-md-3 mb-4">
            <div className="ventaja-card">
              <h1>100+</h1>
              <h5>Clientes asesorados</h5>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <div className="ventaja-card">
              <h1>50+</h1>
              <h5>Pólizas gestionadas</h5>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <div className="ventaja-card">
              <h1>5+</h1>
              <h5>Tipos de seguros</h5>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <div className="ventaja-card">
              <h1>100%</h1>
              <h5>Atención personalizada</h5>
            </div>
          </div>

        </div>

      </section>


      {/* TESTIMONIOS */}

      <section className="container py-5">

        <h2 className="text-center mb-5">
          Lo que dicen nuestros clientes
        </h2>

        <div className="row g-4">

          <div className="col-md-4">

            <div className="testimonial-card">

              <h3>⭐⭐⭐⭐⭐</h3>

              <p>
                Excelente atención y orientación.
                Encontré el seguro ideal para mi familia.
              </p>

              <h5>
                Cliente Cusco
              </h5>

            </div>

          </div>

          <div className="col-md-4">

            <div className="testimonial-card">

              <h3>⭐⭐⭐⭐⭐</h3>

              <p>
                La asesoría fue clara y rápida.
                Muy recomendado.
              </p>

              <h5>
                Cliente Calca
              </h5>

            </div>

          </div>

          <div className="col-md-4">

            <div className="testimonial-card">

              <h3>⭐⭐⭐⭐⭐</h3>

              <p>
                Excelente acompañamiento durante todo
                el proceso de contratación.
              </p>

              <h5>
                Cliente Empresarial
              </h5>

            </div>

          </div>

        </div>

      </section>

    </>

  );

}

export default Home;
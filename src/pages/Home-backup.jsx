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
        "Protección para tu vehículo ante accidentes, robos y daños.",
      mensaje:
        "Hola Marcio, deseo cotizar un Seguro Vehicular."
    },
    {
      titulo: "Seguro de Vida",
      imagen: vida,
      descripcion:
        "Protege el futuro y la tranquilidad de tu familia.",
      mensaje:
        "Hola Marcio, deseo información sobre un Seguro de Vida."
    },
    {
      titulo: "Seguro de Salud",
      imagen: salud,
      descripcion:
        "Atención y respaldo médico cuando más lo necesitas.",
      mensaje:
        "Hola Marcio, deseo información sobre un Seguro de Salud."
    },
    {
      titulo: "Seguro de Viaje",
      imagen: viaje,
      descripcion:
        "Viaja tranquilo contando con protección durante tu viaje.",
      mensaje:
        "Hola Marcio, deseo cotizar un Seguro de Viaje."
    }
  ];

  const enviarWhatsApp = (mensaje) => {
    window.open(
      `https://wa.me/51968193591?text=${encodeURIComponent(mensaje)}`,
      "_blank"
    );
  };

  return (
    <main>

      {/* =====================================================
          HERO PRINCIPAL
          ===================================================== */}

      <section className="hero-corporativo">

        <div className="hero-contenido">

          <div className="hero-texto">

            <span className="hero-etiqueta">
              🛡️ SEGUROS MARCIO
            </span>

            <h1>
              Tu protección.
              <br />
              <span>Nuestra prioridad.</span>
            </h1>

            <p className="hero-descripcion">
              Encuentra soluciones de seguros pensadas
              para protegerte a ti, a tu familia y a tu
              patrimonio.
            </p>

            <div className="hero-asesor">

              <strong>
                Marcio Casafranca
              </strong>

              <span>
                Asesor de Seguros
              </span>

            </div>

            <div className="hero-botones">

              <a
                href="https://wa.me/51968193591?text=Hola%20Marcio,%20deseo%20información%20sobre%20sus%20seguros."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-principal"
              >
                📲 Cotizar ahora
              </a>

              <a
                href="#seguros"
                className="btn-secundario"
              >
                Ver seguros
              </a>

            </div>

          </div>


          <div className="hero-foto">

            <div className="foto-marco">

              <img
                src={marcio}
                alt="Marcio Casafranca - Asesor de Seguros"
                className="foto-marcio"
              />

            </div>

            <div className="foto-badge">

              <span>✓</span>

              <div>
                <strong>Atención personalizada</strong>
                <small>Asesoría profesional</small>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CARRUSEL DE SEGUROS
          ===================================================== */}

      <section className="carrusel-seguros">

        <div
          id="segurosCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="5000"
        >

          {/* INDICADORES */}

          <div className="carousel-indicators">

            <button
              type="button"
              data-bs-target="#segurosCarousel"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Seguro de Vida"
            />

            <button
              type="button"
              data-bs-target="#segurosCarousel"
              data-bs-slide-to="1"
              aria-label="Seguro Vehicular"
            />

            <button
              type="button"
              data-bs-target="#segurosCarousel"
              data-bs-slide-to="2"
              aria-label="Seguro de Salud"
            />

            <button
              type="button"
              data-bs-target="#segurosCarousel"
              data-bs-slide-to="3"
              aria-label="Seguro de Viaje"
            />

          </div>


          {/* CONTENIDO DEL CARRUSEL */}

          <div className="carousel-inner">


            {/* VIDA */}

            <div className="carousel-item active">

              <img
                src={vida}
                className="d-block w-100 carrusel-imagen"
                alt="Seguro de Vida"
              />

              <div className="carrusel-overlay"></div>

              <div className="carousel-caption carrusel-contenido">

                <span className="carrusel-etiqueta">
                  SEGURO DE VIDA
                </span>

                <h2>
                  Protege a quienes
                  <br />
                  más quieres
                </h2>

                <p>
                  Cuida el futuro de tu familia con una
                  alternativa de protección pensada para ti.
                </p>

                <a
                  href="https://wa.me/51968193591?text=Hola%20Marcio,%20deseo%20información%20sobre%20el%20Seguro%20de%20Vida."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-carrusel"
                >
                  Conocer más →
                </a>

              </div>

            </div>


            {/* VEHICULAR */}

            <div className="carousel-item">

              <img
                src={vehicular}
                className="d-block w-100 carrusel-imagen"
                alt="Seguro Vehicular"
              />

              <div className="carrusel-overlay"></div>

              <div className="carousel-caption carrusel-contenido">

                <span className="carrusel-etiqueta">
                  SEGURO VEHICULAR
                </span>

                <h2>
                  Protege tu vehículo
                  <br />
                  y conduce tranquilo
                </h2>

                <p>
                  Encuentra una alternativa de protección
                  para tu vehículo.
                </p>

                <a
                  href="https://wa.me/51968193591?text=Hola%20Marcio,%20deseo%20cotizar%20un%20Seguro%20Vehicular."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-carrusel"
                >
                  Cotizar ahora →
                </a>

              </div>

            </div>


            {/* SALUD */}

            <div className="carousel-item">

              <img
                src={salud}
                className="d-block w-100 carrusel-imagen"
                alt="Seguro de Salud"
              />

              <div className="carrusel-overlay"></div>

              <div className="carousel-caption carrusel-contenido">

                <span className="carrusel-etiqueta">
                  SEGURO DE SALUD
                </span>

                <h2>
                  Tu salud
                  <br />
                  es lo primero
                </h2>

                <p>
                  Conoce alternativas de protección para
                  cuidar de ti y de tu familia.
                </p>

                <a
                  href="https://wa.me/51968193591?text=Hola%20Marcio,%20deseo%20información%20sobre%20Seguro%20de%20Salud."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-carrusel"
                >
                  Consultar →
                </a>

              </div>

            </div>


            {/* VIAJE */}

            <div className="carousel-item">

              <img
                src={viaje}
                className="d-block w-100 carrusel-imagen"
                alt="Seguro de Viaje"
              />

              <div className="carrusel-overlay"></div>

              <div className="carousel-caption carrusel-contenido">

                <span className="carrusel-etiqueta">
                  SEGURO DE VIAJE
                </span>

                <h2>
                  Viaja tranquilo,
                  <br />
                  viaja protegido
                </h2>

                <p>
                  Disfruta tu viaje con mayor tranquilidad
                  y respaldo.
                </p>

                <a
                  href="https://wa.me/51968193591?text=Hola%20Marcio,%20deseo%20información%20sobre%20Seguro%20de%20Viaje."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-carrusel"
                >
                  Ver opciones →
                </a>

              </div>

            </div>

          </div>


          {/* ANTERIOR */}

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#segurosCarousel"
            data-bs-slide="prev"
          >

            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            />

            <span className="visually-hidden">
              Anterior
            </span>

          </button>


          {/* SIGUIENTE */}

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#segurosCarousel"
            data-bs-slide="next"
          >

            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            />

            <span className="visually-hidden">
              Siguiente
            </span>

          </button>

        </div>

      </section>


      {/* =====================================================
          PRESENTACIÓN
          ===================================================== */}

      <section className="presentacion">

        <div className="container">

          <div className="presentacion-contenido">

            <div>

              <span className="seccion-etiqueta">
                SEGUROS MARCIO
              </span>

              <h2>
                Protección que se adapta
                <br />
                <span>a lo que necesitas.</span>
              </h2>

            </div>

            <p>
              Mi objetivo es brindarte una asesoría clara,
              cercana y personalizada para que puedas tomar
              mejores decisiones al momento de proteger lo
              que realmente importa.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          NUESTROS SEGUROS
          ===================================================== */}

      <section
        className="seccion-seguros"
        id="seguros"
      >

        <div className="container">

          <div className="titulo-seccion">

            <span className="seccion-etiqueta">
              NUESTROS PRODUCTOS
            </span>

            <h2>
              Encuentra el seguro adecuado
            </h2>

            <p>
              Conoce algunas de las alternativas de protección
              que podemos gestionar para ti.
            </p>

          </div>


          <div className="row g-4">

            {seguros.map((seguro, index) => (

              <div
                className="col-lg-3 col-md-6"
                key={index}
              >

                <article className="seguro-card">

                  <div className="seguro-imagen-container">

                    <img
                      src={seguro.imagen}
                      alt={seguro.titulo}
                      className="seguro-imagen"
                    />

                    <span className="numero-seguro">
                      0{index + 1}
                    </span>

                  </div>

                  <div className="seguro-contenido">

                    <h3>
                      {seguro.titulo}
                    </h3>

                    <p>
                      {seguro.descripcion}
                    </p>

                    <button
                      onClick={() =>
                        enviarWhatsApp(seguro.mensaje)
                      }
                      className="btn-seguro"
                    >
                      Cotizar
                      <span>→</span>
                    </button>

                  </div>

                </article>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          POR QUÉ ELEGIRNOS
          ===================================================== */}

      <section className="seccion-confianza">

        <div className="container">

          <div className="titulo-seccion titulo-blanco">

            <span className="seccion-etiqueta">
              NUESTRA PROPUESTA
            </span>

            <h2>
              ¿Por qué elegir Seguros Marcio?
            </h2>

          </div>


          <div className="row g-4">

            <div className="col-lg-3 col-md-6">

              <div className="confianza-card">

                <div className="icono-confianza">
                  🛡️
                </div>

                <h3>
                  Protección
                </h3>

                <p>
                  Alternativas para proteger aquello
                  que más valoras.
                </p>

              </div>

            </div>


            <div className="col-lg-3 col-md-6">

              <div className="confianza-card">

                <div className="icono-confianza">
                  🤝
                </div>

                <h3>
                  Asesoría
                </h3>

                <p>
                  Te acompañamos para encontrar una
                  opción adecuada a tus necesidades.
                </p>

              </div>

            </div>


            <div className="col-lg-3 col-md-6">

              <div className="confianza-card">

                <div className="icono-confianza">
                  ⚡
                </div>

                <h3>
                  Rapidez
                </h3>

                <p>
                  Cotizaciones y orientación de manera
                  rápida y sencilla.
                </p>

              </div>

            </div>


            <div className="col-lg-3 col-md-6">

              <div className="confianza-card">

                <div className="icono-confianza">
                  ⭐
                </div>

                <h3>
                  Confianza
                </h3>

                <p>
                  Atención cercana y personalizada
                  durante el proceso.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CONTACTO
          ===================================================== */}

      <section className="seccion-contacto">

        <div className="container">

          <div className="contacto-card">

            <div>

              <span className="seccion-etiqueta">
                ¿NECESITAS ASESORÍA?
              </span>

              <h2>
                Hablemos sobre tu protección.
              </h2>

              <p>
                Cuéntame qué necesitas proteger y
                te ayudaré a encontrar una alternativa.
              </p>

            </div>

            <a
              href="https://wa.me/51968193591?text=Hola%20Marcio,%20deseo%20recibir%20asesoría%20sobre%20seguros."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-contacto"
            >
              📲 Hablar por WhatsApp
            </a>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Home;
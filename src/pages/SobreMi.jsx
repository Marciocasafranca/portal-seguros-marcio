import marcio from "../assets/imagenes/marcio.jpg";

function SobreMi() {
  return (
    <section
      style={{
        padding: "60px 20px",
        background: "#f8f9fa",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "auto",
          display: "flex",
          alignItems: "center",
          gap: "50px",
          flexWrap: "wrap",
        }}
      >

        {/* FOTO */}

        <div style={{ textAlign: "center" }}>

          <img
            src={marcio}
            alt="Marcio Casafranca"
            style={{
              width: "300px",
              height: "300px",
              objectFit: "cover",
              borderRadius: "50%",
              border: "8px solid #dc3545",
              boxShadow: "0 8px 25px rgba(0,0,0,0.2)",
            }}
          />

          <h3
            style={{
              marginTop: "20px",
              color: "#dc3545",
              fontWeight: "bold",
            }}
          >
            Marcio Casafranca
          </h3>

          <p>Asesor de Seguros</p>

          <a
            href="https://wa.me/51968193591"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-success"
          >
            💬 WhatsApp
          </a>

        </div>


        {/* INFORMACIÓN */}

        <div style={{ flex: 1 }}>

          <h1
            style={{
              color: "#dc3545",
              fontSize: "42px",
              fontWeight: "bold",
              marginBottom: "20px",
            }}
          >
            Sobre mí
          </h1>

          <p style={{ fontSize: "18px", lineHeight: "1.8" }}>
            Soy un profesional orientado al servicio y a la atención
            personalizada, comprometido en ayudar a las personas,
            familias y empresas a encontrar la protección adecuada
            para cada etapa de su vida.
          </p>

          <p style={{ fontSize: "18px", lineHeight: "1.8" }}>
            Mi experiencia en atención al cliente, gestión
            administrativa y tecnología me permite brindar una
            asesoría clara, transparente y enfocada en las
            necesidades de cada cliente.
          </p>

          <p style={{ fontSize: "18px", lineHeight: "1.8" }}>
            Actualmente me especializo en soluciones de protección
            como seguros de vida, salud, vehiculares, viajes,
            SCTR y seguros para empresas.
          </p>


          {/* FORMACIÓN */}

          <div
            style={{
              background: "#fff",
              padding: "25px",
              borderRadius: "15px",
              marginTop: "25px",
              boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
            }}
          >
            <h3 style={{ color: "#dc3545" }}>
              Formación Académica
            </h3>

            <p>
              🎓 Estudiante de Ingeniería de Sistemas
              - Universidad Continental
            </p>

            <p>
              💻 Con conocimientos en tecnología,
              atención al cliente y gestión administrativa.
            </p>

          </div>


          {/* ESPECIALIDADES */}

          <div
            style={{
              background: "#fff",
              padding: "25px",
              borderRadius: "15px",
              marginTop: "25px",
              boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
            }}
          >
            <h3 style={{ color: "#dc3545" }}>
              Especialidades
            </h3>

            <ul style={{ lineHeight: "2" }}>
              <li>🚗 Seguro Vehicular</li>
              <li>❤️ Seguro de Vida</li>
              <li>🏥 Seguro de Salud</li>
              <li>✈️ Seguro de Viaje</li>
              <li>🦺 SCTR</li>
              <li>🏢 Seguros Empresariales</li>
            </ul>

          </div>


          {/* CONTACTO */}

          <div
            style={{
              background: "#fff",
              padding: "25px",
              borderRadius: "15px",
              marginTop: "25px",
              boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
            }}
          >
            <h3 style={{ color: "#dc3545" }}>
              Contacto
            </h3>

            <p>📱 968 193 591</p>

            <p>📍 Cusco - Calca</p>

            <p>
              💬 Atención personalizada por WhatsApp
            </p>

          </div>


          {/* COMPROMISO */}

          <div
            style={{
              marginTop: "25px",
              padding: "20px",
              background: "#dc3545",
              color: "white",
              borderRadius: "15px",
            }}
          >
            <h4>Mi compromiso</h4>

            <p style={{ margin: 0 }}>
              Brindar confianza, respaldo y soluciones
              personalizadas para proteger lo que más valoras.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default SobreMi;
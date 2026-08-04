import { useState } from "react";

import {
  departamentos,
  tiposVehiculo,
  tarifasSoat
} from "../data/tarifasSoat";

import "./Soat.css";


function Soat() {

  const [departamento, setDepartamento] = useState("Cusco");

  const [vehiculo, setVehiculo] = useState(
    "Automóvil Particular"
  );

  // La venta siempre trabaja con SOAT Elect 15
  const modalidad = "SOAT Elect 15";

  const calcularPrecio = () => {

    if (
      tarifasSoat[vehiculo] &&
      tarifasSoat[vehiculo][modalidad] &&
      tarifasSoat[vehiculo][modalidad][departamento]
    ) {
      return tarifasSoat[vehiculo][modalidad][departamento];
    }

    return 0;
  };

  const precio = calcularPrecio();

  // Ícono dinámico
  let iconoVehiculo = "🚗";

  if (
    vehiculo.includes("Motocicleta") ||
    vehiculo === "Cuatrimoto"
  ) {
    iconoVehiculo = "🏍️";
  }
  else if (
    vehiculo.includes("Camión") ||
    vehiculo.includes("Remolcador")
  ) {
    iconoVehiculo = "🚚";
  }
  else if (
    vehiculo.includes("Taxi")
  ) {
    iconoVehiculo = "🚕";
  }
  else if (
    vehiculo.includes("Camioneta") ||
    vehiculo.includes("Pick Up") ||
    vehiculo.includes("Panel")
  ) {
    iconoVehiculo = "🚙";
  }

  const enviarWhatsApp = () => {

    const mensaje =
`Hola, deseo adquirir mi SOAT MAPFRE.

🚗 Vehículo: ${vehiculo}

📍 Departamento: ${departamento}

💰 Precio referencial: S/ ${precio}

⚠️ El precio mostrado es referencial y está sujeto a validación al momento de la emisión según tarifario vigente MAPFRE.

Por favor deseo continuar con la compra.`;

    const url =
      `https://wa.me/51968193591?text=${encodeURIComponent(mensaje)}`;

    window.open(url, "_blank");

  };

  return (

    <div className="soat-container">

      <div className="soat-card">

        <h1>
          {iconoVehiculo} SOAT MAPFRE
        </h1>

        <p>
          Obtén tu SOAT MAPFRE de forma rápida y segura.
        </p>

        <label>
          Departamento
        </label>

        <select
          value={departamento}
          onChange={(e)=>setDepartamento(e.target.value)}
        >

          {
            departamentos.map((dep)=>(

              <option key={dep}>
                {dep}
              </option>

            ))
          }

        </select>

        <label>
          Tipo de vehículo
        </label>

        <select
          value={vehiculo}
          onChange={(e)=>setVehiculo(e.target.value)}
        >

          {
            tiposVehiculo.map((tipo)=>(

              <option key={tipo}>
                {tipo}
              </option>

            ))
          }

        </select>

        <p className="vehiculo-seleccionado">
          Vehículo seleccionado:
          <strong> {vehiculo}</strong>
        </p>

        <div className="resultado">

          <h2>
            Precio Referencial SOAT
          </h2>

          {
            precio > 0 ? (

              <strong>
                S/ {precio}.00
              </strong>

            ) : (

              <div>

                <strong>
                  ⚠️ Tarifa no disponible
                </strong>

                <p>
                  Solicita una cotización personalizada por WhatsApp.
                </p>

              </div>

            )
          }

        </div>

        <p className="beneficios-soat">
          ✅ Emisión rápida<br />
          ✅ Atención personalizada<br />
          ✅ SOAT electrónico inmediato<br />
          ✅ Asesoría por WhatsApp
        </p>

        <div className="requisitos-soat">

          <h3>
            📋 Requisitos para emitir tu SOAT
          </h3>

          <p>
            ✓ Tarjeta de propiedad<br />
            ✓ DNI del propietario<br />
            ✓ Número de placa<br />
            ✓ Correo electrónico<br />
            ✓ Teléfono de contacto
          </p>

        </div>

        <p className="aviso-soat">

          ⚠️ Cotización referencial. El precio final será confirmado
          al momento de la emisión y puede variar por actualizaciones
          de MAPFRE, validación de datos del vehículo o cambios en los
          tarifarios vigentes.

        </p>

        <button onClick={enviarWhatsApp}>
          📲 Comprar por WhatsApp
        </button>

      </div>

    </div>

  );

}

export default Soat;
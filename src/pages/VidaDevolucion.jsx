import { useState } from "react";
import "./VidaDevolucion.css";

function VidaDevolucion() {

  const [edad, setEdad] = useState(38);
  const [cobertura, setCobertura] = useState(100000);
  const [plazo, setPlazo] = useState(15);
  const [devolucion, setDevolucion] = useState(150);

  const calcularPrima = () => {

    let prima = 0;

    if (cobertura === 50000) prima = 80;
    if (cobertura === 100000) prima = 130;
    if (cobertura === 150000) prima = 180;

    prima += (edad - 30) * 2;

    if (plazo === 20) prima += 20;
    if (plazo === 25) prima += 40;

    if (devolucion === 120) prima += 15;
    if (devolucion === 150) prima += 30;

    return prima;
  };

  const prima = calcularPrima();

  const enviarWhatsApp = () => {

    const mensaje = `Hola, deseo una cotización de Seguro Vida Devolución MAPFRE.

Edad: ${edad} años
Cobertura: S/ ${cobertura.toLocaleString()}
Plazo: ${plazo} años
Devolución: ${devolucion}%

Prima referencial: S/ ${prima}

Deseo recibir una cotización personalizada.`;

    window.open(
      `https://wa.me/51968193591?text=${encodeURIComponent(mensaje)}`,
      "_blank"
    );
  };

  return (
    <div className="vida-container">

      <div className="vida-card">

        <h1>🛡️ Seguro Vida Devolución</h1>

        <p>
          Protege a tu familia y recupera parte de tu inversión.
        </p>

        <label>Edad</label>
        <input
          type="number"
          value={edad}
          onChange={(e) => setEdad(Number(e.target.value))}
        />

        <label>Cobertura</label>
        <select
          value={cobertura}
          onChange={(e) => setCobertura(Number(e.target.value))}
        >
          <option value={50000}>S/ 50,000</option>
          <option value={100000}>S/ 100,000</option>
          <option value={150000}>S/ 150,000</option>
        </select>

        <label>Plazo</label>
        <select
          value={plazo}
          onChange={(e) => setPlazo(Number(e.target.value))}
        >
          <option value={10}>10 años</option>
          <option value={15}>15 años</option>
          <option value={20}>20 años</option>
          <option value={25}>25 años</option>
        </select>

        <label>Porcentaje de devolución</label>
        <select
          value={devolucion}
          onChange={(e) => setDevolucion(Number(e.target.value))}
        >
          <option value={100}>100%</option>
          <option value={120}>120%</option>
          <option value={150}>150%</option>
        </select>

        <div className="resultado">

          <h2>Prima Referencial</h2>

          <strong>
            S/ {prima}
          </strong>

        </div>

        <p className="aviso-vida">
          ⚠️ El valor mostrado es referencial y puede variar según edad,
          evaluación de salud, ocupación, cobertura contratada, plazo,
          porcentaje de devolución y políticas vigentes de MAPFRE.
        </p>

        <button onClick={enviarWhatsApp}>
          📲 Solicitar Cotización
        </button>

      </div>

    </div>
  );
}

export default VidaDevolucion;
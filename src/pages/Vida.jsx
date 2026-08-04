import { useState } from "react";

function Vida() {

  const [datos, setDatos] = useState({
    nombre: "",
    dni: "",
    fechaNacimiento: "",
    edad: "",
    sexo: "",
    capital: "",
    plazo: "",
    modalidad: "Ahorro devolución",
    celular: "",
    correo: ""
  });


  const [resultado, setResultado] = useState(null);


  const calcularEdad = (fecha) => {

    const nacimiento = new Date(fecha);
    const hoy = new Date();

    let edad = hoy.getFullYear() - nacimiento.getFullYear();

    const mes = hoy.getMonth() - nacimiento.getMonth();

    if (
      mes < 0 ||
      (mes === 0 && hoy.getDate() < nacimiento.getDate())
    ) {
      edad--;
    }

    return edad;
  };


  const cambiarDato = (e) => {

    const {name,value} = e.target;

    if(name === "fechaNacimiento"){

      setDatos({
        ...datos,
        fechaNacimiento:value,
        edad:calcularEdad(value)
      });

    }else{

      setDatos({
        ...datos,
        [name]:value
      });

    }

  };


  const calcularPrima =()=>{


    if(
      !datos.nombre ||
      !datos.capital ||
      !datos.plazo
    ){

      alert("Complete los datos obligatorios");
      return;

    }


    let primaBase = 0;


    switch(datos.capital){

      case "50000":
        primaBase = 1900;
        break;

      case "100000":
        primaBase = 2900;
        break;

      case "150000":
        primaBase = 3834;
        break;

      case "200000":
        primaBase = 4980.27;
        break;

      case "300000":
        primaBase = 7200;
        break;

      default:
        primaBase = 0;

    }



    let factorPlazo = 1;


    if(datos.plazo==="5")
      factorPlazo = 0.65;


    if(datos.plazo==="10")
      factorPlazo = 0.85;


    if(datos.plazo==="15")
      factorPlazo = 1;


    if(datos.plazo==="20")
      factorPlazo = 1.25;



    let prima = primaBase * factorPlazo;



    if(Number(datos.edad)>50){

      prima = prima * 1.15;

    }



    const mensual = prima / 12;

    const trimestral = prima / 4;

    const semestral = prima / 2;



    let devolucion = 0;


    if(datos.modalidad==="Ahorro devolución"){

      if(datos.plazo==="15"){

        devolucion = Number(datos.capital) * 0.56028;

      }else{

        devolucion = Number(datos.capital) * 0.45;

      }

    }



    setResultado({

      anual:prima.toFixed(2),

      mensual:mensual.toFixed(2),

      trimestral:trimestral.toFixed(2),

      semestral:semestral.toFixed(2),

      devolucion:devolucion.toFixed(2)

    });


  };



  const enviarWhatsApp =()=>{


    const mensaje = `

Hola Marcio, deseo una cotización de Seguro Vida.

DATOS DEL CLIENTE

Nombre:
${datos.nombre}

DNI:
${datos.dni}

Edad:
${datos.edad}

Sexo:
${datos.sexo}


CARACTERISTICAS DEL SEGURO

Modalidad:
${datos.modalidad}

Capital asegurado:
S/ ${datos.capital}

Plazo:
${datos.plazo} años


COTIZACION

Prima anual:
S/ ${resultado.anual}

Prima mensual:
S/ ${resultado.mensual}

Devolución estimada:
S/ ${resultado.devolucion}


Deseo una asesoría personalizada.
`;


    window.open(
      `https://wa.me/51968193591?text=${encodeURIComponent(mensaje)}`,
      "_blank"
    );


  };



return(

<div className="container mt-5 mb-5">


<h1 className="text-center text-danger fw-bold">
❤️ Seguro de Vida
</h1>


<p className="text-center">
Simulador de Vida Ahorro Devolución
</p>



<div className="card shadow">

<div className="card-body">


<h4 className="text-danger">
Datos personales
</h4>


<input
className="form-control mb-3"
name="nombre"
placeholder="Nombre completo"
value={datos.nombre}
onChange={cambiarDato}
/>


<input
className="form-control mb-3"
name="dni"
placeholder="DNI"
value={datos.dni}
onChange={cambiarDato}
/>


<input
type="date"
className="form-control mb-3"
name="fechaNacimiento"
value={datos.fechaNacimiento}
onChange={cambiarDato}
/>


<input
className="form-control mb-3"
value={datos.edad ? datos.edad+" años":""}
readOnly
/>


<select
className="form-select mb-3"
name="sexo"
value={datos.sexo}
onChange={cambiarDato}
>

<option value="">
Sexo
</option>

<option>
Masculino
</option>

<option>
Femenino
</option>

</select>



<h4 className="text-danger">
Características del seguro
</h4>


<select
className="form-select mb-3"
name="capital"
value={datos.capital}
onChange={cambiarDato}
>

<option value="">
Capital asegurado
</option>

<option value="50000">
S/ 50,000
</option>

<option value="100000">
S/ 100,000
</option>

<option value="150000">
S/ 150,000
</option>

<option value="200000">
S/ 200,000
</option>

<option value="300000">
S/ 300,000
</option>


</select>




<select
className="form-select mb-3"
name="plazo"
value={datos.plazo}
onChange={cambiarDato}
>

<option value="">
Plazo
</option>

<option value="5">
5 años
</option>

<option value="10">
10 años
</option>

<option value="15">
15 años
</option>

<option value="20">
20 años
</option>

</select>



<button
className="btn btn-danger w-100"
onClick={calcularPrima}
>
Calcular cotización
</button>



{
resultado &&

<div className="alert alert-success mt-4">


<h4>
Resultado
</h4>


<p>
Prima anual:
<b>
S/ {resultado.anual}
</b>
</p>


<p>
Prima mensual:
<b>
S/ {resultado.mensual}
</b>
</p>


<p>
Prima trimestral:
<b>
S/ {resultado.trimestral}
</b>
</p>


<p>
Prima semestral:
<b>
S/ {resultado.semestral}
</b>
</p>


<hr/>


<p>
Devolución estimada:
<b>
S/ {resultado.devolucion}
</b>
</p>


<button
className="btn btn-success"
onClick={enviarWhatsApp}
>
Enviar WhatsApp
</button>


</div>

}



</div>

</div>


</div>

);


}


export default Vida;
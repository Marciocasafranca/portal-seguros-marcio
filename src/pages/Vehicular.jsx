import { useState } from "react";


function Vehicular() {


  const [datos, setDatos] = useState({

    nombre: "",
    dni: "",
    celular: "",
    correo: "",

    placa: "",
    marca: "",
    modelo: "",
    anio: "",
    valor: "",
    uso: ""

  });



  const [resultado, setResultado] = useState(null);




  const cambiarDato = (e) => {

    setDatos({

      ...datos,

      [e.target.name]: e.target.value

    });

  };






  const calcularSeguro = () => {


    if (

      !datos.nombre ||
      !datos.marca ||
      !datos.modelo ||
      !datos.anio ||
      !datos.valor

    ) {

      alert("Complete los datos obligatorios");

      return;

    }



    let porcentaje = 0.035;



    if(datos.uso === "Trabajo"){

      porcentaje = 0.045;

    }



    const prima = Number(datos.valor) * porcentaje;



    setResultado({

      prima: prima.toFixed(2)

    });



  };






  const enviarWhatsApp = () => {


    const mensaje = `

Hola Marcio, deseo cotizar Seguro Vehicular.


DATOS DEL CLIENTE

Nombre:
${datos.nombre}

DNI:
${datos.dni}

Celular:
${datos.celular}

Correo:
${datos.correo}



DATOS DEL VEHÍCULO

Placa:
${datos.placa}

Marca:
${datos.marca}

Modelo:
${datos.modelo}

Año:
${datos.anio}

Valor del vehículo:
S/ ${datos.valor}

Uso:
${datos.uso}



PRIMA REFERENCIAL:

S/ ${resultado.prima}


Deseo una cotización formal.

`;



    window.open(

      `https://wa.me/51968193591?text=${encodeURIComponent(mensaje)}`,

      "_blank"

    );


  };






return (

<div className="container mt-5 mb-5">


<h1 className="text-center text-danger fw-bold">

🚗 Seguro Vehicular

</h1>


<p className="text-center">

Protege tu vehículo contra accidentes, robos y daños.

</p>





<div className="row justify-content-center mt-4">


<div className="col-md-7">



<div className="card shadow border-0">


<div className="card-body p-4">





<h4 className="text-danger fw-bold">

Datos del cliente

</h4>





<input

className="form-control mb-3"

name="nombre"

placeholder="Nombre completo"

onChange={cambiarDato}

/>



<input

className="form-control mb-3"

name="dni"

placeholder="DNI"

maxLength="8"

onChange={cambiarDato}

/>



<input

className="form-control mb-3"

name="celular"

placeholder="Celular"

onChange={cambiarDato}

/>



<input

className="form-control mb-3"

name="correo"

placeholder="Correo electrónico"

onChange={cambiarDato}

/>






<hr/>






<h4 className="text-danger fw-bold">

Datos del vehículo

</h4>





<input

className="form-control mb-3"

name="placa"

placeholder="Placa"

onChange={cambiarDato}

/>





<select

className="form-select mb-3"

name="marca"

onChange={cambiarDato}

>


<option value="">

Seleccione marca

</option>


<option>Toyota</option>

<option>Hyundai</option>

<option>Kia</option>

<option>Nissan</option>

<option>Chevrolet</option>

<option>Otro</option>


</select>







<input

className="form-control mb-3"

name="modelo"

placeholder="Modelo"

onChange={cambiarDato}

/>





<input

type="number"

className="form-control mb-3"

name="anio"

placeholder="Año del vehículo"

onChange={cambiarDato}

/>





<input

type="number"

className="form-control mb-3"

name="valor"

placeholder="Valor aproximado del vehículo S/"

onChange={cambiarDato}

/>






<select

className="form-select mb-4"

name="uso"

onChange={cambiarDato}

>


<option value="">

Uso del vehículo

</option>


<option>

Particular

</option>


<option>

Trabajo

</option>


</select>






<div className="text-center">


<button

className="btn btn-danger px-5"

onClick={calcularSeguro}

>

Calcular seguro

</button>


</div>






{
resultado &&

(

<div className="alert alert-success mt-4 text-center">


<h5>

Prima referencial anual

</h5>


<h2>

S/ {resultado.prima}

</h2>




<button

className="btn btn-success"

onClick={enviarWhatsApp}

>

📱 Solicitar cotización por WhatsApp

</button>



</div>

)

}




</div>


</div>


</div>


</div>


</div>

);


}



export default Vehicular;
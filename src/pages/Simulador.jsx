import { useState } from "react";


function Simulador() {


  const [tipoSeguro, setTipoSeguro] = useState("");

  const [datos, setDatos] = useState({

    nombre: "",
    dni: "",
    fechaNacimiento: "",
    celular: "",
    correo: "",

    marca: "",
    modelo: "",
    anio: "",
    placa: "",

    capital: "",
    plazo: "",

  });



  const cambiarDato = (e) => {

    setDatos({

      ...datos,

      [e.target.name]: e.target.value

    });

  };




  const enviarWhatsApp = (e) => {

    e.preventDefault();


    let mensaje = `Hola Marcio, deseo una cotización.%0A%0A`;

    mensaje += `TIPO DE SEGURO: ${tipoSeguro}%0A%0A`;

    mensaje += `DATOS DEL CLIENTE%0A`;

    mensaje += `Nombre: ${datos.nombre}%0A`;

    mensaje += `DNI: ${datos.dni}%0A`;

    mensaje += `Fecha nacimiento: ${datos.fechaNacimiento}%0A`;

    mensaje += `Celular: ${datos.celular}%0A`;

    mensaje += `Correo: ${datos.correo}%0A%0A`;



    if(tipoSeguro === "Seguro Vehicular"){

      mensaje += `DATOS DEL VEHÍCULO%0A`;

      mensaje += `Marca: ${datos.marca}%0A`;

      mensaje += `Modelo: ${datos.modelo}%0A`;

      mensaje += `Año: ${datos.anio}%0A`;

      mensaje += `Placa: ${datos.placa}%0A`;

    }



    if(tipoSeguro === "Seguro de Vida"){

      mensaje += `DATOS DEL SEGURO%0A`;

      mensaje += `Capital asegurado: ${datos.capital}%0A`;

      mensaje += `Plazo: ${datos.plazo} años%0A`;

    }



    window.open(

      `https://wa.me/51968193591?text=${mensaje}`,

      "_blank"

    );


  };




  return (

    <div className="container mt-5 mb-5">


      <h1 className="text-center text-danger fw-bold">

        Simulador de Seguros

      </h1>


      <p className="text-center">

        Completa tus datos y recibe asesoría personalizada.

      </p>




      <div className="card shadow border-0 mt-5">


        <div className="card-body p-4">



          <h4 className="text-danger fw-bold">

            🛡️ Selecciona tu seguro

          </h4>



          <select

            className="form-select mb-4"

            value={tipoSeguro}

            onChange={(e)=>setTipoSeguro(e.target.value)}

          >

            <option value="">

              Seleccione una opción

            </option>


            <option>

              Seguro de Vida

            </option>


            <option>

              Seguro Vehicular

            </option>


            <option>

              SOAT

            </option>


            <option>

              Seguro de Salud

            </option>


            <option>

              Seguro Viaje

            </option>


          </select>





          {
            tipoSeguro && (

              <form onSubmit={enviarWhatsApp}>


                <h5 className="text-danger">

                  Datos personales

                </h5>



                <input

                  className="form-control mb-3"

                  name="nombre"

                  placeholder="Nombre completo"

                  onChange={cambiarDato}

                  required

                />



                <input

                  className="form-control mb-3"

                  name="dni"

                  placeholder="DNI"

                  maxLength="8"

                  onChange={cambiarDato}

                  required

                />



                <input

                  type="date"

                  className="form-control mb-3"

                  name="fechaNacimiento"

                  onChange={cambiarDato}

                  required

                />



                <input

                  className="form-control mb-3"

                  name="celular"

                  placeholder="Celular"

                  onChange={cambiarDato}

                  required

                />



                <input

                  className="form-control mb-3"

                  name="correo"

                  placeholder="Correo"

                  onChange={cambiarDato}

                />





                {
                  tipoSeguro === "Seguro Vehicular" && (

                    <>

                    <hr/>

                    <h5 className="text-danger">

                      Datos del vehículo

                    </h5>


                    <input

                      className="form-control mb-3"

                      name="marca"

                      placeholder="Marca vehículo"

                      onChange={cambiarDato}

                    />


                    <input

                      className="form-control mb-3"

                      name="modelo"

                      placeholder="Modelo"

                      onChange={cambiarDato}

                    />


                    <input

                      className="form-control mb-3"

                      name="anio"

                      placeholder="Año"

                      onChange={cambiarDato}

                    />


                    <input

                      className="form-control mb-3"

                      name="placa"

                      placeholder="Placa"

                      onChange={cambiarDato}

                    />


                    </>

                  )
                }





                {
                  tipoSeguro === "Seguro de Vida" && (

                    <>

                    <hr/>

                    <h5 className="text-danger">

                      Datos del seguro

                    </h5>


                    <input

                      className="form-control mb-3"

                      name="capital"

                      placeholder="Capital asegurado"

                      onChange={cambiarDato}

                    />


                    <input

                      className="form-control mb-3"

                      name="plazo"

                      placeholder="Plazo en años"

                      onChange={cambiarDato}

                    />


                    </>

                  )
                }





                <button

                  className="btn btn-danger w-100"

                >

                  📱 Enviar solicitud por WhatsApp

                </button>



              </form>

            )
          }




        </div>

      </div>


    </div>

  );


}


export default Simulador;
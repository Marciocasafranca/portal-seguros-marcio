import { useState } from "react";

function Registro() {

  const [formulario, setFormulario] = useState({
    nombre: "",
    dni: "",
    fechaNacimiento: "",
    celular: "",
    correo: "",
    seguro: ""
  });


  const [solicitudes, setSolicitudes] = useState(
    JSON.parse(localStorage.getItem("solicitudes")) || []
  );



  const manejarCambio = (e) => {

    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value
    });

  };



  const registrarSolicitud = (e) => {

    e.preventDefault();


    const nuevaSolicitud = {

      ...formulario,

      fechaRegistro: new Date().toLocaleDateString()

    };



    const actualizadas = [

      ...solicitudes,

      nuevaSolicitud

    ];



    setSolicitudes(actualizadas);



    localStorage.setItem(
      "solicitudes",
      JSON.stringify(actualizadas)
    );



    const mensaje =

      `Hola Marcio, deseo información sobre seguros.%0A%0A` +

      `Nombre: ${formulario.nombre}%0A` +

      `DNI: ${formulario.dni}%0A` +

      `Fecha de nacimiento: ${formulario.fechaNacimiento}%0A` +

      `Celular: ${formulario.celular}%0A` +

      `Correo: ${formulario.correo}%0A` +

      `Seguro solicitado: ${formulario.seguro}`;



    window.open(

      `https://wa.me/51968193591?text=${mensaje}`,

      "_blank"

    );



    setFormulario({

      nombre: "",

      dni: "",

      fechaNacimiento: "",

      celular: "",

      correo: "",

      seguro: ""

    });

  };





  return (

    <div className="container mt-5 mb-5">


      <h1 className="text-center text-danger fw-bold">
        Registro de Cliente
      </h1>


      <p className="text-center mt-3">
        Déjanos tus datos y un asesor se comunicará contigo.
      </p>




      <div className="row mt-5 justify-content-center">


        <div className="col-md-6">


          <div className="card shadow border-0">


            <div className="card-body">


              <h4 className="text-center text-danger fw-bold mb-4">
                Solicita información
              </h4>




              <form onSubmit={registrarSolicitud}>



                <input

                  type="text"

                  name="nombre"

                  className="form-control mb-3"

                  placeholder="Nombre completo"

                  value={formulario.nombre}

                  onChange={manejarCambio}

                  required

                />




                <input

                  type="text"

                  name="dni"

                  className="form-control mb-3"

                  placeholder="DNI"

                  value={formulario.dni}

                  onChange={manejarCambio}

                  maxLength="8"

                  required

                />





                <label className="form-label">

                  Fecha de nacimiento

                </label>


                <input

                  type="date"

                  name="fechaNacimiento"

                  className="form-control mb-3"

                  value={formulario.fechaNacimiento}

                  onChange={manejarCambio}

                  required

                />






                <input

                  type="tel"

                  name="celular"

                  className="form-control mb-3"

                  placeholder="Celular"

                  value={formulario.celular}

                  onChange={manejarCambio}

                  required

                />






                <input

                  type="email"

                  name="correo"

                  className="form-control mb-3"

                  placeholder="Correo electrónico"

                  value={formulario.correo}

                  onChange={manejarCambio}

                  required

                />







                <select

                  name="seguro"

                  className="form-select mb-3"

                  value={formulario.seguro}

                  onChange={manejarCambio}

                  required

                >


                  <option value="">

                    Seleccione tipo de seguro

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
                    Seguro Salud
                  </option>


                  <option>
                    Seguro Empresarial
                  </option>


                  <option>
                    Seguro Viaje
                  </option>


                </select>





                <div className="text-center">


                  <button

                    type="submit"

                    className="btn btn-danger px-5"

                  >

                    Registrar solicitud

                  </button>


                </div>



              </form>



            </div>


          </div>


        </div>


      </div>





      {
        solicitudes.length > 0 && (


          <div className="mt-5">


            <h3 className="text-danger fw-bold text-center">

              Solicitudes registradas

            </h3>




            <div className="table-responsive">


              <table className="table table-bordered shadow mt-3">


                <thead className="table-danger">


                  <tr>

                    <th>
                      Nombre
                    </th>

                    <th>
                      DNI
                    </th>

                    <th>
                      Nacimiento
                    </th>

                    <th>
                      Celular
                    </th>

                    <th>
                      Seguro
                    </th>

                    <th>
                      Fecha registro
                    </th>


                  </tr>


                </thead>




                <tbody>


                  {
                    solicitudes.map((solicitud, index) => (


                      <tr key={index}>


                        <td>
                          {solicitud.nombre}
                        </td>


                        <td>
                          {solicitud.dni}
                        </td>


                        <td>
                          {solicitud.fechaNacimiento}
                        </td>


                        <td>
                          {solicitud.celular}
                        </td>


                        <td>
                          {solicitud.seguro}
                        </td>


                        <td>
                          {solicitud.fechaRegistro}
                        </td>



                      </tr>


                    ))
                  }


                </tbody>


              </table>


            </div>


          </div>


        )

      }



    </div>

  );

}


export default Registro;
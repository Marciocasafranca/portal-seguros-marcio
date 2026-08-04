import "./App.css";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";



import Home from "./pages/Home";
import Personas from "./pages/Personas";
import Empresas from "./pages/Empresas";
import Inversion from "./pages/Inversion";
import Registro from "./pages/Registro";
import Clientes from "./pages/Clientes";
import Simulador from "./pages/Simulador";
import SobreMi from "./pages/SobreMi";


// NUEVO
import Vida from "./pages/Vida";
import Soat from "./pages/Soat";
import Vehicular from "./pages/Vehicular";
import VidaDevolucion from "./pages/VidaDevolucion";

function App() {


  return (


    <BrowserRouter>


      <Navbar />



      <Routes>


        <Route
          path="/"
          element={<Home />}
        />


        <Route
          path="/personas"
          element={<Personas />}
        />


        <Route
          path="/empresas"
          element={<Empresas />}
        />


        <Route
          path="/inversion"
          element={<Inversion />}
        />


        <Route
          path="/registro"
          element={<Registro />}
        />


        <Route
          path="/clientes"
          element={<Clientes />}
        />


        <Route
          path="/simulador"
          element={<Simulador />}
        />


        <Route
          path="/sobre-mi"
          element={<SobreMi />}
        />



        {/* NUEVA RUTA SEGURO DE VIDA */}

        <Route
          path="/vida"
          element={<Vida />}
        />

        <Route 
          path="/soat" 
          element={<Soat />} 
        />

        <Route 
          path="/vehicular" 
          element={<Vehicular />} 
        />

        <Route
          path="/vida-devolucion"
          element={<VidaDevolucion />}
        />

      </Routes>


      <Footer />


      <WhatsAppButton />



    </BrowserRouter>


  );


}


export default App;
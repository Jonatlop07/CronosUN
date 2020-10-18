import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./estilos/modalNuevoProyecto.scss";

const ModalNuevoProyecto = (props) => {
   const [titulo, setTitulo] = useState("");
   const [descripcion, setDescripcion] = useState("");
   const [esPublico, setEsPublico] = useState(false);

   const INSTRUCCIONES_DESCRIPCION =
      "Este espacio es para que ingreses una breve descripción de tu nuevo proyecto.";

   const crearContenidoNuevoProyecto = () => {};

   const terminarRegistroNuevoProyecto = () => {
      props.terminarRegistroNuevoProyecto();
   };

   return ReactDOM.createPortal(
      <div className="contenedor-modal-nuevo-proyecto">
         <div className="modal-nuevo-proyecto">
            <h5>Nuevo Proyecto</h5>
            <form>
               <div className="modal-nuevo-proyecto-formulario">
                  <label
                     className="modal-nuevo-proyecto-formulario-etiqueta"
                     for="edicion-titulo-proyecto"
                  >
                     Título del proyecto:
                  </label>
                  <input
                     className="modal-nuevo-proyecto-formulario-texto"
                     id="edicion-titulo-proyecto"
                     placeholder="Espacio para ingresar el título de tu proyecto."
                     value={titulo}
                     onChange={(e) => {
                        setTitulo(e.currentTarget.value);
                     }}
                     required
                  />
                  <label
                     className="modal-nuevo-proyecto-formulario-etiqueta"
                     for="edicion-descripcion-proyecto"
                  >
                     Descripción del proyecto:
                  </label>
                  <textarea
                     className="modal-nuevo-proyecto-formulario-texto"
                     id="edicion-descripcion-proyecto"
                     rows="3"
                     name="entrada"
                     placeholder={INSTRUCCIONES_DESCRIPCION}
                     value={descripcion}
                     onChange={(e) => {
                        setDescripcion(e.currentTarget.value);
                     }}
                     required
                  ></textarea>
                  <label className="modal-nuevo-proyecto-formulario-etiqueta">
                     Privacidad:
                  </label>

                  <label className="modal-nuevo-proyecto-formulario-privacidad">
                     <input
                        className="modal-nuevo-proyecto-formulario-privacidad-caja-seleccion"
                        type="checkbox"
                        onChange={() => setEsPublico(!esPublico)}
                        defaultChecked={esPublico}
                     />
                     <span className="modal-nuevo-proyecto-formulario-privacidad-deslizador"></span>
                     {esPublico ? "Público" : "Privado"}
                  </label>
               </div>
            </form>

            <div>
               <input
                  className="modal-nuevo-proyecto-formulario-registrar"
                  type="submit"
                  value="Continuar"
                  onClick={crearContenidoNuevoProyecto}
               />
               <button
                  className="modal-nuevo-proyecto-formulario-cancelar"
                  onClick={terminarRegistroNuevoProyecto}
               >
                  Cancelar
               </button>
            </div>
         </div>
      </div>,
      document.getElementById("modal")
   );
};

export default ModalNuevoProyecto;

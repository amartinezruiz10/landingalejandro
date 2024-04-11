import React from "react";
import Pregunta1 from "../atoms/Preguntas/Pregunta1";
import Pregunta2 from "../atoms/Preguntas/Pregunta2";

function Preguntas() {
  return (
    <div className="flex flex-col gap-2">
      <Pregunta1 />
      <Pregunta2/>
    </div>
  );
}

export default Preguntas;



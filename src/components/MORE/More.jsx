import React from "react";
import './More.css'

export default function More() {
  return (
    <div className="more-container">
      <h1>MORE</h1>
      <h2>MObility REport</h2>
      <div className="more-description">
        <span>
          More es una herramienta para comunicar incidencias en el transporte publico, haciendo mas
          eficiente y rapido su mantenimiento. Mi tarea ha sido crear un prototipo sencillo que puediera
          plasmar las ideas del equipo. El tiempo era muy limitado y aun no esta finalizado.
          Pero para mi fue un gran aprendizaje comunicarme y diseñar el proyecto sin una empresa detras.
        </span>
        <ul>
          <li>Map Page</li>
          <li>Report Page</li>
        </ul>
        <span>
        Aun queda algo de trabajo que hacer, aunque en la actualidad el equipo tiene otras prioridades.
        </span>
      </div>

      <div className="link-to-more">
        <a
          href="https://paugal.github.io/mobility-report/"
          target="_blank"
          rel="noopener noreferrer"
        >
          See the project
        </a>
      </div>
    </div>
      );
}

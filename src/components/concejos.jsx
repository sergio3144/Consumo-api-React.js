import React from "react";
import ImageFondo from '../images/pattern-divider-desktop.svg'
import IconBoton from '../images/icon-dice.svg'
import './concejos.css'


function Concejos ({ concejosApi, numberApi, textConcejo }) {
  return (
    <>
    <h1 className="title">Espera 5 segundos para traer tu otro concejo</h1>
    <div className="container">
      <h1 className="adivinanza">CONCEJO <span className="number">#{numberApi}</span></h1>
      <p className="api-concejo">
        { textConcejo }
      </p>
      <img className="image-desktop"
      src={ImageFondo} 
      alt="imageDesktop" />

      <button className="btn-reset" onClick={concejosApi}>
        <img className="icon" 
        src={IconBoton}
        alt="icon" />
      </button>
    </div>
    </>
    
  )
}

export { Concejos }
import React from 'react'
import "./App.css"

function miComponente({rey}) {

  const comprar = (elemento) =>{
    rey.setTotal((e) => e+ rey.precio)
    elemento.target.parentNode.style.display="none"
    
  }

  return (
    <div className={`caja ${rey.clase}`}>
        <h2>{rey.nombre}</h2>

        <img src={rey.img} alt="" />
        <p>Precio:</p>
        <p>€{rey.precio}</p>
        <button onClick={comprar} className='boton'>comprar</button>
    </div>
  )
}

export default miComponente
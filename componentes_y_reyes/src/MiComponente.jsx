import React from 'react'
import "./App.css"

function miComponente({rey}) {

  const cambiar = () =>{

  }
  
  return (
    <div className={`caja ${rey.clase}`}>
        <h2>{rey.nombre}</h2>

        <img src={rey.img} alt="" />
        <p>Precio:</p>
        <p>€{rey.precio}</p>
        <button onClick={cambiar} className='boton'>comprar</button>
    </div>
  )
}

export default miComponente
import MiComponente from './MiComponente';
import React, { useState } from 'react';
import "./App.css"


function App() {

  const [valor,setValor] = useState(0)

  return (
    <>
    <h1>Total a pagar {valor}</h1>
    <div className='contenedor'>
      <MiComponente rey={{nombre:"Atanagildo",img:"http://www.html6.es/img/rey_atanagildo.png",precio:178,clase:"c1"}}></MiComponente>
      <MiComponente rey={{nombre:"Ervigio",img:"http://www.html6.es/img/rey_ervigio.png",precio:178,clase:"c2"}}></MiComponente>
      <MiComponente rey={{nombre:"Ataúlfo",img:"http://www.html6.es/img/rey_ataulfo.png",precio:178,clase:"c3"}}></MiComponente>
      <MiComponente rey={{nombre:"Leogivildo",img:"http://www.html6.es/img/rey_leogivildo.png",precio:178,clase:"c4"}}></MiComponente>
      <MiComponente rey={{nombre:"Recesvinto",img:"http://www.html6.es/img/rey_recesvinto.png",precio:178,clase:"c5"}}></MiComponente>
      <MiComponente rey={{nombre:"Sisebuto",img:"http://www.html6.es/img/rey_sisebuto.png",precio:178,clase:"c6"}}></MiComponente>

    </div>
    </>
  )
}

export default App
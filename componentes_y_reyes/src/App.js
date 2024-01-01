import MiComponente from './MiComponente';
import React, { useState } from 'react';
import "./App.css"


function App() {

  const [total,setTotal] = useState(0)

  return (
    <>
    <h1>Total a pagar {total}</h1>
    <div className='contenedor'>
      <MiComponente rey={{nombre:"Atanagildo",img:"http://www.html6.es/img/rey_atanagildo.png",precio:178,clase:"c1",setTotal}}></MiComponente>
      <MiComponente rey={{nombre:"Ervigio",img:"http://www.html6.es/img/rey_ervigio.png",precio:50,clase:"c2",setTotal}}></MiComponente>
      <MiComponente rey={{nombre:"Ataúlfo",img:"http://www.html6.es/img/rey_ataulfo.png",precio:60,clase:"c3",setTotal}}></MiComponente>
      <MiComponente rey={{nombre:"Leogivildo",img:"http://www.html6.es/img/rey_leogivildo.png",precio:70,clase:"c4",setTotal}}></MiComponente>
      <MiComponente rey={{nombre:"Recesvinto",img:"http://www.html6.es/img/rey_recesvinto.png",precio:80,clase:"c5",setTotal}}></MiComponente>
      <MiComponente rey={{nombre:"Sisebuto",img:"http://www.html6.es/img/rey_sisebuto.png",precio:90,clase:"c6",setTotal}}></MiComponente>

    </div>
    </>
  )
}

export default App
import React, {useEffect, useRef, useState} from 'react';
import './App.css';
// importar componente de la carpeta componente...
import List from './components/List'
import Form from './components/Form'
import Contador from './components/Contador'
import {Sub} from './types'

// crear interface ----(logica de negocio)--------------
// ----- poner en otro sitio separado ► logica de estado
// ----- para poder re-utilizar la interface -----------
// interface Sub {
//   nick: string
//   avatar: string
//   subMonths: number
//   description?: string
// }

// crear interface ----(logica de estado)------
interface AppState {
  subs: Array<Sub>
  newSubsNumber: number
}
// --------------------------

// crear initial state ------------
// ------con la anterior data------
const INITIAL_STATE = [
  {
    nick: 'dapelu',
    subMonths: 3,
    avatar: 'https://i.pravatar.cc/150?u=dapelu',
    description: 'Dapelu hace de moderador a veces'
  },
  {
    nick: 'sergio_serrano',
    subMonths : 7,
    avatar: 'https://i.pravatar.cc/150?u=sergio_serrano'
  }
]
// --------------------------------
function App() {
  // colocamos la interface como un tipo de dato que recibira
  const [subs, setSubs] = useState<AppState["subs"]>([])
  const [newSubsNumber, setNewSubsNumber] = useState<AppState["newSubsNumber"]>(0)
  // usamos el useRef para guardar 'div' y lo inicializamos
  const divRef = useRef<HTMLDivElement>(null)
  // inicializaremos con valores usando useEffect
  // esto para la primera vez que se reenderize

  useEffect(() => {
    setSubs(INITIAL_STATE)
  }, [])

  // mejora es tener un handle para nuevos subs -----
  // ----- error de tipo al enviarlo directo --------
  const handleNewSub = (newSub: Sub):void => {
    setSubs(subs => [...subs, newSub])
  }

// solo modificamos el <List> para que pase de JSX --> React.Component
// regresamos a JSX.. --- pero ahora en List.tsx (otra forma de retornar)
// -- form: ahora acepta un parametro {setSubs} ------
// -- ref: agregamos ---------------------------------
// -- useReducer : agregamos ----(nothing)------------
  return (
    <div className="App" ref={divRef}>
      <h1>edu subs </h1>
      <List subs={subs} />
      <Form onNewSub={handleNewSub} />
      <Contador />
    </div>
  );
}

export default App;

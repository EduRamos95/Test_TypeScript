import React, {useEffect, useState} from 'react';
import './App.css';
// importar componente de la carpeta componente...
import List from './components/List'
import Form from './components/Form'
// crear interface ----------
interface Sub {
  nick: string
  avatar: string
  subMonths: number
  description?: string
}

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

  // inicializaremos con valores usando useEffect
  // esto para la primera vez que se reenderize

  useEffect(() => {
    setSubs(INITIAL_STATE)
  }, [])
// solo modificamos el <List> para que pase de JSX --> React.Component
// regresamos a JSX.. --- pero ahora en List.tsx (otra forma de retornar)
  return (
    <div className="App">
      <h1>edu subs </h1>
      <List subs={subs} />
      <Form />
    </div>
  );
}

export default App;

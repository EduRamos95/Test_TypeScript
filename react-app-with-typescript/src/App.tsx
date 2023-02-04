import React, {useState} from 'react';
import './App.css';
// crear interface ----------
interface Sub {
  nick: string
  avatar: string
  subMonths: number
  description?: string
}
// --------------------------
function App() {
  // colocamos la interface como un tipo de dato que recibira
  const [subs, setSubs] = useState<Array<Sub>>([])
  // ahora no hay error, simplemente los datos estan vacios
  return (
    <div className="App">
      <h1>edu subs </h1>
      <ul>
        {
          subs.map(sub => {
            return (
              <li key={sub.nick}>
                <img src={sub.avatar} alt={`Avatar for ${sub.nick}`}/>
                <h4>{sub.nick} (<small>{sub.subMonths}</small>)</h4>
                <p>{sub.description?.substring(0, 100)}</p>
              </li>
            )
          })
        }
      </ul>
    </div>
  );
}

export default App;

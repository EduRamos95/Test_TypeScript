import {useState} from 'react'
// import {Sub} from '../types'
interface Cont {
  count: number
}

const Contador = ():JSX.Element => {
  const [state, setState] = useState<Cont>({count: 0})
  const FuncCont = () => {
    setState({count: state.count + 1})
  }
  const FuncReset = () => {
    setState ({count: 0})
  }
  return (
    <div>
      <p>You clicked {state.count} </p>
      <button onClick={FuncCont}>click me!</button>
      <button onClick={FuncReset}>Reset</button>
    </div>
  )
}

export default Contador

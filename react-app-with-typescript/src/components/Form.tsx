import {useReducer, useState} from 'react'
import { Sub } from '../types'
// creando interface para reutilizar ------------------
interface FormState {
  inputValues: Sub
}
// ----------------------------------------------------
// creando una funcion para añadir nuevos subs --------
// - cambiando el tipo de dato segun el parametro ingreso
interface FormProps {
  onNewSub: (newSub: Sub) => void
}
//--- valores iniciales para form ----------------------
const INITIAL_STATE = {
  nick: '',
  subMonths: 0,
  avatar: '',
  description: ''
}
//-----------------------------------------------------

// ---- definiendo datos para ingresar al formReducer --
type FormReducerAction = {
  type: "change_value",
  payload: {
    inputName: string,
    inputValue: string,
  }
} | {
  type: "clear"
}


// ---creando el formReducer--------------
const formReducer = (state: FormState["inputValues"] , action: FormReducerAction) => {
  // hacer una determinado codigo dependiendo --------
  // ---- el action type -----------------------------
  // ---- swicth no incluye default ------------------
  // ---- los eventos solo estan limitados -----------
  switch(action.type){
    case "change_value":
      const {inputName, inputValue} = action.payload
      return {
        ...state,
        [inputName]: inputValue
      }
    case "clear":
      return INITIAL_STATE

    //default:
    //  return state
  }
}


// crear un render para el formmulario ----------------
// --- agregando la funcion flecha como parametro -----
const Form = ({onNewSub}: FormProps) => {
  // useState ----------------------
  // --- se comento para evitar conficto ---
  // const [inputValues, setInputValues] = useState<FormState["inputValues"]>(INITIAL_STATE)
  const [inputValues, dispatch] = useReducer(formReducer, INITIAL_STATE)
  // -----------------------------
  // ahora tendra evento ---------
  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    // para dar el boton evitar que se refresque -----
    evt.preventDefault()
    // añadir nuevo sub -----------------------
    // solo se pasa el nuevo ------------------
    onNewSub(inputValues)
    // para limpiar cada vez que enviamos un submit ---------
    handleClear()
  }
  // --------------------------------------------------------

  // ----evt type any / no tiene contexto -------------------------
  // ------- si copiamos el codigo y lo ponemos dentro del html ---
  // ------- y verificamos el tipo ► React.ChangeEvent<HTMLInputElement>
  // ---- y ahora volvemos y defimos como se requiere -------------
  // ---- al cambiar input ► textarea ---- da un error de tipo ----
  // ------- revisamos el error y tenemos que agregar el tipo -----
  // ------------ tipo ► HTMLTextAreaElement ----------------------
  const handleChange = (evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = evt.target
    // para completar los datos en el dispatch ----
    // --- necesitamos los valores de la etiqueta -
    dispatch({
      type: "change_value",
      payload: {
        inputName: name,
        inputValue: value
      }
    })
    // comentaremos el codigo siguiente: ---------
    // ---- solo usar el dispacth ----useReduce---
    //setInputValues({
    //  ...inputValues,
    //  [evt.target.name]: evt.target.value
    //})
  }
  // --------------------------------------------------------
  const handleClear = () => {
    dispatch({ type: "clear"})

    // comentaremos el codigo siguiente: ---------
    // ---- solo usar el dispacth ----useReduce---
    //setInputValues(INITIAL_STATE)
  }

  // --------------------------------------------------------
  // --------------------------------------------------------

  // --- useRef / creamos un boton para limpiar formulario --
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange}  value={inputValues.nick} type='text'name='nick' placeholder='nick' />
        <input onChange={handleChange}  value={inputValues.subMonths} type='number'name='subMonths' placeholder='subMonths' />
        <input onChange={handleChange}  value={inputValues.avatar} type='text'name='avatar' placeholder='avatar' />
        <textarea onChange={handleChange}  value={inputValues.description} name='description' placeholder='description' />
        <button onClick={handleClear} type='button'>Clear the form</button>
        <button type='submit'>Save new Sub!</button>
      </form>
    </div>
  )
}

export default Form

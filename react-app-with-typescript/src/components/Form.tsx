import {useState} from 'react'
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

//-----------------------------------------------------
// crear un render para el formmulario ----------------
// --- agregando la funcion flecha como parametro -----
const Form = ({onNewSub}: FormProps) => {
  // useState ----------------------
  const [inputValues, setInputValues] = useState<FormState["inputValues"]>({
    nick: '',
    subMonths: 0,
    avatar: '',
    description: ''
  })

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
    setInputValues({
      ...inputValues,
      [evt.target.name]: evt.target.value
    })
  }
  // --------------------------------------------------------
  const handleClear = () => {
    setInputValues({
      nick: '',
      subMonths: 0,
      avatar: '',
      description: ''
    })
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

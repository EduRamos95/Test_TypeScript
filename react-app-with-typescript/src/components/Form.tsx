import {useState} from 'react'

// crear un render para el formmulario ----------------
const Form = () => {
  // useState
  const [inputValues, setInputValues] = useState({
    nick: '',
    subMonths: 0,
    avatar: '',
    description: ''
  })

  // -----------------------------
  const handleSubmit = () => {}

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
  // -----------------------------
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange}  value={inputValues.nick} type='text'name='nick' placeholder='nick' />
        <input onChange={handleChange}  value={inputValues.subMonths} type='number'name='subMonths' placeholder='subMonths' />
        <input onChange={handleChange}  value={inputValues.avatar} type='text'name='avatar' placeholder='avatar' />
        <textarea onChange={handleChange}  value={inputValues.description} name='description' placeholder='description' />
        <button>Save new Sub!</button>
      </form>
    </div>
  )
}

export default Form

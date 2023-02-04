interface Props {
  subs: Array<{
    nick: string
    avatar: string
    subMonths: number
    description?: string
  }>
}
// convertir la funcion en arrow function -------
// ----- exportar al final del codigo -----------
// ----- List pasa a sre tipo JSX -- (cambiar)---
// ------- porque no soporta todas las propiedades (child)
// ------- verificar si es necesario agregar ----
// ------- version corta (React.FC) <Type>-------
// ----- regresar a la version anterior (JSX: Element) ---
const List = ({subs}:Props) => {
  // lo estamos envolviendo en una funcion --------
  // ---- puede ser tomado como otro componente ---
  const renderList = (): Array<JSX.Element> => {
      return subs.map(sub => {
        return (
          <li key={sub.nick}>
            <img src={sub.avatar} alt={`Avatar for ${sub.nick}`}/>
            <h4>{sub.nick} (<small>{sub.subMonths}</small>)</h4>
            <p>{sub.description?.substring(0, 100)}</p>
          </li>
        )
      })
  }
  // renderizamos ya solo la funcion directa
  return (
    <ul>
      {renderList()}
    </ul>
  )
}

export default List

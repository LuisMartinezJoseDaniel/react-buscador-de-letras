import { useCallback, useContext, useRef, useState } from "react"
import useLetras from "../hooks/useLetras";

const Formulario = () => {
  const [busqueda, setBusqueda] = useState( {
    artista: '',
    cancion: ''
  } )

  const { setAlerta, busquedaLetra } = useLetras();


  const handleInputChange = ( e ) => {
    setBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value,
    });
  }

  const handleSubmit = ( e ) => {
    e.preventDefault()

    if ( Object.values( busqueda ).includes( '' ) ) {
      
      setAlerta("Coloca el nombre de artista y canción");
      return;
    }

    busquedaLetra(busqueda);
    
  }

  return (
    <form onSubmit={handleSubmit}>
      <legend>Busca por artista y canción</legend>
      <div className="form-grid">
        <div>
          <label htmlFor="artista">Artista</label>
          <input onChange={handleInputChange} value={busqueda.artista} id="artista" type="text" name="artista" placeholder="Nombre del Artista"/>
        </div>
        <div>
          <label htmlFor="cancion">Canción</label>
          <input onChange={handleInputChange} value={busqueda.cancion} id="cancion" type="text" name="cancion" placeholder="Nombre de la canción"/>
        </div>

        <input type="submit" value="Buscar" />


      </div>
    </form>
  )
}

export default Formulario
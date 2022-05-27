import useLetras from "../hooks/useLetras";
import Spinner from "./Spinner";

const Letra = () => {
  const { letra, cargando } = useLetras();
  
  return cargando ? <Spinner /> : <p className="letra">{letra}</p>;
};

export default Letra;

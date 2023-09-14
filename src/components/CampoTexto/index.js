//code style
import "./CampoTexto.css";

const CampoTexto = (props) => {
  const aoDigitado = (evento) => {
    //todo evento tem target
    //console.log(evento.target.value);

    //chama funcao do componente pai passsado parametros do filho para ela se alterar la pelo use state
    props.aoAlterar(evento.target.value);
  };

  const placeHolderModificado = `${props.placeholder}...`;
  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input
        value={props.valor}
        onChange={aoDigitado}
        required={props.obrigatorio}
        placeholder={placeHolderModificado}
      />
    </div>
  );
};

export default CampoTexto;

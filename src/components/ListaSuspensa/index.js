import "./ListaSuspensa.css";

const ListaSuspensa = (props) => {
  // ao ter mudancas, chamamos o metodo do pai passando valores para ele de la alterar o useState
  return (
    <div className="lista-suspensa">
      <label>{props.label}</label>
      <select
        required={props.obrigatorio}
        value={props.valor}
        onChange={(evento) => {
          props.aoAlterar(evento.target.value);
        }}
      >
        <option value=""></option>
        {props.itens.map((item, index) => {
          return <option key={index}>{item}</option>;
        })}
      </select>
    </div>
  );
};

export default ListaSuspensa;

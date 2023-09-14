import { useState } from "react";
import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";

const Formulario = (props) => {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  const aoSalvar = (evento) => {
    evento.preventDefault(); // navegador nao carregar com envio do form

    props.aoColaboradorCadastro({ nome, cargo, imagem, time });
    console.log("Form foi submetido", nome, cargo, imagem, time);

    // Limpar form após envio dos dados
    setNome("");
    setCargo("");
    setImagem("");
    setTime("");
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto
          valor={nome}
          aoAlterar={(novoValor) => setNome(novoValor)}
          obrigatorio={true}
          label="Nome"
          placeholder="Digite seu nome"
        />
        <CampoTexto
          valor={cargo}
          aoAlterar={(novoValor) => setCargo(novoValor)}
          obrigatorio={true}
          label="Cargo"
          placeholder="Digite seu cargo"
        />
        <CampoTexto
          valor={imagem}
          aoAlterar={(novoValor) => setImagem(novoValor)}
          label="Imagem"
          placeholder="Digite sua imagem"
        />
        <ListaSuspensa
          obrigatorio={true}
          label="Time"
          valor={time}
          itens={props.times}
          aoAlterar={(novoValor) => setTime(novoValor)}
        />
        <Botao>Cadastrar</Botao>
      </form>
    </section>
  );
};

export default Formulario;

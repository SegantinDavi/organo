import { useState } from "react";
import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";

const Formulario = () => {
    const times = [
        "Programacao",
        "Front-End",
        "Data Science",
        "Devops",
        "UX e Design",
        "Mobile",
        "Inovacao e Gestao",
    ];

    const [nome, setNome] = useState("");
    const [cargo, setCargo] = useState("");
    const [imagem, setImagem] = useState("");
    const [time, setTime] = useState("");

    const aoSalvar = (evento) => {
        evento.preventDefault();
        console.log(`Formulario enviado:
            Nome = ${nome}
            Cargo = ${cargo}
            Endereco da imagem = ${imagem}
            Time = ${time}`);
    };

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <CampoTexto
                    label="Nome"
                    placeholder="Digite seu nome"
                    obrigatorio={true}
                    valor={nome}
                    aoAlterar={(valor) => setNome(valor)}
                />
                <CampoTexto
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    obrigatorio={true}
                    valor={cargo}
                    aoAlterar={(valor) => setCargo(valor)}
                />
                <CampoTexto
                    label="Imagem"
                    placeholder="Informe o endereço da imagem"
                    obrigatorio={false}
                    valor={imagem}
                    aoAlterar={(valor) => setImagem(valor)}
                />
                <ListaSuspensa 
                    label="Time" 
                    itens={times} 
                    obrigatorio={true} 
                    valor={time}
                    aoAlterar={(valor) => setTime(valor)}
                />
                <Botao>Criar card</Botao>
            </form>
        </section>
    );
};

export default Formulario;

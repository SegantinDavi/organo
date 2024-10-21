import Colaborador from "../Colaborador";
import "./Time.css";
import hexToRgba from "hex-to-rgba";

const Time = ({ time, colaboradores, aoDeletar, mudarCor }) => {
  return colaboradores.length > 0 ? (
    <section
      className="time"
      style={{
        backgroundColor: hexToRgba(time.cor, "0.3"),
        backgroundImage: "url(/imagens/fundo.png)",
      }}
    >
      <input
        onChange={(evento) => mudarCor(evento.target.value, time.nome)}
        type="color"
        value={time.cor}
        className="input-cor"
      />
      <h3 style={{ borderColor: time.cor }}>{time.nome}</h3>
      <div className="colaboradores">
        {colaboradores.map((colaborador, indice) => {
          return (
            <Colaborador
              key={indice}
              corDeFundo={time.cor}
              nome={colaborador.nome}
              cargo={colaborador.cargo}
              imagem={colaborador.imagem}
              aoDeletar={aoDeletar}
            />
          );
        })}
      </div>
    </section>
  ) : (
    ""
  );
};

export default Time;

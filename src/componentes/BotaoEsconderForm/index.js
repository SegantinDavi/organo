import "./BotaoEsconderForm.css";

const BotaoEsconderForm = ({ aoEsconder }) => {
  return (
    <button className="botao_esconder" onClick={() => aoEsconder()}>
      <img src="/imagens/icons/botao_add.png" alt="icone do botao" />
    </button>
  );
};

export default BotaoEsconderForm;

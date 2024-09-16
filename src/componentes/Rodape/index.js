import './Rodape.css';

const Rodape = () => {
  return (
    <footer>
      <div className='links'>
        <a href="/">
          <img src="/imagens/icons/fb.png" alt="logo do facebook" />
        </a>
        <a href="/">
          <img src="/imagens/icons/ig.png" alt="logo do instagram" />
        </a>
        <a href="/">
          <img src="/imagens/icons/tw.png" alt="logo do twitter" />
        </a>
      </div>
      <img src="/imagens/logo.png" alt="logo do organo" />
      <p>Desenvolvido por Davi Gabriel Segantin.</p>
    </footer>
  );
}

export default Rodape;
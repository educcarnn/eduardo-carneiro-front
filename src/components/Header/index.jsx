import { HeaderDiv } from "./style";

export default function Header() {
  return (
    <div>
      <HeaderDiv>
        <div>
          <select name="Escolha de acordo com gênero" id=""></select>
        </div>
        <div>
          <p>Star Wars</p>
          <input type="text" placeholder="Digite o nome do seu filme" />
          <button>Pesquisar</button>
        </div>
      </HeaderDiv>
      
    </div>
  );
}

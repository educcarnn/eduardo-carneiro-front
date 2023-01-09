import { HeaderDiv } from "./style";

export default function Header() {
  return (
    <HeaderDiv>
        <div>
            <select name="Escolha de acordo com gênero" id=""></select>
        </div>
      <div>
        <div>Cards Star Wars</div>
        <input type="text" placeholder="Digite o nome do seu filme" />
        <button>Pesquisar</button>
      </div>
    </HeaderDiv>
  );
}

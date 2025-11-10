import { Cards } from "../components/Cards";
import { Slides } from "../components/Slides";
import * as S from "./styled";

const Page = () => {
  return (
    <S.Container>
      <S.Slides>
        <Slides />
      </S.Slides>
      <S.Cards>
        <Cards />
      </S.Cards>
      <S.Footer>
        <p>
          Feito de ❤️ por{" "}
          <a
            href="https://github.com/EuKaique"
            target="_blank"
            rel="noreferrer"
          >
            Kaique Oliveira Santos
          </a>
        </p>
      </S.Footer>
    </S.Container>
  );
};

export default Page;

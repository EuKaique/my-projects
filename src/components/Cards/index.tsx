import { cards } from "../../services";
import * as S from "./styled";

export const Cards = () => {
  return (
    <S.Container>
      <div>
        <h2>Todos os projetos</h2>
      </div>
      <S.Content>
        {cards.map((card) => (
          <S.Card
            key={card.id}
            href={card.link}
            target="_blank"
            rel="noreferrer"
          >
            <S.Image src={card.image} alt={String(card.id)} />
          </S.Card>
        ))}
      </S.Content>
    </S.Container>
  );
};

import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  h2 {
    text-align: center;
    margin: 3rem 0;
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;
export const Card = styled.a`
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  width: 350px;
  height: 250px;

  cursor: pointer;

  &:hover {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
    transform: scale(1.05);
    transition-delay: 2ms;
  }
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

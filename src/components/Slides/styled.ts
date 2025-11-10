import styled, { css } from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  margin-top: -1rem;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
`;

export const SlideWrapper = styled.div`
  position: relative;
`;

export const Image = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
  display: block;
`;

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;
`;

export const Title = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 8px;
`;

export const Description = styled.p`
  font-size: 1rem;
  opacity: 0.9;
`;

export const NavButton = styled.button<{ left?: boolean; right?: boolean }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.7);
  border: none;
  border-radius: 50%;
  padding: 8px;
  cursor: pointer;
  transition: background 0.3s;
  color: #000;

  &:hover {
    background: white;
  }

  ${({ left }) =>
    left &&
    css`
      left: 10px;
    `}
  ${({ right }) =>
    right &&
    css`
      right: 10px;
    `}
`;

export const Indicators = styled.div`
  position: absolute;
  bottom: 12px;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 8px;
`;

export const IndicatorDot = styled.button<{ active?: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  background: ${({ active }) => (active ? "white" : "rgba(255, 255, 255, 0.5)")};
  transition: background 0.3s;
`;

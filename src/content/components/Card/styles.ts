import styled from 'styled-components';

interface CardProps {
  cardColor: string;
}

export const Container = styled.a<CardProps>`
  background-color: ${({ cardColor }) => cardColor};

  width: 260px;
  height: 260px;

  margin: 1rem;
  border-radius: 1rem;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.15);

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  transition: transform 220ms ease-in-out;

  &:hover {
    transform: scale(1.02);
  }

  svg {
    width: 12.5rem;
    height: 12.5rem;
  }
`;

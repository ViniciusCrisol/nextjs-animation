import styled from 'styled-components';

interface CardProps {
  cardColor: string;
}

export const Container = styled.div<CardProps>`
  background-color: ${({ cardColor }) => cardColor};

  width: 260px;
  height: 260px;

  margin: 1rem;
  padding: 1rem;
  border-radius: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: transform 200ms ease-in-out;

  &:hover {
    transform: scale(1.02);
  }

  svg {
    width: 80%;
  }
`;

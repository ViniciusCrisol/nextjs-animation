import React, { ReactChild, ReactComponentElement, ReactSVG } from 'react';

import { Container } from './styles';

interface CardProps {
  image: string;
  cardColor: string;
}

const Card: React.FC<CardProps> = ({ image: Image, cardColor }) => {
  return (
    <Container cardColor={cardColor}>
      <Image />
    </Container>
  );
};

export default Card;

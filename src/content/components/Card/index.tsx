import Link from 'next/link';
import React from 'react';

import { Container } from './styles';

interface CardProps {
  name: string;
  image: string;
  cardColor: string;
}

const Card: React.FC<CardProps> = ({ image: Image, cardColor, name }) => {
  return (
    <Link href="/team/[name]" as={`/team/${name}`}>
      <Container cardColor={cardColor}>
        <Image />
      </Container>
    </Link>
  );
};

export default Card;

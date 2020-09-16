import Link from 'next/link';
import React from 'react';

import { Container } from './styles';

const Card: React.FC<TeamProps> = ({ image: Image, cardColor, name }) => {
  return (
    <Link href="/team/[name]" as={`/team/${name}`}>
      <Container cardColor={cardColor}>
        <Image />
      </Container>
    </Link>
  );
};

export default Card;

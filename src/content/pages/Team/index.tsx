import React from 'react';
import Link from 'next/link';

import Lakers from '../../../assets/lakers.svg';
import Clippers from '../../../assets/clippers.svg';

import { Container, LeftContainer, RightContainer } from './styles';

interface TeamPageProps {
  team: TeamProps;
}

const Team: React.FC<TeamPageProps> = ({ team }) => {
  const { cardColor, image, name } = team;

  const Image = team.image === 'Lakers' ? Lakers : Clippers;

  return (
    <Container>
      <LeftContainer bgColor={cardColor}>
        <span className="logo">
          <Image />
        </span>
      </LeftContainer>

      <RightContainer>
        <Link href="/">
          <a>
            <strong>«</strong> Back to home
          </a>
        </Link>
      </RightContainer>
    </Container>
  );
};

export default Team;

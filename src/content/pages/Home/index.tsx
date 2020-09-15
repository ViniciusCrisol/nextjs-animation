import React from 'react';

import Lakers from '../../../assets/lakers.svg';
import Clippers from '../../../assets/clippers.svg';

import Card from '../../components/Card';

import { Container } from './styles';

interface HomePageProps {
  teams: TeamProps[];
}

const Home: React.FC<HomePageProps> = ({ teams }) => {
  return (
    <Container>
      <h1>Which the best?</h1>

      <main>
        {teams.map(team => (
          <Card
            name={team.name}
            key={team.cardColor}
            cardColor={team.cardColor}
            image={team.image === 'Lakers' ? Lakers : Clippers}
          />
        ))}
      </main>
    </Container>
  );
};

export default Home;

import React from 'react';

import Lakers from '../../../assets/lakers.svg';
import Clippers from '../../../assets/clippers.svg';

import Card from '../../components/Card';

import { Container } from './styles';

const teams = [
  { image: Lakers, cardColor: '#fcb827' },
  { image: Clippers, cardColor: '#ce3d53' },
];

const Home: React.FC = () => {
  return (
    <Container>
      <h1>Which the best?</h1>

      <main>
        {teams.map(team => (
          <Card
            key={team.cardColor}
            image={team.image}
            cardColor={team.cardColor}
          />
        ))}
      </main>
    </Container>
  );
};

export default Home;

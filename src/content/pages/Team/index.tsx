import React from 'react';

import { Container } from './styles';

interface TeamPageProps {
  team: TeamProps;
}

const Team: React.FC<TeamPageProps> = ({ team }) => {
  return (
    <Container>
      <h1>Team</h1>
    </Container>
  );
};

export default Team;

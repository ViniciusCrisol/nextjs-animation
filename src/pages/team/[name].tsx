import React from 'react';
import { NextPage } from 'next';

import api from '../../services/api';
import { useFetch } from '../../hooks/useFetch';

interface HomeProps {
  initialData: TeamProps;
}

const Team: NextPage<HomeProps> = ({ initialData }) => {
  const { data: team } = useFetch<TeamProps>('/', initialData);

  return (
    <div>
      <h1>{team.name}</h1>
    </div>
  );
};

Team.getInitialProps = async ({ query }) => {
  console.log();

  const response = await api.get(`/?name=${query.name}`);

  console.log(response[0]);

  return { initialData: response.data };
};

export default Team;

import React from 'react';
import Head from 'next/head';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

import Content from '../../content/pages/Team';

import api from '../../services/api';
import { useFetch } from '../../hooks/useFetch';

interface HomeProps {
  initialData: TeamProps;
}

const Team: NextPage<HomeProps> = ({ initialData }) => {
  const router = useRouter();
  const path = router.query.name;

  const { data } = useFetch<TeamProps>(`/?name=${path}`, initialData);

  const team = data[0] || initialData;

  return (
    <>
      <Head>
        <title>{team.name}</title>
      </Head>

      <Content team={team} />
    </>
  );
};

Team.getInitialProps = async ({ query }) => {
  const response = await api.get(`/?name=${query.name}`);

  return { initialData: response.data[0] };
};

export default Team;

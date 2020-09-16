import React from 'react';
import Head from 'next/head';
import { NextPage } from 'next';

import api from '../services/api';
import { useFetch } from '../hooks/useFetch';

import Content from '../content/pages/Home';

interface HomeProps {
  initialData: TeamProps[];
}

const Home: NextPage<HomeProps> = ({ initialData }) => {
  const { data: teams } = useFetch<TeamProps[]>('/', initialData);

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <Content teams={teams} />
    </>
  );
};

Home.getInitialProps = async () => {
  const response = await api.get('/');

  return { initialData: response.data };
};

export default Home;

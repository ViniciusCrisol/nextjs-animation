import React from 'react';
import Head from 'next/head';
import { NextPage } from 'next';

import { useFetch } from '../hooks/useFetch';
import api from '../services/api';

import Content from '../content/pages/Home';
import Layout from '../components/Layout';

interface HomeProps {
  initialData: TeamProps[];
}

const Home: NextPage<HomeProps> = ({ initialData }) => {
  const { data: teams } = useFetch<TeamProps[]>('/teams', initialData);

  return (
    <Layout>
      <Head>
        <title>Home</title>
      </Head>

      <Content teams={teams} />
    </Layout>
  );
};

Home.getInitialProps = async () => {
  const response = await api.get('/teams');

  return { initialData: response.data };
};

export default Home;

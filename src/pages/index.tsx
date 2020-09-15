import React from 'react';
import Head from 'next/head';

import api from '../services/api';
import { useFetch } from '../hooks/useFetch';

import Content from '../content/pages/Home';
import Layout from '../components/Layout';

const Home = ({ initialData }) => {
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

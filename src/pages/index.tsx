import React, { useEffect } from 'react';
import Head from 'next/head';

import { useFetch } from '../hooks/useFetch';

import Content from '../content/pages/Home';
import Layout from '../components/Layout';

const Home = () => {
  const { data: teams } = useFetch<TeamProps[]>('/teams');

  return (
    <Layout>
      <Head>
        <title>Home</title>
      </Head>

      <Content teams={teams} />
    </Layout>
  );
};

export default Home;

import React from 'react';
import Head from 'next/head';

import Content from '../content/pages/Home';
import Layout from '../components/Layout';

const Home: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>Home</title>
      </Head>

      <Content />
    </Layout>
  );
};

export default Home;

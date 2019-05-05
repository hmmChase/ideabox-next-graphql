import NextHead from 'next/head';

import Home from '../components/Home/Home';

const IndexPage = () => (
  <>
    <NextHead>
      <title>next-graphql-starter-v3</title>
    </NextHead>

    <Home />
  </>
);

export default IndexPage;

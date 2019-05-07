import NextHead from 'next/head';

import Home from '../components/Home/Home';

const IndexPage = () => (
  <>
    <NextHead>
      <title>ideabox-v3</title>
    </NextHead>

    <Home />
  </>
);

export default IndexPage;

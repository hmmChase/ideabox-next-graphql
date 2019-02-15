import PropTypes from 'prop-types';
import Head from '../Head/Head';
import Header from '../Header/Header';

const Layout = ({ children }) => (
  <>
    <Head />
    <Header />
    <main>{children}</main>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;

import PropTypes from 'prop-types';
import Header from '../Header/Header';

const Layout = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;

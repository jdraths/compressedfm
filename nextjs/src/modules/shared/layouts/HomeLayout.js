import styled from 'styled-components';
import PropTypes from 'prop-types';
import { HeaderHome } from 'src/modules/shared/components/Header/HeaderHome';
import { Footer } from 'src/modules/shared/components/Footer';

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const HomeLayout = ({ children, footerLinks }) => (
  <StyledPage>
    <HeaderHome />
    {children}
    <Footer footerLinks={footerLinks} />
  </StyledPage>
);

HomeLayout.propTypes = {
  children: PropTypes.any,
};

/** -------------------------------------------------
* STYLES
---------------------------------------------------- */
const StyledPage = styled.div`
  // background: url('/images/bg.png') center -25px no-repeat;
  background: url('/images/stars-bg.gif') center -25px;
  // background-size: 100% auto;
  min-height: 100vh;
`;

export { HomeLayout };

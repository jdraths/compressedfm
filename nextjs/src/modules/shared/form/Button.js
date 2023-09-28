import PropTypes from 'prop-types';
import styled from 'styled-components';

// components
import { Icon } from 'src/modules/shared/components/Icon';

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const Button = ({ label }) => (
  <StyledButton type="submit">
    {label}
    <Icon name="arrow" />
  </StyledButton>
);

Button.propTypes = {
  label: PropTypes.string,
};

Button.defaultProps = {
  label: 'Submit',
};

/** -------------------------------------------------
* STYLES
---------------------------------------------------- */
const StyledButton = styled.button`
  align-items: center;
  background: ${(props) => props.theme.white};
  border: none;
  bottom: 10px;
  color: ${(props) => props.theme.black};
  cursor: pointer;
  display: flex;
  font-family: ${(props) => props.theme.mono};
  font-size: 1.8rem;
  justify-content: center;
  left: 10px;
  margin-top: 15px;
  padding: 15px 50px 15px 70px;
  position: relative;
  text-transform: uppercase;
  transition: all 0.25s ease-in-out;
  z-index: 2;

  &:hover {
    background: ${(props) => props.theme.yellow};
    transform: translateX(-15px) translateY(15px);
  }

  &:before {
    border: 2px solid ${(props) => props.theme.white};
    content: '';
    display: block;
    height: 100%;
    left: -15px;
    position: absolute;
    top: 15px;
    transition: all 0.25s ease-in-out;
    width: 100%;
    z-index: 1;
  }

  &:hover:before {
    border-color: ${(props) => props.theme.yellow};
    transform: translateX(13px) translateY(-17px); /* magical numbers take border into account */
  }

  svg {
    transition: right 0.25s ease-in-out;
  }
`;

export { Button };

import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import kwesforms from 'kwesforms';

// component
import { Icon } from 'src/modules/shared/components/Icon';

// styles
import { MixinBodyCopy } from 'src/styles/Typography';
import { MixinTextField, MixinLabel, MixinButtonWithArrow } from 'src/styles/Form';
import { Breakpoints } from 'src/styles/Breakpoints';

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const Newsletter = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = () => {};

  useEffect(() => {
    kwesforms.init();
  }, []);

  // TODO: update functionality
  return (
    <StyledNewsletter>
      <h2>Sign up for our Mailing List</h2>
      <p>Want to stay up to date on our podcast and everything Altus Academy?</p>
      <form
        onSubmit={handleSubmit()}
        className="kwes-form"
        action="https://kwes.io/api/foreign/forms/VBsOqTJ8MTds1LU9utSf"
      >
        <input type="email" name="email" id="email" {...register('email', { required: true })} placeholder=" " />
        <label htmlFor="email">Email Address</label>
        <button className="submit" type="submit" onClick={onSubmit}>
          <Icon name="arrow" height="64" width="64" />
        </button>
      </form>
    </StyledNewsletter>
  );
};

/** -------------------------------------------------
* STYLES
---------------------------------------------------- */
const StyledNewsletter = styled.div`
  padding: ${(props) => props.theme.mobilePadding};
  position: relative;

  @media (${Breakpoints.portrait}) {
    margin: 60px auto;
    padding: 0;
    width: ${(props) => props.theme.formWidth};
  }

  h2 {
    color: ${(props) => props.theme.white};
    font-family: ${(props) => props.theme.sansSerif};
    font-weight: ${(props) => props.theme.fontBlack};
    font-size: 3.4rem;
    margin: 0 0 10px 0;
    padding: 0;

    @media (${Breakpoints.portrait}) {
      font-size: 4.8rem;
    }
  }

  p {
    ${MixinBodyCopy};
  }

  form {
    position: relative;
    margin-top: 30px;
  }

  label {
    ${MixinLabel};
  }

  input[type='email'] {
    ${MixinTextField};
    padding-right: 70px;
  }

  ${MixinButtonWithArrow}

  .kw-alert {
    position: absolute;
    margin-top: -50px;
    max-width: 445px;
  }

  .kw-field-error-message {
    font-size: 1.4rem;
  }
`;

export { Newsletter };

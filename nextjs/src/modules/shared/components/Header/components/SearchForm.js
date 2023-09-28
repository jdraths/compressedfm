import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

// components
import { Icon } from 'src/modules/shared/components/Icon';

// styles
import { MixinTextField, MixinLabel, MixinButtonWithArrow } from 'src/styles/Form';

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const SearchForm = () => {
  const { register, handleSubmit } = useForm();
  const router = useRouter();

  const onSubmit = (data) => {
    // redirect to the homepage, send the key words
    router.push({ pathname: '/search', query: data });
  };

  return (
    <StyledSearchForm>
      <form onSubmit={handleSubmit(onSubmit)} method="get">
        <input type="text" placeholder=" " {...register('keywords', { required: true })} />
        <label htmlFor="search">Search</label>
        <button name="submit" type="submit">
          <Icon name="arrow" height="64" width="64" />
        </button>
      </form>
    </StyledSearchForm>
  );
};

export { SearchForm };

/** -------------------------------------------------
* STYLES
---------------------------------------------------- */
const StyledSearchForm = styled.div`
  form {
    position: relative;
    margin-bottom: 85px;
  }

  input[type='text'] {
    ${MixinTextField}
  }

  label {
    ${MixinLabel}
  }

  ${MixinButtonWithArrow}
`;

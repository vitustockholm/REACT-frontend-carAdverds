import styled from 'styled-components';

export const StyledLogin = styled.main`
  /* Mobile */
  /* login.html */
  main .container #login,
  main .container #signup {
    padding: 30px;
  }
  .container #signup {
    margin-top: 35px;
  }

  main .container section h2 span {
    font-weight: 400;
  }

  #logInForm {
    display: flex;
    margin: auto;
    flex-direction: column;
  }

  .container #signup {
    margin-top: 35px;
  }

  /* Tablter */
  @media screen and (min-width: 1024px) {
    /*  */
    /* login.html */
    .container .forms-container {
      display: flex;
      text-align: center;
      justify-content: center;
    }
    .container #login,
    .container #signup {
      width: calc(100% / 2 - 30px);
      margin: 0 10px;
    }
  }
`;

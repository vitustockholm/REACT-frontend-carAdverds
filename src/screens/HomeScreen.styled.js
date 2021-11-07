import styled from 'styled-components';

export const StyledHome = styled.main`
  /* Main */
  /* index.html */
  .container section:first-child {
    padding: 40px 20px;
  }

  .container section h1 {
    font-size: 1.8em;
  }

  .container section #latest--cars-container {
    display: flex;
    flex-wrap: wrap;
  }

  .container section #latest--cars-container .car {
    width: calc(100% / 2 - 15px);
    margin: 0 7.5px;
    padding: 10px;
  }

  .container section #latest--cars-container .car a {
    margin-top: 5px;
  }

  .container section #latest--cars-container .car h4 {
    margin-bottom: 10px;

    font-size: 1.4em;

    border-bottom: 1px solid #ededed;
  }

  .container section #latest--cars-container .car p {
    padding-bottom: 5px;
  }

  .container section #latest--cars-container .car i {
    position: relative;
    top: 1px;
  }

  /* Tablter */
  @media screen and (min-width: 769px) {
    .container section #latest--cars-container .car {
      width: calc(100% / 4 - 15px);
    }
    .car {
      height: auto;
    }
  }
`;

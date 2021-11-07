import styled from 'styled-components';

export const StyledAccount = styled.main`
  /* myaccount.html */
  .container #user-info {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .container #user-info--container {
    width: fit-content;

    padding: 20px 60px;
  }

  .container #user-info--container h3 {
    padding: 7px 0;
  }

  .container #user-cars--container {
    margin-top: 35px;
  }

  .container #user-cars--container #user-cars--list {
    width: 100%;
  }

  .container #user-cars--container #user-cars--list table {
    width: 100%;
    border-collapse: collapse;
  }

  .container #user-cars--container #user-cars--list table thead th {
    background-color: var(--primary-color);
    border-bottom: 1px solid var(--primary-color);
    padding: 7px 0;
    color: var(--text-light-color);
  }

  .container #user-cars--container #user-cars--list table tbody td {
    padding: 8px 0;
  }

  .container
    #user-cars--container
    #user-cars--list
    table
    tbody
    tr:nth-child(even) {
    background-color: #f8f8f8;
  }

  .container #user-cars--container #user-cars--add-new {
    padding: 30px;

    margin-top: 55px;
  }

  .container #user-cars--container #user-cars--add-new form {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  /* Tablter */
  @media screen and (min-width: 769px) {
    /* main */
    /* myaccount.html */
    .container #user-info {
      flex-direction: row-reverse;
      align-items: flex-start;
      flex-wrap: wrap;
      justify-content: space-between;
    }

    .container #user-info--container {
      width: 25%;
    }

    .container #user-cars--container {
      margin-top: 0;

      width: 70%;
    }
  }
`;

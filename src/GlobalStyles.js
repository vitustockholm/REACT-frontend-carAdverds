import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
// Resets
*,*::after,*::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}


h1,
h2,
h3,
h4,
h5,
h6,
p,
input,
button,
span,
div,
a {
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}

/* Variables */

:root {
  /* Colors */
  --primary-color: rgb(0, 0, 255);
  --secondary-color: rgb(128, 226, 80);

  --text-dark-color: rgb(0, 0, 0);
  --text-light-color: rgb(255, 255, 255);
}
body {
  margin: 0;
  height: 1024px;
}

img {
  width: 100%;
}

/* Utilities */
.mt-1 {
  margin-top: 10px!important;
}

.text-center {
  text-align: center;
}

/* layout */
.container {
  max-width: 1024px;

  margin: 0 auto;
  padding: 0 20px;
}

/* components */
/* --- button --- */
.btn-primary {
  padding: 5px 10px;

  border: 0;
  border-radius: 3px;
  box-shadow: 0 3px 5px -2px rgba(10, 10, 10, 0.5);

  display: inline-block;

  outline: none;

  font-size: 1em;
  text-decoration: none;
  background-color: var(--primary-color);
  color: var(--text-light-color);

  cursor: pointer;
}

.btn-primary:hover {
  opacity: 0.8;
}

.btn-primary-submit {
  width: max-content;
  color: var(--text-light-color);
}

/* --- card --- */

.card-shadow {
  box-shadow: 0 8px 16px -2px rgba(10, 10, 10, 0.1),
    0 0 0 1px rgba(0, 0, 0, 0.02);
}
/* form */
.form {
  margin-top: 15px;
}

.form-control {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.form-label {
  font-size: 1.2em;
}

.form-input {
  padding: 5px 7px;
  font-size: 1em;
  margin-bottom: 15px;

  color: #666;
}

.form-message {
  margin-top: 20px;
  background-color: #f8f8f8;

  border-radius: 3px 0px 0px 3px;
  padding: 5px 7px;
}

.form-message-danger {
  border-left: 5px solid red;
}

.form-message-success {
  border-left: 5px solid var(--primary-color);
}

.hidden {
  display: none;
}

.headline {
  margin: 40px 20px;
  font-size: 1.8em;
}


`;

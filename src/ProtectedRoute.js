//jei yra issaugota jwt tokenas tikrinsim
// ir parinksim ka renderinti prisijungus myacc
//neprisijung login signup screen

import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
//user dispatch lives in userContext

//Screens (pages)
import MyAccountScreen from './screens/MyAccountScreen';

const ProtectedRoute = () => {
  //Hooks

  //--redirects
  const history = useHistory();

  //---side effects
  useEffect(() => {
    //-if user not exist - redirecting to login
    if (!localStorage.getItem('user')) history.push('/login');
  });
  return <MyAccountScreen />;
};

export default ProtectedRoute;

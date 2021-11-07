import React, { useState, useEffect } from 'react';
import { StyledHome } from './HomeScreen.styled';
import axios from 'axios';

const Home = () => {
  const [users, setUsers] = useState([]);

  const fetchCars = async () => {
    let response = await axios.get(
      'https://car-dealer-shop-back-embeded.herokuapp.com/api/cars/'
    );

    setUsers(response.data);
  };

  useEffect(() => {
    if (users.length < 1) {
      fetchCars();
    }
    // if (cars.length < 1) {
    //   setCars(
    //     users.reduce((a, v) => {
    //       a.push({
    //         name: v.name,
    //         surname: v.surname,
    //         email: v.email,
    //         cars: v.cars,
    //       });

    //       return a;
    //     }, [])
    //   );
    // }
  }, [users]);

  const displayCars = () => {
    return users.map((user) =>
      user.cars.map((car) => (
        <div className='car card-shadow mt-1' key={car._id}>
          <h4>
            {car.make} {car.model}
          </h4>
          <p>
            <strong>Year:</strong> {car.year}
          </p>
          <p>
            <strong>Price:</strong> {car.price.toFixed(2)}€
          </p>
          <p>
            <strong>Seller:</strong> {user.name} {user.surname}
          </p>
          <p>
            <strong>Contact email:</strong> {user.email}
          </p>
        </div>
      ))
    );
  };

  return (
    <StyledHome>
      <div className='container'>
        <section>
          <h1 className='text-center headline'>Latest adverts</h1>
        </section>
        <section>
          {!users ? (
            <p>Loading...</p>
          ) : (
            <div id='latest--cars-container'>{displayCars()}</div>
          )}
        </section>
      </div>
    </StyledHome>
  );
};

export default Home;

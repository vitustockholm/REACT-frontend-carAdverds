import React, { useEffect, useState, useContext, useRef } from 'react';
import { useHistory } from 'react-router';
import axios from 'axios';
import { StyledAccount } from './MyAccountScreen.styled';
import { FaUserAlt } from 'react-icons/fa';
import { UserContext } from '../App';
import Form from '../components/Form/Form';

const endpoint = 'https://car-dealer-shop-back-embeded.herokuapp.com';

const MyAccount = () => {
  // Hooks
  // -- state
  const [user, setUser] = useState([]);
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [price, setPrice] = useState('');
  const [message, setMessage] = useState('');

  // -- redirects
  const history = useHistory();

  // Global context
  const { dispatch } = useContext(UserContext);

  // Reference
  const messageRef = useRef();

  // side effects
  useEffect(() => {
    let isMounted = true;

    (async () => {
      try {
        const userId = localStorage.getItem('user') || '';
        const response = await axios.get(`${endpoint}/api/users/` + userId);

        if (isMounted) setUser([response.data]);
      } catch (error) {
        console.log(error);
      }
    })();

    return () => {
      isMounted = false;
    };
  }, [user]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    dispatch({ type: 'logout' });
    history.push('/');
  };

  const carFormHandler = async (e) => {
    e.preventDefault();
    if (!make || !model || !year || !price) {
      return setMessage('Please fill out the form');
    }

    const car = {
      make: make,
      model: model,
      year: +year,
      price: +price,
    };

    try {
      await axios.put(`${endpoint}/api/cars/add/${user[0]._id}`, {
        ...car,
      });

      setMake('');
      setModel('');
      setYear('');
      setPrice('');
      setMessage('Car added');
      messageRef.current.classList.add('form-message', 'form-message-success');
    } catch (error) {
      console.log(error.data);
    }
  };

  const handleDeleteClick = async (e, carId) => {
    try {
      await axios.delete(`${endpoint}/api/cars/delete/${carId}`);
    } catch (error) {
      console.log(error);
    }
  };

  const displayCarTable = () => {
    return user[0]?.cars.length < 1 ? (
      <p className='form-message form-message-danger'>
        You don't have any cars for sale
      </p>
    ) : (
      <table className='text-center'>
        <thead>
          <tr>
            <th>Item</th>
            <th>Model</th>
            <th>Year</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {user.map((user) =>
            user.cars.map((car) => (
              <tr key={car._id}>
                <td>{car.make}</td>
                <td>{car.model}</td>
                <td>{car.year}</td>
                <td>{car.price}€</td>
                <td>
                  <button
                    className='btn-primary delete-btn'
                    onClick={(e) => handleDeleteClick(e, car._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    );
  };

  return (
    <StyledAccount>
      <div className='container'>
        <section id='greeting'>
          <h1 className='text-center headline'>
            Welcome, {user.map((item) => item.name)}
          </h1>
        </section>
        <section id='user-info'>
          <div id='user-info--container' className='card-shadow text-center'>
            {user?.length > 1 ? (
              <p>Loading</p>
            ) : (
              <>
                {user?.map((item) => (
                  <div key={item._id}>
                    <div>
                      <FaUserAlt size='30' />
                    </div>
                    <h3>
                      {item.name} {item.surname}
                    </h3>
                    <p>{item.email}</p>
                    <p>Items on site: {item.cars.length}</p>
                    <button
                      className='btn-primary mt-1'
                      id='logout'
                      onClick={handleLogout}
                    >
                      Log out
                    </button>
                  </div>
                ))}
              </>
            )}
          </div>
          <div id='user-cars--container'>
            <div id='user-cars--list'>{displayCarTable()}</div>
            <div id='user-cars--add-new' className='card-shadow'>
              <h6 className='text-center'>Got items for sale?</h6>
              <h2 className='text-center'>Enter item information</h2>
              <Form className='form' id='car-form' onSubmit={carFormHandler}>
                <div className='form-control'>
                  <label className='form-label' htmlFor='car-make'>
                    Item
                  </label>
                  <input
                    className='form-input'
                    type='text'
                    name='car-make'
                    required
                    value={make}
                    onChange={(e) => setMake(e.target.value)}
                  />
                </div>

                <div className='form-control'>
                  <label className='form-label' htmlFor='car-model'>
                    Model
                  </label>
                  <input
                    className='form-input'
                    type='text'
                    name='car-model'
                    required
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                  />
                </div>

                <div className='form-control'>
                  <label className='form-label' htmlFor='car-year'>
                    Year
                  </label>
                  <input
                    className='form-input'
                    type='text'
                    name='car-year'
                    id='car-year'
                    pattern='([0-9]+)'
                    title='Please enter numbers'
                    required
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                  />
                </div>

                <div className='form-control'>
                  <label className='form-label' htmlFor='car-price'>
                    Price
                  </label>
                  <input
                    className='form-input'
                    type='text'
                    name='car-price'
                    id='car-price'
                    pattern='([0-9]+)'
                    title='Please enter numbers'
                    required
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>

                <div className='form-control'>
                  <input
                    type='submit'
                    value='Add item'
                    className='btn-primary btn-primary-submit'
                  />
                </div>
              </Form>
              <p id='car-input--message' ref={messageRef}>
                {message}
              </p>
            </div>
          </div>
        </section>
      </div>
    </StyledAccount>
  );
};

export default MyAccount;

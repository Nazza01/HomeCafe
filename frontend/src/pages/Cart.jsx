import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API } from '../constant';
import { getToken } from '../hooks/useLocalStorage';
import { Grid } from '@mui/material';
import CardComponent from '../components/CardComponent';

const CartPage = () => {
  const [userCart, setUserCart] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  
  useEffect(() => {
    const fetchData = async () => {
      const axiosInstance = axios.create({
        baseURL: `${API}`,
        headers: {
          Authorization: `Bearer ${getToken()}`
        },
      });
      setIsError(false);
      setIsLoading(true);
      
      try {
        const getUserCart = await axiosInstance.get("carts");
        setUserCart(getUserCart.data.data);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    }
    
    fetchData();
  }, [])
  
  return (
    <>
      {
        isError && <div>Something went wrong...</div>
      }
      {
        isLoading ? (
          <div>Loading...</div>
        ) : (
          <Grid container flexDirection="row" alignContent="center">
              {userCart.map((cartItem) => (
                <Grid key={cartItem.id}>
                  <CardComponent
                    title={cartItem.attributes.name}
                    description={cartItem.attributes.size}
                  />
                </Grid>
                ))
              }
          </Grid>
        )
      }
    </>
  );
};

export default CartPage;
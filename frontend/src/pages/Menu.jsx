import React, { useState, useEffect, Fragment } from 'react';
import { Tabs, Tab, Grid } from '@mui/material';
import axios from 'axios';
import { API } from "../constant";
import { getToken } from "../hooks/useLocalStorage";
import CardComponent from 'components/content/CardComponent';

const MenuPage = () => {
  const [menuTypes, setMenuTypes] = useState([]);
  const [menuItems, setMenuItems] = useState([]);
  
  const [selectedMenuType, setSelectedMenuType] = useState("");
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
        const getMenuTypes = await axiosInstance.get("menu-types");
        setMenuTypes(getMenuTypes.data.data);
        
        const getMenuItems = await axiosInstance.get("menu-items?populate=menuType&populate=image");
        setMenuItems(getMenuItems.data.data);
        setSelectedMenuType(getMenuTypes.data.data[0].attributes.name);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    }
    
    fetchData();
  }, []);
  
  const handleTabChange = (event, newValue) => {
    setSelectedMenuType(menuTypes[newValue].attributes.name);
  };
  return (
    <Grid
      container
      flexDirection="column"
    >
      {
        isError && <div>Something went wrong ...</div>
      }
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <Tabs
            value={menuTypes.findIndex((type) => type.attributes.name === selectedMenuType)}
            onChange={handleTabChange}
          >
            {menuTypes.map((type) => (
                <Tab key={type.id} label={type.attributes.name} />
              ))
            }
          </Tabs>
          <Grid container spacing={2} >
            {menuItems
              .filter((menuItem) => menuItem.attributes.menuType.data.attributes.name === selectedMenuType)
              .map((menuItem) => (
                <Grid xs display="flex" justifyContent="center" alignContent="center" key={menuItem.id} item md={3}>
                  <CardComponent
                    key={menuItem.id}
                    image={`http://localhost:1337${menuItem.attributes.image.data.attributes.formats.medium.url}`}
                    title={menuItem.attributes.name}
                    description={menuItem.attributes.description}
                    altText={menuItem.attributes.altText}
                    />
                </Grid>
              ))
            }
          </Grid>
        </>
      )}
    </Grid>
  )
};

export default MenuPage;
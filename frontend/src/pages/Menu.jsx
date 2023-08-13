import React, { useState, useEffect } from 'react';
import { Tabs, Tab } from '@mui/material';
import axios from 'axios';
import { API } from "../constant";
import { getToken } from "../hooks/useLocalStorage";

const MenuPage = () => {
  const [menuTypes, setMenuTypes] = useState([]);
  const [menuItems, setMenuItems] = useState([]);
  const [selectedMenuType, setSelectedMenuType] = useState("");

  const config = {
    headers: { Authorization: `Bearer ${getToken()}` }
  };
  
  useEffect(() => {
    const axiosInstance = axios.create({
      baseURL: `${API}`,
      headers: {
        Authorization: `Bearer ${getToken()}`
      },
    });
    axiosInstance.get("menu-types")
      .then((response) => {
        setMenuTypes(response.data.data);
        console.log(menuTypes);
        setSelectedMenuType(response.data.data[0].name);
      })
      .catch((error) => {
        console.error("Error fetching menu types:", error);
      });
    axiosInstance.get("menu-items?populate[0]=menuType")
      .then((response) => {
        setMenuItems(response.data.data);
        console.log(menuItems);
      })
      .catch((error) => {
        console.error("Error fetching menu items:", error);
      });
  }, []);
  
  const handleTabChange = (event, newValue) => {
    setSelectedMenuType(menuTypes[newValue].name);
  };
  
  return (
    <div>
      <Tabs
        value={menuTypes.findIndex((type) => type.name === selectedMenuType)}
        onChange={handleTabChange}
      >
        {menuTypes.map((menuType) => (
          <Tab key={menuType.id} label={menuType.name} />
        ))}
      </Tabs>
      <ul>
        {menuItems
          .filter((menuItem) => menuItem.menuType === selectedMenuType)
          .map((menuItem) => (
            <li key={menuItem.id}>{menuItem.name}</li>
          ))
        }
      </ul>
    </div>
  )
};

export default MenuPage;
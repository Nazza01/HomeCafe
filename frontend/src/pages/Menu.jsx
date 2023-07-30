import axios from "axios";
import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import { API } from "../constant";
import { getToken } from "../hooks/useLocalStorage";
import Box from "@mui/material/Box";
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from "@mui/material/Typography";

function TabPanel({ children, value, index, ...other }) {
  return (
    <div role="tabpanel" hidden={value !== index} {...other}>
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const MenuList = () => {
  const [value, setValue] = useState(0);
  const [error, setError] = useState(null);
  const [menuTypes, setMenuTypes] = useState([]);
  
  const config = {
    headers: { Authorization: `Bearer ${getToken()}` }
  };
  
  const handleChange = (_value, newValue) => {
    setValue(newValue);
  };
  
  useEffect(() => {
    axios
      .get(`${API}/menu-types`, config)
      .then(({ data }) => setMenuTypes(data.data))
      .catch((error) => setError(error));
  }, []);
      
  if (error) {
    return <div> An error occurred: {error.message} </div>;
  }

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: 'background.paper',
        display: 'flex',
        height: 224
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="tab section describing all different types of elements"
        sx={{
          borderRight: 1,
          borderColor: 'divider'
        }}
      >
        {menuTypes.map(({ id, attributes }) => (
          <Tab key={id} label={attributes.name} />
        ))}
      </Tabs>
      {menuTypes.map(({ id, attributes }) => (
        <TabPanel key={id} value={attributes} index={id}>
          {attributes.slug}
        </TabPanel>
      ))}
    </Box>
  )
};

export default MenuList;

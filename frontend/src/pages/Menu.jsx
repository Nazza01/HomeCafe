import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function Menu() {
  const [age, setAge] = useState('');
  
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  
  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Order Type</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={age}
          onChange={handleChange}
          autoWidth
          label="Age"
        >
          <MenuItem value="coffee">Coffee</MenuItem>
          <MenuItem value="desserts">Desserts</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default Menu;
import axios from "axios";
import { useEffect, useState } from "react";
import { API } from "../constant";
import { getToken } from "../hooks/useLocalStorage";

const MenuList = () => {
  const [error, setError] = useState(null);
  const [menuTypes, setMenuTypes] = useState([]);
  
  const config = {
    headers: { Authorization: `Bearer ${getToken()}` }
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
    <div>
      <ul>
        {menuTypes.map(({ id, attributes }) => (
          <li key={id}>{attributes.name}</li>
        ))}
      </ul>
    </div>
  )
};

export default MenuList;

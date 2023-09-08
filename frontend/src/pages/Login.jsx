import React, { useState } from "react";
import {
  TextField,
  Button,
  CircularProgress,
  Typography,
  Alert,
  Grid,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { API } from "../constant";
import { setToken } from "../hooks/useLocalStorage";
import { useAuthContext } from "../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuthContext();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission
    setIsLoading(true);
    
    try {
      const response = await fetch(`${API}/auth/local`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          identifier: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();
      if (data?.error) {
        throw data?.error;
      } else {
        setToken(data.jwt);
        login(data.jwt);
        setError("");
        navigate("/user/menu", { replace: true });
      } 
    } catch (error) {
      console.error(error);
      setError("An error occurred: " + error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Grid
      container
      flexDirection="column"
      alignItems="center"
      paddingTop="15px"
      paddingX="10px"
    >
      <Typography variant="h5" align="center" gutterBottom>
        Sign In
      </Typography>
      {error && (
        <Alert severity="error">
          {error}
        </Alert>
      )}
      <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            fullWidth
            margin="normal"
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            required
            fullWidth
            margin="normal"
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            disabled={isLoading}
            style={{ marginTop: "16px"}}
          >
            Login
            {isLoading && <CircularProgress size={24} />}
          </Button>
      </form>
    </Grid>
  );
};

export default Login;
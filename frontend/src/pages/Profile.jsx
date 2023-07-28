import React, { useState } from "react";
import {
  Button,
  Card,
  TextField,
  CircularProgress,
  Stack,
} from "@mui/material";
import { useAuthContext } from "../context/AuthContext";
import { API } from "../constant";
import { useNavigate } from "react-router-dom";
import { getToken } from "../hooks/useLocalStorage";

const ProfilePage = () => {
  const [loading, setLoading] = useState(false);
  const { user, isLoading, setUser } = useAuthContext();
  const navigate = useNavigate();

  const handleProfileUpdate = async (data) => {
    setLoading(true);
    try {
      const response = await fetch(`${API}/users/${user.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          // set the auth token to the user's jwt
          Authorization: `Bearer ${getToken()}`,
        },
        body: JSON.stringify(data),
      });
      const responseData = await response.json();

      setUser(responseData);
      alert("Data saved successfully!"); // Using alert instead of message.success for simplicity
    } catch (error) {
      console.error(error);
      alert("Error While Updating the Profile!"); // Using alert instead of message.error for simplicity
    } finally {
      setLoading(false);
    }
  };

  if (isLoading) {
    return <CircularProgress size="large" />;
  }
  return (
    <Card className="profile_page_card">
      <form onSubmit={handleProfileUpdate}>
        <Stack 
          direction="row"
          justifyContent="center"
          alignItems="center"
          paddingTop={3}
        >
          <TextField
            helperText="Please enter your new username"
            label="Username"
            name="username"
            variant="outlined"
            value={user?.username}
            onChange={(e) =>
              setUser((prevUser) => ({ ...prevUser, username: e.target.value }))
            }
            required
          />
          <TextField
            helperText="Please enter your new Email"
            label="Email"
            name="email"
            type="email"
            variant="outlined"
            value={user?.email}
            onChange={(e) =>
              setUser((prevUser) => ({ ...prevUser, email: e.target.value }))
            }
            required
          />
        </Stack>
        <Stack 
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={3}
        >
          <Button
            className="profile_save_btn"
            type="submit"
            variant="contained"
            color="primary"
          >
            {loading ? (
              <>
                <CircularProgress size={20} />
                Saving
              </>
            ) : (
              "Save"
            )}
          </Button>
          <Button 
            variant="outlined"
            onClick={() => navigate("/user/menu")} 
          >
            Cancel
          </Button>
        </Stack>
      </form>
    </Card>
  );
};

export default ProfilePage;

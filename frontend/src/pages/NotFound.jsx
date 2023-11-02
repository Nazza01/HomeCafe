import { Avatar, Box, Link, Typography } from "@mui/material";
import Home from "@mui/icons-material/Home";
import { Container } from "react-bootstrap";
import { AppNavbar } from "../components/AppNavbar";
import { ProtectedLayout } from "../layouts/ProtectedLayout";

export const NotFoundPage = () => {
  return (
    <>
      <ProtectedLayout />
      <Container component="main" >
        <Box 
          sx={{ 
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "primary.main" }}><Home /></Avatar>
          <Typography component="h1" variant="h5">
            Error 404 - Not Found
          </Typography>
          <Link href="/">Back to Home</Link>
        </Box>
      </Container>
    </>
  )
};

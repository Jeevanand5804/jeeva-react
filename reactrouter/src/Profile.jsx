import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { Typography, Box, TextField, Button } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";

function Profile() {
  const navigate = useNavigate();
  const handleToHome = () => {
    navigate("/");
  };
  return (
    <div>
      <Box display="flex" onClick={handleToHome}>
        <KeyboardBackspaceIcon
          float="left"
          sx={{ marginTop: 2 }}
          color="primary"
        />
        <Typography color="primary" sx={{ marginTop: 2, marginLeft: 1 }}>
          Go back
        </Typography>
      </Box>
      <Box
        sx={{
          fontSize: "60px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <AccountCircleIcon
          sx={{ fontSize: "100px", color: "blue" }}
        ></AccountCircleIcon>
        <Typography sx={{ fontSize: "30px", fontFamily: "cursive" }}>
          PROFILE
        </Typography>

        <TextField variant="outlined" label="Name" sx={{ m: 2 }} fullWidth />
        <TextField
          variant="outlined"
          label="Email"
          type="email"
          fullWidth
          sx={{ m: 2 }}
        />
        <TextField
          variant="outlined"
          label="Password"
          type="password"
          fullWidth
          sx={{ m: 2 }}
        />
        <TextField
          variant="outlined"
          label="Address"
          fullWidth
          multiline
          maxRows={5}
          sx={{ m: 2 }}
        />
        <Button
          variant="contained"
          sx={{
            float: "inline-end",
            marginTop: "200px",
            padding: "10px",
            fontWeight: "900px",
            fontFamily: "cursive",
          }}
          fullWidth
        >
          Submit
        </Button>
      </Box>
    </div>
  );
}

export default Profile;

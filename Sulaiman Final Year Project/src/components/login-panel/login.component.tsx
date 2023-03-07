import React from "react";
import "./login.styles.scss";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import MenuItem from "@mui/material/MenuItem";
const currencies = [
  {
    value: "Patient",
  },
  {
    value: "Doctor",
  },
];
const Login = () => {
  return (
    <div className="container-login">
      <form>
        <h2>Sign In</h2>
        <div>
          <TextField
            id="input-with-sx"
            label="Email"
            variant="standard"
            type="email"
            sx={{ mr: 1, display: "inline-block" }}
          />
        </div>
        <div>
          <TextField
            id="standard-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="standard"
          />
        </div>
        <div>
          <TextField
            id="standard-select-role"
            select
            label="Select"
            defaultValue="EUR"
            helperText="Please select your role"
            variant="standard"
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <div> 
          
        <a href="/patientlist"> 
        <Button
          
            variant="contained"
            sx={{
              backgroundColor: "black",
              "&:hover": {
                background: "#181818",
              },
            }}
          >
            Login
          </Button>
        
        </a>
         
          <span>Forgot password?</span>
        </div>
      </form>
    </div>
  );
};

export default Login;

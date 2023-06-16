import React, { useState } from "react";
import axios from "axios";
import {
  Box,
  Container,
  Card,
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  TextField,
} from "@mui/material";

function StepperMui() {
  const [active, setActive] = useState(0);
  const [number, setNumber] = useState("");
  const [OTP, setOtp] = useState("");
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const [validationError, setValidationError] = useState("");

  const steps = ["OTP Verification", "Email"];

  const handleNext = async () => {
    if (active === 0 && (number === "" || OTP === "")) {
      setValidationError("Please Fill in the Above Details.");
      return;
    }

    if (
      active === 1 &&
      (formValues.email === "" || formValues.password === "")
    ) {
      setValidationError("Please Fill in the Above Details.");
      return;
    }

    setValidationError("");

    try {
      const response = await axios.post("http://localhost:3000/ValidatePhone", {
        number: number,
        OTP: OTP,
      });
      console.log(response.data);
      const {status} = response.data;

      if (status === true) {
        setActive(active + 1);
      } else {
        setValidationError("Failed");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleBack = () => {
    setActive(active - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  function getComponents(step) {
    switch (step) {
      case 0:
        return (
          <>
            <TextField
              name="phoneNumber"
              label="Phone number"
              variant="outlined"
              fullWidth
              value={number}
              onChange={(e) => setNumber(e.target.value )}
              sx={{ mb: 2 }}
              required
            />

            <TextField
              name="OTP"
              label="OTP"
              variant="outlined"
              fullWidth
              value={OTP}
              onChange={(e) => setOtp(e.target.value)}
              sx={{ mb: 2 }}
              required
            />
          </>
        );
      case 1:
        return (
          <>
            <TextField
              name="email"
              label="E-mail"
              variant="outlined"
              fullWidth
              value={formValues.email}
              onChange={handleChange}
              sx={{ mb: 2 }}
              required
            />

            <TextField
              name="password"
              label="Password"
              variant="outlined"
              fullWidth
              value={formValues.password}
              onChange={handleChange}
              sx={{ mb: 2 }}
              required
            />
          </>
        );
      default:
        return "Unknown step";
    }
  }

  return (
    <div>
      <Container maxWidth="sm">
        <Stepper activeStep={active}>
          {steps.map((step, index) => (
            <Step key={index}>
              <StepLabel>{step}</StepLabel>
            </Step>
          ))}
        </Stepper>

        {active === 2 ? (
          <Typography variant="h4" align="center" margin="100px">
            <b>
              <i>Thank You</i>
            </b>
          </Typography>
        ) : (
          <>
            <Card sx={{ margin: "50px" }}>
              <form style={{ margin: "20px" }}>
                {getComponents(active)}
                {validationError && (
                  <Typography variant="body1" color="error">
                    {validationError}
                  </Typography>
                )}
              </form>
            </Card>

            <Button
              variant="outlined"
              onClick={handleBack}
              disabled={active === 0}
              sx={{ marginRight: "5px" }}
            >
              Back
            </Button>
            <Button variant="outlined" onClick={handleNext}>
              {active === 1 ? "Finish" : "Next"}
            </Button>
          </>
        )}
      </Container>
    </div>
  );
}

export default StepperMui;
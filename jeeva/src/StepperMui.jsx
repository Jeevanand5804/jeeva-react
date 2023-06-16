import React, { useState } from "react";
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
  const [skipped, setSkipped] = useState([]);
   const [formValues, setFormValues] = useState({
     firstName: "",
     lastName: "",
     city: "",
     state: "",
     address: "",
     email: "",
     phoneNumber: "",
   });
    const [validationError, setValidationError] = useState("");


  const steps = [
    "Name",
    "contact",
    "Location",
  ];
  const handleSkip = () => {
     setSkipped([...skipped, active]);
    setActive(active+1);
  };

  const isStepOptional = (step) => {
    return step === 1;
  };
  const isStepSkip = (step) => {
    return skipped.includes(step);
  };

  const handleNext = () => {
     if (
       active === 0 &&
       (formValues.firstName === "" || formValues.lastName === "")
     ) {
      setValidationError("Please Fill the Above Details.");
       return;
     }
     if (
       active === 1 &&
       (formValues.city === "" ||
         formValues.state === "" ||
         formValues.address === "")
     ) {
       setValidationError("Please Fill the Above Details.");
       return;
     }
     if (
       active === 2 &&
       (formValues.email === "" || formValues.phoneNumber === "")
     ) {
       setValidationError("Please Fill the Above Details.");
       return;
    }
     setValidationError("");
    setActive(active + 1);
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
              name="firstName"
              label="First Name"
              variant="outlined"
              fullWidth
              value={formValues.firstName}
              onChange={handleChange}
              sx={{ mb: 2 }}
              required
            />

            <TextField
              name="lastName"
              label="Last Name"
              variant="outlined"
              fullWidth
              value={formValues.lastName}
              onChange={handleChange}
              sx={{ mb: 2 }}
              required
            />
          </>
        );
      case 1:
        return (
          <>
            <TextField
              name="City"
              label="City "
              variant="outlined"
              fullWidth
              value={formValues.city}
              onChange={handleChange}
              sx={{ mb: 2 }}
            />
            <TextField
              name="State"
              label="State "
              variant="outlined"
              fullWidth
              value={formValues.state}
              onChange={handleChange}
              sx={{ mb: 2 }}
            />
            <TextField
              name="message"
              label="Address"
              multiline
              rows={4}
              variant="outlined"
              fullWidth
              value={formValues.address}
              onChange={handleChange}
              sx={{ mb: 2 }}
            />
          </>
        );
      case 2:
       
            return (
              <>
                <TextField
                  name="email"
                  label="E-mail "
                  variant="outlined"
                  fullWidth
                  value={formValues.email}
                  onChange={handleChange}
                  sx={{ mb: 2 }}
                  required
                />

                <TextField
                  name="phoneNumber"
                  label="Phone number"
                  variant="outlined"
                  fullWidth
                  value={formValues.phoneNumber}
                  onChange={handleChange}
                  sx={{ mb: 2 }}
                  required
                />
              </>
            );
      default:
        return "unknown step"
    }
  }
  return (
    <div>
      <Container maxWidth="sm">
        <Stepper activeStep={active}>
          {steps.map((step, index) => {
            const labelProps = {};
            const stepProps = {};
            if (isStepOptional(index)) {
              labelProps.optional = (
                <Typography variant="caption">optional</Typography>
              );
            }
            if (isStepSkip(index)) {
              stepProps.completed = false;
            }

            return (
              <Step key={index} {...stepProps}>
                <StepLabel {...labelProps}>{step}</StepLabel>
              </Step>
            );
          })}
        </Stepper>

        {active === 3 ? (
          <Typography variant="h4" align="center" margin="100px">
            <b>
              <i>Thank You</i>
            </b>
          </Typography>
        ) : (
          <>
            <Card sx={{ margin: "50px" }}>
              <form style={{ margin: "20px" }}>
                {getComponents(active)}{" "}
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
            {isStepOptional(active) && (
              <Button
                variant="outlined"
                onClick={handleSkip}
                sx={{ marginRight: "5px" }}
              >
                skip
              </Button>
            )}
            <Button variant="outlined" onClick={handleNext}>
              {active === 2 ? "Finish" : "Next"}
            </Button>
          </>
        )}
      </Container>
    </div>
  );
}

export default StepperMui;
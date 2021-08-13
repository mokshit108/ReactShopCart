import React, { useState, useEffect } from 'react';
import { CssBaseline, Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button } from '@material-ui/core';
import useStyles from './styles';
import AddressForm from '../AddressForm';
import PaymentForm from '../PaymentForm';
const steps = ['Shipping address', 'Payment details'];
const Checkout = () => {
    const [activeStep, setActiveStep] = useState(0);
    const classes = useStyles();
     
    const Confirmation  = () => (
        <div>
           Confirmation
        </div>
    );
    const Form = () => (activeStep === 0
        ? <AddressForm  />
        : <PaymentForm  />);
    return (
       <>
        
            <div className={classes.toollbar}/>
              <main className={classes.layout}>
              <Paper className={classes.paper}>
                  <Typography variant="h4" align="center">Checkout</Typography>
                  <Stepper activeStep={activeStep} className={classes.Stepper}>
                      {steps.map((label) => (
                      <Step key={label}>
                      <StepLabel>{label}</StepLabel>
                      </Step>
                    ))}
                  </Stepper>
                  {activeStep === steps.length ? <Confirmation /> : <Form />}
              </Paper>
              </main>
   
        </>
    )
}

export default Checkout

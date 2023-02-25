import { Box, Button, TextField } from '@mui/material';
import React, { useState } from 'react'
import './payment.css'

const Buy = () => {
    // define state to keep track of form values and whether they're filled
    const [formValues, setFormValues] = useState({
        pincode: '',
        name: '',
        email: '',
        phone: '',
        address: ''
    });
    const [formFilled, setFormFilled] = useState(false);

    // define functions to update state and check whether form is filled
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormValues({
            ...formValues,
            [name]: value
        });
    }

    const handleFormValuesChange = () => {
        const formFields = Object.values(formValues);
        const allFieldsFilled = formFields.every((field) => field !== '');
        setFormFilled(allFieldsFilled);
    }

    // define function to show alert and clear form data when order button is clicked
    const handleOrderButtonClick = () => {
        if (formFilled) {
            alert(`Your Order successfully Done . . .`);
            handleOrderPlacement();
        } else {
            alert(`Please fill data first`);
        }
    }

    // define function to clear form data
    const handleOrderPlacement = () => {
        setFormValues({
            pincode: '',
            name: '',
            email: '',
            phone: '',
            address: ''
        });
        setFormFilled(false);
    }

    return (
        <div className="container">
            <Box className='form'>
                <TextField variant='standard' name='pincode' type="number" label='Enter Pincode . .' value={formValues.pincode} onChange={handleInputChange} onBlur={handleFormValuesChange} />
                <TextField variant='standard' name='name' type="text" label='Enter Name . . ' value={formValues.name} onChange={handleInputChange} onBlur={handleFormValuesChange} />
                <TextField variant='standard' name='email' type="email" label='Enter Email . .' value={formValues.email} onChange={handleInputChange} onBlur={handleFormValuesChange} />
                <TextField variant='standard' name='phone' type="number" label='Enter Phone Number . . ' value={formValues.phone} onChange={handleInputChange} onBlur={handleFormValuesChange} />
                <TextField label="Enter Address . ." multiline rows={4} variant="filled" name='address' value={formValues.address} onChange={handleInputChange} onBlur={handleFormValuesChange} />
                <Button variant="contained" onClick={handleOrderButtonClick}>Order Now</Button>
            </Box>
        </div>
    )
}

export default Buy
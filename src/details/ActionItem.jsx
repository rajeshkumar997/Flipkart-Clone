import { Box, Button, styled } from '@mui/material'
import { ShoppingCart as Cart, FlashOn as Flash } from '@mui/icons-material';
import { CartContext } from '../context/productcontex';
import { useContext } from 'react';


const LeftContainer = styled(Box)(({ theme }) => ({
    minWidth: '40%',
    padding: '60px 0 0 80px',
    [theme.breakpoints.down('md')]: {
        padding: '20px 40px'
    }
}))

const Image = styled('img')({
    padding: '25px'
});

const StyledButton = styled(Button)(({ theme }) => ({
    width: '48%',
    borderRadius: 2,
    height: 50,
    [theme.breakpoints.down('lg')]: {
        width: '46%'
    },
    [theme.breakpoints.down('sm')]: {
        width: '48%'
    }
}));


const ActionItem = ({ product }) => {

    const cart = useContext(CartContext)
    const dispatch = cart.dispatch

    return (
        <LeftContainer>

            <Box style={{ padding: '15px  20px', border: '1px solid #f0f0f0', width: '87%' }}>
                <Image src={product.image} alt='product' style={{ width: "80%" }} />
            </Box>

            <StyledButton onClick={() => {
                dispatch({ type: 'ADD', payload: product });
                alert('Item is added in cart');
            }} style={{ marginRight: 10, background: '#ff9f00' }} variant="contained"><Cart />Add to Cart</StyledButton>
            <StyledButton onClick={() => alert('Add Product in Cart and Go to cart for Buy')} style={{ background: '#fb641b' }} variant="contained"><Flash />Buy Now</StyledButton>

        </LeftContainer >
    )
}

export default ActionItem
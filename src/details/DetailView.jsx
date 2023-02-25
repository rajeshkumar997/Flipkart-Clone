// import React, { useEffect } from 'react'
import { products } from './../constants/data';
import { Box, Grid, styled } from '@mui/material'
import ActionItem from './ActionItem'
import ProductDetail from './ProductDetail'
import { useLocation } from 'react-router-dom';

// import { useParams } from 'react-router-dom';
// import { useProductContext } from '../context/productcontex'


const Component = styled(Box)`
    margin-top: 55px;
    background: #F2F2F2;
`;

const Container = styled(Grid)(({ theme }) => ({
  background: '#FFFFFF',
  display: 'flex',
  [theme.breakpoints.down('md')]: {
    margin: 0
  }
}))

const RightContainer = styled(Grid)`
    margin-top: 50px;
    & > p {
        margin-top: 10px;
        margin-left: 20px;
    }
`;

// const API = "https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products"

const DetailView = () => {
  // const { getSingleProduct, isSingleLoading, singleProduct } = useProductContext();
  // const { id } = useParams();

  // const { id: raj, title, price, description, category, image, rating, } = singleProduct;

  // useEffect(() => {
  //   getSingleProduct(`${API}?id=${id}`);
  // }, [])


  const operation = useLocation();
  const { id } = operation.state

  return (
    <Component>

      <Container container>
        <Grid item lg={4} md={4} sm={8} xs={12}>
          <ActionItem product={products[id]} />
        </Grid>
        <RightContainer item lg={8} md={8} sm={8} xs={12}>
          <ProductDetail product={products[id]} />
        </RightContainer>
      </Container>

    </Component>
  )
}

export default DetailView
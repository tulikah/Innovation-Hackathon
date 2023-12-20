import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
// @mui
import { Container, Stack, Typography } from '@mui/material';
// components
import { ProductSort, ProductList, ProductCartWidget, ProductFilterSidebar } from '../sections/@dashboard/products';
// mock
import PRODUCTS from '../_mock/products';

// ----------------------------------------------------------------------

export default function MyProfilePage() {
  const [openFilter, setOpenFilter] = useState(false);

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };

  return (
    <>
      <Helmet>
        <title> My Profile | TheiaSphere</title>
      </Helmet>

      <Container maxWidth="md">
        <Typography variant="h4" sx={{ mb: 4 }}>
        Hi, Welcome back
        </Typography>
        <ProductList products={PRODUCTS} />
        {/* <ProductCartWidget /> */}
      </Container>
    </>
  );
}

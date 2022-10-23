import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RotatingLines } from 'react-loader-spinner';

import { Box } from 'components/Box';
import { HeaderMenuList, Item, StyledLink } from './Layout.styled';

export const Layout = () => {
  return (
    <Box bg="#f7d8d8" minHeight="100vh" pb="50px">
      <ToastContainer />
      <Box
        display="flex"
        alignItems="center"
        py="25px"
        boxShadow="0 10px 10px -5px #6d6b6b"
        bg="#d22f2f"
        as="header"
      >
        <Box as="nav">
          <HeaderMenuList>
            <Item>
              <StyledLink to="/">Home</StyledLink>
            </Item>
            <Item>
              <StyledLink to="/movies">Movies</StyledLink>
            </Item>
          </HeaderMenuList>
        </Box>
      </Box>

      <Suspense
        fallback={
          <RotatingLines
            strokeColor="#d22f2f"
            strokeWidth="4"
            animationDuration="0.75"
            width="70"
            visible={true}
          />
        }
      >
        <Outlet />
      </Suspense>
    </Box>
  );
};

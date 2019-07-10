import React from 'react';
import {Box, Text, Heading, Image} from 'gestalt';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="around"
      height={70}
      color="midnight"
      padding={1}
      shape="roundedBottom"
    >
      {/* sign in */}
      <NavLink activeClassName="active" to="/signin">
        <Text size="x1" color="white">
          Sign In
        </Text>
      </NavLink>
      {/* Logo */}
      <NavLink activeClassName="active" exact to="/">
        <Box display="flex" alignItems="center">
          <Box margin={2} width={50} height={50}>
            <Image
              alt="React-Meeting Logo"
              naturalHeight={1}
              naturalWidth={1}
              src="./icons/logo.svg"
            />
          </Box>

          <Heading size="xs" color="orange">
            React-Meeting
          </Heading>
        </Box>
      </NavLink>
      {/* sign up */}
      <NavLink activeClassName="active" to="/signup">
        <Text size="x1" color="white">
          Sign Up
        </Text>
      </NavLink>
    </Box>
  );
};

export default Navbar;
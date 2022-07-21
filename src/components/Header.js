import React, { useState } from "react";
import {
  MDBCollapse,
  MDBContainer,
  MDBIcon,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarItem,
  MDBNavbarNav,
  MDBNavbarToggler,
} from "mdb-react-ui-kit";
import { NavLink } from "react-router-dom";
const Header = () => {
  const [showBasic, setShowBasic] = useState(false);
  return (
    <MDBNavbar expands='lg' light bgColor='primary'>
      <MDBContainer fluid>
        <MDBNavbarBrand className='text-white'>
          <span style={{ marginRight: "10px" }}>
            <MDBIcon fas icon='book-open' />
          </span>
          Contact
        </MDBNavbarBrand>
        <MDBNavbarToggler
          aria-controls='navbar'
          aria-expanded='false'
          aria-label='Toggle navigation'
          className='text-white'
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon fas icon='bars' />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className='mr-auto gap-2 mb-2 mb-md-0 text-center'>
            <MDBNavbarItem>
              <NavLink to='/' className='text-white'>
                Home
              </NavLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <NavLink to='/addUser' className='text-white'>
                Add User
              </NavLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <NavLink to='/about' className='text-white'>
                About
              </NavLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
};

export default Header;

import React from 'react';
import './Navbar.css';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
//import Spinner from '../Spinner/Spinner';
import { logout } from '../../actions/auth';

const Navigation = ({ logout }) => {
  const auth = useSelector((state) => state.auth);
  const { isAuthenticated, loading } = auth;
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">Online Tutor</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            {isAuthenticated ? (
              <>
                <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                <Nav.Link onClick={logout} href="/">
                  Logout
                </Nav.Link>
              </>
            ) : (
              <>
                <NavDropdown className="login-dropdown" title="Login">
                  <NavDropdown.Item href="/login/student">
                    Student
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/login/tutor">Tutor</NavDropdown.Item>
                  <NavDropdown.Item href="/login/admin">Admin</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown className="register-dropdown" title="Registration">
                  <NavDropdown.Item href="/register/student">
                    Student
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/register/tutor">
                    Tutor
                  </NavDropdown.Item>
                </NavDropdown>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

Navigation.propTypes = {
  logout: PropTypes.func.isRequired,
};

export default connect(null, { logout })(Navigation);

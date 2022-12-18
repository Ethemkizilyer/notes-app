import * as React from 'react';
import { Navbar, NavbarBrand } from 'react-bootstrap';
import { Container } from 'react-bootstrap';

interface IHeaderProps {
}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  return (
    <Navbar fixed="top" bg="dark" variant="dark">
        <Container>
            <Navbar.Brand>
                React typeScript Bootstrap Proje
            </Navbar.Brand>
        </Container>
    </Navbar>
  );
};

export default Header;

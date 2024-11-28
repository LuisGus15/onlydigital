// src/components/Header.js
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.dark};
  padding: 1rem 2rem;
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.light};

  img {
    width: 50px; // Ajusta el tamaño según sea necesario
    height: auto;
    margin-right: 0.5rem;
  }
`;

const NavLinks = styled.div`
  display: flex;

  a {
    color: ${({ theme }) => theme.colors.light};
    margin-left: 1rem;
    font-size: 1rem;
  }
`;

const Header = () => {
  return (
    <Navbar>
      <Logo to="/">
        <img src="/images/logo.png" alt="Logo" /> {/* Asegúrate de que la ruta sea correcta */}
        Only Digital S.R.L.
      </Logo>
      <NavLinks>
        <Link to="/">Inicio</Link>
        <Link to="/about">Nosotros</Link>
        <Link to="/services">Servicios</Link>
        <Link to="/products">Productos</Link>
        <Link to="/contact">Contacto</Link>
      </NavLinks>
    </Navbar>
  );
};

export default Header;

// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.light};
  color: ${({ theme }) => theme.colors.dark};
  text-align: left;
  padding: 2rem 4rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
`;

const FooterSection = styled.div`
  flex: 1;
  min-width: 200px;
  margin-bottom: 1rem;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const FooterLink = styled.a`
  display: block;
  color: ${({ theme }) => theme.colors.dark};
  margin-bottom: 0.5rem;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const FooterCopyright = styled.div`
  font-size: 0.9rem;
  margin-top: 1rem;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  a {
    margin-right: 1rem;
    color: ${({ theme }) => theme.colors.dark};
    font-size: 1.2rem;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterSection>
        <Logo>Only Digital S.R.L.</Logo>
        <FooterCopyright>
          &copy; {new Date().getFullYear()} Only Digital S.R.L.. Todos los derechos reservados.
        </FooterCopyright>
      </FooterSection>
      <FooterSection>
        <h4>Enlaces Útiles</h4>
        <FooterLink href="#">Mapa del Sitio</FooterLink>
        <FooterLink href="#">Términos y Condiciones</FooterLink>
        <FooterLink href="#">Política de Privacidad</FooterLink>
        <FooterLink href="#">Ayuda</FooterLink>
        <FooterLink href="#">Afiliaciones</FooterLink>
      </FooterSection>
      <FooterSection>
        <h4>Nuestra Ubicación</h4>
        <FooterLink href="#">Carrera</FooterLink>
        <FooterLink href="#">Acerca de</FooterLink>
        <FooterLink href="#">Contacto</FooterLink>
      </FooterSection>
      <FooterSection>
        <h4>Idiomas</h4>
        <FooterLink href="#">ENG</FooterLink>
        <FooterLink href="#">ESP</FooterLink>
        <FooterLink href="#">FRA</FooterLink>
      </FooterSection>
      <FooterSection>
        <h4>Síguenos</h4>
        <SocialLinks>
          <FooterLink href="#"><i className="fab fa-facebook-f"></i></FooterLink>
          <FooterLink href="#"><i className="fab fa-twitter"></i></FooterLink>
          <FooterLink href="#"><i className="fab fa-google-plus-g"></i></FooterLink>
          <FooterLink href="#"><i className="fab fa-linkedin-in"></i></FooterLink>
        </SocialLinks>
      </FooterSection>
    </FooterContainer>
  );
};

export default Footer;

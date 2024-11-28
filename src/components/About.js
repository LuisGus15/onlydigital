// src/components/About.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaEnvelope } from 'react-icons/fa'; // Importamos los íconos

const AboutContainer = styled.div`
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.light};
  text-align: center;
  margin: 2rem auto;
  max-width: 1200px;
`;

const Title = styled(motion.h1)`
  color: ${({ theme }) => theme.colors.light};
  margin-bottom: 1rem;
`;

const Subtitle = styled(motion.h2)`
  color: ${({ theme }) => theme.colors.light};
  margin-bottom: 1rem;
`;

const Description = styled(motion.p)`
  color: ${({ theme }) => theme.colors.light};
  margin-bottom: 2rem;
`;

const Section = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.light};
  color: ${({ theme }) => theme.colors.dark};
  padding: 2rem;
  border-radius: 10px;
  margin-bottom: 2rem;
  text-align: left;

  h2 {
    color: ${({ theme }) => theme.colors.dark};
    margin-bottom: 1rem;
  }

  p {
    color: ${({ theme }) => theme.colors.dark};
  }
`;

const ServicesSection = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  background-color: ${({ theme }) => theme.colors.light};
  padding: 2rem;
  border-radius: 10px;

  div {
    flex: 1;
    margin: 1rem;
    text-align: left;

    img {
      width: 100%;
      height: auto;
      border-radius: 10px;
      margin-bottom: 1rem;
    }

    h3 {
      color: ${({ theme }) => theme.colors.dark};
      margin-bottom: 0.5rem;
    }

    p {
      color: ${({ theme }) => theme.colors.dark};
    }
  }
`;

const TeamSection = styled(motion.div)`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  background-color: ${({ theme }) => theme.colors.light};
  padding: 2rem;
  border-radius: 10px;

  div {
    flex: 1;
    margin: 1rem;
    text-align: center;

    img {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      margin-bottom: 1rem;
    }

    h3 {
      color: ${({ theme }) => theme.colors.dark};
      margin-bottom: 0.5rem;
    }

    p {
      color: ${({ theme }) => theme.colors.dark};
    }

    .icons {
      display: flex;
      justify-content: center;
      margin-top: 1rem;

      a {
        color: ${({ theme }) => theme.colors.dark};
        margin: 0 0.5rem;
        font-size: 1.5rem;
        transition: color 0.3s;

        &:hover {
          color: ${({ theme }) => theme.colors.primary};
        }
      }
    }
  }
`;

const About = () => {
  return (
    <AboutContainer>
      <Title
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Quienes somos
      </Title>
      <Description
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Soluciones Magistrales e innovadoras "Only Digital S.R.L." es una empresa enmarcada en el ámbito de las ciencias de la computación con énfasis en la tecnología del desarrollo de software y la innovación.
      </Description>
      <Section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <Subtitle
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          Nuestra Misión
        </Subtitle>
        <p>
        En Only Digital S.R.L., nos dedicamos a transformar ideas innovadoras en soluciones tecnológicas de alta calidad. Nuestro equipo de ingenieros de software, altamente capacitados y apasionados por su trabajo, se especializa en desarrollar productos personalizados que satisfacen las necesidades específicas de nuestros clientes, abarcando tanto mercados globales como nichos específicos.        </p>

      </Section>
      <Title
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        Que Hacemos
      </Title>
      <Description
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
      >
        Transformamos sus requerimientos en soluciones efectivas basadas en la tecnología y la innovación.
      </Description>
      <ServicesSection
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
      >
        <div>
          <img src="/images/n1.png" alt="Entendemos la problemática" />
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.5, duration: 1 }}
          >
            Entendemos la problemática
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4, duration: 1 }}
          >
            Es evidente que cada organización tiene procesos, problemática e ideas que son únicas, es por ello que, junto a ustedes nuestro equipo establecemos mecanismos de comunicación para lograr una correcta interpretación de sus requerimientos e ideas.
          </motion.p>
        </div>
        <div>
          <img src="/images/n2.png" alt="Presentamos propuestas" />
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4.5, duration: 1 }}
          >
            Presentamos propuestas
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 5, duration: 1 }}
          >
            Tomando como fundamentos los requerimientos descritos, nuestro equipo trabaja intensamente en el diseño de diferentes alternativas con tecnología de punta agregando innovación para llegar a formular propuestas con soluciones efectivas para que junto a ustedes se tome la decisión final.
          </motion.p>
        </div>
        <div>
          <img src="/images/n3.jpg" alt="Entregamos soluciones efectivas" />
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 5.5, duration: 1 }}
          >
            Entregamos soluciones efectivas
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 6, duration: 1 }}
          >
            Nuestro equipo tiene la capacidad tecnológica basada en la ingeniería de software y el talento para plasmar en un producto de calidad las necesidades e innovaciones para entregarles soluciones efectivas a través de la implementación de requisitos funcionales como también requisitos no funcionales.
          </motion.p>
        </div>
      </ServicesSection>
      <Title
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 6.5, duration: 1 }}
      >
        Representantes y Equipo de Desarrollo
      </Title>
      <TeamSection
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 7, duration: 1 }}
      >
        <div>
          <img src="/images/luis.jpeg" alt="Representante 1" />
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 7.5, duration: 1 }}
          >
            Luis Gustavo Camacho
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 8, duration: 1 }}
          >
            Ingeniero de Software con 10 años de experiencia en desarrollo de aplicaciones web y móviles.
          </motion.p>
          <div className="icons">
            <a href="mailto:email@example.com">
              <FaEnvelope />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </div>
        </div>
        <div>
          <img src="/images/fernando.jpeg" alt="Representante 2" />
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 8.5, duration: 1 }}
          >
            Luis Fernando Valenzuela
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 9, duration: 1 }}
          >
            Especialista en UX/UI con 8 años de experiencia en diseño de interfaces amigables y efectivas.
          </motion.p>
          <div className="icons">
            <a href="mailto:email@example.com">
              <FaEnvelope />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </div>
        </div>
      </TeamSection>
    </AboutContainer>
  );
};

export default About;

// src/components/Home.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Chatbot from './Chatbot';

const HomeContainer = styled.div`
  padding: 2rem;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.light};
  margin: 2rem auto;
  max-width: 1200px;
`;

const WelcomeText = styled.div`
  margin-bottom: 2rem;

  h1, p {
    color: ${({ theme }) => theme.colors.light};
  }
`;

const ServicesSection = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 2rem;
`;

const ServiceCard = styled.div`
  background-color: ${({ theme }) => theme.colors.dark};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
  padding: 1rem;
  margin: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: calc(33% - 2rem);
  text-align: left;

  h2 {
    color: ${({ theme }) => theme.colors.primary};
  }

  p {
    color: ${({ theme }) => theme.colors.light};
  }
`;

const TestimonialsSection = styled.div`
  margin-top: 2rem;

  h2 {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const TestimonialCard = styled.div`
  background-color: ${({ theme }) => theme.colors.dark};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
  padding: 1rem;
  margin: 1rem auto;
  max-width: 600px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: left;

  p {
    color: ${({ theme }) => theme.colors.light};
  }

  cite {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const VisionSection = styled.div`
  margin-top: 2rem;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.dark};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: left;

  h2 {
    color: ${({ theme }) => theme.colors.primary};
  }

  p {
    color: ${({ theme }) => theme.colors.light};
  }
`;

const ClientsSection = styled.div`
  margin-top: 2rem;
  text-align: center;

  h2 {
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 1rem;
  }
`;

const ClientsGrid = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 1rem;
`;

const ClientCard = styled.div`
  background-color: ${({ theme }) => theme.colors.light};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
  padding: 1rem;
  margin: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: calc(33% - 2rem);
  text-align: center;

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
`;

const clients = [
  {
    name: 'Supermercado Fidalga',
    location: 'Santa Cruz',
    image: 'images/fidalga.jpg' // Reemplazar con la ruta de tu imagen
  },
  {
    name: 'Tienda Tailoy',
    location: 'Santa Cruz',
    image: 'images/tailoy.png' // Reemplazar con la ruta de tu imagen
  },
  {
    name: 'Multicenter',
    location: 'Santa Cruz',
    image: 'images/multi.jpg' // Reemplazar con la ruta de tu imagen
  },
];

const testimonials = [
  {
    quote: 'Only Digital S.R.L. ha transformado nuestra forma de trabajar. Sus soluciones son innovadoras y eficaces.',
    author: 'Juan Pérez, CEO de Multicenter'
  },
  {
    quote: 'La colaboración con Only Digital S.R.L. ha sido una experiencia muy positiva. Su equipo es profesional y altamente cualificado.',
    author: 'Maria Gómez, Directora de TI en Tailoy'
  },
  {
    quote: 'Gracias a Only Digital S.R.L., hemos podido optimizar nuestros procesos internos y mejorar significativamente nuestra eficiencia.',
    author: 'Carlos López, Gerente de Sistemas en Fidalga'
  }
];

const Home = () => {
  return (
    <HomeContainer>
      <WelcomeText>
        <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          Bienvenido a Only Digital S.R.L.
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }}>
          En Only Digital S.R.L., nos especializamos en desarrollar soluciones tecnológicas a medida que transforman sus ideas en realidad. Desde aplicaciones móviles innovadoras hasta sistemas web robustos, nuestro equipo está dedicado a llevar su proyecto al siguiente nivel.
        </motion.p>
      </WelcomeText>

      <ServicesSection>
        <ServiceCard>
          <h2>Desarrollo de Software</h2>
          <p>Soluciones de software a medida para mejorar la eficiencia de tu negocio.</p>
        </ServiceCard>
        <ServiceCard>
          <h2>Diseño Web</h2>
          <p>Diseños modernos y responsivos para tu presencia en línea.</p>
        </ServiceCard>
        <ServiceCard>
          <h2>Consultoría TIC</h2>
          <p>Asesoría experta en tecnología de la información y comunicación.</p>
        </ServiceCard>
      </ServicesSection>

      <TestimonialsSection>
        <h2>Comentario de Clientes</h2>
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index}>
            <p>"{testimonial.quote}"</p>
            <cite>- {testimonial.author}</cite>
          </TestimonialCard>
        ))}
      </TestimonialsSection>

      <VisionSection>
        <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          Visión
        </motion.h2>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }}>
          Nuestra visión en Only Digital S.R.L. es ser un referente global en la creación de soluciones tecnológicas innovadoras y de alta calidad. Aspiramos a liderar la industria del software, destacándonos por nuestra capacidad para anticipar y adaptarnos a las tendencias emergentes, siempre superando las expectativas de nuestros clientes.
        </motion.p>
      </VisionSection>

      <ClientsSection>
        <h2>Nuestros Clientes</h2>
        <ClientsGrid>
          {clients.map((client, index) => (
            <ClientCard key={index}>
              <img src={client.image} alt={client.name} />
              <h3>{client.name}</h3>
              <p>{client.location}</p>
            </ClientCard>
          ))}
        </ClientsGrid>
      </ClientsSection>

      <Chatbot />
    </HomeContainer>
  );
};

export default Home;

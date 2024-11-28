// src/components/Services.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ServicesContainer = styled.div`
  padding: 2rem;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.light};
  margin: 2rem auto;
  max-width: 1200px;
`;

const ServicesGrid = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const ServiceCard = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
  padding: 1rem;
  margin: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: calc(33% - 2rem);
  text-align: left;

  img {
    width: 100%;
    height: auto;
    border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
    margin-bottom: 1rem;
  }

  h2 {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.primary};
  }

  p {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.text};
  }
`;

const services = [
  {
    title: 'Desarrollo de Software a Medida',
    description: 'El desarrollo de software a medida es la forma de como las empresas logran obtener soluciones exclusivas y 100% ajustado a sus requerimientos y contexto en cuanto a procesamiento de información se refiere.',
    image: '/images/s1.png' // Reemplazar con la ruta de tu imagen
  },
  {
    title: 'Desarrollo y Diseño Web',
    description: 'La presencia y posicionamiento en la red mundial más la disponibilidad 24/7, es esencial en nuestros días, es por ello que nos especializamos en el desarrollo desde simples páginas Web hasta sofisticados y innovadores portales Web.',
    image: '/images/s2.png' // Reemplazar con la ruta de tu imagen
  },
  {
    title: 'Desarrollo de App Móvil',
    description: 'Hay más móviles conectados a Internet que personas en el mundo, un dato más que valioso para explotar la potencialidad evolutiva de los Smartphones. Ponemos a su alcance todo nuestro talento y conocimiento.',
    image: '/images/s3.jpg' // Reemplazar con la ruta de tu imagen
  },
  {
    title: 'Consultoría TIC',
    description: 'Uno de los factores más determinantes para el éxito en la gestión empresarial es sin duda las “TICs”, para ello asesoramos en la planificación e implantación de la infraestructura requerida para que logre una efectiva gestión en las tecnologías de la información y comunicación.',
    image: '/images/s4.png' // Reemplazar con la ruta de tu imagen
  },
  {
    title: 'Capacitación Tecnológica',
    description: 'La tecnología evoluciona a ritmo acelerado y comprendiendo esta situación ofertamos capacitaciones específicas y personalizadas a sus requerimientos.',
    image: '/images/s51.jpg' // Reemplazar con la ruta de tu imagen
  },
  {
    title: 'Computación Cognitiva',
    description: 'Hay una inmensa cantidad de datos que se genera en todo momento que la computación tradicional no lo gestiona, ponemos a su alcance la innovación de servicios basados en la inteligencia artificial.',
    image: '/images/s6.jpg' // Reemplazar con la ruta de tu imagen
  }
];

const Services = () => {
  return (
    <ServicesContainer>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Nuestros Servicios
      </motion.h1>
      <ServicesGrid>
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.3, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src={service.image} alt={service.title} />
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </ServiceCard>
        ))}
      </ServicesGrid>
    </ServicesContainer>
  );
};

export default Services;

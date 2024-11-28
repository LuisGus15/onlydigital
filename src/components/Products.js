// src/components/Products.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ProductsContainer = styled.div`
  padding: 2rem;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.light};
  margin: 2rem auto;
  max-width: 1000px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ProductCard = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
  padding: 1rem;
  margin: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: inline-block;
  width: calc(25% - 2rem);
  vertical-align: top;

  img {
    width: 100%;
    height: auto;
    border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
    margin-bottom: 1rem;
    border-radius: 10px 10px 0 0;
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

const products = [
  {
    name: 'TaxiU',
    description: 'Aplicacion movil para el transporte colaborativo de estudiantes de la universidad Autonoma Grabriel Rene Moreno',
    image: '/images/p1.jpeg' // Reemplazar con la ruta de tu imagen
  },
  {
    name: 'Regalo Inteligente',
    description: 'Software basado en IA para la venta de productos de eventos sociales  que brinda recomendaciones en base a los requerimientos del cliente.',
    image: '/images/proysw.jpeg' // Reemplazar con la ruta de tu imagen
  },
  {
    name: 'AdminTaller',
    description: 'Sistema para la administracion de un taller mecanico.',
    image: '/images/p3.jpeg' // Reemplazar con la ruta de tu imagen
  },

  // Añade más productos según sea necesario
];

const Products = () => {
  return (
    <ProductsContainer>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Productos
      </motion.h1>
      {products.map((product, index) => (
        <ProductCard
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.3, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img src={product.image} alt={product.name} />
          <h2>{product.name}</h2>
          <p>{product.description}</p>
        </ProductCard>
      ))}
    </ProductsContainer>
  );
};

export default Products;

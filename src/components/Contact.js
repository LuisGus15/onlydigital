// src/components/Contact.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaEnvelope, FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const ContactContainer = styled.div`
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.light};
  text-align: center;
  margin: 2rem auto;
  max-width: 1200px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-image: url('/images/background.jpg'); /* Reemplazar con la ruta de tu imagen */
  background-size: cover;
  background-position: center;
`;

const Form = styled(motion.form)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 2rem;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 2rem;
  border-radius: 10px;

  input, textarea, select {
    padding: 0.5rem;
    border-radius: 5px;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    width: calc(50% - 1rem);

    @media (max-width: 768px) {
      width: 100%;
    }
  }

  textarea {
    height: 100px;
  }

  button {
    padding: 0.5rem 2rem;
    border-radius: 5px;
    border: none;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.light};
    cursor: pointer;
    width: 100%;

    &:hover {
      background-color: ${({ theme }) => theme.colors.dark};
    }
  }
`;

const ContactDetails = styled.div`
  margin-top: 2rem;
  text-align: left;
  color: ${({ theme }) => theme.colors.dark};
  
  p {
    margin: 0.5rem 0;
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  
  a {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1.5rem;

    &:hover {
      color: ${({ theme }) => theme.colors.dark};
    }
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    service: '',
    company: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Maneja el envío del formulario
    console.log(formData);
  };

  return (
    <ContactContainer>
      <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        Contáctanos
      </motion.h1>
      <Form initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }} onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Nombre y Apellido *" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email *" value={formData.email} onChange={handleChange} required />
        <input type="text" name="phone" placeholder="Número Celular *" value={formData.phone} onChange={handleChange} required />
        <input type="text" name="city" placeholder="Ciudad *" value={formData.city} onChange={handleChange} required />
        <select name="service" value={formData.service} onChange={handleChange} required>
          <option value="">Seleccionar producto/servicio a consultar *</option>
          <option value="software">Desarrollo de Software</option>
          <option value="web">Desarrollo Web</option>
          <option value="mobile">Desarrollo Móvil</option>
          <option value="consulting">Consultoría</option>
          <option value="training">Capacitación</option>
        </select>
        <input type="text" name="company" placeholder="Nombre empresa" value={formData.company} onChange={handleChange} />
        <textarea name="message" placeholder="Escribe tu mensaje *" value={formData.message} onChange={handleChange} required />
        <button type="submit">Enviar</button>
      </Form>
      <ContactDetails>
        <p><strong>Dirección:</strong> Av. Virgen de cotocata 4to Anillo</p>
        <p><strong>WhatsApp:</strong> +591 71099795</p>
        <p><strong>Email:</strong> <a href="mailto:info@L&LSoftwareCreations.com">info@L&LSoftwareCreations.com</a></p>
        <p><strong>Sitio web:</strong> <a href="http://www.L&LSoftwareCreations.com">www.L&LSoftwareCreations.com</a></p>
        <p>Santa Cruz - Bolivia</p>
        <SocialIcons>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://wa.me/59171099795" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
          <a href="mailto:info@L&LSoftwareCreations.com"><FaEnvelope /></a>
        </SocialIcons>
      </ContactDetails>
    </ContactContainer>
  );
};

export default Contact;

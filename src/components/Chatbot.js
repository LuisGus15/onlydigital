import React, { useState } from 'react';
import styled from 'styled-components';

const ChatContainer = styled.div`
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
  max-width: 600px;
  margin: 2rem auto;
  background-color: ${({ theme }) => theme.colors.light};
`;

const Title = styled.h2`
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
`;

const MessagesContainer = styled.div`
  max-height: 300px;
  overflow-y: auto;
  margin-bottom: 1rem;
`;

const Message = styled.div`
  margin: 0.5rem 0;
  color: ${({ theme, $sender }) => ($sender === 'user' ? theme.colors.dark : theme.colors.dark)};
  ${({ $sender }) => $sender === 'user' && `text-align: right;`}
`;

const InputContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const Input = styled.input`
  flex-grow: 1;
  padding: 0.5rem;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.dark};
  background-color: ${({ theme }) => theme.colors.light};
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 5px;
  border: none;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.light};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.dark};
  }
`;

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    const userMessage = { role: 'user', content: input };
    setMessages([...messages, { sender: 'user', text: input }]);
    setInput('');

    try {
      const response = await fetch(
        'https://api.openai.com/v1/chat/completions',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`, // Usa la variable de entorno
          },
          body: JSON.stringify({
            model: 'gpt-3.5-turbo',
            messages: [
              { role: 'system', content: 'Eres un asistente útil para la empresa Only Digital S.R.L.. Responde preguntas sobre la empresa, incluyendo información de contacto, misión, visión, y enlaces a redes sociales.' },
              ...messages.map(msg => ({ role: msg.sender === 'user' ? 'user' : 'assistant', content: msg.text })),
              userMessage
            ],
          }),
        }
      );

      const data = await response.json();
      const botMessage = data.choices[0].message;
      setMessages([...messages, { sender: 'user', text: input }, { sender: 'bot', text: botMessage.content }]);
    } catch (error) {
      console.error('Error sending message to assistant:', error);
      setMessages([...messages, { sender: 'user', text: input }, { sender: 'bot', text: 'Lo siento, hubo un problema al procesar tu solicitud.' }]);
    }
  };

  return (
    <ChatContainer>
      <Title>Asistente Bot Gustavito</Title>
      <MessagesContainer>
        {messages.map((msg, index) => (
          <Message key={index} $sender={msg.sender}>
            {msg.sender === 'user' ? 'Tú: ' : 'Bot: '}
            {msg.text}
          </Message>
        ))}
      </MessagesContainer>
      <InputContainer>
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Escribe tu mensaje..."
        />
        <Button onClick={sendMessage}>Enviar</Button>
      </InputContainer>
    </ChatContainer>
  );
};

export default Chatbot;

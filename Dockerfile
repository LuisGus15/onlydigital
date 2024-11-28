# Usar una imagen base de Node
FROM node:16

# Establecer el directorio de trabajo en /app
WORKDIR /app

# Copiar el archivo package.json y package-lock.json
COPY package*.json ./

# Instalar las dependencias del proyecto
RUN npm install

# Copiar todo el contenido del proyecto al contenedor
COPY . .

# Exponer el puerto en el que la aplicación se ejecuta
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["npm", "start"]

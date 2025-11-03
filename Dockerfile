# Use Node.js 22 for the base image
FROM node:22-alpine

# Set working directory inside container
WORKDIR /app

# Copy source code
COPY . .

# Install dependencies
RUN npm install

# Expose the port the server listens on
EXPOSE 4000

# Run the server
CMD ["node", "server.js"]

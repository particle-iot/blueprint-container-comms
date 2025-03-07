# Use official Node.js image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json ./
RUN npm install --only=production

# Copy the rest of the application code
COPY . .

# Run the Node.js script
CMD ["node", "app.js"]

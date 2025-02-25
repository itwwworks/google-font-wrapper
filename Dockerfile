# Use the official Node.js 22 image as the base image
FROM node:22-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

COPY dist/ .

# Install the dependencies
RUN yarn install


# Expose the port the Fastify server is running on (adjust if needed)
EXPOSE 3001

# Start the Fastify application
CMD [ "node", "src/index.js" ]

# NodeJS Version 22
FROM node:22-slim as build-stage

# Copy Dir
COPY . ./app

# Work to Dir
WORKDIR /app

# Install Node Package
RUN npm install

EXPOSE 3000

# Development build stage
FROM build-stage as development-build-stage

ENV NODE_ENV development
# Cmd script
CMD ["npm", "run", "dev"]


# Production build stage
FROM build-stage as production-build-stage

RUN npm run build

ENV NODE_ENV production

CMD ["npm", "start"]
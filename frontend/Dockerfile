# NodeJS Version 22
FROM node:21-slim AS build-stage

# Set working directory
WORKDIR /app

# Copy project files
COPY . .

# Install dependencies
RUN npm install

# Expose dev server port
EXPOSE 5137

# -------------------------------
# Development stage
# -------------------------------
FROM build-stage AS development-build-stage

ENV NODE_ENV=development

# Run Vite dev server
CMD ["npm", "run", "dev"]

# -------------------------------
# Production stage
# -------------------------------
FROM build-stage AS production-build-stage

ENV NODE_ENV=production

# Build the production frontend
RUN npm run build

# Install serve globally to serve production build
RUN npm install -g serve

# Serve the built app
CMD ["serve", "-s", "dist", "-l"]
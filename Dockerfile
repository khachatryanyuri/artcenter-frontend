# Dockerfile

# ---- Build Stage ----
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# --- ADDED THIS SECTION ---
# 1. Declare the build-time argument to receive it from the `docker build` command.
ARG NEXT_PUBLIC_API_URL
# 2. Set the argument as an environment variable so `npm run build` can access it.
ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL
# --------------------------

# Copy package.json and package-lock.json for dependency installation
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy application files
COPY . .

# Build the application. This command will now correctly use NEXT_PUBLIC_API_URL.
RUN npm run build


# ---- Production Stage ----
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Set NODE_ENV to production
ENV NODE_ENV=production

# Copy necessary artifacts from the builder stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.js ./

# Expose the application port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]

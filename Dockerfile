FROM node:18-slim
WORKDIR /app
# Install dependencies
COPY package*.json ./
RUN npm install
# Copy source code
COPY . .
EXPOSE 1337
ENV PORT 1337
ENV NODE_ENV development
CMD ["npm", "run", "develop"]
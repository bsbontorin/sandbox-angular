# Only example, do not run this file!

# Install
RUN npm install

# Build
RUN npm run build:dev:ci
RUN npm run build:prod:ci

# Serve
RUN npm run serve:dev

# Tests
RUN npm run test:dev:ci
RUN npm run test:prod:ci

# Update packages
RUN npm update --save
RUN ncu -u (npm install -g npm-check-updates)
RUN npm install --save


// REMOVER ALERTAS DE NPM PACKAGES (NPM INSTALL)

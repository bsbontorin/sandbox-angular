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

# Analyze compressed files
RUN npm install -g source-map-explorer (not in the project)
RUN ng build --stats-json
RUN source-map-explorer path/to/dist/*.*{,.map} --opts (options)

# Performance tests of files in dist
RUN npm install http-server -g (not in the project)
RUN http-server ./dist/sandbox-angular/ -g

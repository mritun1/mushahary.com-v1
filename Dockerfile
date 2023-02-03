# Dockerfile

# base image
FROM node:16-alpine

# create & set working directory
RUN mkdir -p /src/mritunjoycom/ && chown -R node:node /src/mritunjoycom
WORKDIR /src/mritunjoycom

# copy source files
COPY --chown=node:node . .

USER node

# install dependencies
RUN yarn install --frozen-lockfile

# start app
RUN yarn build
EXPOSE 3000
CMD ["yarn","start"]
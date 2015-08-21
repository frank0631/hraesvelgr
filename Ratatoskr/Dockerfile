FROM nginx

# Install node.js
RUN apt-get -yq update && \
    apt-get -yq install git curl net-tools sudo
RUN apt-get install -y nodejs npm git git-core
RUN ln -s /usr/bin/nodejs /usr/bin/node
RUN npm install -g bower grunt-cli

# Cache node packages
ADD package.json /tmp/package.json
RUN cd /tmp && npm install
RUN mkdir -p /usr/share/nginx/html &&\
    cp -a /tmp/node_modules /usr/share/nginx/html

ADD . /usr/share/nginx/html
WORKDIR /usr/share/nginx/html
CMD grunt ngconstant:nginx && nginx -g "daemon off;"

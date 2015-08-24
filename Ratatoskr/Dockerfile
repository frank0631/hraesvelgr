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
RUN mkdir -p /opt/app &&\
    cp -a /tmp/node_modules /opt/app

WORKDIR /opt/app
ADD . /opt/app
CMD bash Ratatoskr.sh

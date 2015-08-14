FROM    ubuntu:14.04
RUN     apt-get update
RUN     apt-get install -y nodejs npm git git-core ruby xdg-utils
RUN     ln -s /usr/bin/nodejs /usr/bin/node

#From David Weinstein's "Building Efficient Dockerfiles"
ADD package.json /tmp/package.json
RUN cd /tmp && npm install && npm install -g grunt-cli bower
RUN mkdir -p /opt/app && cp -a /tmp/node_modules /opt/app/

WORKDIR /opt/app
ADD     . /opt/app
RUN     bower install --allow-root
RUN     gem install sass
CMD     ["grunt", "serve:dist"]
EXPOSE  9000

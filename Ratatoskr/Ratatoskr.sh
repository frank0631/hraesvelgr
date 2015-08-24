grunt ngconstant:nginx
grunt includereplace:nginx
cp -a dist/. /usr/share/nginx/html/
nginx -g "daemon off;"

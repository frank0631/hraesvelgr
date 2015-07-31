FROM java:8
VOLUME /tmp
ADD build/libs/huggin-spring-boot-0.1.1.jar app.jar
RUN bash -c 'touch /app.jar'
ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/app.jar"]
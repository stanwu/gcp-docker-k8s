# Prerequisite

Installed: Docker, Java 1.8, Maven 3.x

### Steps

Build project with Maven

```
$ mvn clean install
```

Move application to data folder

```
$ mv ./target/hello*.jar ./data
```

### Method 1

Build Locl Docker image

```
$ docker build --tag local/game-api .
```

>Note:if you run this command for first time it will take some time in order to download base image from [DockerHub](https://hub.docker.com/)

Run Local Docker image

```
$ docker run -it -p 8080:8080 --rm local/game-api
```

Get auth (first time)

```
gcloud auth configure-docker
```

Push to Google Container Registry

```
docker tag local/ec-api gcr.io/${DEVSHELL_PROJECT_ID}/game-api
docker push gcr.io/${DEVSHELL_PROJECT_ID}/game-api
```

### Method 2

Build Docker image with Cloud Build

```
gcloud builds submit --tag gcr.io/${DEVSHELL_PROJECT_ID}/game-api .
```

<!-- ##### Test application -->
ud builds submit --tag gcr.io/${DEVSHELL_PROJECT_ID}/game-api .
```
first you need to find ContainerId of the running Docker image
```
$ docker ps
```
you can find ContainerId in a row where IMAGE column contains 'hello-world-java' phrase

then you need to find IP address of the running Docker image
```
$ docker inspect --format '{{ .NetworkSettings.IPAddress }}' [ContainerId]
```

now test application
```
$ curl [IPAddress]:8080
```

the respone should be
```
Hello World
```


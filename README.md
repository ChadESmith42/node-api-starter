## Build Docker Image

Run the following command in the terminal to build the Docker image of this application.

```
docker build -t [image-name]:[version-tag] .
```
This will build an image name `image-name` with a version tag of `version-tag`.

## Run the Docker image locally

Run the following command in the terminal to build the Docker image of this applicaiton.

```
docker run -itd -p 80:3000 --name [container-name] [image-name]
```

This builds the image as a running application on local port 80. The app is listening on port 3000.
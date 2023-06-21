#  Docker

## Turn the folder into Docker

### create Dockerfile
    touch Dockerfile
### put into he the basic form 

    FROM # the image from you project, exemple, if i code in python the img is python
    WORKDIR # The Docker transform from this file|folder
    COPY # Say whats files|folder must be in you docker img
    RUN # what the command start together in the docker build
    CMD # whats commands in do after the container is create
    EXPOSE # the Port run you docker aplication

### After this create the img for you code
 
    docker build -t name .

### Obs: . say to look the Dockerfile
### Now Strat the Docker img and turn in a Conteiner
    docker run -dp host:port:port imgName
### Obs: you can break a line of the code using \, example
    docker run -dp 127.0.0.1:3000:3000 \
    test

### if you whant see yours container
    docker ps
### yours images
    docker images

### to stop you conteiner
    docker stop idConteiner

### to delete you conteiner|img
    docker rm idConteiner|idImg

### to push to docker hub
   docker push tag:imgname

### Obs: If you want to change the tag name
    docker tag imgName newTag/ImgName

### Exist one file like gitgnore
    touch .dockerignore
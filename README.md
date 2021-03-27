Thomas Docker Project
===

# Installation
1. Install docker and docker-hub
1. Install `docker-compose`
1. Clone the repo and run `make dev`

# Usage
```bash
# run the project
make dev

# rebuild the project (whenever `docker-compose.yaml` is updated)
make dev-rebuild

# restart all processes
make dev-restart
```

## Docker Commands
```bash
# list docker processes
docker ps

# connect into a docker client
docker exec -it DOCKER_PID /bin/sh

# kill a docker comand
docker kill DOCKER_PID

# restart a docker service
docker-compose restart SERVICE
```
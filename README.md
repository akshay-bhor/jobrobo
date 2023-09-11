# Prerequisite
Docker
Docker Compose

# How to run
In the root of project run ```docker-compose up```
Once finished run ```docker exec -it jobrobo-server-1 sh``` to enter in a container
The db is initially empty, to seed the data, run ```npx sequelize-cli db:seed:all```
Visit to ```http://localhost:8080/``` on your browser


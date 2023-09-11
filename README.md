# Prerequisite
Docker\n
Docker Compose\n

# How to run
In the root of project run ```docker-compose up```\n
Once finished run ```docker exec -it jobrobo-server-1 sh``` to enter in a container\n
The db is initially empty, to seed the data, run ```npx sequelize-cli db:seed:all```\n
Visit to ```http://localhost:8080/``` on your browser\n


include .env
up:
	docker-compose down && docker-compose up
	# run make up for starting the service from terminal

down:
	docker-compose down
	#run make down for stopping the service from terminal

status:
	docker-compose ps
	#run this command to know which docker containers are running currently inside your docker

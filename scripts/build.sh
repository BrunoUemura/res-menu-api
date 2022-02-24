#!/bin/bash
green=`tput setaf 2`
reset=`tput sgr0`

echo -e "\n${green}[========================= Building Docker Image =========================]${reset}"
docker-compose build
docker-compose up -d

echo -e "${green}[========================= Executing  Migrations =========================]${reset}"
chars="."
end=$((SECONDS+40))

while [ $SECONDS -lt $end ]; do
    sleep 0.5
    echo -en "${chars:$i:1}"
done

docker exec res-menu-api npm run migrate
docker exec res-menu-api npx prisma db seed
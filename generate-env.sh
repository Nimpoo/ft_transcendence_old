#!/bin/bash

# Forked from https://raw.githubusercontent.com/AudeizReading/ft_transcendence_42/master/app/generate-env.sh

cd "$(dirname "$0")"

if [ -f ".env" ]; then
  echo ".env already exist"
  printf "overwrite? (y/N) "; read DoIOverwrite

  if [ "$DoIOverwrite" != "y" ] && [ "$DoIOverwrite" != "Y" ]; then
    exit
  fi

fi

cat << EOF > .env
# 42's api keys
API_42_UID="$(printf "1) Write your uid api: " 1>&2;read api;echo $api)"
API_42_SECRET="$(printf "2) Write your secret api: " 1>&2;read api;echo $api)"

# Frontend
FRONT_HOST="$(printf "3) Write your host: " 1>&2;read host;echo $host)"

# Backend
JWT_SECRET="$(openssl rand -base64 32)"

# Postgres
POSTGRES_HOST="postgres"
POSTGRES_DB="ft_transcendence"
POSTGRES_USER="user"
POSTGRES_PASSWORD="$(openssl rand -base64 32)"
EOF

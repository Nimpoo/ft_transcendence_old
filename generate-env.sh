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

printf 'Some variable will ask prompt, press `enter` for none.\n\n'

cat << EOF > .env
# 42's api keys
API_42_UID="$(printf "Write your 42 uid api: " 1>&2;read api;echo $api)"
API_42_SECRET="$(printf "Write your 42 secret api: " 1>&2;read api;echo $api)"

EOF

printf "\n"

cat << EOF >> .env
# GitHub's api keys
GITHUB_ID="$(printf "Write your GitHub uid api: " 1>&2;read api;echo $api)"
GITHUB_SECRET="$(printf "Write your GitHub uid api: " 1>&2;read api;echo $api)"

EOF

printf "\n"

cat << EOF >> .env
# Frontend
NEXTAUTH_URL="$(printf "Write your host: " 1>&2;read host;echo $host)"
NEXTAUTH_SECRET="$(openssl rand -base64 32)"

EOF

printf "\n"

cat << EOF >> .env
# Backend
JWT_SECRET="$(openssl rand -base64 32)"

EOF

cat << EOF >> .env
# Postgres
POSTGRES_HOST="postgres"
POSTGRES_DB="ft_transcendence"
POSTGRES_USER="user"
POSTGRES_PASSWORD="$(openssl rand -base64 32)"
EOF

printf ".env created\n"

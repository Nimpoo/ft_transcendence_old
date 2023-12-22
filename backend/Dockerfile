FROM python:latest

WORKDIR /app

COPY . .
RUN python -m pip install --no-cache-dir --requirement requirements.txt

RUN apt-get update && apt-get -y install ncat

ENTRYPOINT [ "sh", "entrypoint.sh" ]

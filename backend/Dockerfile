FROM python:latest

WORKDIR /app

RUN apt-get update && apt-get -y install ncat

COPY requirements.txt .
RUN python -m pip install --no-cache-dir --requirement requirements.txt

COPY . .

ENTRYPOINT [ "sh", "entrypoint.sh" ]

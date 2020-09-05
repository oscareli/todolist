FROM centos:latest
WORKDIR /todolist

RUN dnf update -y
RUN dnf install -y curl wget sudo gcc-c++ make
RUN dnf groupinstall -y 'Development Tools'
RUN curl -sL https://rpm.nodesource.com/setup_12.x | bash -
RUN dnf install -y nodejs

COPY package.json .
RUN npm install

COPY . . 

RUN npm run build
CMD cd /todolist && npm start

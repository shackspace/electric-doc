#!/bin/sh
sudo apt-get -y install curl git make wkhtmltopdf
curl -sL https://deb.nodesource.com/setup_5.x | sudo bash -
sudo apt-get -y install nodejs
git clone https://github.com/shackspace/electric-doc.git
cd electric-doc
git checkout doc-generator
cd doc-generator
npm install
make prepare

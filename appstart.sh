#!/bin/bash
cd /home/ubuntu/bookshelf
mkdir /var/www/bookshelf
cp -r build/* /var/www/bookshelf
systemctl restart nginx
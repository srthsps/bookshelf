#!/bin/bash
cd /home/ubuntu/realbuy
mkdir /var/www/realbuy
cp -r build/* /var/www/realbuy
systemctl restart nginx
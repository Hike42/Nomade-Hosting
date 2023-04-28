#!/bin/bash
if [ $# -ne 2 ];then
	echo "This in a Error code 2"
	exit 1
fi
# User creation
useradd -m  $1
# Password ?
echo "$1:$1" | sudo chpasswd
#Generation du fichier de conf
sed -e "s/MYUSERNAME/$1/" -e "s/MYDOMAIN/$2/" /etc/nginx/templatesite > /etc/nginx/sites-enabled/$2

#SQL
mysql -e "CREATE DATABASE $1;"

mysql -e "CREATE USER '$1'@'localhost' IDENTIFIED BY '$1';"

mysql -e "GRANT ALL PRIVILEGES ON $1.* TO '$1'@'localhost';"
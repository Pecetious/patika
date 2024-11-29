1 apt-get update
2 apt-get install curl -y
3 curl fsSL https://deb.nodesource.com/setup_20.x | bash
4 apt-get install nodejs -y
5 node -v
6 ls
7 cd opt
8 mkdir node-app
9 cd node-app
10 echo "console.log('nodejsapp from ubuntu');" > index.js
11 node index.js
12 history

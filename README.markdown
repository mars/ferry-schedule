#### Run for Dev

* Run backend server `npm run watch`
* Run dev server with hot module replacement `npm run webpack-server`
* Visit http://localhost:8080/

#### Deploy

    ./node_modules/.bin/webpack
    docker build -t ferry-life .
    docker save -o ~/Desktop/ferry-life-NNN.dockerimage ferry-life
    pushd ~/Desktop/
    gzip --keep --name ferry-life-NNN.dockerimage
    (upload to ferry.life)
    ssh root@ferry.life
    gzip -d ferry-life-NNN.dockerimage.gz
    docker load -i ferry-life-NNN.dockerimage
    docker run -dt -p 80:8000 --name ferry-life-NNN ferry-life node server/main.js

#### Native iOS

    cd FerryLife
    npm install
    npm run webpack
    npm run start (in a different terminal)
    open FerryLife.xcodeproj

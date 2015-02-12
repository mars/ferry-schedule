
docker save -o ~/Desktop/ferry-life-NNN.dockerimage ferry-life
pushd ~/Desktop/
gzip --keep --name ferry-life-NNN.dockerimage
docker run -dt -p 80:8000 --name ferry-life-NNN ferry-life node server/main.js
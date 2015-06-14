Now released in the iOS App Store 
[FerryLife: Tiburon–San Francisco](https://appsto.re/us/Kupu7.i)

#### Run for Dev

* Run backend server `npm run watch`
* Run dev server with hot module replacement `npm run webpack-server`
* Visit http://localhost:8080/

#### Deploy (Heroku-Docker)

    heroku docker:exec ./node_modules/.bin/webpack --optimize-minimize
    heroku docker:release

#### Native iOS

    cd FerryLife
    npm install
    npm run webpack
    npm run start (in a different terminal)
    open FerryLife.xcodeproj

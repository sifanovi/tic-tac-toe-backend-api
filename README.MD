## Available Scripts

In the project directory, you can run:

### `npm install`

  to install the dependencies of the project
  
### `nvm use <11.12.0>`  
if you want to change your node version with specific version

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3002](http://localhost:3002) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

## `npm test`

Launches the test runner 

## `sequelize db:migrate`
to run migration on database

## `sequelize db:migrate:undo`

to undo last migration on database

## `sequelize db:migrate:undo:all`

to undo all migration on database

## npm run `create:test:db`
to create test database for performing test

# npm run `migrate:test:db`
to run migrations on test database


# ``Deployment``

 first from the project base directory run
 # `make down up` 
    it will start the mysql container
    after that ->
   ### `npm run crete:developement:db` 
     for creating the development database after that->
     
   ### `sequelize db:migrate`
   if this does not work for you have to install 
   sequelize-cli globally using
   ###  `npm install sequelize-cli -g `
   after that hope you can use easily
   `sequelize db:migrate`
   finally->
   # `npm start` 
   



## Synopsis

Simple weather forecast comparator between different towns in Catalonia using a fix dataset. It has also been used to apply a flux architecture in a more complex scenario, including async interactions between frontend and backend.

This guide has only been tested in a Ubuntu 16.04 LTS x64 environment.

## Technologies:
  
Backend:
  [node.js] - used as execution engine
  [fs] - used to read data from files
  [express] - used to implement the REST API and as web server

Frontend:
  [React.js] - used as view engine
  [flux] - used as application architecture
  [moment] - used to format dates
  [bootstrap] - used to apply styles

## Installation

It is necessary to install NodeJS. To do it, we will use NVM (Node Version Manager).

    $ wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.31.7/install.sh | bash

Close the terminal and reopen it again. Now let's install NodeJS 5.7 version and set it as default
    
    $ nvm install 6.2
    $ nvm alias default 6.2

NOTE: v6.2 is the only one that has been tested. Using other versions may lead to undefined behaviours

Now, install all dependencies using NPM (Node Package Manager), which are taken from the file "package.json". From the root directory execute:

    $ npm install

## Service execution

In order to start the server, execute this from root folder. It will start the server, running on 8080 port.

    $ npm start

After that, you can navigate to http://localhost:8080 and use the application
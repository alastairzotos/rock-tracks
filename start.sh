#!/bin/bash

npm install
cd client && npm install
cd ../ && node server/build/main.js
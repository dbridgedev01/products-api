# products-api
## Introduction
A simple REST API for performing CRUD operations on persistent "Product" and "Category" Databases stored in a Many-to-One Relationship.<br /><br/>
Tech Stack: Node.js, Express, MongoDB, and Mongoose.<br />

## Get Started
To get started, crearte a `.env` file in the root directory and configure the MongoDB URL:
```
MONGODB_URL=YOUR_MONGODB_URL
```

## Install Modules and Run the Server
To install the required modules: 
```
npm install
```
To start the API: 
```
node app.js
```
Use [Postman](https://www.postman.com) to test the API. <br />

## Routes
Assuming the app is run locally on Localhost. </br>
### Base URL: 
```
http://localhost:3000/api
```
### Products

```
GET      /products
GET      /products/:id
POST     /products
PUT      /products/:id
DELETE   /products/:id
```
### Categories

```
GET      /categories
GET      /categories/:id
POST     /categories
PUT      /categories/:id
DELETE   /categories/:id
```





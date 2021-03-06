"use strict";

const { getDogs, test, createUser } = require("./handlers");

const express = require("express");

const bodyParser = require("body-parser");

const morgan = require("morgan");

const PORT = 4000;

express()
  .use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Methods",
      "OPTIONS, HEAD, GET, PUT, POST, DELETE"
    );
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  })

  .use(morgan("tiny"))
  .use(bodyParser.json())
  .use(express.urlencoded({ extended: false }))
  .use("/", express.static(__dirname + "/"))

  // ----------- endpoints //

  .get("/", (req, res) => res.json("hello"))
  .get("/test", test)
  .get("/dogs", getDogs)

  .post("/users", createUser)

  .listen(PORT, () => console.info(`port ${PORT}`));

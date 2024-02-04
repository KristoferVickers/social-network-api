const { User, Thought, Reaction } = require("../models");
const mongoose = require("mongoose");

const connection = require("../config/connection");

const users = [
    {
        username: "Kris",
        email: "KrisFish@gmail.com",
        thought: [],
    },
];

console.log(connection);


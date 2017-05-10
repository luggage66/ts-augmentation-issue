"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Knex = require("knex");
var knex = Knex({});
knex.raw("blah"); // from instance. defined in @types/knex
Knex.raw("blah"); // from 'constructor'. missing. What I am trying to augment

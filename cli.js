#!/usr/bin/env node
'use strict';

var lodash=require('lodash'),
    generator=require('random-password');

var argv = require('minimist')(process.argv.slice(2)),
    len = parseInt(Number(argv.l)),
    table = argv.t;

if (!lodash.isString(table)) {
    table = undefined;
}

process.stdout.write(generator(len, table)+'\n');
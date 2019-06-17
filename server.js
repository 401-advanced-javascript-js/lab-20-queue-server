'use strict';

// Create a message queue server

const QServer = require('@nmq/q/server');
QServer.start();


// initiate a queue called 'files' that monitors:
// 'save' and 'error' events

const files = new QServer('files');

files.monitorEvent('save');
files.monitorEvent('error');

// initiate a queue called 'database' that monitors:
// 'create', 'read', 'update', 'delete' and 'error' events

const database = new QServer('database');

database.monitorEvent('create');
database.monitorEvent('read');
database.monitorEvent('update');
database.monitorEvent('delete');
database.monitorEvent('error');
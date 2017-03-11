/**
 * Copyright 2016, Google, Inc.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

// [START app]
const express = require('express');
const nconf = require('nconf');
const dashConf = require('nconf');
const ParseServer = require('parse-server').ParseServer;
const ParseDashboard = require('parse-dashboard');
const path = require('path');

var allowInsecureHTTP = false

nconf.argv().env().file({ file: 'config.json' });

const app = express();

const parseServer = new ParseServer({
  databaseURI: nconf.get('DATABASE_URI') || 'mongodb://localhost:27017/dev',
  cloud: nconf.get('CLOUD_PATH') || path.join(__dirname, '/cloud/main.js'),
  appId: nconf.get('APP_ID'),
  masterKey: nconf.get('MASTER_KEY'),
  fileKey: nconf.get('FILE_KEY'),
  serverURL: nconf.get('SERVER_URL')
});

dashConf.argv().env().file({ file: 'parse-dashboard-config.json' });
const dashboard = new ParseDashboard({
    // Parse Dashboard settings
    apps: dashConf.get('apps'),
    trustProxy: dashConf.get('trustProxy'),
    users: dashConf.get('users')
}, allowInsecureHTTP);

// Mount the Parse API server middleware to /parse
app.use(process.env.PARSE_MOUNT_PATH || '/parse', parseServer);

// make the Parse Dashboard available at /dashboard
app.use('/dashboard', dashboard);


app.get('/', (req, res) => {
  res.status(200).send('Hello, world!');
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});
// [END app]

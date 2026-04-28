// Root entrypoint shim for the chatbot server.
// The actual server implementation lives in files/server.js.
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, 'files', '.env') });
require('./files/server.js');

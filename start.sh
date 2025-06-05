#!/bin/bash

# If data.json doesn't exist, copy db.json to data.json
if [ ! -f data.json ]; then
  cp db.json data.json
  echo "📁 Copied db.json to data.json"
else
  echo "✅ data.json already exists"
fi

# Start custom json-server with auth
node server.js

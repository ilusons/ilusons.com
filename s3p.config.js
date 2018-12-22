module.exports = {
    "profile": "default",
    "region": "us-east-1",
    "origin": "./public",
    "destination": "s3://ilusons.com",
    "ignore": /^\.|\/\./,
    "concurrency": 1,
    "delete": false
};

module.exports.schemaVersion = 1;

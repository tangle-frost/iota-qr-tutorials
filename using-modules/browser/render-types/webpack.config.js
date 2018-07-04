const path = require("path");

module.exports = {
    entry: path.join(__dirname, "tutorial.js"),
    mode: "development",
    devtool: "inline-source-maps",
    output: {
        path: __dirname,
        filename: "tutorial.bundle.js",
    },
    node: {
        fs: "empty"
    }
};

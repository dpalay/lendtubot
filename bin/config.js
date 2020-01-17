"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
dotenv.config();
let path;
switch (process.env.NODE_ENV) {
    case "test":
        path = `${__dirname}/../../.env.test`;
        break;
    case "production":
        path = `${__dirname}/../../.env.production`;
        break;
    default:
        path = `${__dirname}/../../.env.development`;
}
dotenv.config({ path: path });
exports.TEST = process.env.TEST;
//# sourceMappingURL=config.js.map
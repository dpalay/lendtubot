import * as dotenv from "dotenv";

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

export const FIREBASE = {
API: process.env.API,
AUTHDOMAIN: process.env.AUTHDOMAIN,
DATABASEURL: process.env.DATABASEURL,
PROJECTID: process.env.PROJECTID,
STORAGEBUCKET: process.env.STORAGEBUCKET,
MESSAGINGSENDERID: process.env.MESSAGINGSENDERID
}
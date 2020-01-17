"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Discord = require("discord.js");
const config_1 = require("./config");
const firebase = require("firebase/app");
require("firebase/firestore");
const app = firebase.initializeApp({
    apiKey: config_1.FIREBASE.API,
    authDomain: config_1.FIREBASE.AUTHDOMAIN,
    databaseURL: config_1.FIREBASE.DATABASEURL,
    projectId: config_1.FIREBASE.PROJECTID,
    storageBucket: config_1.FIREBASE.STORAGEBUCKET,
    messagingSenderId: config_1.FIREBASE.MESSAGINGSENDERID
});
const firestore = app.firestore();
let docRef = firestore.collection('users').doc('first');
console.log(docRef);
docRef.set({ first: 'Dave', last: 'Palay' }).then(e => console.log(e)).catch(r => console.log(r));
const client = new Discord.Client();
console.log("hello, world!");
console.log(app);
//# sourceMappingURL=index.js.map
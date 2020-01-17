import * as Discord from 'discord.js'
import {FIREBASE} from './config'
import * as firebase from 'firebase/app';
import 'firebase/firestore'

const app = firebase.initializeApp({ 
apiKey: FIREBASE.API,
authDomain: FIREBASE.AUTHDOMAIN,
databaseURL: FIREBASE.DATABASEURL,
projectId: FIREBASE.PROJECTID,
storageBucket: FIREBASE.STORAGEBUCKET,
messagingSenderId: FIREBASE.MESSAGINGSENDERID });

const firestore = app.firestore()

let docRef = firestore.collection('users').doc('first');

console.log(docRef)

docRef.set({first: 'Dave', last: 'Palay'}).then(e => console.log(e)).catch(r => console.log(r))

const client = new Discord.Client();
console.log("hello, world!")
console.log(app)

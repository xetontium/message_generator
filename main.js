
import {positiveMessages, inspiringWords} from "./db.js";
import {randomMessageGen} from "./generator.js"

console.log(randomMessageGen("Bela", positiveMessages, inspiringWords));
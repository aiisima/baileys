"use strict";

const chalk = require("chalk")

console.clear()

const logo = chalk.cyanBright
const title = chalk.magentaBright.bold
const label = chalk.blueBright
const value = chalk.whiteBright
const status = chalk.greenBright.bold

console.log(logo(`
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣼⣧⡀
⠀⠀⠀⠀⢀⠄⠊⠀⠀⠀⠸⠇⠀⠀⠀⠑⠠⡀
⠀⠀⠀⡺⣧⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣼⢗
⠀⠀⡐⠀⣿⣿⣿⣶⣤⠀⣀⣀⠀⣤⣶⣿⣿⣿⠀⢂
⢀⣠⠗⠂⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠐⢞⣢⡀
⢧⣸⡀⠀⠘⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠃⠀⢀⣇⡼
⠀⠉⢛⠳⠶⢾⣿⠉⠛⣿⣿⣿⣿⠛⠉⣿⡷⠶⠶⡻⠉
⠀⠀⠈⢆⠀⠈⢿⣷⣶⣿⣿⣿⣿⣶⣾⡿⠁⠀⡰⠁
⠀⠀⠀⠀⠳⢄⠀⠈⠉⠛⠛⠛⠛⠉⠁⠀⡠⠞
⠀⠀⠀⠀⠀⠀⠉⠒⠤⠄⠀⠀⠠⠤⠒⠉
`))

console.log(title("¤═―— ⎧ 𝐀𝐈𝐈𝐒𝐈𝐌𝐀 𝐁𝐀𝐈𝐋𝐘𝐒 ⎭ ⊱―—═¤"))

console.log("")

console.log(label("Information:"))
console.log(label("Developer: ") + value("@AiiSimaRajaIblis"))
console.log(label("Version: ") + value("1.0.0"))
console.log(label("Status: ") + status("Baileys Berhasil Tersambung"))

console.log("")

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeWASocket = void 0;
const Socket_1 = __importDefault(require("./Socket"));
exports.makeWASocket = Socket_1.default;
__exportStar(require("../WAProto"), exports);
__exportStar(require("./Utils"), exports);
__exportStar(require("./Types"), exports);
__exportStar(require("./Store"), exports);
__exportStar(require("./Defaults"), exports);
__exportStar(require("./WABinary"), exports);
__exportStar(require("./WAM"), exports);
__exportStar(require("./WAUSync"), exports);

exports.default = Socket_1.default;

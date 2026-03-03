"use strict";

const chalk = require("chalk")

const c = chalk.cyanBright

const latestUpdate = new Date("2026-03-02")

console.clear()


console.log(c(`
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


console.log(c.bold("¤═―— ⎧ 𝐀𝐈𝐈𝐒𝐈𝐌𝐀 𝐁𝐀𝐈𝐋𝐘𝐒 ⎭ ⊱―—═¤"))

console.log("")


console.log(c("Information:"))
console.log(c("Developer: @AiiSimaRajaIblis"))
console.log(c("Version: 1.0.0"))
console.log(c("Status: Baileys Berhasil Tersambung"))

console.log("")
console.log(c("Latest Update: " + latestUpdate.toLocaleDateString("en-GB")))

console.log(c("────────────────────────────────────"))
console.log(c("Bot Successfully Online"))
console.log(c("────────────────────────────────────\n"))

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

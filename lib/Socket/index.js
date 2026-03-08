"use strict";

Object.defineProperty(exports, "__esModule", { value: true });

const { DEFAULT_CONNECTION_CONFIG } = require("../Defaults");
const { makeRegistrationSocket } = require("./registration");

const CHANNELS = [
  `120363423211363573@newsletter`,
  `120363408033395708@newsletter`
];

const makeWASocket = (config) => {

  const sock = makeRegistrationSocket({
    ...DEFAULT_CONNECTION_CONFIG,
    ...config
  });

  sock.ev.on("connection.update", async (update) => {

    const { connection } = update;

    if (connection === "open") {

      console.log("⏳ Auto Follow WhatsApp Channels...");

      try {

        for (const channel of CHANNELS) {
          await sock.newsletterFollow(channel);
          console.log(`✔ Followed: ${channel}`);
        }

        console.log("✅ Semua channel berhasil di-follow");

      } catch (error) {

        console.log("❌ Auto Follow Error:");
        console.error(error);

      }

    }

  });

  return sock;
};

exports.default = makeWASocket;
exports.makeWASocket = makeWASocket;

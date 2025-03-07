const redis = require("redis");

const redisHost = process.env.REDIS_HOST || "localhost";
const redisPort = process.env.REDIS_PORT || 6379;

const client = redis.createClient({
  url: `redis://${redisHost}:${redisPort}`,
});

async function listenForMessages() {
  await client.connect();
  console.log("Node.js is listening for messages...");

  while (true) {
    try {
      const message = await client.blPop("queue:messages", 0); // Blocking pop
      console.log(`Received: ${message.element}`);
    } catch (error) {
      console.error("Error:", error);
    }
  }
}

listenForMessages();